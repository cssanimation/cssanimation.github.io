---
layout: post.njk
bodyClass: shorter
title: 伪元素(pseudo-elements)动画
description: 伪元素提供给你两个额外的 HTML 元素!这里如何来处理悬停动画，聪明的使用它们!
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: 用 CSS 闪亮按钮
translator: Rrylee
---

伪元素就像额外的免费&nbsp;DOM 元素。 它们允许我们添加额外的内容、 修饰和等等到我们的页面而不添加额外的 html 代码，当然他们也可以进行动画处理。 在这篇文章中，我们将使用一个伪元素要为按钮添加一个小的视觉风格。

<section class="shiny demo-container tap-to-activate"><button>Shiny effect</button></section>

## 伪元素

CSS 中，我们可以使用`::before` 或 `::after` 来指定伪元素。 伪元素就插入到你的元素之中，或元素之间和任何内容。 既然它充当它自己的元素，那么可以来定义风格，定位和更多。 代码如下：

```css
.pebble::before {
  ...
}
.pebble::after {
  ...
}
```

在这个例子中，我们的`.pebble` 元素有两个伪元素附加，我们可以按需改变样式。

### 注意&quot;::&quot;与&quot;:&quot;

普遍认为我们使用双冒号:: 来表示伪元素 (而不是像伪类: hover，:first-child)。 如果您要添加 IE8 的支持，最好使用`:`&nbsp;来代替。 其他所有的浏览器和较新版本的 IE 支持双冒号。

### 别忘了&quot;content&quot;

当添加伪元素，要时刻牢记的一件事是需要指定 `content` 这个属性在你让它们在页面显示之前。 伪元素适用于创建内容较少的情况，我们可以使用技巧让 `content` 为空:

```css
.pebble::before {
  content: ""
  ... more styling goes here...
}
```

这就确保该元素是在页面可见。

## 例子：Shiny button

本例中我们将使用一个伪元素创建悬停在按钮上的光泽效果。 这里是一个实际例子 (悬停或点击以查看效果)。

<section class="shiny demo-container tap-to-activate"><button>Shiny effect</button></section>

开始，一些 HTML:

```html
<button>Oooh SHINY</button>
```

由于我们使用伪元素，我们不需要任何更多的 HTML。 你可能想要为按钮添加一个 class，如果添加在完整的网页中，但现在为简单起见，我们将使用泛型元素。

### 添加光泽效果

闪亮光泽效果是穿越按钮的线性渐变。 若要创建这我们会使用后的伪元素，并将其定位在外面的按钮开始位置:

```css
button::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-5em, 7.5em);
}
```

光泽效果是由一个来自按钮的先为白色，然后再返回的渐变颜色组成。 在这一点上它现在处在外按钮。

我们需要隐藏光泽层，使它仅悬停时显示。 为此我们将该按钮的 `overflow` 将属性设置为 `hidden`。 由于伪元素是在按钮内，这就意味着它定位外按钮不可见。

```
button {
  background: #e5ac8e;
  color: #fff;
  font-size: 14px;
  border-radius: 0.5em;
  padding: 0 1em;
  position: relative;
  overflow: hidden;
  line-height: 32px;
}
```

我把放在一些其他的风格，也让按钮像按钮。 一件事要指出，是使用&nbsp;`position: relative`。 所以，绝对定位的伪元素会存在在按钮内，我已经添加此属性。 如果不指定位置，绝对定位的项目将在父元素中的位置。

## 添加动画

接下来我们会在此示例中使用的这个动画，有两个步骤。 第一个是告诉浏览器悬停时使用动画。 接着我们开始看看到底使用什么 `keyframes` 动画。

添加悬停状态可以通过在&nbsp;`after` 后使用&nbsp;`hover` 就像这样:

```css
button:hover::after, button:focus::after {
  animation: sheen 1s forwards;
}
```

在这里我们告诉浏览器比悬停时, `after` 伪元素是有一个 `animation`。 动画，名为 sheen，持续一秒，停止在结束不重复。

命令事项。 使用&nbsp;`::after:hover`&nbsp;悬停不会工作，它会告诉浏览器对伪元素本身的悬停状态作出反应。

我也已经添加的焦点状态。 这意味着&nbsp;tabbing through the page 的浏览者将看到，以及光泽效果，而无需将鼠标指针悬停。 (谢谢你的点子&nbsp;&nbsp;&Scaron;ime Vidas)

让我们为动画指定指定 `keyframes`:

```css
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}
```

该例子中我们只需要一个 keyframe。 因为起始位置 (0%) 隐含的伪元素的起始位置，我们只能描述的结束位置。 在这种情况下结束位置是横跨按钮的右上角。 浏览器然后将为我们动画跨光泽效果。

<section class="shiny demo-container tap-to-activate"><button>Shiny effect</button></section>

## 浏览器注意事项

动画属性被很好的支持，正如伪元素。 它是总是好的请确保为&nbsp;`keyframes`&nbsp;和任何 transform 添加&nbsp;-`webkit` 和&nbsp;`moz` 前缀。
