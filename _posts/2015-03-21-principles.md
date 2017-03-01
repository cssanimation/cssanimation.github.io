---
layout: post
type: tutorial
title: Animation Principles for the Web
description: How Disney's 12 Principles of Animation can be applied to web designs
categories: [animation, tips, animations, transitions]
customCSS: principles.css
imageURL: /images/posts/principles/principles.png
home_image: /images/posts/principles/principles.png
tweet_text: Applying Disney's 12 Principles to web animation
custom_header: posts/principles.html
demo_url: http://codepen.io/collection/AxKOdY/
published: true
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-03-21-principles.md
---

As front-end designers and developers, we use CSS to style, position and create great looking sites. We often use CSS to add movement to pages in the form of transitions or even animations, but we don't usually go much beyond that.

Animation can be a powerful tool to help our visitors and customers understand and benefit from our designs. There are principles we can apply to our work to make the most of this power.

Long established as fundamental working practices at Disney, the [12 Principles of Animation](http://en.wikipedia.org/wiki/12_basic_principles_of_animation) were published as "The Illusion of Life: Disney Animation" in 1981. These principles describe how animation can be used to immerse viewers in a believable   world.

In this article I'll go through each of the 12 principles, and discuss how they might apply when making web pages. You can find the [source HTML and CSS on Codepen for them all here](http://codepen.io/collection/AxKOdY/).

## Squash and stretch

<section class="demo-container principle principle-one">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>

This is the notion that an object has a physical mass, and when it moves this mass stays the same. A ball will widen as it hits the ground when bouncing, but also get shorter as its mass is redistributed.

This is most useful when creating objects that we want to be considered physical, such as people, clocks or bouncing balls.

It's possible to ignore this rule when working with elements of a web page. DOM elements aren't necessarily associated with physical objects, and can grow or shrink on screen as needed. For example, a button could grow and morph into an information box, or error messages can appear and disappear.

Still, the squash and stretch techniques can be used to give an object the feeling of physical mass. Even small changes in shape can create subtle but eye-catching effects.

## Anticipation

<section class="demo-container principle principle-two">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>

Movements don't tend to happen suddenly. In real life,  motion is usually preceded by some kind of build-up, whether it's a ball beginning to roll before it falls off a table, or a person bending their knees in preparation to jump.

We can use this to make our transitions and animations feel more life-like. Anticipation could be in the form of a subtle bounciness that helps people understand what is changing and keep track of the objects on-screen.

For example, an element could shrink slightly before growing larger on hover; adding extra items to a list could be introduced by having other items move out of the way first.

## Staging

<section class="demo-container principle principle-three">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>

Staging is making sure an object is the focus of a scene, when other objects or aspects of the scene make way for where the main action is taking place. This means either placing the main action in a prominent position, or masking other elements to focus on what the user needs to see.

In web terms, one approach is to use a modal overlay for certain content. Adding a dark layer over the existing page and then placing the content in front stages it and shows it as the main point of focus.

Another approach is to use movement. When many objects are moving, it's hard to know which is worthy of attention. If all other movement is stopped and one object moves, even slightly, it will be much easier to spot.

One technique is to make a "Save" button wobble or flash briefly to suggest to the user that they might want to save a document. With the rest of the screen held static and motionless, even subtle movement will stand out.

## Straight-Ahead Action and Pose-to-Pose

<section class="demo-container principle principle-four">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

Straight-ahead action is when every frame of an animation is drawn. Pose-to-pose is when a series of keyframes are defined and the intervals filled in later, usually by an assistant.

Most web animation uses pose-to-pose animation: the transition between keyframes can be handled by the browser, which interpolates the difference between each and draws in as many frames as it can to make the animation smooth.

One exception to this is the `steps` timing function. With this function, the browser "steps" through as many discrete frames as defined. This way you could draw out a series of images and have the browser display each in sequence, creating a "Straight Ahead Action" style.

## Follow Through and Overlapping Action

<section class="demo-container principle principle-five">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape"></div>
  </div>
  </div>
</section>

Things don't always happen at the same time. When a car stops suddenly it tilts forward, with smoke from the tires and the driver inside continuing the forward motion until they are stopped or dissapate.

These details are examples of follow through and overlapping action. They can be used on the web to help emphasise that something is stopping, and hasn't merely forgotten to animate. For example, an item added to a list might be slide in, proceed slightly too far, and then correct itself to the right position.

To create a feeling of overlapping action, we can make elements move at a slightly different pace to each other. It's a technique used well in the iOS operating system when transitioning between views. Some buttons and elements move at different rates, and the combined effect is much more lifelike and less flat than if everything moved at the same rate. The combined movements give the viewer time to properly understand the change.

In web terms this might mean stacking transitions or animations, creating effects that work at different speeds.

## Slow In and Slow Out

<section class="demo-container principle principle-six">
  <div class="wrapper">
  <div class="shape a"></div>
  </div>
</section>

Objects rarely go from a standstill to maximum speed immediately. They tend to speed up gradually and slow before stopping. Without acceleration and deceleration, movements feel robotic.

In CSS terms, slow in and slow out are known as `easing`. Easing is what is known as a timing function, a way of describing the rate of change through the course of an animation.

Using timing functions, animations can start slow and speed up (ease-in), start fast and slow down (ease-out) or more complex effects using the `cubic-bezier` timing function.

## Arc

<section class="demo-container principle principle-sevena">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape a"></div>
  </div>
  </div>
</section>

While objects are more lifelike when they follow the "Slow In and Slow Out", objects rarely move in straight lines: they tend to follow curved arcs.

We can achieve arcing movements with CSS in a couple of ways. One is to combine multiple animations. A bouncing ball animation, for example could be made up a ball moving up and down, while a second moves it to the right at the same time. The ball would then arc across the screen.

<section class="demo-container principle principle-sevenb">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

Another option is to rotate an element. We can adjust an object's center of rotation by setting its transform origin outside the element. When we  rotate the object, it will rotate in an arc.

## Secondary Action

<section class="demo-container principle principle-eight">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>

While a primary action is taking place, a secondary animation can help emphasise or augment it. This could be the swinging arms of someone walking or the tilt of their head. Or a bouncing ball kicking up a little dust.

On web sites, secondary actions could see elements moving out of the way when the main focus of attention is introduced, such as dragging an item and placing it in the middle of a list.

## Timing

<section class="demo-container principle principle-nine">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

An animation's timing is how long it takes to complete. Timing can be used to make weighty objects look heavy in their motion, or to add character to movement.

On the web this might be as simple as adjusting the `animation-duration` or `transition-duration` values.

It's easy to let animations take longer than they need to. Adjusting timing can help get the animation out of the way of the content or interaction.

## Exaggeration

<section class="demo-container principle principle-ten">
  <div class="wrapper">
  <div class="shape"></div>
  </div>
</section>

Most commonly used in cartoons, exaggeration can draw attention to certain actions and make them more dramatic. A wolf making an attempt to bite might have its jaws open wider than is normal to make the effect more scary or humorous.

In a web page, objects can be scaled up and down to emphasise them and draw attention. For example when filling a form, the active section could grow while the others shrink or fade.

## Solid drawing

<section class="demo-container principle principle-eleven">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="front"></span>
      <span class="back"></span>
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
  </div>
</section>

When animating objects in three dimensions, care should be taken to ensure they follow the rules of perspective. People are used to living in a three dimensional world, so when objects don't behave as expected they look wrong.

Modern browsers have decent support for three dimensional transforms. This means that we can rotate and place objects in a scene and the browser can handle the transitions automatically.

## Appeal

<section class="demo-container principle principle-twelve">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="item one"></span>
      <span class="item two"></span>
      <span class="item three"></span>
      <span class="item four"></span>
    </div>
  </div>
  </div>
</section>

Appeal is the character of the artwork and how it can make us connect with the intention of the artist. Like charisma in an actor, it's the attention to detail and movement combined that creates an appealing result.

Carefully crafted animations on the web can create appeal. Companies such as Stripe have made great use of animation to add credibility to their checkout process.

## Try it yourself!

Making use of the other principles is a good way to improve animations. Animations that maintain the physical weight of objects, anticipate changes, make use of secondary actions and good timing will be valuable and helpful additions to your content.

When you have the chance to add some animation to your pages, making use of one or more of these principles will make them more effective and appealing.
