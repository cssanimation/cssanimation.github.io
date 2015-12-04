---
layout: post
title: Thinking with CSS
description: How to start using CSS for animation on the web
categories: [animation, beginners, how-to]
imageURL: /images/posts/thinking/thinking.png
home_image: /images/posts/thinking/thinking.png
tweet_text: Thinking with CSS: How to start using CSS for animation
custom_header: posts/thinking.html
published: false
---



“Element A is X pixels wide, with a red border” as opposed to “move this thing from a to b”.

Still, there are two ways CSS allows us to animate. JavaScript is great but I tend to try to use CSS when possible before reaching for the JS for more advanced stuff.

1) Transitions

CSS has some state changes built-in, in the form of pseudo-class selectors. “Hover”, “focus”, “empty”, even “nth-child” are all states that involve change. Someone hovers over an element, tabs to it, deletes something from it or a list item becomes the first on a list. When this happens, we can add styles to this version of the element.

When this happens, the change on hover or when the element is emptied is sudden. To bring animation in, we add a “transition” property to the element. This transition tells it how to animate from the normal state to hover, etc.

2) Animations

Animations don’t rely on a change of state, they can run straight away and we can control them in greater detail.



