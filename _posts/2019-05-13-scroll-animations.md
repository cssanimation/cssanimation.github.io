---
layout: post
type: tutorial
title: Scroll animations
custom_header: posts/pizza.html
customCSS: pizza.css
extraJS: [custom/show-on-scroll.js]
demo_url: https://codepen.io/donovanh/full/rmzNZJ
description: Bake your own scroll animations using requestAnimationFrame and will-change
categories: [free lesson, scroll animation]
imageURL: /images/posts/scroll-animations/home.png
home_image: /images/posts/scroll-animations/home.png
tweet_text: Bake your own scroll animations using requestAnimationFrame and will-change
---

<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

It's time to add some animation to our page when a visitor scrolls. For this tutorial I've set up a demo page all about pizza. The content isn't important but it'll act as a long scrollable page. Let's bring some animation to the page.

In this tutorial we'll learn how to make use of the `requestAnimationFrame` method and detect when elements are within the viewport of the browser. We'll introduce a new `will-change` property and use that to make sure our animations are smooth, and we'll put these together with some transitions to create animations that are triggered on scroll.

<div class="videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/-ths7kNIFnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div><br />

You'll find the HTML and CSS you need to get started in <a href="https://cssanimation.rocks/levelup/public/03/03.zip">this sample code file</a>. Look for folder `01-start`. A completed version of this tutorial's code is in the folder `01-end`.

## Starting HTML

In the `index.html` file you'll find a couple of page sections. The first is a `header` that contains the main photo and heading text.

Beneath this we have a longer article. It's made up of paragraphs and images. I've added the class `inline-photo` to each of these images. We'll use this class to style the images, as well as animate them.

Let's see how it looks. We can see the images and the text, but no animation yet.

<p data-height="600" data-zoom="05" data-theme-id="light" data-slug-hash="BRdaGj" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

## Showing on scroll

For this tutorial we'll be using some JavaScript. The idea is to check, as the page is scrolled, for any special elements we want to animate. If any of these special elements are visible, we can give them a special class and use CSS to animate or transition them into view.

To do this we'll need two things. We'll need the JavaScript to detect and add a class when one of these elements is visible, and we'll need to set up before and after styles on the elements.

## JavaScript

Let's begin with our JavaScript. At the end of the HTML file you'll find a reference to the JavaScript file `show-on-scroll.js`. This is in the `javascripts` folder.

In our editor we'll open this file. It's blank for now. This is where we'll set up the code to detect scrolling and check for those elements we want to show.

We won't be using jQuery for this one. Instead we're going to use a handy method built in to browsers called `requestAnimationFrame`.

Back in the day when building something like this I'd have used the `scroll` browser event, and then checked the state of the page while scrolling.

    window.addEventListener('scroll', function() {
      console.log("Scrollin'");
    });

This might work in some ways, but sadly this has a couple of big problems. The first being efficiency. When scrolling, the `console.log` here will fire like crazy. If we're doing anything like parsing the DOM tree or other heavy tasks, this will add a lot of overhead to the browser. It could very easily slow things down and make our animations janky.

A second issue is iOS. Scrolling on some phones only results in this `scroll` trigger being fired after the scrolling has finished. We'd like this to work on mobile, so that's a big fail there.

Thankfully `requestAnimationFrame` solves these issues. It's a method that we can use to repeatedly check our page to see if elements are visible, while making sure we don't overload the browser by checking thousands of times per second. It does this by limiting how often the callback is executed to either the screen's refresh rate or 60 times per second.

60 times per second might sound like a lot but for the work we'll be doing it's very slow and won't overload the browser.

To set up our `requestAnimationFrame` method we'll apply it to a variable. This way we are able to have a fallback function for browsers that don't yet support it.

    var scroll = window.requestAnimationFrame ||
                function(callback){ window.setTimeout(callback, 1000/60)};

Here we're saying that `scroll` should be the `window.requestAnimationFrame` method, or (if this isn't available), use this simple function that waits one-sixtieth of a second before calling the callback.

Next we'll grab the elements on the page we want to look out for.

    var elementsToShow = document.querySelectorAll('.show-on-scroll');

This will look for all elements with class `show-on-scroll` and return them as an array we can loop through.

Let's set up that looping function.

    function loop() {

      elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('is-visible');
        } else {
          element.classList.remove('is-visible');
        }
      });

      scroll(loop);
    }

We begin by setting up the function `loop`. This is a function we want to loop through all the elements and check if they're visible. We do this using the `forEach` method. For each of the `show-on-scroll` elements found this loop will check if it's in the viewport, and if so, add the class `is-visible`. Otherwise it'll remove the class.

Lastly we want to keep firing this function so we'll make use of our `requestAnimationFrame` helper we set up earlier, and pass this function as a callback.

This means that as soon as `requestAnimationFrame` allows us, it'll repeat this function and update classes as needed.

As it stands, this won't do much yet. We need to kick it off by calling the `loop` function.

    loop();

### Checking if in the viewport

There's one bit missing. In the `loop` function we're calling a method `isElementInViewport`. Unfortunately this isn't a browser method, we'll have to write that one ourselves. Here's a handy one I grabbed from Stack Overflow.

    // Helper function from: http://stackoverflow.com/a/7557433/274826
    function isElementInViewport(el) {
      // special bonus for those using jQuery
      if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
      }
      var rect = el.getBoundingClientRect();
      return (
        (rect.top <= 0
          && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
      );
    }

Just to run through this quickly. It begins by checking to see if `jQuery` is defined. jQuery changes the way elements are made available and this corrects for a possible issue that might arise. Next it uses a handy method called `getBoundingClientRect`. This is the rectangle around the element we want to check.

Next it does a series of checks that will return true if the element is on the page and on the screen.

Let's save this and set up our HTML to make use of this new power.

## Selecting the elements

While there's a bit going on there in the JavaScript, the result is quite simple. It's going to apply an `is-visible` class when selected elements show on the screen. Let's choose which elements we want to show.

In our `index.html` file we start by adding the class `show-on-scroll` to each of the photos.

    <img src="images/pizza.jpg" class="inline-photo show-on-scroll">

Lastly we'll also add this class to the `header` of the page. It'll be nice to have an animation on the titles and since this is just adding a class, we can totally do that in CSS.

    <header class="header show-on-scroll">

In our browser we can now test this. Opening the inspector we should see the `is-visible` class appearing and disappearing as we scroll.

Time to use this for some animation!

## Animating the photos

In the `scroll.css` file in the `stylesheets` folder we find some initial styles for the photos. Let's set these up to be animated by making a few changes.

    .inline-photo {
      border: 1em solid #fff;
      border-bottom: 4em solid #fff;
      border-radius: .25em;
      box-shadow: 1em 1em 2em .25em rgba(0,0,0,.2);
      margin: 2em auto;
      opacity: 0;
      transform: translateY(4em) rotateZ(-5deg);
      transition: transform 4s .25s cubic-bezier(0,1,.3,1),
                  opacity .3s .25s ease-out;
      max-width: 600px;
      width: 90%;
      will-change: transform, opacity;
    }

We want these to fade in so we set the `opacity` to zero. Then we also want these photos to slide into place, so let's adjust the transform to `translate` them down 4em, and give them a few degrees more rotation.

Next we set up the transition we want to happen when these photos become visible. We add a transition for the transform, with a duration of 4 seconds, a quarter-second delay and the exponential ease-out timing function. We also fade it in using the opacity property, making it a little quicker than the transform.

We're using a delay so that if our visitor is scrolling slowly, the animation won't have finished before the photo is properly visible on screen. It's a small tweak helps the flow of the page.

Lastly we add a property we've not used yet, the `will-change` property. This is a way of telling the browser to prepare to animate the element. We supply this property the values `transform` and `opacity`.

With this done, the photos will be invisible. We need to add some CSS to make them visible.

    .inline-photo.is-visible {
      opacity: 1;
      transform: rotateZ(-2deg);
    }

We add a new rule for the `is-visible` classed elements. In this we make them visible with `opacity` of 1, and we set the `transform` to just a slight rotation.

Here's how it looks, showing the images as we scroll down the page.

<p data-height="600" data-theme-id="light" data-slug-hash="aWyPpP" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

## Animating the header

So far so good! Let's make use of the same JavaScript to bring animation to the header.

Earlier we added the `show-on-scroll` class to the header. We can make use of the `is-visible` class to animate this part too. We'll need to set up a couple of different animations. First we'll have it fade in, then the main photo will pop into place and the text will slide up into place beneath it.

Since we're doing this by applying a class, we have a situation where there's a change from one state to another. When we change from one state to another it's a good opportunity to use transitions, but if we wanted to do something more advanced here we could also use `keyframes` and animations.

For now though we'll get by with a couple of transitions. Whenever possible I like to try to use the simplest approach before jumping into more complex solutions.

We begin by fading in the `header`.

    header {
      opacity: 0;
      transition: opacity .5s .25s ease-out;
    }

    header.is-visible {
      opacity: 1;
    }

We create a `header` style block and set the `opacity` to 0, as well as add a transition for the opacity.

Next the `header` is given an opacity of 1 when the `is-visible` class is applied.

For the header image and title we'd like to scale the photo and push the text down a bit. We can add styles to do this.

    .main-photo {
      transform: scale(.8);
    }

    .heading {
      transform: translate(-50%, calc(-50% + 1em));
    }

This sets up the initial states of the elements. The photo is scaled down to .8 of it's normal size. The `heading` text is pushed down 1em. I'm using absolute positioning on this title text, setting the `left` and `top` to 50% of the `header`. This `transform` corrects by pulling the text back into the center and then adding an extra `1em` to push it down a bit.

The next step is to add the styles for when the `header` has the `is-visible` class.

    .is-visible .main-photo {
      transform: none;
    }

    .is-visible .heading {
      transform: translate(-50%, -50%);
    }

We start with `is-visible` then `main-photo` to specify the photo when it's parent has the `is-visible` class. In this state we can remove the `transform`. For the `heading` text we want to position it in the center of the screen.

With the two states defined the last thing it to add a transition.

    .main-photo,
    .heading {
      transition: transform 4s .25s cubic-bezier(0,1,.3,1);
      will-change: transform;
    }

We specify both the `main-photo` and the `heading`. For each of these we apply a `transition` to the `transform` property, with a long duration of 4 seconds, a delay as before, and the exponential ease-out timing function.

We'll also add a `will-change` property here to tell the browser to optimise the `transform` property on these elements for animating.

Let's see it in action.

<p data-height="600" data-theme-id="light" data-slug-hash="rmzNZJ" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

Here we see that on load, the header fades in and the photo and text transition into place. If we scroll the page we see each of the photos fading in as they enter the viewport.

## What we learned

In this tutorial we were introduced to the handy `requestAnimationFrame` method. We wrote a handy JavaScript utility to detect when an element is inside the viewport, and apply a class to it. We will be able to use this any time we want to trigger animations on an element on scroll.

We also made use of the `will-change` property, which allows us to hint to the browser which properties are going to be animated.

## Level up your CSS animation skills!

If you like this, you'll love my [video course on CSS animation](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK). As a fan of this site you can save over 90% on the course today.

[Save over 90% and Level Up Your CSS Animation Skills](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK) today!
