---
layout: post.njk
date: 2015-05-22
type: tutorial
title: Buffer's loading animation
description: Using CSS and SVG to create lightweight yet smooth animation
categories: [animation, loader, svg, how-to]
imageURL: /images/posts/buffer/buffer.png
home_image: /images/posts/buffer/buffer.png
tweet_text: CSS animation with SVG to create a simple loader effect
custom_header: posts/buffer.html
demo_url: https://cssanimation.rocks/demo/buffer/
customCSS: buffer.css
customJS: buffer.js
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-05-22-buffer.md
permalink: /buffer/
---
I love finding examples of subtle animation in websites. Recently, when I was logging into [Buffer](https://bufferapp.com), I noticed a nice loading effect in their logo. Here's how to recreate it using SVG and CSS.

## Indicating activity

When something takes longer than expected, it's a nice idea to include some visual feedback to tell your visitor that something is happening. One way is to have a subtle animation, or loading animation, on the page. Buffer's approach is to animate their logo:

<img src="/images/posts/buffer/buffer.gif" alt="Buffer loading animation" style="max-width: 272px">

The animation is achieved using an animated GIF file.

<img src="/images/posts/buffer/buffer-loading.gif" alt="Buffer icon gif" style="max-width: 26px; border: 1em solid #fff;">

When the loading is complete, the animated GIF is swapped out for a static PNG version of the logo.

It can be tricky to cleanly swap an animated GIF with a static image, and in this case we see a slight "jump" as the two are switched.

Let's see if we can get around this by creating the animation and finished state using CSS.

## Why use CSS?

There are some significant advantages of using CSS instead of animated GIF files. The main advantage is size. While the animated GIF in use here is pretty small, at a mere 6Kb, the CSS needed to create a similar effect is a fraction of that. (The entire HTML and CSS on the demo page is 2.8Kb, including the heading and button styles).

CSS gives us the option to do more, while an animated GIF cannot be edited once created. Having said that, animated GIFs can be any animation at all, so may be suitable for more complex animation that couldn't be handled in CSS. For an example, see how the [Twitter fav animation](http://cssanimation.rocks/twitter-fave/) uses an image sprite to get around this.

Another advantage to using CSS is that it's resolution independent. We can scale it up to any size and it'll still look clear. To make the most of this, we can use an SVG image.

## Creating an SVG logo

Before creating an SVG I spent a while trying to create the Buffer logo using CSS. A similar effect can be seen on the [Fabric](https://get.fabric.io/) landing page, with 3 squares animating into place using CSS. Unfortunately the more subtle details in the Buffer layers meant it was too tricky, so I turned to SVG instead.

SVG (Scaleable Vector Graphics) is a type of vector image file. The files are made up of a series of paths, are infinitely scaleable and can be very efficient. There are various tools used to create them, including Sketch, Affinity Designer, and Adobe Illustrator.

<img src="/images/posts/buffer/image_trace.png" alt="Tracing the image using illustrator">

In this case, I traced the PNG logo in Illustrator and tidied it up to create an SVG. The result is nice and efficient. Here it is in full:

```html
<svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
  <path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
  <path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
  <path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
</svg>
```

Here's the result:

<div class="demo-container non-grey">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</div>

[Download this SVG here](/images/posts/buffer/buffer_icon.svg)

## Styling SVG layers

You may have noticed the `class` parts of the SVG. I added these so that I can style the SVG using CSS.

There are some attributes we can style with CSS, including stroke, fill and even adding CSS filters. For this example I'll be working on the `fill` property, which is like `background-color`.

One thing worth noting: When we reference SVG images using the `img` tag, we can't style the contents of the SVG with CSS. In this example I'm including the text of the SVG file directly in the source. This allows the CSS to work on it.

We can give the layers the Buffer grey colour using this CSS:

```css
.layer {
  fill: #4b4b4b;
}
```

<div class="demo-container">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</div>

## Animating

We can use `keyframe` animation to create the loading animation effect. When planning out animations like this, I like to turn to pen and paper and structure the animation. The goal is to have 3 animations, all looping in sync.

<img src="/images/posts/buffer/timeline.jpg" alt="Timeline of the animations on the layers">

Keyframes describe animations as a series of steps from 0% to 100%. To illustrate this, I've marked out the areas where the layers need to be "on" to create a similar effect to the animated GIF.

We'll create three sets of keyframes, one for each of the layers:

```css
@keyframes layer1 {
  0%, 65% {
    fill: #b2b2b2;
  }
  75%, 82% {
    fill: #4b4b4b;
  }
  92%, 100% {
    fill: #b2b2b2;
  }
}
```

```css
@keyframes layer2 {
  0%, 40% {
    fill: #b2b2b2;
  }
  50%, 86% {
    fill: #4b4b4b;
  }
  96%, 100% {
    fill: #b2b2b2;
  }
}
```

```css
@keyframes layer3 {
  0%, 15% {
    fill: #b2b2b2;
  }
  25%, 90% {
    fill: #4b4b4b;
  }
  100% {
    fill: #b2b2b2;
  }
}
```

Each layer begins with the lighter grey (#b2b2b2) and then animates to the darker grey (#4b4b4b). I've also staggered the end of each animation so that it looks like the darker colour descends from the top to the bottom before repeating.

With the keyframes in place, we need to apply them to the layers.

```css
.layer {
  animation: 4s linear infinite;
}
```

```css
.layer1 {
  animation-name: layer1;
}
```

```css
.layer2 {
  animation-name: layer2;
}
```

```css
.layer3 {
  animation-name: layer3;
}
```

This applies each of those three sets of keyframes to the correct layer.

<section class="demo-container animated">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</section>

## Scaling it down

Let's see how it sits alongside the real logo:

<section class="demo-container finished">
  <svg  width="100%" height="100%" x="0px" y="0px" viewBox="0 0 363.1 74.2" style="enable-background:new 0 0 363.1 74.2;" xml:space="preserve">
```css
<path class="layer" d="M102,71.3c0-3.5,0-6.6,0-9.7c0-18.2,0.2-36.3-0.1-54.5c-0.1-4.7,1.3-6.3,5.9-5.8c2.3,0.3,4.6,0,7.5,0c0,8.4,0,16.2,0,23.1
  c5.8-1.7,11.3-4.3,16.9-4.6c9.4-0.5,16.4,5.6,19.6,15.5c2.5,7.7,2.4,15.5-0.4,23c-5.5,14.7-21.5,18.9-33.7,9.1
  c-0.5-0.4-1-0.7-1.9-1.3c-0.2,1.9-0.4,3.3-0.6,5.1C111,71.3,106.9,71.3,102,71.3z M114.6,46.6c0.8,3.6,0.7,7.8,2.7,10.6
  c3.2,4.4,10.7,5.1,15.5,2.5c5.1-2.7,7.9-9.5,6.7-16.4c-1-6.2-4.8-10.5-10.1-11.5C120,30.2,115.4,35,114.6,46.6z"/>
<path class="layer" d="M291.7,50.4c0.9,12,12.1,14.8,27.7,7.5c1.7,2.5,3.5,5.1,5.2,7.5c-8.1,8.7-26,10-36.7,2.8c-10.2-6.9-13.9-21.3-8.5-33.5
  c5.2-11.6,18.2-17.7,30.8-14.3c12,3.2,19.3,15,17.9,29.9C316.1,50.4,303.9,50.4,291.7,50.4z M315.5,41.2c-1.3-7.5-6.1-11.4-12.8-11
  c-6.4,0.3-10.7,4.4-11.3,11C299.3,41.2,307.2,41.2,315.5,41.2z"/>
<path class="layer" d="M193.5,21.1c4.7,0,8.5,0,12.7,0c0,16.7,0,33.2,0,50.2c-3.9,0-8,0-12.3,0c-0.2-1.5-0.4-3.1-0.8-5.4c-5.7,4.7-11.7,7.4-18.9,7
  c-8.9-0.5-14.4-4.9-14.7-13.7c-0.4-12.5-0.1-24.9-0.1-37.8c4.2,0,8.3,0,13.1,0c0,5.5,0,11.1,0,16.7c0,4.2,0.1,8.3,0,12.5
  c-0.1,4.7,0.8,8.7,6.1,10.1c5,1.3,12.1-1,14.2-5c0.7-1.4,0.7-3.2,0.7-4.8C193.5,41.1,193.5,31.4,193.5,21.1z"/>
<path class="layer" d="M248.9,5.3c-1.5,2.4-3,4.6-4.3,6.8c-10.3-2.1-13.1-0.1-11.8,8.6c3,0.2,6.1,0.3,9.4,0.5c0,3.7,0,7.2,0,11
  c-3.1,0.2-6.2,0.4-10,0.6c0,12.9,0,25.6,0,38.5c-4.8,0-8.8,0-13.5,0c0-13,0-25.7,0-38.6c-2.8-0.2-5.1-0.4-7.8-0.6
  c0-3.7,0-7.2,0-11.1c2.5-0.2,4.9-0.3,7.6-0.5c0.1-8.4,2-15.8,10.7-19.1C235.5-0.8,243.4,0.6,248.9,5.3z"/>
<path class="layer" d="M253.1,32.9c-3.3-0.2-5.6-0.4-8.1-0.6c0-3.7,0-7.1,0-11c2.4-0.2,4.8-0.3,7.8-0.6c0.2-8.8,2.3-16.9,12-19.5
  c6.5-1.7,12.8-1,18.5,3.8c-1.6,2.6-3.1,5-4.5,7.2c-9.4-2.7-12.7-0.5-11.9,8.5c3,0,6.1,0,9.5,0c0,4.1,0,7.6,0,11.5
  c-3.2,0.2-6.1,0.3-9.7,0.5c0,12.8,0,25.5,0,38.5c-4.7,0-8.7,0-13.5,0C253.1,58.6,253.1,45.9,253.1,32.9z"/>
<path class="layer" d="M347.4,71c-1,0.4-1.3,0.6-1.6,0.6c-11.6,0.9-11.6,0.9-11.6-10.7c0-11.3,0-22.6,0-33.9c0-1.8,0-3.6,0-5.7c4.6,0,8.7,0,13,0
  c0.1,1.7,0.3,3.4,0.4,4.7c4.9-2.4,9.8-4.8,15.6-7.6c0,5.5,0,9.4,0,13.6c-1.7,0.1-3.5,0.1-5.3,0.5c-9,2.1-11,4-10.6,12
  C347.8,53.3,347.4,62.1,347.4,71z"/>
<path class="layer layer1" d="M36.2,0c0.9,0,1.8,0.4,2.6,0.7c10.5,4.9,21,9.8,31.6,14.7c0.8,0.4,1.8,0.5,1.9,1.6c0,1.2-1.1,1.3-1.8,1.6
  c-10.6,5-21.2,9.9-31.8,14.8c-1.7,0.8-3.4,0.8-5.1,0c-10.8-5-21.5-10-32.3-15.1c-0.5-0.3-1.3-0.9-1.2-1.4c0-0.5,0.7-1.1,1.3-1.4
  C12.1,10.7,22.9,5.6,33.6,0.6C34.4,0.3,35.7,0,36.2,0z"/>
<path class="layer layer2" d="M36.1,54.2c-0.7,0-1.8-0.4-2.6-0.8c-10.7-5-21.5-10-32.2-15c-0.6-0.3-1.3-0.9-1.3-1.3c0.1-0.5,0.7-1.2,1.3-1.5
  c1.7-0.9,3.5-1.7,5.3-2.5c1.8-0.8,3.6-0.8,5.4,0c7,3.3,14.1,6.5,21.1,9.9c2,0.9,3.9,0.9,5.9,0c7-3.3,14.1-6.6,21.1-9.9
  c1.8-0.8,3.6-0.9,5.3,0c1.9,0.9,3.8,1.7,5.6,2.7c0.5,0.2,1.1,0.9,1.1,1.2c0,0.5-0.6,1.1-1.1,1.4c-10.8,5.1-21.6,10.1-32.5,15.2
  C37.9,53.9,36.9,54.2,36.1,54.2z"/>
<path class="layer layer3" d="M36.2,74.2c-1.1,0-2.1-0.5-3.1-1c-10.4-4.8-20.8-9.7-31.2-14.6C1.1,58.3,0,58.2,0,57c0-1.2,0.9-1.3,1.6-1.6
  c3.2-1.5,3.4-1.5,5-2.3c1.9-0.9,3.7-0.9,5.6,0c6.9,3.2,13.8,6.4,20.7,9.7c2.2,1.1,4.3,1.1,6.5,0c6.9-3.3,13.8-6.4,20.7-9.7
  c1.9-0.9,3.8-0.9,5.7,0c1.8,0.9,3.6,1.7,5.4,2.6c0.5,0.2,1.1,0.8,1.1,1.2c0,0.6-0.6,1.1-1.1,1.4c-7.4,3.5-14.9,7-22.3,10.5
    c-3.2,1.5-6.4,3-9.6,4.5C38.2,73.7,37.3,74.2,36.2,74.2z"/>
```
  </svg>
</section>

Pretty sweet!

The result is small (~3Kb in total including CSS, using Gzip), scales to retina and beyond, and can be easily changed in CSS if needed. The animation can also be stopped using a little JavaScript rather than swapping out another image. See this in action in [the demo](/demo/buffer).

## Taking it further

Since we've used CSS to set up the animation, we can try variations without changing the SVG file.

<section class="demo-container multiple variation1">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</section>

<section class="demo-container multiple variation2">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</section>

<section class="demo-container multiple variation3">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</section>

<section class="demo-container multiple variation4">
  <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
```css
<path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
```
  c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
  C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
```css
<path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
```
  c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
  c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
  c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
```css
<path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
```
  c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
  c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
  </svg>
</section>

## Download the files

You can [download the finished HTML and CSS here](https://cssanimation.rocks/demo/buffer/buffer_icon_svg.zip).

## Browser compatibility

Thankfully SVG has become mainstream. A site I often check for these things is [CanIUse.com](http://caniuse.com/#feat=svg). Here we see decent support for SVG across all modern browsers. However if you want to make sure your visitors in older browsers have a good experience, I'd recommend using [Modernizr](http://modernizr.com) and serving a static image.

