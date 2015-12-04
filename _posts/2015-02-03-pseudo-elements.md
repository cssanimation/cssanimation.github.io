---
layout: post
bodyClass: shorter
title: Animating pseudo-elements
description: Pseudo-elements give you two extra HTML elements for free! Here's how to animate them on hover. Use them wisely.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Shiny buttons with CSS
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-02-03-pseudo-elements.md
languages:
 - title: Français (French)
   url: /fr/pseudo-elements/
   iso: fr
   postTitle: Animer des pseudo-éléments
 - title: Deutsch (German)
   url: /de/pseudo-elements/
   iso: de
   postTitle: Animation von Pseudo-Elementen
 - title: Polski (Polish)
   url: /pl/pseudo-elements/
   iso: pl
   postTitle: Animowanie pseudo element&oacute;w
 - title: Português (Portuguese)
   url: /pt/pseudo-elements/
   iso: pt
   postTitle: Animando pseudoelementos
 - title: Türkçe (Turkish)
   url: /tr/pseudo-elements/
   iso: tr
   postTitle: Pseudo-element'ler ile animasyon
---

Pseudo-elements are like getting extra DOM elements for free. They allow us to add extra content, decoration and more to our pages without adding extra HTML, and they can be animated. In this post we'll use a pseudo-element to add a little visual flair to a button.



<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

## Pseudo-elements

Within CSS, we can specify a pseudo-element using `::before` or `::after`. The pseudo-element is then inserted within your element, between the element and any content. Since it acts as an element of it's own, it can be styled, positioned and more. The code looks a bit like this:


```
.pebble::before {
  ...
}
.pebble::after {
  ...
}
```

At this point, our `.pebble` element has two virtual elements attached, and we can style them as needed.

### Note on "::" versus ":"

It's generally accepted that we use the double colon `::` to denote pseudo-elements (as opposed to pseudo-classes like :hover, :first-child). If you're adding IE8 support, it's best to use the single `:` instead. All other browsers and newer versions of IE support the double.

### Don't forget "content"

When adding pseudo-elements, one thing to keep in mind is the need to specify the `content` property before they can be made visible on the page. As the pseudo-element is created in an content-less state, we can trick it into appearing by using an empty `content` like so:

```
.pebble::before {
  content: ""
  ... more styling goes here...
}
```

This should make sure the element is visible on screen.

## Example: Shiny button

For this example we'll use a pseudo-element to create a shiny effect on hovering over a button. Here's an example of it in action (hover or tap to see effect).

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

To begin, some HTML:

    <button>Oooh SHINY</button>

Since we're using pseudo-elements, we won't need any more HTML than this to get going. You may want to add a class to the button if styling more than one type on a page, but for now we'll use the generic element for simplicity.

### Adding the sheen effect

The shiny sheen effect is a linear gradient that passes across the button. To create this we'll use the `after` pseudo-element, and position it in a beginning position outside the button:

```
button::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-5em, 7.5em);
}
```

The sheen effect is made up of a gradient from the button colour to white and back again. At this point it is now sitting outside the button.

We'll need to hide the sheen layer so that it only shows on hover. To do this we'll set the button's `overflow` property to `hidden`. Since the pseudo-element is within the button, this means it's positioning outside the button won't be visible.

```
button {
  background: #e5ac8e;
  color: #fff;
  font-size: 14px;
  border-radius: 0.5em;
  padding: 0 1em;
  position: relative;
  overflow: hidden;
  line-height: 32px;
}
```

I've put in some other styling also to give the button it's own look. One thing to point out, is the use of `position: relative`. I've added this property so that the absolutely positioned pseudo-element will exist within the button. Without specifying the position, an absolutely positioned item will position within a parent element.

## Adding the animation

Since we'll be using an animation in this example, there are two steps involved. The first is to tell the browser to use an animation on hover. Then we'll set out exactly what that animation is using `keyframes`.

Adding the hover state can be done by stacking the `after` onto the `hover` like so:

```
button:hover::after, button:focus::after {
  animation: sheen 1s forwards;
}
```

Here we are telling the browser than on hover, the `after` pseudo-element is to have an `animation`. The animation, called sheen, lasts one second and stops at the end without repeating.

The order matters here. Using `::after:hover` won't work as it'll be telling the browser to react to the hover state of the pseudo-element itself.

I've also added the focus state. This means that viewers tabbing through the page will see the sheen effect as well, without needing to hover. (Thank you, [Šime Vidas](https://twitter.com/simevidas), for the tip)

Let's specify `keyframes` for this animation:

```
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}
```

We only need one keyframe in this case. Since the starting position (0%) is implied by the pseudo-element's starting position, we only describe the end position. In this case the end position is across at the top-right of the button. The browser will then animate the sheen effect across for us.

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

## Browser considerations

The [animation property is well supported](http://caniuse.com/#feat=css-animation), as are [pseudo-elements](http://caniuse.com/#feat=css-gencontent). It's always good to make sure and include `-webkit` and `-moz` prefixes for the `keyframes` and any transforms.




