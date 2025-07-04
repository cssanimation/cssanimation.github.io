---
layout: post.njk
date: 2015-03-09
type: tutorial
title: Apple Watch Dials
description: Recreate the Apple Watch radial dials using CSS.
categories: [animation, tips, animations, transitions, apple watch]
customCSS: watch.css
imageURL: /images/posts/watch/watch.gif
home_image: /images/posts/watch/watch.png
tweet_text: Recreate Apple's Watch dials with CSS
custom_header: posts/watch.html
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-03-09-watch.md
permalink: /watch/
---
With the announcement of Apple's new watch this week, I thought I'd take a look at creating the activity dials using CSS.

In this post we'll make use of CSS keyframe animations and a bit of `overflow` trickery to create the radial progress bars shown in the activities section of Apple's new watch.

## Demo

Here's an example of the final effect.

<section class="demo-container watch-container">
  <article class="watch">
```html
<div class="bg-image"></div>
<div class="screen">
  <header>
    <span class="title">Activity</span>
    <span class="time">10:09</span>
  </header>
  <section class="dials">
    <div class="dial move">
      <div class="dial-background one"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="dial-container container2">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
    <div class="dial exercise">
      <div class="dial-background two"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
    <div class="dial stand">
      <div class="dial-background three"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
  </section>
  <section class="pips">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</div>
```
  </article>
</section>

## Radial progress bars

The watch's activity display is made up of 3 dials. Each is a kind of progress bar, shaped to curve around a circle. It's a little tricky to create this shape, but it can be done using two wedges and some carefully timed animation.

We'll begin with a simple half-circle wedge shape.

<section class="demo-container">
  <div class="example example0">
```html
<div class="wedge"></div>
```
  </div>
</section>

Here's the HTML for this wedge:


```html
<div class="dial-container">
  <div class="wedge"></div>
</div>
```

We set up the wedge to be a half-moon shape using the `border-radius` property and rotate it using a `keyframe`.



```css
.wedge {
  animation: rotate 4s infinite linear;
  border-radius: 0 4em 4em 0;
  background: red;
  width: 2em;
  height: 4em;
  transform-origin: 0% 50%;
}
```

```css
@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
```


## Masking

In earlier experiments, I'd tried creating this effect using the CSS `clip` property. This did work in some browsers, but it's a deprecated property and tricky to use. Instead, we can create a similar effect by using `overflow: hidden` on the container.

There are two elements in play here. The `dial-container` is half as wide as the `wedge`, and has it's `overflow` property set to `hidden`. By placing it outside the container, we can rotate it into view.

<section class="demo-container">
  <div class="example example1">
```html
<div class="wedge"></div>
```
  </div>
</section>


```css
.dial-container {
  position: absolute;
  top: 0;
  left: 2em;
  width: 2em;
  height: 4em;
  overflow: hidden;
}
```

The container is positioned to the right of where the wedge is positioned, and the wedge is then rotated into view.

To create the full circle we need to create a second wedge. We can create this by creating a second container, placed on the left and rotating a wedge into it from the right.

<section class="demo-container">
  <div class="example example2">
```html
<div class="wedge"></div>
```
  </div>
</section>

We can then put these together and create a circular dial. We'll also add some animation to have the second half of the dial start moving after the first dial.

## Full circle

Here's the HTML for these two parts. I've added a wrapper so that I can position both the containers on top of each other.


```html
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
</div>
```


And the CSS to handle the wrapper, containers and the two wedges.


```css
.wrapper {
  position: absolute;
  width: 4em;
  height: 4em;
  left: calc(50% - 2em);
}
.dial-container {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 2em;
}
.wedge {
  background: red;
  height: 4em;
  width: 2em;
}
.container1 {
  left: 2em;
}
.container1 .wedge {
  animation: rotate-bg-1 4s infinite linear;
  border-radius: 0 4em 4em 0;
  left: 0;
  transform-origin: 0 50%;
}
.container2 {
  left: 0;
}
.container2 .wedge {
  animation: rotate-bg-2 4s infinite linear;
  border-radius: 4em 0 0 4em;
  transform-origin: 2em 2em;
}
/* First animation moves 180 degrees in the first 2 seconds */
@keyframes rotate-bg-1 {
  50%, 100% {
    transform: rotateZ(180deg);
  }
}
/* Second animation moves 180 degrees in the last 2 seconds */
@keyframes rotate-bg-2 {
  0%, 50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(180deg);
  }
}
```

The result should look like this:

<section class="demo-container">
  <div class="example example3">
```html
<div class="dial-container container1">
  <div class="wedge"></div>
</div>
<div class="dial-container container2">
  <div class="wedge"></div>
</div>
```
  </div>
</section>

## Progress

The next step is to make the wedge into a bar. We can do this by masking the middle. Adding a circular [pseudo-element](/pseudo-elements/) to a container, set to the background colour, has the desired effect.

```html
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
</div>
```

```css
.wrapper::after {
  content: "";
  background: #fff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}
```

We now have something that looks more like Apple's activity radial progress bars.

<section class="demo-container">
  <div class="example example4">
```html
<div class="dial-container container1">
  <div class="wedge"></div>
</div>
<div class="dial-container container2">
  <div class="wedge"></div>
</div>
```
  </div>
</section>

## Rounding the edges

The Apple Watch demo features nicely rounded ends on its progress bars. To recreate this we'll add and animate some elements on each end of the bar. To begin we add the extra elements.


```html
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
  <div class="marker start"></div>
  <div class="marker end"></div>
</div>
```

The `start` marker will remain at the beginning, and the `end` marker needs to be animated to keep pace with the front of the progress bar. We can handle that with some CSS.


```css
.marker {
  background: green;
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;
  position: absolute;
  top: 0;
  left: calc(50% - 0.25em);
}
.end {
  animation: rotate-marker 4s infinite linear;
  transform-origin: 50% 2em;
}
@keyframes rotate-marker {
  100% {
    transform: rotateZ(360deg);
  }
}
```

This CSS sets up the two markers to be green circles, and positions them at the top middle of the screen. The `end` marker then gets the `rotate-marker` animation and has its `transform-origin` set to the centre of the container. This means than when it rotates, it will spin around an arc.


<section class="demo-container">
  <div class="example example5">
```html
<div class="dial-container container1">
  <div class="wedge"></div>
</div>
<div class="dial-container container2">
  <div class="wedge"></div>
</div>
<div class="marker start"></div>
<div class="marker end"></div>
```
  </div>
</section>

Changing the colour of the markers to red lets them blend in with the bar and give it a rounded effect. Adding a little cubic-bezier tweaking to the animation can give it a bit more character also.

<section class="demo-container">
  <div class="example example6">
```html
<div class="dial-container container1">
  <div class="wedge"></div>
</div>
<div class="dial-container container2">
  <div class="wedge"></div>
</div>
<div class="marker start"></div>
<div class="marker end"></div>
```
  </div>
</section>

## Putting it all together

Three of these radial progress bars together creates the Apple Watch activity dials. If you want to see more of this code, a full demo [is available on Codepen](http://codepen.io/donovanh/full/GgYEBZ/).

<section class="demo-container watch-container">
  <article class="watch">
```html
<div class="bg-image"></div>
<div class="screen">
  <header>
    <span class="title">Activity</span>
    <span class="time">10:09</span>
  </header>
  <section class="dials">
    <div class="dial move">
      <div class="dial-background one"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="dial-container container2">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
    <div class="dial exercise">
      <div class="dial-background two"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
    <div class="dial stand">
      <div class="dial-background three"></div>
      <div class="dial-container container1">
        <div class="wedge"></div>
      </div>
      <div class="marker start"></div>
      <div class="marker end"></div>
    </div>
  </section>
  <section class="pips">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </section>
</div>
```
  </article>
</section>


