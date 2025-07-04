---
layout: post.njk
date: 2019-05-26
type: tutorial
title: Parallax scrolling
custom_header: posts/moonrocks.html
extraJS: []
demo_url: https://codepen.io/donovanh/pen/ZKJOBe
description: Animate with parallax scrolling and Rellax
categories: [free lesson, scroll animation]
imageURL: /images/posts/moonrocks/home.png
home_image: /images/posts/moonrocks/home.png
tweet_text: Animate your page content with parallax scrolling and Rellax
permalink: /parallax/
---
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Let's have some fun with parallax scrolling, using a handy JavaScript plugin called "Rellax" to animate a page with lots of elements scrolling at different speeds.

For this tutorial you'll find the HTML and CSS you need to get started in <a href="https://cssanimation.rocks/levelup/public/03/03.zip">this sample code file</a>. Look for folder `03-start`. A completed version of this lesson's code is in the folder `03-end`.

<div class="videoWrapper">
```html
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vYhmUe3nEqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
```
</div>

## What is parallax?

Parallax movement is when things move at different speeds relative to each other. It's a popular effect that can be used to create an illusion of depth. If we're moving, we see objects close to us move faster than objects further away.

The technique is popular in many places including video games, where it's usually seen in the layered backgrounds.

In this example we see how parallax works when scrolling a website.

<p data-height="600" data-theme-id="light" data-slug-hash="zwdBzP" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

Each of these boxes scrolls upward as I scroll down the page. The box in the middle, marked "No parallax" is scrolling at the same speed as the page. To it's left is a box that scrolls faster, and the box on the right scrolls slower.

This means that if I was to scroll the page up by 100 pixels, the "faster" box actually scrolls something like 130 pixels, and the "slower" box moves about 70 pixels.

In this example I'm using a tool called [Rellax](https://dixonandmoe.com/rellax/).

## Rellax

The JavaScript utility Rellax is a handy, and quite simple plugin created by the design agency Dixon and Moe. It's lightweight and has no need for jQuery, and we can call it in from either local file or by using a CDN.

Looking into [the code](https://github.com/dixonandmoe/rellax/blob/master/rellax) we find that it's using a very similar approach to our "show-on-scroll" code. It sets up a `loop` variable using "requestAnimationFrame", and then in each iteration uses CSS to `translate` each object by a calculated offset.

It's worth taking a look through how this was built if you'd like to see how a nice simple JavaScript utility can be written and shared.

Let's use it to bring our page some parallax movement.

## Starting page

To get started we have a space-themed page taking us on a trip to the moon. Along the way we pass a bunch of rocks. We can use Rellax to have these elements scroll at different speeds.

<p data-height="600" data-theme-id="light" data-slug-hash="gWxMLJ" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

We begin by adding Rellax to our page. In our `index.html` file, just before the closing `body` tag, add a reference to the script.

```html
<script src="./javascripts/rellax.min.js"></script>
<script>
  var rellax = new Rellax('.rellax');
</script>
```

We also put in some JavaScript to activate Rellax. We pass the `Rellax` method a string that will be used to identify the elements it'll need to animate. In this case, we're going to use the class "rellax" on our elements.

With this in place we can add the "rellax" class. Scrolling back up the HTML we can look for each of the `floating-rocks` elements.

We add the `rellax` class to each like so.

```html
<div class="floating-rocks front-one rellax">
  <img src="images/rock1.svg">
</div>
```

With the class applied to each of the rocks we can see the effect in the browser.

<p data-height="600" data-theme-id="light" data-slug-hash="xdXYKv" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

So it's working, the rocks are scrolling at a slower speed than the text, but it's not right yet. All the rocks are moving at the same speed as each other. We'd like to have some sit in front of the text and some behind, so let's achieve this using some Rellax settings.

## Rellax settings

When working with Rellax we have two pieces of data we can pass in that will change the way the movement occurs. The first is speed.

We can tell each image to scroll at a different speed. The value is an integer where a negative number means it'll move more slowly than the normal scroll speed, and a positive number means it'll move at the same speed or faster.

In our HTML we again go to each of the images but this time add a speed. It's written as a `data` attribute `data-rellax-speed`.

```html
<div class="floating-rocks front-one rellax" data-rellax-speed="8">
  <img src="images/rock1.svg">
</div>
```

The first rock is a small one that sits in front so we'll give it a fast speed of "8". The second one is far back so it's going to have a speed of "-2". The next one in front again, so we'll give a positive value of "3". The next rock is also far back so we'll give it a speed of "-3".

Lastly for planet earth we'll set it far back into the scene with a speed of "-4".

There's one more thing, "centering".

When Rellax calculates how far to move the elements it does so based on the height of the page. This means that elements further down the page will have moved more than elements at the top, as by the time we've scrolled all the way down there, they've been parallaxed to somewhere we may not expect.

We can get around this using centering. This will adjust the element's position so that when we scroll to it, it'll still be visible on the page. We can either do this by adding a `data-rellax-percentage` value to each of the rocks, or we can set this globally in our original JavaScript at the bottom of the page.

```html
<script>
  var rellax = new Rellax('.rellax', {
    center: true
  });
</script>
```

In our JavaScript we add an object to be passed in to the `Rellax` method and in it we specify "center" be true. Back in our browser we can see the results.

<p data-height="600" data-theme-id="light" data-slug-hash="PmJQPj" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

The rocks now float in front as well as far away behind the text.

Before we finish up this example, let's also see how Rellax can bring our header and footer elements to life.

## Animating the header and footer

At the top our document we have a `header` element containing an SVG logo and heading text. The SVG is inline so we can apply Rellax to each of the individual parts. That way on scroll, the logo will come apart as it scrolls away.

We start with the two `circle` elements.

```html
<circle class="rellax" data-rellax-speed="-1" stroke="#000000" stroke-width="3" fill="#333333" style="opacity:.5" cx="100.5" cy="100.5" r="100.5"></circle>
<circle class="rellax" data-rellax-speed="-.5" stroke="#000000" stroke-width="3" fill="#aaa" style="opacity:.5" opacity="0.9" cx="100.5" cy="99.225" r="79.875"></circle>
```

Adding a class of "rellax" to each we can specify speeds. These two are farthest away so we'll use negative values of "-1" and "-.5" so they move quite slowly.

Next we have some `<g>` groups we can use to hook Rellax onto. The first contains the large boulder. We'll use this containing `<g>` rather than the `large-boulder` group as there's already a `transform` on that group. Since Rellax uses transforms, this would cause a clash so it's safest to use the container.

We'll add the "rellax" class and give this a speed of "2".

```html
<g class="rellax" data-rellax-speed="2">
```

We then do the same for the "medium-boulder" and "small-boulder" containers, giving them a speed of "1.5" and "1.25" so that they move a little slower than the large boulder.

With that done lets add parallax to the heading. There's a gradient on the `header` element at the bottom that makes it fade to black. It would be cool if this text was to scroll in behind that gradient. We can do this by giving the title a very slow scroll speed.

```html
<h1 class="heading rellax" data-rellax-speed="-5">MOON ROCKS</h1>
```

Lastly let's do the same with the header at the bottom of the page. Inside the `footer` element we apply the same thing but a speed of "-2" to the heading.

```html
<h1 class="heading rellax" data-rellax-speed="-2">MOON ROCKS</h1>
```

Let's see how this is looking.

<p data-height="600" data-theme-id="light" data-slug-hash="ZKJOBe" data-default-tab="result" data-user="donovanh" data-embed-version="2" data-pen-title="" class="codepen">&nbsp;</p>

## Fixing the header

After recording this lesson I noticed that the "center" setting caused the header and footer elements to position wrongly. Turns out the header elements don't need this to be set, and we can get around this by declaring another set of "Rellax" elements in the JavaScript.

```js
var rellaxNonCentered = new Rellax('.rellax-non-centered', {
  center: false
});
```

By using the class "rellax-non-centered" on the header and footer elements instead of "rellax", this should fix the issue! The code in the <a href="https://cssanimation.rocks/levelup/public/03/03.zip">download zip file</a> has been updated with this change.

## Parallax using CSS

While this example uses CSS and JavaScript for the positioning of the elements on scroll, it's possible to create a parallax effect using pure CSS. There's a [great write-up of this approach](https://developers.google.com/web/updates/2016/12/performant-parallaxing) by Paul Lewis and Robert Flack that goes into more detail. It's a great approach and seems to perform well.

## What we learned

In this lesson we made use of a great JavaScript tool to create parallax movement on our page. Along the way we saw how this tool uses CSS transforms to move elements on scroll, using a similar `requestAnimationFrame` approach we've used ourselves. We also learned how to use Rellax with various speeds to create the illusion of depth on the page.

## Level up your CSS animation skills!

If you like this, you'll love my [video course on CSS animation](https://www.udemy.com/course/level-up-your-css-animation-skills/?referralCode=D358C1EDAB25E718B07A). As a fan of this site you can save over 90% on the course today.

[Save over 90% and Level Up Your CSS Animation Skills](https://www.udemy.com/course/level-up-your-css-animation-skills/?referralCode=D358C1EDAB25E718B07A) today!
