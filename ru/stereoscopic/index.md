---
layout: post
title: Стереоскопический CSS
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/stereoscopic/
description: Сведи глаза, чтобы увидеть 3D-эффект, созданный с помощью CSSСведи глаза, чтобы увидеть 3D-эффект, созданный с помощью CSS
categories: [3d, css]
imageURL: /images/posts/stereoscopic/home.png
home_image: /images/posts/stereoscopic/home.jpg
tweet_text: Cross your eyes to see a 3D effect created using CSS
translator: Veronika Drozdova
---

Какое-то время я писал в блоге о создании всевозможных эффектов в стиле 3D с использованием CSS. В этом посте я добавлю еще один шаг и постараюсь сделать сцены **еще более трехмерными**.

Смотрите [демо стереоскопического куба](https://cssanimation.rocks/demo/stereoscopic)

## Стереоскопы

Есть много методов, используемых, чтобы попытаться передать трехмерное изображение с экрана. Одним из самых старых является использование пленки красного и зеленого (или синего) цвета, которая при просмотре через красные / зеленые очки создает 3D-эффект.

![Old-style 3D effect](/images/posts/stereoscopic/old-movie.jpg)

[Simurai[ вложил в это некоторую работу и создал хороший плагин [CSS3D](http://simurai.com/post/802968365/css3d-css3-3d-text) для достижения этой цели.

Недостатком этого является то, что пленка может быть только монохромной, поскольку цвета ограничены использованием для создания 3D-эффекта.

### Параллельная стереоскопия

Второй подход к представлению 3D заключается в использовании умения некоторых из нас смотреть сведя наши глаза. Идея состоит в том, чтобы представить две сцены рядом, каждая из которых представлена ​​под немного другим углом. Если зритель может свести глаза, два изображения объединяются, чтобы создать трехмерный эффект.

![How two images combine to form a 3D version](/images/posts/stereoscopic/example.png)

Хотя это может работать не для всех, но замечательно, когда работает и не ограничивает количество цветов, которые может включать сцена. Некоторые [фотографии хорошо показывают](http://www.flickr.com/photos/ytf/5557882900/) этот эффект.

Чтобы попробовать, попытайтесь посмотреть на следующее изображение примерно в двух футах от монитора. Аккуратно сведите глаза, пока два изображения не сольются воедино, и если вы правильно их выровняете, это должно выглядеть как 3D.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

Этот метод парного изображения наиболее заметно используется в новых [очках виртуальной реальности Oculus Rift](http://www.oculusvr.com/). Несмотря на то, что у меня нет того, с чем это можно проверить, я считаю, что можно отображать HTML-страницы внутри очков, поэтому некоторая форма этого метода может быть полезна там.

## Предупреждение

Просто предупреждаю, но если вы собираетесь тратить много времени, глядя на экран, сведя глаза, у вас могут возникнуть головные боли. Я знаю, что сделал. Впрочем, оно того стоит!

## Установить сцену

Для начала мы создадим простую 3D-сцену с использованием некоторого HTML.

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

У нас здесь есть `div`, содержащий stage, который будет выступать в качестве сцены, на которой будет находиться куб, а внутри - сама фигура куба. Куб состоит из 6 частей.

Div &quot;stage&quot; необходим для того, чтобы браузер мог установить некоторые важные 3D-настройки, такие как глубина сцены и угол, под которым мы смотрим на сцену. Эти вещи мы устанавливаем с помощью CSS.

    .stage {
      width: 480px;
      height: 500px;
      margin: 10px auto;
      position: relative;
      perspective: 1600px;
    }

Этот CSS настраивает сцену с некоторыми пропорциями и устанавливает значение `perspective`. Перспектива описывает глубину сцены с меньшими значениями, производящими более неожиданные результаты. В этом случае 1600 пикселей выглядят довольно хорошо, но вы можете попробовать разные значения в вашей собственной сцене, чтобы увидеть, как это выглядит.

## Строим куб

Сам куб состоит из шести элементов. Используя свойство `transform` CSS3, мы можем манипулировать этими интервалами в трехмерном пространстве и размещать их там, где нам нравится. Во-первых, мы должны сказать браузеру, что наше намерение состоит в том, чтобы перемещать вещи в 3D. Некоторый CSS достигает этого.

    .cube {
      transform-style: preserve-3d;
      transform-origin: 100px 50%;
      position: absolute;
      top: 120px;
      left: 140px;
    }

Основные части, на которые следует обратить внимание, это свойства `transform-style` и `transform-origin`. Они сообщают браузеру, что этот и любые дочерние элементы будут способны трансформироваться в контексте `figure` &laquo;stage&raquo;, а также описывать точку, вокруг которой может произойти любое вращение, масштабирование или наклон.

Далее нам нужно указать размеры граней куба, а затем сопоставить их с помощью свойства `transform`.

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

Чтобы сделать вещи более читабельными, я удалил различные префиксы &quot;-webkit&quot; и &quot;-moz&quot; из свойств `tranform`.

Этот CSS описывает общие правила для промежутков, например, они имеют ширину 200 пикселей и имеют белый текст. Следующие правила вращают и позиционируют каждую из граней, используя вращение и перемещение. Каждая грань также имеет цвет фона.

## Делая это стереоскопическим

Теперь, когда у нас есть сцена с трехмерным объектом, мы можем удвоить ее и сделать ее стереоскопической. Начните с дублирования HTML в div `left` и `right`.

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

Намерение здесь состоит в том, чтобы разделить экран на две части и поместить один куб рядом с другим. Мы снова используем ту магию, которую мы называем CSS, для достижения цели.

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

Наш пример не должен быть полноэкранным, поэтому я решил установить его в столбце контейнера. Каждый из двух элементов div имеет ширину 50% и перемещается влево и вправо соответственно.

Теперь у нас есть два одинаковых 3D-объекта. Этого будет недостаточно, нам нужно будет отрегулировать для разных углов, в которых нуждается каждый глаз. Для этого мы будем переопределять в каждом `stage` свойство perspective-origin.

.left .stage {
perspective-origin: 63.5% -340px;
}

    .right .stage {
      perspective-origin: 36.5% -340px;
    }

Левая часть имеет перспективу приблизительно на две трети вдоль оси X, чтобы имитировать то, что ожидает ваш правый глаз, а правая часть получает значение около одной трети. Я настроил их вручную, поэтому, возможно, их придется немного настроить для работы с вашим проектом.

Конечным результатом должны быть две почти идентичные 3D CSS сцены с немного разными перспективами.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

Вы можете посмотреть [анимационную стереоскопическую версию здесь](https://cssanimation.rocks/demo/stereoscopic).