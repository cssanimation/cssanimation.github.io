---
layout: post.njk
title: Transitions vs Animations
description: Описание различий между переходами и анимацией в веб-анимации.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS:
  [
    vendor/moment.min.js,
    vendor/moment-timezone.min.js,
    vendor/moment-timezone-with-data-2010-2020.min.js,
    custom/list_items.js,
    custom/clocks.js,
  ]
imageURL: /images/posts/transitions-animations/transitions-animations.gif
home_image: /images/posts/transitions-animations/transitions-animations.png
tweet_text: Когда следует использовать&nbsp;transition (переходы), а когда&nbsp;animation (анимацию)?
custom_header: posts/transitions-animations.html
translators:
  - name: Panda
    url: https://cssanimation.rocks
  - name: Paul Trinko
    url: https://cssanimation.rocks
---

При анимации в сети, ты используешь&nbsp;transition (переходы)&nbsp;или&nbsp;animation (анимации)? Бывают случаи, когда ты предпочитаешь выбрать один вместо другого. Давай поговорим о различиях.

## Что такое Transitions?

Переход возникает, когда элемент переходит от одного состояния к другому, и браузер выполняет в этом&nbsp;состоянии&nbsp;изменения с последовательностью в заданных промежутках между кадрами. Есть начальное и конечное состояние.

В большинстве случаев мы видим состояния переходов, которые используются при наведении курсора мыши или когда информацию на страницу добавляем/удаляем. С помощью&nbsp;hover могут быть мелкие изменения в цвете шрифта, а информация на странице может то постепенно исчезать, то появляться.

Поскольку переходы ограничиваются этими двумя этапами, то они нуждаются в некоторых нюансах анимации и вместе с тем их проще использовать.

### Когда использовать

Если ты хочешь изменить элемент плавно с одного состояния в другой, лучше использовать transition. Как правило небольшие изменения могут быть обработаны с помощью transitions (переходов) и временных функций, а также использованы для настройки способа самого перехода.

Переход будет работать хорошо, когда кто-то навет мышку/нажмет на кнопку:

<section class="shiny demo-container tap-to-activate"><button>Shiny effect</button></section>

Или при добавлении&nbsp;элемента на страницу:

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">A list item</li><li class="show" style="background-color: #3cd19e;">A list item</li>
</ul>
<button>Add a list item</button></section>

## Что такое&nbsp;Animations?

В&nbsp;CSS анимации являются более мощными альтернативами по сравнению с transitions (переходами). Вместо того, чтобы полагаться на переход от одного начального состояния к конечному,&nbsp;анимации могут переходить промежуточными этапами, на столько на сколько хочется, и дает больше контроля над порядком изменения состояния анимации.

Если transition устанавливает переход&nbsp;&nbsp;только от А до&nbsp;B,&nbsp;то animation может и A, и B, и C и даже D. Или любое другое количество этапов&nbsp;по мере необходимости.&nbsp;

Animations добивается этого с помощью набора ключевых кадров (keyframes). Если переход может быть определен одной строкой в классе, то анимация работает посредством ссылки на набор ключевых кадров(@keyframes), которые описаны отдельно в CSS.

### Когда использовать

Если необходимо чтобы анимация выполнялась при загрузке страницы или нужна более сложная, чем от А состояния к B&nbsp;состоянию, то в таком случае более&nbsp;подходящим является CSS анимация.

Например: нужна анимация на странице, которая начинает работать по прошествии определенного периода времени, как этот&nbsp;эффект&nbsp;мигания персонажа Baymax:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Кроме того анимация может быть лучшим выбором в случае, если элемент должен двигаться по нескольким местам на странице. Например таких как: инструкция наложения с курсором из различных областей на экране.

## Иногда это не очевидно

В недавним посте начал с анимации, но затем стал использовать transitions.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Когда я начала разрабатывать эти часы,&nbsp;стрелки&nbsp;у меня должны были беспрерывно двигаться начиная с загрузки. Это был наглядный пример для использования свойства&nbsp;animation. Анимация начиналась после загрузки и должна была продолжаться бесконечно.&nbsp; Когда я начал усложнять, то я обнаружил, что&nbsp;имеет смысл сделать с помощью JavaScript.

По мере использования JavaScript, становилось понятно что&nbsp;с выбором&nbsp;ошибся и&nbsp;transitions лучше подходит. Когда&nbsp;JavaScript изменяет положение стрелки,&nbsp;CSS transition&nbsp;обрабатывает изменение (из состояния А в состояние В) более элегантно, чем при помощи анимации.

Чтобы получить больше информации кликни по уроку&nbsp;[CSS часы](/clocks/).

## Заключение

Transition для создания плавного перехода от одного состояния к другому, а&nbsp;animation для&nbsp;более сложной последовательности серии передвижений.

Как правило,&nbsp;transition легче создавать и управлять им, а также использовать у большинства случаев. Если нужно больше контроля над анимированным элементом через серию шагов (этапов) или если при анимации необходимо начать после загрузки, то анимация с ключевыми кадрами(@keyframes) вполне более предпочтительна.
