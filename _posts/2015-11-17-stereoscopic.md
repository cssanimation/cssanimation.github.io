---
layout: post
title: Stereoscopic CSS
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/stereoscopic/
description: Cross your eyes to see a 3D effect created using CSS
categories: [3d, css]
imageURL: /images/posts/stereoscopic/home.png
home_image: /images/posts/stereoscopic/home.jpg
tweet_text: Cross your eyes to see a 3D effect created using CSS
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-11-17-stereoscopic.md
---


For a while I've been blogging about making all sorts of 3D-style effects using CSS. In this post I take it one step further and try to make the scenes look **even more three dimensional**.

See the [stereoscopic cube demo](https://cssanimation.rocks/demo/stereoscopic).

## Stereoscopes

There are many techniques used to try to convey a 3D image from a screen. One of the oldest is the use of red and green (or blue) coloured film, which when watched through red/green glasses produces a 3D effect.

![Old-style 3D effect](/images/posts/stereoscopic/old-movie.jpg)

[Simurai](http://twitter.com/simurai) has put some work into this and created a nice [CSS3D](http://simurai.com/post/802968365/css3d-css3-3d-text) plugin to achieve it.

The downside to this is that the film can only be monochrome, as the colours are limited to being used to create the 3D effect.

### Side-by-side stereoscopy

A second approach to presenting 3D is to make use of an ability some of us have to cross our eyes. The idea is to present two scenes side by side, each presented from a slightly different angle. If the viewer can cross their eyes, the two images combine to create a 3D effect.

![How two images combine to form a 3D version](/images/posts/stereoscopic/example.png)

While this may not work for everyone, it's great when it works and doesn't limit the number of colours a scene can include. Some [photographs show this effect](http://www.flickr.com/photos/ytf/5557882900/) nicely.

To give it a go, try looking at the following image from about two feet away from your monitor. Gently cross your eyes until the two images merge together, and if you get them to line up just right, it should look like it's 3D.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

This double-image technique is most notably used in the new [Oculus Rift headset](http://www.oculusvr.com/). While I don't have one to test this against, I believe it's possible to display HTML pages within the headset, so some form of this technique might be useful there.

## Warning

Just a heads up, but if you are going to spend a lot of time staring at the screen with your eyes crossed, you might experience headaches. I know I did. Totally worth it though!

## Set the scene

To get started we'll create a simple 3D scene using some HTML.

    <div class="stage">
      <figure class="cube">
        <span class="back">S</span>
        <span class="top"></span>
        <span class="bottom"></span>
        <span class="left">3D!</span>
        <span class="right">S</span>
        <span class="front">C</span>
      </figure>
    </div>

We have a containing stage `div` here that will act as a stage for the cube to sit on, and within it the cube figure itself. The cube is made up of 6 parts.

The "stage" div is needed so that the browser can establish some important 3D-related settings, such as the depth of the scene and the angle we're looking into the scene at. These things we set with the CSS.

    .stage {
      width: 480px;
      height: 500px;
      margin: 10px auto;
      position: relative;
      perspective: 1600px;
    }

This CSS sets up the stage with some proportions and sets a `perspective` value. Perspective describes the depth of the scene, with smaller values producting more extreme-looking results. In this case, 1600 pixels looks pretty good, but you can try different values in your own scene to see how it feels.

## Building the cube

The cube itself is made up of six elements. Using the CSS3 `transform` property, we can manipulate these spans in the 3D space and position them where we like. First though we need to tell the browser that our intention is to move things around in 3D. Some CSS achieves this.

    .cube {
      transform-style: preserve-3d;
      transform-origin: 100px 50%;
      position: absolute;
      top: 120px;
      left: 140px;
    }

The main parts to note here are the `transform-style` and `transform-origin` properties. These tell the browser that this and any child elements will be capable of transforming within the context of the "stage" `figure`, as well as describing the point around which any rotation, scaling or skewing can happen.

Next up we need to specify the dimensions of the cube faces, and then magic them into place using the `transform` property.

    .cube span {
      color: white;
      display: block;
      font-size: 100px;
      height: 200px;
      line-height: 200px;
      opacity: 0.5;
      position: absolute;
      text-align: center;
      width: 200px;
    }
    .back {
      background-color: #f00;
      transform: rotateY(180deg) translateZ(100px);
    }
    .top {
      background-color: #ff7400;
      transform: rotateX(90deg) translateZ(100px);
    }
    .bottom {
      background-color: #aaa;
      box-shadow: 0 10px 100px rgba(0, 0, 0, 0.7);
      transform: rotateX(-90deg) translateZ(100px);
    }
    .left {
      background-color: #099;
      transform: rotateY(-90deg) translateZ(100px);
    }
    .right {
      background-color: #0c0;
      transform: rotateY(90deg) translateZ(100px);
    }
    .front {
      background-color: #ff0;
      transform: translateZ(100px);
    }

To make things more readable, I've removed the various "-webkit" and "-moz" prefixes from the `tranform` properties here.

This CSS describes the general rules for the spans, that they be 200 pixels wide for example, and have white text. The rules that follow rotate and position each of the various faces using rotate and translate. Each face is given a background colour also.

## Making it stereoscopic

Now that we have a scene with a 3D object, we can double it up and make it stereoscopic. Start by doubling up the HTML into a `left` and `right` div.

    <div class="container">
      <div class="left">
        <div class="stage">
          <figure class="cube">
            <span class="back">S</span>
            <span class="top"></span>
            <span class="bottom"></span>
            <span class="left">3D!</span>
            <span class="right">S</span>
            <span class="front">C</span>
          </figure>
        </div>
      </div>

      <div class="right">
        <div class="stage">
          <figure class="cube">
            <span class="back">S</span>
            <span class="top"></span>
            <span class="bottom"></span>
            <span class="left">3D!</span>
            <span class="right">S</span>
            <span class="front">C</span>
          </figure>
        </div>
      </div>
    </div>

The intention here is to divide the screen up into two, and place one cube beside the other. We again use some of that magic we call CSS to achieve the goal.

    .container {
      margin: 0 auto;
      width: 960px;
    }

    .left, .right {
      height: 100%;
      overflow: hidden;
      width: 50%;
    }

    .left {
      float: left;
    }

    .right {
      float: right;
    }

Our example doesn't need to be full screen sized, so I've chosen to set it within a container column. Each of the two `divs` is set to 50% width and floated left and right respectively.

We now have two identical 3D objects. This isn't going be enough, we'll need to adjust for the different angles each eye needs. To do this we will override each `stage` perspective-origin property.

    .left .stage {
      perspective-origin: 63.5% -340px;
    }

    .right .stage {
      perspective-origin: 36.5% -340px;
    }

The left stage is given a perspective approximately two thirds along the X-axis, to mimic what your right eye would expect, and the right stage given a value of around one third. I've tweaked these by hand so they may need to be adjusted a little to work with your project.

The end result should be two almost identical 3D CSS scenes, with slightly different perspectives.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

You can see the [animated stereoscopic version here](https://cssanimation.rocks/demo/stereoscopic).

<!--
## More examples

Note: Some of these larger scenes can be more difficult to see as they require you cross your eyes more. If you have trouble with any, try zooming your browser out to make the scene a little smaller.

### Portal Orientation Video

![Portal CSS with the stereoscopic treatment](/images/posts/stereoscopic/portal.png)

See the [animated version here](https://cssanimation.rocks/demo/stereoscopic/portal.html). You can also [read how the it was made](/portal).

### Zelda Intro Screen

![Zelda intro screen with the stereoscopic treatment](/images/posts/stereoscopic/zelda.png)

See the [animated version here](https://cssanimation.rocks/demo/stereoscopic/zelda.html). You can also [read how the it was made](/zelda).

-->



