---
layout: post
type: tutorial
title: UI Animation in React
bodyClass: shorter
description: See how small UI animations in React can make an app shine
categories: [ui animation]
imageURL: /images/posts/ui-animation-react/home.png
home_image: /images/posts/ui-animation-react/home.png
tweet_text: See how small UI animations in React can make an app shine
---

On this site we've explored loads of big impressive animations. I thought it would be worth stepping back and looking at how small UI animations can add up.

In this post we'll take a look at a demo React app and explore how adding animations to situations when UI changes can result in a more polished experience. We'll try to do so in a way that means reusing animations so that the result is a more consistent style of animation through the app, and we'll take a look at a handy little React package we can use to make animations easier.

## Video version

Note: the code is hard to see in the video, but you'll find all these examples and code below!

<div class="videoWrapper"><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/6lshX4daC_c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## Demo project

Over on Github I've prepared a little React project to get started. If you've ever used `Create React App`, it'll be quite familiar. It's a basic React app with components, around which I've added [styled-components](https://www.styled-components.com) to handle styling.

Styled Components is a handy way of wrapping CSS styling around components in React, allowing us to use Sass-style nesting but also provides us with a way of injecting a "theme" - a set of objects containing settings or snippets of CSS we can apply throughout our apps. We'll use this theme approach to create some simple but useful animations we can apply to projects.

You can [clone the repo](https://github.com/donovanh/react-animation-example) and run `npm install` to set up the necessary bits. Then run `npm start` to run it locally. You'll find it on [`localhost:3000`](http://localhost:3000) in the browser.

If you'd like to see the finished version, check out branch `animated` - otherwise you can follow along.

![Demo app and code](/images/posts/ui-animation-react/code.png)

What we have is a simple Create React App, into which I've added some [styled components](https://www.styled-components.com) goodness. You don't have to stick with Styled Components if you prefer Emotion or something else - got for it. It's just to illustrate the approach.

What we're starting with is a fairly simple little 3 page website with some "products" for sale on it. You can click between the products, you can select product variations, which results in their prices changing. You can even add them to the cart and see the cart button and cart total update.

In the project you'll find a `components` directory. This is where I've set up the components for the app. The include a product page, and smaller things like navigation, images and buttons.

You'll also find a `theme` folder. This is where I've set up some global CSS rules, along with some theme values that are injected into the components thanks to styled components. We'll look at how this can help make our animations reusable.

## Opportunities to animate

When something changes, it's an opportunity to use animation. In this example we have lots of places where the UI changes.

<iframe src="https://giphy.com/embed/J4lwPWbcA71TKvHOBH" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Let's begin with the biggest change - moving between pages.

### Page transitions

<iframe src="https://giphy.com/embed/l0QxLxuzgqiodZdb3i" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

I'm a big fan of keeping things simple. I also love it when I can write something once and use it in many places. Let's do both to make the page transitions better.

In the `theme` folder we'll open the `index.js` file. We already have a bunch of settings here I've thrown in to demonstrate how a theme might look, but it doesn't have any animations yet. Let's change that. Begin by adding an object with a set of CSS keyframes I'll call `show`.

Add to the top of `theme/index.js`:

In theme/index add a set of keyframes:

    const keyframes = {
      show: `@keyframes show {
        to {
          opacity: 1;
          transform: none;
        }
      }`
    }

This is a flexible little animation as it will simply apply an `opacity` of 1 and `transform` "none" to whatever we decide to apply it to.

As we're only using the `to` state in the animation, the starting state will be implied from the styles we give to our component.

This will be useful when we want to fade in the page content as we can set the page content to an `opacity` of 0, then apply the `show` animation.

With the keyframes in place then we set up an animation:

    const animations = {
      show: `
        animation: show 500ms ease-out forwards;
        ${keyframes.show}
      `
    }

Here we're creating an `animations` variable with another object, this time containing the same property name, `show` but the property contains the CSS code that applies the animation, and bundles the keyframes along with it.

Before we can use this we have to add it to the exports at the bottom of the file.

    const theme = {
        animations,
        ...etc...

We can now apply our themed animation `show` to the pages. In `components/ProductPage/index.js` scroll down to the styling on line `44` and add:

    ${props => props.theme.animations.show};

As this is only applying the "to" or finished state of our animation, it won't do much. We need give the page a starting state.

    animation-delay: 200ms;
    opacity: 0;

So the page begins with an `opacity` of 0. We also apply an `animation-delay` to hold back the animation for 200 milliseconds - enough to make it a little more noticeable.

Testing this in the browser we have a simple but pleasant fade effect. Let's reuse the `show` animation once more.

<iframe src="https://giphy.com/embed/m94f44PD3QvRZYiNJt" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

This time in the `.content` part of the styles, add the following:

    .content {
      ${props => props.theme.animations.show};
      animation-delay: 500ms;
      opacity: 0;
      transform: translateY(20px);
      margin: 0 40px;
    }

We are reusing the `show` animation but this time waiting a little longer with a longer delay. Notice also the `transform`. This will be reset by the `show` animation, resulting in an animated slide up the screen as it fades in.

<iframe src="https://giphy.com/embed/Q5u2TIl7ImAXFvsrxH" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Feel free to experiment with other ways this could be used - maybe different timings on headings, paragraph content to create a staggered animation.

## Other UI animations

There are still loads of places where things change in this UI. Let's bring in a handy library called [React Animation](http://github.com/nearform/react-animation/) and see how we can use it's helper components to make our changes animate.

### React Animation

As you can see on [the React Animation demo page](https://nearform.github.io/react-animation/), you get two helpful components to apply animation to UI elements. Let's apply each.

To begin, we install React Animation with `npm install -S react-animation`. We can now use it in our components!

### Animating the price

Let's use the defaults and add a fade animation to the price when it changes. In `components/ProductPage/index.js` we begin by importing the `AnimateOnChange` component (at the top of the file):

    import { AnimateOnChange } from 'react-animation'

Then we wrap the "price" text with this component:

    <AnimateOnChange>{currentPrice}</AnimateOnChange>

<iframe src="https://giphy.com/embed/dBNIuB3rfZWg70b6iC" width="480" height="148" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

By default, the `AnimateOnChange` component will look for any change in the children components and apply a fade-out and fade-in when they change.

We can configure this with some options.

### Add to cart button

When adding an item to the cart, the text changes. Let's have this animate but with some more bounciness this time.

Around line 33 of `components/ProductPage/index.js` we wrap the button's contents:

    <AnimateOnChange animationIn="bounceIn" animationOut="bounceOut">
      {addingToCart ? 'Added to cart' : 'Add to Cart'}
    </AnimateOnChange>

Here we're specifying `animationIn` and `animationOut`. You'll find more examples of built-in animations in the "Animations" section of [the React Animation demo page](https://nearform.github.io/react-animation/).

Checking in the browser, we now have a bounce animation on click.

<iframe src="https://giphy.com/embed/kdiYLxGGXjNExm18iy" width="480" height="365" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### Cart total

Let's add some animation to the badge on the cart icon on the top-right. Currently it'll change each time we press "Add to cart" but there's no animation.

To make it really stand out, we might want to have it animate last. This would draw the eye toward the cart button - something we might want people to notice when shopping.

To do this we can use the `durationOut` prop.

In the `components/CartButton/index.js` file on line 13, replace the `span` with this:

    <AnimateOnChange
      className="cart-button-total"
      animationIn="bounceIn"
      animationOut="bounceOut"
      durationOut={2000}
    >
      {total}
    </AnimateOnChange>

Notice that we're passing in the `className`. This applies the styling I've already set up for `cart-button-total` but it'll also apply the `AnimateOnChange` animation. In this case we're passing in `2000` (milliseconds) as the `durationOut`. This means it should disappear slowly, and animate back in later.

<iframe src="https://giphy.com/embed/cKzkvr0HN6KcKcGHC6" width="480" height="403" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

### HideUntilLoaded

Now that we have the interactions animated, let's look at one more situation. When we change pages, the product images take a moment to load. Since they have a background shadow and background colour, this leaves big empty boxes visible for a moment before the image appears.

<iframe src="https://giphy.com/embed/VeBWcZnzBqOizNKykx" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

Let's fix this using `HideUntilLoaded`.

In the file `components/ImageAndVariations/index.js` we begin by importing the component:

    import { HideUntilLoaded } from 'react-animation'

Then around line 41 we look for the `img` tag, which we'll wrap in the `HideUntilLoaded` component:

    <HideUntilLoaded imageToLoad={image}>
      <img className="image" src={image} alt={title} />
    </HideUntilLoaded>

Now when we change views, any new images will hold back on loading until ready.

<iframe src="https://giphy.com/embed/jnE8jIDzbBtBVARosp" width="480" height="330" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>

You can find more options for `HideUntilLoaded` such as passing in a "Loading" component, using other animations and more on [the React Animation demo page](https://nearform.github.io/react-animation/).

Be sure to check out the other ways the components can be used to bring animations to your UI!

## Level up your CSS animation skills!

If you like this, you'll love my [video course on CSS animation](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK). As a fan of this site you can save over 90% on the course today.

[Save over 90% and Level Up Your CSS Animation Skills](https://www.udemy.com/level-up-your-css-animation-skills/?couponCode=SITELINK) today!
