---
layout: post
title: Why animate?
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Why animation works so well, and how you can use it to improve your web designs.
categories: [css, theory]
imageURL: /images/posts/why-animate/home.png
home_image: /images/posts/why-animate/home.png
tweet_text: Why animation can improve your web designs
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2016-01-01-why-animate.md
---

Staring into the flickering flames of a fire, watching the waves of the sea lap against a shore, catching a sharp glimpse of a tiger about to pounce, the world is movement.

We are really good at noticing and reacting to movement. It's hardwired into our brains and is an important part of how we understand the world around us.

When we sit down to design a web site, we are creating something that will communicate with our visitors. Animation is one of the ways we can do this.

## Communication

Often when designing web sites we think about the content, the layout, styles, fonts and colors. But we can also communicate through movement. Rather than consider animation something separate in the design process, the way things move is another facet in our designs that works and communicates alongside everything else.

All these things add up to create our brand and an experience we hope will be worthwhile.

We hope that our designs communicate our content effectively, communicate our great attention to detail, and leave the visitors happy. Since our visitors are great at noticing and understanding movement, animation is an important and powerful tool.

## Humble beginnings

A simple example of animation we see everywhere is the hover effect. It seems strange to marvel at this simple concept now but when it was first introduced, it was quite a big deal.

Back when the web was first taking shape, we had documents connected through hyperlinks. These links, in order to communicate their difference from the text around them, were given a blue color and underlined. The cursor would also change to a `pointer` style.

When clicked they would change to purple to show that the link was active, or later that it had been visited. The colors were used as a way to communicate the status of the link. Things were pretty good.

Then along came CSS. In [early 1998][1], the `:hover` selector arrived. Suddenly we could do so much more. Rather than rely on a sudden cursor change, we could apply styles to the link itself when the cursor hovered in front of it.

    a:hover {
      color: red;
    }

With this small change, we were communicating more. List of links became interactive playgrounds as we gleefully danced our cursors around, getting immediate feedback from the link colors.

It wasn't just for fun though. The change in color adds more information about what is happening on screen. We humans, being great at noticing movement or when things change, benefit when this extra information. But we can do more.

## Conveying more information

Rather than stop at changing the color, we can add animation too. Animating a color change gives our eyes even more opportunity to notice the change, as it draws it out over a longer period of time. An animated change is easier to notice than a sudden change.

    a {
      transition: color 0.2s;
    }
    a:hover {
      color: red;
    }

With this we add a transition to the anchor CSS. When a link is hovered over, the browser will animate the color of the text from blue (or purple) to red over the course of 0.2 seconds.

## Taking it further

It might not seem like much but even these simple tools open up a world of communication that we can use to add life to our designs.

With the ability to convey information through motion, we can draw attention to part of our pages that have changed, signal the arrival or removal of content, show our visitors what to look at next and much more.

Some ways animation can add value to a design:

* Highlighting interactive content
* Adding or removing content
* Telling a story
* Calling attention
* Credibility
* Branding and fun

### Highlighting interactive content

Hovering links is one way animation can add value, but we can go further. Tooltips, changing design styles and other visual changes can make your pages feel more alive and prompt visitors to select, press or otherwise interact with your content. Draggable areas can expand or highlight on touch, black and white images can turn to color and more.

### Adding or removing content

If content on a page suddenly vanishes or appears, we might notice. But that's all we know. We don't know where it went, and perhaps why. This is an opportunity to add a little animation.

Adding an extra line to a todo list, sliding in a control panel or minimising content to a corner of the page all benefit from animation. By showing where things come from and where they go to, our visitors maintain a connection with the page and better understand how it works.

### Telling a story

We're not limited to text or even static images in our web pages. By moving elements around, adding new elements or removing them you can take your visitors on a journey and leave them better informed.

The homepage over at [Mailchimp](http://mailchimp.com) is a good example of this. In the center of the screen they've used several HTML elements and some CSS animations to explain how to build emails.

Whereas we might have created something like this with Flash not that long ago, we can now do so without relying on plugins and while keeping our sites fast, accessible and responsive.

### Calling attention

We're great at noticing when things change visually. This trait is something we can use to call attention to specific areas. A common use for this could be when some content is updated on the page and we make it flash or change color.

We can take this further and have our sign up button shake a little when the page first loads as if to say "hey, I'm important", or we could have a suggested article fly in from the side of the screen when the visitor reaches the end of the previous one.

Done with care, animation is a very powerful way to draw attention to what we want people to notice.

### Credibility

Something less often considered is the effect good animation can have on a visitor's confidence in our site. If you notice the interactions with your operating system, there's a lot of subtle animation. Things fade in or out, move to and from task bars and convey a polish that helps you understand the computer.

When we design websites we often forget this, and instead create an experience that feel flat. Animation can make your site's interactions feel better.

In a [post on Medium.com][2], Michaël Villar explains how Stripe's checkout process uses animation to help the user both in their interaction with the checkout flow but also to instill confidence.

> "The over-the-top polished feel of this animation adds to the overall user experience, by conveying a level of perfection and attention to detail that you can’t help but trust"

With the right style, animations can make the user feel like they're using a polished, modern UI.

### Branding and fun

When [Yahoo!][3] went through a large rebranding in 2013, they added subtle animations to each of their website logos. Aiming to convey a feeling of fun, they were created both draw attention to the change and get people talking about it.

The site doesn't seem to have them any more, but you can find  examples of the animations over on the [Astronaut Love website][4].

When Stripe uses animation, they do so with a level of polish that people (and developers considering using their service) associate with their name. In both cases, the animation helps draw attention to and bolster their brand.

Animation can also be fun. On [Hop.ie][5], I created a "bouncer" character that would bounce in from the left to act as a logo. While keeping the site's design very simple, this bouncer acts as an anchor that links back to the home page. It doesn't need animation, but I find adding a little lifts the tone. No harm in having a bit of fun.

## Great power, great responsibility

Animation is a powerful tool. Much like how we find it easy to stare into the flickering of a burning fire, we find animation difficult to ignore. Some people even find it impossible to ignore.

When considering how you use animation in your designs, keep in mind that it's a communication tool. It should be used sparingly and never get in the way of the content or interactions.

It's unpleasant to try to listen to multiple people speaking at once, or to try to focus in a loud busy environment. Too much animation creates a visual noise that distracts and makes life harder for your visitors. With that in mind, always try to pare back the use of animation and keep it subtle.

## Why animate now?

There's never been a better time to bring animation into your web design process. Browsers are getting better, devices are becoming more powerful, and we are getting better tools to help create animation.

Using animation takes judgement. If you want to be great at using animation to help your content stand out, improve conversions, or generally improve your brand, it's time to start.

[1]:  http://www.w3.org/TR/WD-CSS2-971104/cover.html "w3 specification for CSS 2"
[2]:  https://medium.com/@michaelvillar/improve-the-payment-experience-with-animations-3d1b0a9b810e "Improve the payment experience with animations"
[3]:  http://yahoo.com "Yahoo"
[4]:  http://astronautlove.tv/yahoo-rebrand-yahoo/ "Examples of the Yahoo! logos being animated"
[5]:  http://hop.ie "Hop.ie"

