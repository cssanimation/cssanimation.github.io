---
layout: post.njk
date: 2015-02-12
type: tutorial
bodyClass: shorter
title: Animating List Items
description: Some tricks to help announce list items through animation.
categories: [animation, tips, animations, transitions]
customCSS: list_items.css
customJS: list_items.js
imageURL: /images/posts/list_items/list_items.png
home_image: /images/posts/list_items/home.png
tweet_text: Animating List Items
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-02-12-list-items.md
permalink: /list-items/
---
When parts of a web page change, adding some animation is a good way to help your viewers understand what's going on. Animations can announce the arrival of new content, or draw attention to content that's in the process of being removed. In this article we'll look at how this can be used to help introduce new content, by showing and hiding items in a list.

<section class="add-to-list swing-side demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

## Introducing content

Animation can be useful when helping visitors understand when things change on your site. When content is added or removed without any animation, they can miss sudden changes and be confused. Adding subtle animations can avoid this and help by "announcing" that something is going to leave the page or be introduced to it.

One example of adding or removing content is managing the content of a list. Most of the animations can be used for other sorts of content. If you find them useful, or have other ideas to add, do [get in touch](mailto:hello@cssanimation.rocks), we love to hear your thoughts.

## Setting up the HTML

To get started we'll use a pre-filled list and a button to add new items to the list.

```html
<ul id="list">
  <li class="show">List item</li>
  <li class="show">List item</li>
</ul>
<button id="add-to-list">Add a list item</button>
```

A few things to note. Firstly we have two IDs in the HTML. Generally we don't use IDs for styling, as they can introduce problems with their specificity. However they're useful when using JavaScript.

The initial items have the class "show", as this is a class we'll use later to add the animation effect.

## A little JavaScript

For the purpose of the demo we'll create a little JavaScript to add a new item to the list, then add the "show" class so that the animation can take place. There's a reason for using this two-step process. If the list items were added in a visible state, there wouldn't be any time for the transition to take place.

We could get around this by using an animation on the `li` elements, but this would be more difficult to override when removing the elements with another animation.

```
/*
 * Add items to a list - from cssanimation.rocks/list-items/
 */
document.getElementById('add-to-list').onclick = function() {
  var list = document.getElementById('list');
  var newLI = document.createElement('li');
  newLI.innerHTML = 'A new item';
  list.appendChild(newLI);
  setTimeout(function() {
    newLI.className = newLI.className + " show";
  }, 10);
}
```

## No animation

At it's most basic we can write some CSS to show the list items. We're using the `show` class as a way of setting them as visible, so removing the `show` class should also cause them to disappear.

```
li {
  list-style: none;
  background: #d1703c;
  color: #fff;
  height: 0;
  line-height: 2em;
  margin: 0;
  padding: 0 0.5em;
  overflow: hidden;
  width: 10em;
}
```

```css
li.show {
  height: 2em;
  margin: 2px 0;
}
```

In these styles we're setting up the `li` elements to look like rectangles, without the bullet points and giving them a `height` of 0, a `margin` of 0 and set `overflow` to hidden. This is so that they will appear invisible until we apply a `show` class.

The `show` class applies a height and margin. Since we're not using animation yet, the items should appear suddenly on the page, like so. Also try pressing the list items to see them disappear.

<section class="add-to-list demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

### Fade

As a first animation we'll add a simple fade effect. The list items appear a little more gradually than before. Visually this still looks a little clunky but has the benefit of giving viewers longer to notice that something is happening.

<section class="add-to-list fade demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

To add the effect I've created a separate snippet of CSS. To have this apply to the list, apply the class `fade` to a container surrounding your list.

```css
.fade li {
  transition: all 0.4s ease-out;
  opacity: 0;
  height: 2em;
}
.fade li.show {
  opacity: 1;
}
```

### Slide down & Fade

The sudden jump each time an item is added or removed is a litle jarring. Let's have the height adjust as well, to create a smoother sliding effect.

<section class="add-to-list slide-fade demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

The difference between this and the `fade` class above is only that the `height: 2em` has been removed. Since the `show` class contains a set height (inherited from the first CSS snippet), it will transition the height automatically.

```css
.slide-fade li {
  transition: all 0.4s ease-out;
  opacity: 0;
}
.slide-fade li.show {
  opacity: 1;
}
```

### Swinging in

Along with fading and sliding, we can go further by adding a little 3D effect. Browser can transform elements in more than the X or Y directions, useful for adding depth to scenes.

<section class="add-to-list swing demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

To set this up, we need to define the containing `section` as a stage within which the 3D transitions take place. We do this by giving it a `perspective` value.

Perspective in CSS is the depth of the scene. A lower number means a more shallow perspective, with more extreme angles. It's worth playing with this value to find a look that works for you.

```css
.swing {
  perspective: 100px;
}
```

Next we set up the `li` elements to transform into place. We'll use `opacity` to create a fade effect as before, but add in a `transform` to rotate the `li` into place.

```css
.swing li {
  opacity: 0;
  transform: rotateX(-90deg);
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}
```

```css
.swing li.show {
  opacity: 1;
  transform: none;
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}
```

In this example we're beginning with the `li` rotated back by 90 degrees. When the `show` class it added, this `transform` is set to `none`, allowing it to transition into place. To give it a swinging effect I've used the `cubic-bezier` timing function.

### Swinging from side

We can tweak this effect to create different styles quite easily. Here's an example where the items swing in from the side.

<section class="add-to-list swing-side demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">List item</li>
<li class="show" style="background-color: #3cd19e;">List item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

To create this effect we only need change the axis of rotation.

```css
.swing li {
  opacity: 0;
  transform: rotateY(-90deg);
  transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
}
```

All we've changed is `rotateX` to `rotateY`.


## Prefixes and browser testing

The code included above does not include any prefixes, for readability. It's strongly recommended to add prefixes to support browsers that need the `-webkit` prefix or others. I use [Autoprefixer](https://github.com/postcss/autoprefixer) to save worrying about these things.

As these animations are layered on top of the basic show / hide mechanism, they should degrade gracefully on browsers that don't support the animations. Testing on various devices and browsers is important but most modern browsers should be able to support these animations.


