---
layout: post
type: tutorial
title: Animating Links
bodyClass: shorter
description: Apply transitions and keyframe animations to anchor tags.
categories: [courses]
imageURL: /images/posts/animating-links/home.png
home_image: /images/posts/animating-links/home.png
tweet_text: Explore how we can make our anchor links stand out with transitions and keyframe animations
---

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The humble text link, or anchor, is a mainstay of the World Wide Web. For a long time links were always blue and underlined, until CSS came along and gave us the tools to change the colour and style and even animate our link hover effects.

In this tutorial we will learn how we style and animate the underlines on our links, we will combine multiple transitions, group animation keyframes together, and investigate some of the upsides and downsides of using animations instead of transitions.

<div class="videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/CP4VzMN5EW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br>

You'll need some files to follow this tutorial. Download <a href="https://cssanimation.rocks/levelup/public/02/02.zip">this zip file</a>, and open folder `00-start` in the `02` folder. A completed version of this lesson's code is in the folder `01-anchors`.

You'll notice there are loads more examples there too - you'll find [all the lessons on this course](https://www.udemy.com/course/level-up-your-css-animation-skills/?referralCode=D358C1EDAB25E718B07A) if you'd like to learn more.

## Starting HTML and CSS

To begin we have some simple HTML. Inside the containing `content` article you'll find a paragraph of text with a link. Nothing too fancy here.

    <article class="content">
      <p>... and here is some text. This text shows how <a href="https://cssanimation.rocks/">CSS animation</a> can help us make links be more fun and useful...</p>
    </article>

We're going to style this link using CSS, so let's open the stylesheet `links.css`. It's empty for now.

Testing in the browser we see a simple paragraph with a "normal" looking link, complete with the default blue colour and text underline.

<p data-height="600" data-theme-id="light" data-slug-hash="xqmJzN" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/xqmJzN/">See the example on CodePen</a>.</p>

## Replacing the underline

Let's start by replacing, and then animating the underline on the text. Many sites choose to remove the underline from links and rely on colour or font-weight to help links stand out. This is fine, but worth keeping in mind that some visitors might be colour-blind or have trouble making out subtle differences, so do test carefully.

## Accessibility

Just to note. While I'm using ":hover" in these examples, do keep in mind that you can also make use of the ":focus" state here too for keyboard navigation. For the purposes of these examples I am trying to keep things as simple as possible, but it's important to keep in mind other ways that people will be accessing our sites and applications.

Also, we're setting link colours here. So you'll want to think about what style you want to apply to "visited" links. It can be useful to know which links on a page your visitors have visited before!

OK back to the CSS. In our `links.css` stylesheet file, set the anchor styling to `text-decoration: none`, and the same on `hover`.

    a {
      text-decoration: none;
    }

    a:hover {
      text-decoration: none;
    }

With the underline gone, we can now put it back! Only this time we'll create our own that we can animate.

One possible approach could be to add a `border-bottom` to the links. We'll see how it looks.

    a {
      border-bottom: .1em solid blue;
      text-decoration: none;
    }

In the browser we can see the result. It's not great, the border sits very low, far away from the text.

<p data-height="600" data-theme-id="light" data-slug-hash="KWbBxR" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/KWbBxR/">See the example on CodePen</a>.</p>

Let's try another approach, using a pseudo-element.

## Pseudo-elements : vs ::

Back when Internet Explorer 8 was a popular browser, we used to write pseudo-elements using a single colon ":" like ":after". However the standard nowadays is to use two colons like so "::". You may have noticed in the last module I used the older approach. This should be fine for now but for future compatibility it's a better idea to use two. A big thank you to one of my students for pointing this out! I'll be using two colons in the pseudo-elements from now on.

Back to our CSS.

    a {
      position: relative;
      text-decoration: none;
    }

    a::after {
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 0;
        bottom: .14em;
        left: 0;
    }

Here we add an `after` pseudo-element, using "::after". We set a border on the top first. Then we give it the empty "content" property it needs, and position it absolutely. To make this work we need to also go back and set the `position` to "relative" on the anchor element. This tells the browser to use the anchor as a container for the absolutely positioned element within it.

We're setting the `right` and the `left` to "0" so that the line goes all the way across the link. Lastly the "bottom" is set to be slightly higher than the bottom of the container, in this case ".14em" from the bottom. In the browser we can see that this now positions nicely.

<p data-height="600" data-theme-id="light" data-slug-hash="qrLyJW" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/qrLyJW/">See the example on CodePen</a>.</p>

## Styling the underline

Since we've created our own pseudo-underline we can apply styles. Like `border-radius` for example. We could add in a border radius and create an oval shaped underline using `border-radius: 50%`.

    a::after {
      border-radius: 50%;
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 0;
        bottom: .14em;
        left: 0;
    }

We could even change the border style to `dotted` or `dashed` for some crazy styles, or even apply an SVG or image as the underline. Do experiment and see what works for you.

For this example though we'll keep it simple so that we can focus on the animation. I'll just add a small border radius to make the border better match the style of this rounded font.

    a::after {
      border-radius: 1em;
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 0;
        bottom: .14em;
        left: 0;
    }

Time to add some animation.

## Animating the underline (transitions)

To see what sorts of things we can do with this we'll try both a `transition` and an `animation` to see how each works. First we'll try a `transition`.

We can adjust the style of the `after` pseudo-element on hover. To do so add a new block called `a:hover::after`

    a:hover::after {

    }

This contains the hover style for the pseudo-element. Let's adjust the positioning so that the line goes from left to right on hover. First we change the `right` property on the pseudo-element to "100%". Then add a hover position where the line goes all the way across, by setting `right` to 0.

    a::after {
      border-radius: 1em;
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 100%;
        bottom: .14em;
        left: 0;
    }

    a:hover::after {
      right: 0;
    }

Testing this in the browser, it doesn't look like much yet.

<p data-height="600" data-theme-id="light" data-slug-hash="ZeVjqq" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/ZeVjqq/">See the example on CodePen</a>.</p>

We'll need to add a transition to see this change from left to right.

In the pseudo-element, add a transition that will transition the "right" property over a duration of .4s and using the cubic-bezier timing function with coordinates "0,.5,0,1". This timing function starts very fast and tapers off, like an exponential ease-out.

    a::after {
      border-radius: 1em;
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 100%;
        bottom: .14em;
        left: 0;
      transition: right .4s cubic-bezier(0,.5,0,1);
    }

We now see the underline animate from left to right on hover.

<p data-height="600" data-theme-id="light" data-slug-hash="QpzBzm" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/QpzBzm/">See the example on CodePen</a>.</p>

It's worth noting that we're animating the `right` property here. This is potentially a source of problems as it's not as optimised as if we'd animated the `transform` or `opacity`, but in this case it'll be ok as this transition doesn't move the element or cause any page reflowing.

Before we finish up with the transition effect on the underline, let's add in some colour animation.

    a {
      color: #2F56B0;
      position: relative;
      text-decoration: none;
      transition: color .4s ease-out;
    }

Back in the original anchor style block, we set the colour to match the border. We also want this colour to animate on hover, so we add a `transition` property to act only on the "color" property, with a duration of .4s and a simple "ease-out" timing function.

Next we need to add another colour for the hover states of both the anchor and the pseudo-element.

    a:hover {
      color: #457DFB;
      text-decoration: none;
    }

    a:hover::after {
      border-color: #457DFB;
      right: 0;
    }

The anchor has the new colour set, and then the same colour is applied to the `border-color` on the pseudo-element. Lastly we need to add another `transition` to the pseudo-element to make this colour animation work.

    a::after {
      border-radius: 1em;
      border-top: .1em solid #2F56B0;
      content: "";
      position: absolute;
        right: 100%;
        bottom: .14em;
        left: 0;
      transition: right .4s cubic-bezier(0,.5,0,1),
                  border-color .4s ease-out;
    }

In the transition we add a comma, then a second transition specific to the `border-color` property. This will match the timing and duration of the anchor's `color` transition.

<p data-height="600" data-theme-id="light" data-slug-hash="xqmJNK" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/xqmJNK/">See the example on CodePen</a>.</p>

### How we use transitions

In this example we've seen how transitions smooth the state change between an element's default state and its hover state. We've also seen how the transitions can be applied to multiple properties.

The way we went about building the transition is worth looking at. We built each state, and then at the end added a transition to create the animation between the states. This is very different to how we design animations using `keyframes`. Rather than build the animation entirely within the keyframes, we plan out each state in advance and the `transition` property does the job of smoothing the changes between states.

We can specify transitions properties when we set up the transitions - so for example the colour property changes using a different timing function to the other properties. We can use this to create more nuanced animations.

Before we finish up though let's see how we can use an `animation` with `keyframes` to add animation to the hover event.

## Animating the underline (keyframes)

Where the `transition` property smoothes the changes between two states, we can use animations to introduce more than two states, to play automatically on load, and to repeat. These are features transitions don't give us, so it might be useful to make use of animations on hover states in some cases.

For this example we'll set up the animation to repeat infinitely as long as the mouse is hovering over the link.

    @keyframes anchor-underline {
      0%, 10% {
        left: 0;
        right: 100%;
      }
      40%, 60% {
        left: 0;
        right: 0;
      }
      90%, 100% {
        left: 100%;
        right: 0;
      }
    }

We set up the `keyframes` with the name "anchor-underline". In this we have three sets of pairs of keyframes. First 0% and 10%, then 40% and 60%, and lastly 90% and 100%. This is a little different from the way we've written keyframes so far, so it's worth explaining. When we want keyframes to have the same properties, we can list them together separated by commas. What this says is that the 0% and 10% states will be the same as each other, as well as the 40 and 60, and the 90 and 100.

In effect this means that the animation doesn't change between 0% and 10%. However it then will animate between 10% and 40%, at which point it will remain unchanged until 60%, and so on.

We add styles initially for the `left` and `right` positions. At first these styles make the line invisible, but pressed up against the left side. In the middle we set the left and right to 0, meaning the line is stretched across the entire link. Lastly we push the left up to 100% to squash the line against the right side.

We then change our `:hover::after` block, removing the `right` property and replacing it with the `animation` property.

    a:hover::after {
      animation: anchor-underline 2s cubic-bezier(0,.5,0,1) infinite;
      border-color: #457DFB;
    }

We specify the animation name, a duration of 2 seconds, the same timing function as earlier and lastly we give it an iteration count of "infinite". This means it will run forever, as long as the link is hovered over. Let's see this in action.

<p data-height="600" data-theme-id="light" data-slug-hash="EWGpzB" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with animated foreground elements (not staggered)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/EWGpzB/">See the example on CodePen</a>.</p>

For as long as we hold the hover state, the animation plays.

## Transition vs animation

This is one advantage the `animation` property has over `transition`. We can have animations that repeat, or alternate, or go through multiple stages. Transitions are more limited in this sense in that they only afford us the animation between one state and another. Having said that, there's a significant advantage to the transition approach, in that the hover effect gets a second, "out" transition for free. By applying the transition property to the anchor styles, the browser transitions both to and from the hover state, even if the mouse leaves halfway through the animation.

As we can see, this gives us a smoother mouse out effect.

When choosing whether to use animation or transition for interactions it good to keep in mind this benefit. For the rest of this module we'll be focusing on how we can make the most of the transitions to provide smooth animated responses to interactions.

## Multiple lines

The above works well for links in a single line, but it can break when we make the text wrap multiple lines.

This [blog post](https://www.dannyguo.com/blog/animated-multiline-link-underlines-with-css/) sets out a good approach - using `background-image` instead of the border on the link element. So if you're looking at animating links on multiple lines, you can set it up like so:

    a {
      text-decoration: none;
      background-image: linear-gradient(currentColor, currentColor);
      background-position: 0% 100%;
      background-repeat: no-repeat;
      background-size: 0% 4px;
      transition: background-size cubic-bezier(0,.5,0,1) 0.3s;
    }

    a:hover,
    a:focus {
      text-decoration: none;
      background-size: 100% 4px;
    }

Here it is in action:

<p data-height="600" data-theme-id="light" data-slug-hash="mYeJdP" data-default-tab="result" data-user="donovanh" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/mYeJdP/">See the example on CodePen</a>.</p>

## What we learned

In this lesson we learned how to create custom underline effects on our links, we combined multiple transitions and also applied them to different properties. We then looked at how the animation property differs in how it could be used for hover animations and created keyframe animations with grouped keyframes.

## Want to learn more?

This was part of my [video course on CSS animation](https://www.udemy.com/course/level-up-your-css-animation-skills/?referralCode=D358C1EDAB25E718B07A). As a fan of this site you can save a massive 93% on the course today.

[Save over 90% and Level Up Your CSS Animation Skills](https://www.udemy.com/course/level-up-your-css-animation-skills/?referralCode=D358C1EDAB25E718B07A) today!
