---
layout: post
bodyClass: shorter
title: Анимация &quot;лайка&quot; в Twitter
description: Узнайте как работает &quot;лайк&quot; в Twitter   используя CSS steps() (временную ступенчатую функцию).
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-01-17-twitter-fave.md
home_image: /images/posts/steps/home.png
translator: Panda
---

Twitter недавно обновил дизайн их &quot;fave&quot; (так же знаем под &quot;fav&quot;) кнопки, включая новую анимацию. В CSS вместо переходов предпочли анимацию с серией картинок. Из серии картинок воссоздается steps (ступенчатая временная функция).

## Иллюзия движения

Эффект имитируется как на старых устройствах [Zoetrope](http://en.wikipedia.org/wiki/Zoetrope), в котором нарисована серия иллюстраций вокруг цилиндра. Вместо цилиндра мы выводим ряд изображений внутри элемента.

## Демо

Наведете курсор мыши на звезду, чтобы увидеть анимацию

<section class="fave demo-container tap-to-activate"></section>

В данном примере начнем с создания серии изображений, которые составят анимацию. В этом случае мы используем лишь часть из серии картинок для анимации.

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

Для того, чтобы оживить эти кадры, нам нужно разместить их в одну линию. [В этом файле[ они стоят в один ряд, а это означает, что мы можем перейти от первого кадра до последнего путем позиционирования фона:

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Steps() (пошаговая временная функция)

Большинство временных функций, таких как ease или cubic-bezier, делает переход анимации плавно между начальным и конечным состояниями. В `steps`совсем другая. Вместо плавного перехода, она делит переход на несколько кадров (столько сколько задано), и резко перемещается между ними.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

Для начала составим HTML:

    <section class="fave"></section>

### Фоновое изображение

Добавляем немного стилей и позиционирования фоновому изображению:

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)

    .fave {
      width: 70px;
      height: 50px;
      background: url(images/twitter_fave.png) no-repeat;
      background-position: 0 0;
    }

При `hover` анимация добавляется и за определенное количество кадров фоновая позиция переместится в конец серии изображений:

    .fave:hover {
      background-position: -3519px 0;
      transition: background 1s steps(55);
    }

Обратите внимание на второе правило. Оно задано `transition` (переходом). В этом случае мы хотим сделать перемещение через свойство фона и запуская переход продолжительностью в две секунды. `steps` имеет значение `55`. Это означает, что есть 55 кадров анимации.

Эффект заключается в том, что при наведении мыши на элемент он &quot;прыгает&quot; через переход в 55 ровных кадров.

### Почему не gif?

Анимационные картинки потенциально могут быть использованы, но в данном случае это не подходит. Как правило, размер файла хуже и скорость передачи кадров сложно контролировать. С этим методом мы можем поставить на паузу, сделать перемотку назад или сделать все виды других корректировок анимации с помощью CSS.

## Другие виды использования &quot;steps()&quot;

Анимационный фон спрайтов - это лишь один из способов использования `steps` (ступенчатой временной функции). Все что требует анимации из серии отдельных кадров, хорошо подходит для этого. Например, вы можете использовать это для создания тикающих часов.

## Памятка

Если вам понравился этот урок, то можете поделиться в [твиттере ](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks)или сохранить это краткое описание:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
