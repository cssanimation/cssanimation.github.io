---
layout: post.njk
date: 2015-02-25
type: tutorial
title: Clocks
description: Using CSS, and some JavaScript, to design and animate clocks of various styles.
categories: [animations, transitions, javascript]
customCSS: clocks.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js]
customJS: clocks.js
imageURL: /images/posts/clocks/twelve.gif
home_image: /images/posts/clocks/home.png
tweet_text: Animate a clock with CSS
custom_header: posts/clocks.html
demo_url: http://codepen.io/donovanh/full/vEjywy/
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-02-25-clocks.md
permalink: /clocks/
---
It's about time. In this article we'll take on the challenge of creating and animating a clock, using simple CSS animations as well as JavaScript to trigger them.

This is the clock we'll create using HTML, CSS, an SVG background and a little JavaScript. We'll use CSS animations or transitions for any movement, and rely on JavaScript to set the initial time and adding basic CSS transforms.

<div class="demo-container clocks single local bounce">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

### HTML

To get started we'll need some HTML.

```html
<article class="clock">
  <div class="hours-container">
    <div class="hours"></div>
  </div>
  <div class="minutes-container">
    <div class="minutes"></div>
  </div>
  <div class="seconds-container">
    <div class="seconds"></div>
  </div>
</article>
```

My initial approach was to use three elements for each of the hands. I then went back and wrapped each in a container element. While the simpler HTML worked as far as the basic CSS animations, we'll need containing elements when we want to position the hands and  animate them also.

## Clock face

We'll begin with a basic clock design has a round face, with simple hours, minutes and seconds hands.


```css
.clock {
  border-radius: 50%;
  background: #fff url(/images/posts/clocks/ios_clock.svg) no-repeat center;
  background-size: 88%;
  height: 20em;
  padding-bottom: 31%;
  position: relative;
  width: 20em;
}
```

```css
.clock.simple:after {
  background: #000;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}
```

You can [get the SVG background here](/images/posts/clocks/ios_clock.svg). I've also added a pseudo-element to add a solid black circle to the center. The hands of the clock can then be placed behind this pseudo-element as needed.

We should now have something like this.

<div class="demo-container clocks single">
  <article class="clock simple"></article>
</div>

Before adding the hands, we need to place the containers.


```css
.minutes-container, .hours-container, .seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

This stacks each container on top of the clock. Next we create the hands.

### Hour hand

Each hand is given the position property of `absolute` and placed in the twelve o'clock position. We'll begin with the hour hand.


```css
.hours {
  background: #000;
  height: 20%;
  left: 48.75%;
  position: absolute;
  top: 30%;
  transform-origin: 50% 100%;
  width: 2.5%;
}
```

I'm using percentages to make scaling the clocks easier. It's a bit more work but makes it easier to have them fit the view or shrink down for mobiles. We also set the `transform-origin` property to the bottom of the hand so that it can be rotated later.

<div class="demo-container clocks single">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours"></div>
</div>
```
  </article>
</div>


### Minute hand

The minute hand is similar, but taller and thinner.


```css
.minutes {
  background: #000;
  height: 40%;
  left: 49%;
  position: absolute;
  top: 10%;
  transform-origin: 50% 100%;
  width: 2%;
}
```


<div class="demo-container clocks single">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes"></div>
</div>
```
  </article>
</div>

### Second hand

The second hand is thinner again, but also set further down so that it extends further than the center. To allow for this the `transform-origin` to 80%. This leaves 20% of the hand extending past the center.

```css
.seconds {
  background: #000;
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 8;
}
```

<div class="demo-container clocks single">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

### Animation

A stopped clock is only going to be right twice a day. Let's add some animations to make the clock behave more like the real thing.

Some clocks jump along with each second, usually making a ticking sound. Some clocks purr along with the hands moving smoothly. We'll try both. First, we'll make the hands move smoothly.

We can use one `keyframe` to tell the hands to move around 360 degrees (the 0% starting position is implied).

```css
@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
```

This keyframe tells the element to animate around 360 degrees, if applied to the element using the `animation` property. We'll use a `linear` timing function on the hand to make the hands move smoothly.

```css
.hours-container {
  animation: rotate 43200s infinite linear;
}
.minutes-container {
  animation: rotate 3600s infinite linear;
}
.seconds-container {
  animation: rotate 60s infinite linear;
}
```

The `hours` hand is set to rotate once every 12 hours (43,200 seconds). The minute hand rotates once per hour, and the second hand once every minute.

Put it together and we now have movement!

<div class="demo-container clocks single linear">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

If you are very sharp-eyed, you might be able to even make out the minute hand moving. It would take an hour for it to complete a rotation, and twelve hours for the hour hand to complete it's circuit.

The second hand takes 60 seconds, so it easier to notice.

### Adding steps

We can make the hands behave more like a normal clock by having the second hand move around the clock in 60 separate movements. A simple way to achieve this is using the `steps` timing function. The `animation` property for each hand then becomes:


```css
.minutes-container {
  animation: rotate 3600s infinite steps(60);
}
.seconds-container {
  animation: rotate 60s infinite steps(60);
}
```

Both the minute and seconds hand now move around in sixty steps. The browser automatically calculates how far each of these 60 steps move.

<div class="demo-container clocks single steps">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>


### The correct time

It's all very well having the time look good, but how about being accurate? With a little JavaScript we can have the time be correct for our visitors. Here's the code.


```
/*
  * Starts any clocks using the user's local time
  * From: cssanimation.rocks/clocks
  */
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
```

```
  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}
```

This function converts the time (hours, minutes and seconds) into the corresponding angle for each hand. It then loops through each hand and applies that angle using the `style.transform` property of `rotateZ`.

This will work on most browsers, except Safari or other browsers needing a prefix. To allow for this we also use the `style.webkitTransform` property.

This then sets the clock to the current system time.

<div class="demo-container clocks single steps local no-bounce">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

### Aligning second and minute hands

We need to make sure that the minute hand moves when the second hand hits the twelve o'clock position.

<img src="/images/posts/clocks/twelve.gif" alt="Minute hand moving when second hand hits 12" style="max-width: 180px">

When the clock is first drawn on screen there is less than one minute before the minute hand needs to move. To allow for this, we can calculate how long until this first minute ends and manually nudge the hand along. Since we're using JavaScript to make this first movement, we can continue rotating it by six degrees every minute using `setInterval`.

Before we move the minute hand we need to communicate how far into the current minute we are. You may have noticed these lines.


```css
if (hands[j].hand === 'minutes') {
  elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
}
```

These extra lines check to see if the hand is the "minutes" hand, and if so, sets a data attribute with the current angle of the seconds hand.

With this data attribute set, we can then use this data to work out when to move the minute hand.


```
/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}
```

```
/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}
```

### Adding bounce

Since we're now using JavaScript to move the minute hand, we should remove the animation property. Rather than simply remove it, we can replace it with a transition. This is an opportunity to add a bit more character to the animation.

When the JavaScript sets a new angle for the hand, a CSS transition on the element will tell the browser to animate this new position. This means that the JavaScript only deals with the simple angle changes and the browser can take care of animating it.

Before we do that, we should update the code to use JavaScript to move the seconds hand also. Let's use this code to animate the seconds hands containers sixty times per minute.


```
/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}
```

With both the seconds and minute hands handled by JavaScript, update the CSS to replace the `animation` properties with `transitions`.

```css
.minutes-container {
  transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
}
.seconds-container {
  transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
}
```

These transitions apply to the `transform` property and use the `cubic-bezier` timing function. This timing function gives the hands some bounce.

<div class="demo-container clocks single local bounce">
  <article class="clock simple">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

### iOS 7 Style

I'm a big fan of the simplicity of the clock used in Apple's iOS 7. They've since elongated the hands, but I prefer the shorter version.

By styling the hands and adding a background image with the numbers, we can easily create this look.

<div class="demo-container clocks single local bounce">
  <article class="clock ios7">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

This design is itself an evolution of the [Swiss Railway Clock](https://www.youtube.com/watch?v=IvIvKiDWDks) by Hans Hilfiker. By changing a few styles and adding a new background image we can adapt our clock to this style.

<div class="demo-container clocks single local bounce">
  <article class="clock station">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

If you come up with other designs, do [let me know](mailto:hello@cssanimation.rocks).

## Using Moment.js

One of my first ideas when planning this post was to recreate the hotel clocks scene, with three clocks showing different time zones.

The easiest way to adjust for different time zones is by using the amazing [Moment.js Timezone](http://momentjs.com/timezone/) library.

<div class="demo-container clocks multiple active bounce">
  <article class="clock station js-new-york">
```js
<div class="label">New York</div>
<div class="hours-container">
  <div class="hours"></div>
</div>
<div class="minutes-container">
  <div class="minutes"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
  <article class="clock station js-london">
```js
<div class="label">London</div>
<div class="hours-container">
  <div class="hours"></div>
</div>
<div class="minutes-container">
  <div class="minutes"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
  <article class="clock station js-tokyo">
```js
<div class="label">Tokyo</div>
<div class="hours-container">
  <div class="hours"></div>
</div>
<div class="minutes-container">
  <div class="minutes"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

You can see the code in action [on this Codepen](http://codepen.io/donovanh/full/vEjywy/).

## Browser compatibility

Modern browsers can handle the CSS transitions and animations involved. IE10+, recent Chrome and Firefox support them without prefixes, and Safari requires the `-webkit` prefix.

Don't forget to use the prefixed properties within JavaScript too.





