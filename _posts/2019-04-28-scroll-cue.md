---
layout: post
type: tutorial
title: Create an animated scroll cue
bodyClass: shorter
description: The humble scroll cue is an easily overlooked element on your page. Let's make it shine by adding CSS animation.
categories: [updates, courses]
imageURL: /images/posts/cue/home.png
home_image: /images/posts/cue/home.png
tweet_text: "Help people find your content by animating your site's scroll cue. Part of this course: https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK"
---

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

In this tutorial we're going to add a subtle cue to the bottom of the page that lets people know that they can scroll to see more content. We'll use animation to make it easier to notice and even creating a nice "heartbeat" animation along the way.

<div class="videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1JRqQTRLSQc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br>

[In our previous lessons](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK) we've animated the background, and used staggered animations to introduce the titles. The page is beginning to look pretty animated, but it leaves just one last piece, the scroll cue.

Whether we need an arrow to tell people to scroll is a topic for debate. Some would suggest that it's no better than a sticky plaster, and that a better idea would be to design the layout of the page in such a way that scrolling is more obvious. Let's leave the discussion aside for the moment, and instead we'll use this as an opportunity to see how multiple CSS animations can be combined in one little detail.

To code along with this lesson, grab the <a href="https://cssanimation.rocks/levelup/public/01/01.zip">sample code zip file</a> and look for folder `02-introduce-titles`.  A completed version of this lesson's code is in the folder `03-scroll-cue`.

<div class="callout">
    <p>This post is part of my <a href="https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK">amazing 4-hour video course on CSS animation</a>. I'm currently offering a massive 93% discount for CSS animation fans. <a href="https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK">Reserve your place today!</a></p>
</div>

## Adding the HTML and CSS

To get started, we add some extra HTML to our page. I've include a chevron image in the `images` folder. Add the following HTML to the `header` section of the HTML, outside the `header-content` section.

    <section class="header-down-arrow">
      <img src="images/downarrow.png" width="50">
    </section>

We'll use this to position the image. Next, in our CSS, set up styles for the chevron's container.

    .header-down-arrow {
      position: absolute;
        bottom: 4vh;
        left: 0;
        right: 0;
      text-align: center;
      z-index: 10;
    }

We're positioning this absolutely and using `text-align: center` to place the image inside it in the horizontal center of the screen. It's positioned 4% of the screen's height away from the bottom, so should be visible on all screens, whether they be desktop or mobile. I've also made sure to set the `z-index` here to a value higher than 1 as the header content also covers the entire screen and we want to make sure this chevron is on top and visible.

Looking at the result we see a nicely positioned down arrow at the bottom of the screen.

<p data-height="600" data-theme-id="light" data-slug-hash="Ppbvbd" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with scroll cue / chevron (no animation)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/Ppbvbd/">Landing page with scroll cue / chevron (no animation)</a>.</p>

## Animation 1: Introduce the chevron

We begin with the `keyframes`. Since we're trying to convey the idea that people can scroll the page, we can hint at that with the animation on this scroll cue. If the chevron slides up as it appears, it will suggest that direction of movement. We'll create some keyframes called "fade-slide-up".

    @keyframes fade-slide-up {
      0% {
        opacity: 0;
        transform: translateY(4rem);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }

This animation is very similar to the `fade-slide-down` animation we made in lesson 1. The only difference is the starting `transform`, where we're setting it to start 4rem down instead of up.

If this rings alarm bells, don't worry, we're going to do some optimising in the next lesson and see if we can trim some of this back a bit. For now though we'll create new keyframes for this animation.

We then apply this to our chevron image.

    .header-down-arrow img {
      animation: fade-slide-up 1s 1s ease-out forwards;
      opacity: 0;
    }

Here we have the animation name, a duration of 1 second, a delay of 1 second and a basic `ease-out` timing function. We also set the opacity to 0 so that there's no flash at the start before the animation begins.

Here is in in action.

<p data-height="600" data-theme-id="light" data-slug-hash="xqRNrq" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with scroll cue / chevron (slide up animation)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/xqRNrq/">Landing page with scroll cue / chevron (slide up animation)</a>.</p>

If you look carefully you might notice that the chevron animates into place last. It finishes just after the last of the content has stopped moving. The idea is that visitors will subconsciously notice this and be more likely to notice that there's a scroll cue. This is a subtle detail and perhaps easily missed, so we can go further and add a second animation to this chevron. Let's make it pulse.

## Heartbeat

So far all the `keyframes` we've built have only had start (0%) and end (100%) states. Let's build an animation with 3 states.

    @keyframes pulse {
      0% {
        opacity: 1;
        transform: none;
      }
      50% {
        opacity: .8;
        transform: scale(.8);
      }
      100% {
        opacity: 1;
        transform: none;
      }
    }

In this we've added in a middle state, 50%. The animation begins with the chevron at full size, then scales it down at the halfway point, before scaling back up again. It also fades a little when it's "further away" from the viewer. This should be useful to create a subtle beating effect.

We apply this to our image by adding a second animation to the `animation` property.

    .header-down-arrow img {
      animation: fade-slide-up 1s 1s ease-out forwards,
                 pulse 2s 3s ease-out infinite;
      opacity: 0;
    }

Multiple animations, like multiple backgrounds, are added by using commas. Each will stack and should work in parallel. You should be careful through when more than one of the `keyframes` operates on the same property, such as `transform`, it can cause problems. I'm using a delay here of 3 seconds for the "pulse" animation to make sure it doesn't start while the "fade-slide-up" is animating.

In this case the "pulse" animation has a duration of 2 seconds, a delay of 3 seconds, the old `ease-out` timing and lastly an `animation-iteration-count` of *infinite*. Since we're telling this animation to play forever, we don't need to specify the fill-mode.

We can see it in action here.

<p data-height="600" data-theme-id="light" data-slug-hash="XMNwaj" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with scroll cue / chevron (slide up and pulse animation)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/XMNwaj/">Landing page with scroll cue / chevron (slide up and pulse animation)</a>.</p>

## A note about Safari

While the above works well in most browsers, it runs into trouble with Safari. Hopefully this is something that will be fixed in future but for now we can fix it by splitting these two animations up and applying one of them to the container.

First we remove the "pulse" animation from the `.header-down-arrow img` block and move it to the `.header-down-arrow`.

    .header-down-arrow {
      animation: pulse 2s 3s ease-out infinite;
      position: absolute;
        bottom: 4vh;
        left: 0;
        right: 0;
      text-align: center;
      z-index: 10;
    }

The animation will wait 3 seconds before starting, and there's no longer any conflict with the "fade-slide-up" keyframes. Phew!

<p data-height="600" data-theme-id="light" data-slug-hash="mWOYBj" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="Landing page with scroll cue / chevron (slide up and pulse animation - fix for Safari)" class="codepen">See the Pen <a href="http://codepen.io/donovanh/pen/mWOYBj/">Landing page with scroll cue / chevron (slide up and pulse animation - fix for Safari)</a>.</p>

## Subtle is best

It's easy to go crazy and make all the things animate, but that's rarely a good thing for your visitors. People want to be able to read and use the site without being bombarded with movement, so do go easy on the infinite animations. In this case it's quite a subtle animation. Experiment with what works for you, but do dial it back to the point where the animation *helps* your visitors rather than gets in the way.

## Want to learn more?

This was part of my [amazing 4-hour video course on CSS animation](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK). As a fan of this site you can save a massive 93% on the course today.

[Save 93% and Level Up Your CSS Animation Skills](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK) today!



