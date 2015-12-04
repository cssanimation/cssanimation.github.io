---
layout: post
title: "[译文]过渡效果 vs 动效"
description: A description of the differences between transitions and animations in web animation.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js, custom/list_items.js, custom/clocks.js]
imageURL: /images/posts/transitions-animations/transitions-animations.gif
home_image: /images/posts/transitions-animations/transitions-animations.png
tweet_text: "[译文]过渡效果 vs 动效"
custom_header: posts/transitions-animations.html
published: true
translator: Ethon Lau
translator_link: https://twitter.com/ethonlau
english_version: /transition-vs-animation/
---

当你在网页上做动画时，你会选用过渡效果还是动态效果？这是你作出选择的时候了，现在让我们来探讨一下它们的不同之处。

## 什么是过渡效果？

当一个控件从一个状态过渡到另一个状态时，浏览器会在状态改变的过程中填充一连串的过渡帧。这时候控件会有一个初始状态和一个结束状态。

我们最常见的过渡效果是在鼠标悬停时和页面信息展现或移出时的状态。悬停可能会在字体颜色上做一些细微的变化，而页面信息可能会从不可见渐现至可见。

过渡效果被限制在始末两个状态，这决定了它们会缺少动效那样的细节处理，但同时它实现起来也更容易。

## 什么时候使用过渡效果？

如果你想将控件从一个状态平滑地过渡到另一个状态，过渡效果是一个不错的选择。很简单的改变通常就能控制好过渡效果，时间控制器也能被用来自定义过渡效果。当访客悬停在按钮上或进行点击时，过渡效果就很好：

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

或者在页面中添加条目的时候

<section class="add-to-list swing demo-container">
  <ul>
    <li class="show" style="background-color: #d13c9e;">A list item</li>
    <li class="show" style="background-color: #3cd19e;">A list item</li>
  </ul>
  <button>Add a list item</button>
</section>

## 什么是动效

CSS 动效是一种能够代替过渡效果的更强大的工具。只要你喜欢，动效可以让你添加很多中间状态，并提供了更高的控制程度，而不必依赖于始末两个状态。

过渡效果只能从 A 到 B，但动效能从 A 到 B 到 C 再到 D，甚至是任意数量的状态。

动效是通过对 `keyframes`（关键帧）的使用设置实现的。过渡效果能在一个类中的一行被指定，而动效能在 CSS 里单独用一系列关键帧被指定。


## 什么时候使用动效？

如果动效需要在页面加载的时候运行，或者它比一个简单的从 A 到 B 状态的变换要更复杂，那么用 CSS 动效可能会更适合。

这方面的例子比如你希望动效在一段时间之后播放，就像这个 Baymax 眨眼的效果：

<section class="demo-container baymax-container">
  <a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a>
</section>

如果一个条目需要在页面中移经很多地方，动效可能也是一个不错的选择，比如鼠标悬停在屏幕中各种感兴趣的区域时，会有操作指引覆盖出现在上面。

## 但有时不是那么明显就能判断

我最近做的一个东西起初用了动效，但后来又用回了过渡效果：


<div class="demo-container clocks single local bounce">
  <article class="clock station">
    <div class="hours-container">
      <div class="hours angled"></div>
    </div>
    <div class="minutes-container">
      <div class="minutes angled"></div>
    </div>
    <div class="seconds-container">
      <div class="seconds"></div>
    </div>
  </article>
</div>

当我在开始设计这个钟的时候，我让指针通过加载来不断移动。这是一个用 `animation` （动效）的好案例，它通过加载会不断运动并永远运行下去。但我开始添加更复杂的效果时，我发现用 JavaScript 来设置指针的角度会更有意义。

指针的运动用 JavaScript 写 `transitions`（过渡效果）是一个更好的选择。当用 JavaScript 改变指针角度，CSS 过渡效果就比动效能更完美地控制其中的变化（从状态 A 到状态 B）。

[点击这里](https://cssanimation.rocks/clocks/) 可以看到更多代码细节。

##总结

过渡效果可以从一个状态平滑地过渡到另一个状态，而动效可以做一系列更复杂的运动。

过渡效果一般更易被创建和管理，并适用于大部分情况。如果你需要对一个元素有更高的控制程度，那就可以做一系列的动效步骤；或者当需要在开始加载时就出现动效，用关键帧完成动效会是更好的选择。
