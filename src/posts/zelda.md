---
layout: post.njk
date: 2015-11-17
type: tutorial
title: "Zelda: A link to the CSS"
bodyClass: shorter
description: Making 3D triangles using CSS and putting together a full-page animation.
categories: [animation, triangles, border-radius]
customCSS: zelda.css
imageURL: /images/posts/zelda/zelda.png
home_image: /images/posts/zelda/zelda.png
tweet_text: Recreate the classic Zelda intro in CSS
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-11-17-zelda.md
published: false
permalink: /zelda/
---
The Zelda games have always been close to my heart. In this post, we'll try to recreate the iconic introduction to what might be the best game ever, A Link to the Past.

## Zelda: Linked to the Past

The idea is to create something that would look like this:

<p data-height="487" data-theme-id="12592" data-slug-hash="phnsJ" data-default-tab="result" data-user="donovanh" class='codepen'></p>

## Getting started: HTML

To get started, I created the HTML structure to which I'd be applying the styles. The layout requires three 3D triangles, and some text to sit on top. I began with a single triangle:

```html
<div class="stage">
  <div class="triangle">
    <div class="front"></div>
    <div class="back"></div>
    <div class="side1"></div>
    <div class="side2"></div>
    <div class="side3"></div>
  </div>
</div>
```

The front and back pieces needed to be triangular, with 3 rectangles covering the left, right and bottom sides. HTML isn't great at producing shapes other than rectangles, but we can create a triangle shape using borders.

<p data-height="298" data-theme-id="12592" data-slug-hash="pjYOzm" data-default-tab="result" data-user="donovanh" class='codepen'>

[TODO: Explain the CSS behind creating a triangle]

## Setting the stage

Once we have the shape in place, we'll need to place a back piece and position them both in 3D space. A containing "stage" div is needed to achieve this. We can apply a perspective value to the stage and any objects on it will be then drawn in relation to each other.

<div class="example-with-code clearfix">
  <div class="left">
```html
<div class="stage example example2">
  <div class="triangle">
    <figure class="front"> </figure>
    <figure class="back"> </figure>
  </div>
</div>
```
  </div>
  <div class="right">

<pre><code>.stage
  @include perspective(800px)
  @include perspective-origin(120% -200px)

figure.front
  +arrow(150px, 150px, up, #ffe403)
  @include transform(translateZ(80px))

figure.back
  +arrow(150px, 150px, up, #ffd200)
  @include transform(translateZ(-80px))
</code></pre>
  </div>
</div>

The 3D positioning is achieved by using the [translateZ transform](http://docs.webplatform.org/wiki/css/properties/transform). The front face is brought forward 80 pixels and the back face pushed back 80px.

I also rotated the back panel 180 degrees on the Y axis so that it now faces out toward the back.

The *perspective* value relates to the depth of the scene, and larger values produce more extreme distortion. Similar to this, the *perspective-origin* value is used to move the viewpoint. In this case, the viewpoint is looking down from 200 pixels up, and from off to the right side of the stage.

## Sides

With the front and back in place, there are gaps to fill on the sides. To fill these, rectangular divs can be positioned like so:

<div class="example-with-code clearfix">
  <div class="left">
```html
<div class="stage example example3">
  <div class="triangle">
    <figure class="front"> </figure>
    <figure class="back"> </figure>
    <figure class="side1"> </figure>
    <figure class="side2"> </figure>
    <figure class="side3"> </figure>
  </div>
</div>
```
  </div>
  <div class="right">
<pre><code>figure
  &amp;.side1
```
content: " "
display: block
position: absolute
height: 168px
width: 40px
background-color: #ffd200
@include transform(translateY(-9px) translateX(18px) rotateY(-90deg) rotateX(26.5deg))
```

  &amp;.side2
```
content: " "
display: block
position: absolute
height: 168px
width: 40px
background-color: #ffd200
@include transform(translateY(-9px) translateX(92px) rotateY(90deg) rotateX(26.5deg))
```

  &amp;.side3
```
content: " "
background-color: #ffd200
width: 150px
height: 40px
@include transform(translateY(130px) rotateX(-90deg))
```
</code></pre>
  </div>
</div>

One small adjustment made in this example was to rotate the back panel 180 degrees to ensure it was facing outwards. With the back-faces hidden, it would have been invisible otherwise.

## Three triangles

With one triangle done, it was straightforward to position three of them on the stage. I copied the div called "triangle" above, and replicated it three times. I then added a class "one", "two" and "three" to each so they could be referenced individually:

<div class="example-with-code clearfix">
  <div class="left">
```html
<div class="stage example example4">
  <div class="scaler">
    <div class="triangle one">
      <figure class="front"> </figure>
      <figure class="back"> </figure>
      <figure class="side1"> </figure>
      <figure class="side2"> </figure>
      <figure class="side3"> </figure>
    </div>
    <div class="triangle two">
      <figure class="front"> </figure>
      <figure class="back"> </figure>
      <figure class="side1"> </figure>
      <figure class="side2"> </figure>
      <figure class="side3"> </figure>
    </div>
    <div class="triangle three">
      <figure class="front"> </figure>
      <figure class="back"> </figure>
      <figure class="side1"> </figure>
      <figure class="side2"> </figure>
      <figure class="side3"> </figure>
    </div>
  </div>
</div>
```
  </div>
  <div class="right">
<pre><code>.triangle
  @include animation(rotate 5s infinite linear)

  &amp;.two
```
top: 150px
left: 0
```

  &amp;.three
```
top: 150px
left: 150px
```
</code></pre>
  </div>
</div>

## Styling the text

To create the proper Zelda atmosphere, the right fonts were needed. For the main font, [EB Garamond](http://www.google.com/fonts/specimen/EB+Garamond) seemed a decent choice. The smaller text looks good with [Old Standard TT](http://www.google.com/fonts/specimen/Old+Standard+TT).

Including these fonts involves referencing them in the head of your HTML:

```html
<link href='http://fonts.googleapis.com/css?family=EB+Garamond' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Old+Standard+TT' rel='stylesheet' type='text/css'>
```

You can then use them in your CSS:

```
h1
  font-family: "EB Garamond"
```

The finishing touch was to add a border around the text:

<div class="example-with-code clearfix">
  <div class="left">
```html
<div class="stage">
  <link href='http://fonts.googleapis.com/css?family=Old+Standard+TT' rel='stylesheet' type='text/css'></link>
  <h1 class="zelda-style">ZELDA</h1>
</div>
```
  </div>
  <div class="right">
<pre><code>.zelda-style
  font-family: "EB Garamond"
  @include text-fill-color(#b62f22)
  @include text-stroke-color(#8b3536)
  @include text-stroke-width(2px)
  margin: 10px auto
</code></pre>
  </div>
</div>

## Bringing it together

To achieve the animation I put together a few different animations and timed them so that they all worked together. Using keyframe animation in CSS is made much easier by using SASS, and I used a few basic mixins to make the process easier. I’m using Sass with the [Compass](http://compass-style.org/) framework, but to add support for animation and keyframes to Compass, you’ll need [this gist](https://gist.github.com/donovanh/5426633).

### Animation 1: Rotating

The spinning effect is creating using the following keyframes:

```
@include keyframes(rotate)
  0%
    @include transform(rotateY(0))
  100%
    @include transform(rotateY(360deg))
```

To apply this animation to the figures, the following SASS is used. Note, it makes use of the "animation" mixin [found here](https://gist.github.com/donovanh/5426633):

```
figure
  @include animation(rotate 5s infinite linear)
```

This calls the "animation" mixin and passes in the name of the keyframes (rotate), the duration of 5 seconds, repeated forever. It also specifies that the animation easing be "linear", which maintains a constant speed throughout the animation.

### Animation 2: Tumbling triangles

The introduction of the figures sees them tumble into place. This is done by transitioning them from an initial position offset to the top, left or right, while applying 360 degrees of rotation. These combine in the following keyframes:

```
@include keyframes(introduce-1)
  0%
    top: -200px
    opacity: 0
  45%
    top: -100px
    @include transform(rotateY(180deg) rotateX(-180deg))
    opacity: 1
  90%, 100%
    top: 0
    @include transform(rotateY(360deg) rotateX(-360deg))
```

By putting the ending position of the animation at both 90% and 100%, it ensures that the animation stays still for a moment at the end of it's tumbling.

Applying both these to the figures at the same time looks like this:

```
@include animation(rotate 5s infinite linear, introduce-1 5s linear)
```

### Animation 3: Text

The text overlay is invisible at first, and I wanted it to wait until after the tumbling animation had finished before fading into place. To achieve this, the following keyframes apply to the text:

```
@include keyframes(showZeldaText)
  0%, 80%
    @include transform(scale(0.6) translateZ(-100px))
    opacity: 0
    -webkit-filter: blur(2px)
  90%
    -webkit-filter: blur(0)
  100%
    @include transform(scale(1) translateZ(0))
    opacity: 1
```

For 90% of the time, the text is invisible. Then in the last 10% the text scales up from 60% scale to 100%, while the opacity changes from invisible to visible.

Since the text animation starts at the same time as the tumbling, it needs a longer time to run so that it lines up properly. In this case, I set it to run for 6.5 seconds:

```css
@include animation(showZeldaText 6.5s linear)
```

With these in place, the last animation is the flash of background colour when the tumbling stops.

### Animation 4: Background flash

The background starts black, then when the tumbling finishes, briefly flashes white before the background image is shown. This colour sequence is also timed to coincide with the appearance of the text. The keyframes:

```
@include keyframes(animate-background)
  0%
    background: #000
  83%
    background: #000
  84%
    background: #fff
  87%, 100%
    background: #000
```

A similar set of keyframes is used to show the background image after the screen flashes.

## See it in action

Here's a [live demo](http://hop.ie/zelda). It works reasonably in recent versions of Chrome, Safari and Firefox.

## Have a go

The HTML and CSS is [available on Github](https://github.com/donovanh/zelda). Please fork, share, and have a play with it. If you'd like to add to or fix something, pull requests are a fast way to becoming one of my favourite people. Do it!

## Issues

IE10 support is basic, so any browser support improvements would be a good thing. There's also a bit of a glitch where the tumbling animation on the elements doesn't always start. It seems to happen in all browsers. Any suggestions on fixing that would be appreciated.

I hope you enjoyed this post. I am more than happy to respond to questions and suggestions on Twitter at [@donovanh](http://twitter.com/donovanh).


<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
