---
layout: post
type: tutorial
title: Transitions vs Animations
description: A description of the differences between transitions and animations in web animation.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js, custom/list_items.js, custom/clocks.js]
imageURL: /images/posts/transitions-animations/transitions-animations.gif
home_image: /images/posts/transitions-animations/transitions-animations.png
tweet_text: When should you use a transition, and when an animation?
custom_header: posts/transitions-animations.html
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-03-04-transition-vs-animation.md
---

When animating on the web, do you use a transition or an animation? There are times when you would want to choose one over the other. Let's discuss the differences.

## What are Transitions?

A transition occurs when an element changes from one state to another, and the browser fills in that state change with a sequence of in-between frames. It has a beginning and an end state.

We most often see transitions used on hover states, or when information on a page is added or removed. The hover states might be a subtle change in font color, and information on the page might fade from invisible to visible.

Since transitions are limited to these two stages, they can lack the nuance of animations but at the same time be easier to use.

### When to use them

If you want to change an element from one state to another smoothly, a transition is a good choice. Simple changes can usually be handled with transitions and timing functions can be used to customize the way the transition occurs.

A transition would work well when someone hovers or taps a button:

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

Or when an item is added to a page:

<section class="add-to-list swing demo-container">
  <ul>
    <li class="show" style="background-color: #d13c9e;">A list item</li>
    <li class="show" style="background-color: #3cd19e;">A list item</li>
  </ul>
  <button>Add a list item</button>
</section>

## What are Animations?

CSS Animations are a more powerful alternative to transitions. Rather than rely on a change from one beginning state to an end state, animations can be made up of as many in-between states as you like, and offer more control over how the states are animated.

Where a transition only goes from A to B, an animation can go from A, B, C to D. Or any number of stages as needed.

Animations achieve this by using sets of `keyframes`. Where a transition can be specified with one line in the class, an animation works by referencing a set of keyframes that are described separately in the CSS.

### When to use them

If an animation needs to run when the page loads, or is more complex than a simple A to B state change, a CSS animation might be more appropriate.

Examples of this might be if you want to have an animation on the page that plays after a certain amount of time, like this blink effect on this Baymax character:

<section class="demo-container baymax-container">
  <a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a>
</section>

An animation might also be a good choice if an item has to move across multiple places on the page, such as an instruction overlay with a mouse cursor point out various areas of interest on a screen.

## Sometimes it's not obvious

A recent post began as an animation, but then became a case for transitions.

<div class="demo-container clocks single local bounce">
  <article class="clock station">
    <div class="hours-container">
      <div class="hours angled"></div>
    </div>
    <div class="minutes-container">
      <div class="minutes angled"></div>
    </div>
    <div class="seconds-container">
      <div class="seconds"></div>
    </div>
  </article>
</div>

When I began designing this clock, I had the hands move continuously on load. This was a good case for using the `animation` property. It was to animate on load and continue forever. When I started adding more complexity, I found it made more sense to have the hands' angles set using JavaScript.

As the hands were being moved by JavaScript, `transitions` became a better choice. When the JavaScript changes the angle of a hand, the CSS `transition` handles the change (from state A to state B) more elegantly than an animation would.

Check out this [CSS clock tutorial](/clocks/) for more detail.

## In summary

Transitions for creating a smooth transition from one state to another, and animations for more complex series of movements.

Transitions are generally easier to create and manage, and apply to the majority of situations. If you need more control over animating an element through a series of steps, or if the animation needs to begin on load, then an animation with keyframes might be the better choice.


