---
layout: post
type: tutorial
title: Mac Plus CSS
description: Создание 3D модели классического Mac Plus с CSS
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: Воссоздать классический Apple Mac Plus
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Veronika Drozdova
---

Я всегда буду помнить момент, когда я начал использовать&nbsp;Apple Mac Plus. В этом посте я постараюсь отдать должное этому прекрасному компьютеру, создав его в CSS.

## Ретро стиль

Давайте соберем (виртуально) компьютер. Не просто старый компьютер, а компьютер, который для многих из нас был введением в мир Apple. Macintosh Plus под кодовым названием Mr. T был впервые представлен в 1986 году и содержал 1 МБ оперативной памяти и 8 МГц процессор. Помимо всей этой необработанной мощи, это был действительно симпатичный дизайн, который делал использование компьютера более увлекательным.

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

В этом проекте я построю 3D-модель Macintosh Plus и покажу ее в трехмерном режиме. Используя анимацию CSS Keyframe, мы будем перемещать ее по экрану, чтобы лучше показать 3D-эффект.

## Зачем использовать CSS?

Каскадные таблицы стилей являются стандартным способом оформления содержимого веб-страницы. Все от шрифтов, цветов, позиционирования и фоновых изображений, обрабатывается CSS, и это важный инструмент для создания современных веб-страниц. Это не только для двумерного контента. Используя 3D-преобразования и позиционирование, вы также можете использовать CSS, чтобы добавить глубину.

Создание сцен в CSS приводит к меньшему размеру файла, по сравнению с изображениями. В этом примере CSS сжимается до 4 КБ, а HTML - менее 1 КБ. Эквивалентное изображение будет 100 КБ или более.

## Живая демоверсия и исходный код

Смотри&nbsp;[CSS Mac Plus online](https://cssanimation.rocks/mac/).

Весь исходный код [можно скачать здесь](https://github.com/donovanh/mac/archive/master.zip), и&nbsp;Вы можете просмотреть весь [файл CSS на Github](https://github.com/donovanh/mac/blob/master/stylesheets/screen.css).

Вы также можете следить за различными этапами, просматривая папку&nbsp;`examples` в [файлах проекта](https://github.com/donovanh/mac/archive/master.zip).

## На префиксы

Я исключил любые префиксы CSS из примеров кода, чтобы сделать код более легким для чтения. Работая над этим, убедитесь, что вы включили префиксы для других браузеров, таких как `webkit`, `moz`, `ms` и `o`.

## Создание условий

При создании 3D с использованием HTML нам нужна площадка, на которой он будет собран. Начнем с&nbsp;контейнера&nbsp;элемента HTML:

    <div class="stage"></div>

Это простой div с классом stage, и он ведет себя как контейнер для нашего 3D-объекта.

Чтобы установить его как 3D-контейнер, мы устанавливаем некоторые свойства CSS, `perspective`и&nbsp;`perspective-origin`. Свойство&nbsp;perspective&nbsp;похоже на точку схода площадки. Чем меньше значение, тем короче точка схождения и более глубокий эффект. Это изображение показывает, как изменение значения меняет форму на площадке:

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### Попробуй сам

Если вы хотите попробовать, найдите файл `screen.css` в папке `examples / 01-Perspective` в файлах проекта. Вы сможете обновить значение перспективы и увидеть эффект, открыв файл `index.html` из той же папки в вашем браузере.

Свойство&nbsp;`perspective-origin`&nbsp;устанавливает позицию просмотра. Изменяя его, вы можете смотреть на площадку сверху, снизу или сбоку.

В этом примере я выбрал перспективное значение 1,600 пикселей. CSS выглядит так:

    .stage {
      perspective: 1600px;
      perspective-origin: 50% 100px;
    }

Папка&nbsp;`stylesheets` в ZIP-файле проекта содержит полные правила CSS для установки различных других свойств на площадке, включая фон, ширину и высоту.

## Планирование структуры

С установленной площадкой мы будем использовать некоторые элементы HTML для создания компьютера. Вместо того, чтобы пытаться включать все до мельчайших деталей, мы сосредоточимся на передней детали по большей части.

Основным корпусом Mac является коробка, слегка наклоненная назад под углом и сидящая на плоском основании.

Это будет означать создание двух коробок, одна откинутая назад и сидящая на более плоской коробке. Чтобы создать этот эффект, мы будем использовать свойство CSS `transform`.

Если вы хотите увидеть полный HTML-код, его можно найти внутри проекта в файле `index.html`.

## Преобразования

Свойство CSS `transform` позволяет нам вращать, наклонять, позиционировать и даже масштабировать элементы на странице. Мы можем использовать позиционирование и вращение для создания нашей площадки.

Свойство `transform` может выглядеть так:

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

Вы строите преобразование, связывая последовательность операторов. В этом примере элемент примера поворачивается на 45 градусов вокруг оси Y, а затем отталкивается назад на 100 пикселей вдоль оси Z.

Это должно выглядеть примерно так:

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

Пример CSS-преобразований можно найти в папке `examples/02-Transforms` среди файлов проекта. В примере расположены два элемента, и их положение можно изменить, отредактировав включенный файл `02-Transforms/css/screen.css.`

### Transform-origin

При вращении элементов вокруг точки на поверхности, следует иметь в виду, что преобразования имеют начало, которое можно установить. Начало преобразования - это точка, на которую указывают значения X, Y и Z. По умолчанию:

    .default-origin {
      transform-origin: 50% 50% 0;
    }

При создании этого примера я сохранил значение по умолчанию, но стоит знать, что оно там есть.

## Делаем коробки

Мы можем использовать некоторые преобразования, чтобы установить основную часть компьютера. HTML выглядит так:

    <div class="stage">
      <div class="positioning animated">
        <div class="mac">
          <figure class="back"></figure>
          <figure class="left"></figure>
          <figure class="right"></figure>
          <figure class="top"></figure>
          <figure class="base-front"></figure>
          <figure class="base-left"></figure>
          <figure class="base-right"></figure>
          <figure class="base-back"></figure>
          <figure class="front"></figure>
          <figure class="shadow"></figure>
        </div>
      </div>
    </div>

На этом этапе, есть `div`, который я буду использовать для размещения компьютера на странице. Внутри его находится сам Mac. Обе коробки сами состоят из элементов `figure`. Эти элементы представляют стороны, верхнюю, переднюю и заднюю часть двух коробок.

Есть также элемент `figure` для представления тени.

Этот пример можно найти в папке `examples/03-Boxes`.

Результат, к которому мы будем стремиться, выглядит следующим образом:

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

Каждая из коробок преобразуется в площадку с помощью свойства CSS `transform`, а свойство CSS `gradients`&nbsp;используются для добавления глубины площадке.

CSS выглядит так:

    .front {
      height: 11.5em;
      width: 9.6em;
      background: #e0e0e0;
      transform: rotateX(5deg) translateZ(5.43em);
    }
    .back {
      height: 11.5em;
      width: 9.6em;
      background: linear-gradient(top, #f2f2f2, #e6e6e6 0.25em, #c2c2c2);
      transform: rotateX(5deg) translateZ(-5.45em) rotateY(180deg);
    }
    .top {
      height: 10.95em;
      width: 9.6em;
      background-color: #ebf0dc;
      background: linear-gradient(left, #fafafa, #d9d9d9 0.25em, #d9d9d9 9.35em, #fafafa);
      transform: rotateX(5deg) rotateX(90deg) translateZ(5.45em);
    }
    .left {
      height: 11.5em;
      width: 10.9em;
      background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
      transform: rotateX(5deg) rotateY(-90deg) translateZ(5.45em);
    }
    .right {
      height: 11.5em;
      width: 10.9em;
      background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
      transform: rotateX(5deg) rotateY(90deg) translateZ(4.14em);
    }
    .base-front {
      height: 2.1em;
      width: 9.6em;
      background: #c2c2c2;
      transform: translateY(10.7em) translateZ(5em);
    }
    .base-back {
      height: 2.1em;
      width: 9.6em;
      background: #b3b3b3;
      transform: translateY(10.7em) translateZ(-5em) rotateY(180deg);
    }
    .base-left {
      height: 2.1em;
      width: 10em;
      background: #b3b3b3;
      transform: translateY(10.7em) rotateY(-90deg) translateZ(4.99em);
    }
    .base-right {
      height: 2.1em;
      width: 10em;
      background: #b3b3b3;
      transform: translateY(10.7em) rotateY(90deg) translateZ(4.58em);
    }
    .shadow {
      width: 10em;
      height: 11em;
      background: transparent;
      transform: rotateX(90deg) translateZ(-7.4em) translateX(20em);
      box-shadow: -20.2em 0 1.8em rgba(100, 90, 100, 0.4);
    }

Каждой из фигур были заданы ширина и высота, а также CSS-фоновый градиент или цвет. Затем каждый из рисунков позиционируется с использованием свойства **transform**. Например, левая сторона поворачивается на 90 градусов, а затем переводится (перемещается) назад на половину ширины компьютера.

Передняя фигура переводится вперед, вдоль оси Z, на половину длины компьютера, а задняя часть поворачивается на 180 градусов, а затем переводится назад.

Для частей верхней коробки каждая из фигур поворачивается на 5 градусов назад вокруг оси X. Это означает, что основная часть Macintosh Plus откинута назад.

Наконец, теневой элемент&nbsp;`figure`&nbsp;использует свойство CSS `box-shadow`, чтобы создать тень, которая будет выглядеть так, как будто коробка находится на плоской поверхности.

## Рамки

Особенностью этого компьютера являются наклонные края вокруг передней части. Эти края, которые я буду называть рамками, помогают смягчить жесткие углы коробки и сделать ее менее квадратной.

Чтобы добиться этого, я добавил несколько дополнительных элементов к передней фигуре, например:

    <figure class="front">
      <span class="bezel-top"></span>
      <span class="bezel-left"></span>
      <span class="bezel-right"></span>
      <span class="bezel-bottom"></span>
    </figure>

Каждый из&nbsp; `span` -&nbsp;элементов&nbsp;на передней фигуре представляет одну из этих рамок. С некоторыми добавленными стилями они будут выглядеть так:

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

Этот пример можно найти в папке `examples/04-Bezels`.

Следующий CSS-код позиционирует каждый из них и использует трюк с шириной границы для создания наклонных ребер.

    .front .bezel-top {
      border-top: 0.75em solid #f2f2f2;
      border-right: 0.5em solid transparent;
      border-left: 0.5em solid transparent;
      width: 8.6em;
    }
    .front .bezel-left {
      border-top: 0.5em solid #d9d9d9;
      border-right: 0.75em solid transparent;
      border-left: 0.75em solid transparent;
      width: 10em;
      transform: rotateZ(-90deg) translateX(-5.5em) translateY(-5.5em);
    }
    .front .bezel-right {
      border-top: 0.5em solid #d4d4d4;
      border-right: 0.75em solid transparent;
      border-left: 0.75em solid transparent;
      width: 10em;
      transform: rotateZ(90deg) translateX(5.5em) translateY(-3.62em);
    }
    .front .bezel-bottom {
      border-top: 0.75em solid #cccccc;
      border-right: 0.5em solid transparent;
      border-left: 0.5em solid transparent;
      width: 8.65em;
      transform: rotateZ(180deg) translateY(-10.76em);
    }

Каждая грань имеет 3 границы. Для верхней панели мы устанавливаем цветную границу сверху. Затем мы устанавливаем две _прозрачные_ границы слева и справа. В CSS, когда граница встречает границу другого цвета, линия, где они встречаются, является диагональной. Это означает, что прозрачные границы приводят к диагональным краям цветной границы.

Эта техника применяется к каждой из рамок, создавая видимость наклонных краев на каждой.

Рамки также имеют преобразование, применяемое для поворота и позиционирования их на стороне передней фигуры.

## Подробнее

Установив основные блоки компьютера, мы можем добавить различные детали, которые делают его похожим на Macintosh Plus, такие как экран, значок и дисковод.

На лицевой фигуре содержится следующий HTML:

    <figure class="front">
      <span class="bezel-top"></span>
      <span class="bezel-left"></span>
      <span class="bezel-right"></span>
      <span class="bezel-bottom"></span>
      <figure class="screen-container">
        <span class="screen">
          <p>hello, Dave</p>
          <span class="sheen"></span>
        </span>
      </figure>
      <figure class="logo">
        <span class="image"></span>
        <span class="text">Macintosh Plus</span>
      </figure>
      <figure class="floppy"></figure>
    </figure>

Рабочий пример можно найти в папке `examples/05-Completed`.

### Экран

Экран состоит из нескольких элементов, включая контейнер, сам экран и &laquo;блестящий&raquo;&nbsp;слой&nbsp;сверху.

В CSS для этого используются CSS свойство&nbsp;`gradients`, чтобы он выглядел врезанным в лицевую сторону компьютера, а свойство `span` использует почти прозрачный градиент, чтобы придать экрану некоторый блеск.

### Логотип

Логотип состоит из двух частей, изображения и текста. `Область` изображения содержит фоновое изображение старого красочного логотипа Apple, а текст располагается рядом с ним. CSS для них можно найти в исходных файлах.

Чтобы создать правильный внешний вид, добавлен встроенный шрифт. При этом используется свойство CSS `font-face`. Есть много способов сделать это, но, возможно, самый простой - использовать такой сервис, как [@font-face&nbsp;генератор&nbsp;Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) для создания следующего CSS:

    @font-face {
      font-family: "apple_garamondregular";
      src: url("../fonts/apple_garamond-webfont.eot");
      src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
      font-weight: normal;
      font-style: normal;
    }

Шрифт Squirrel помогает, генерируя различные файлы (eot, woff и т. д.), которые затем можно поместить в проект и вызвать в CSS, как показано на рисунке.

Результатом является шрифт, который близко соответствует оригиналу.

### Дисковод

Флоппи-дисковод представляет собой отдельный элемент и использует границы CSS, чтобы он выглядел так, как будто он установлен впереди. CSS, который создает эффект, выглядит следующим образом:

    .floppy {
      height: 0.2em;
      width: 2.8em;
      transform: translate3d(4.8em, 8.9em, 0);
      background: #555555;
      border-top: 0.1em solid #cccccc;
      border-right: 0.3em solid #e6e6e6;
      border-bottom: 0.1em solid #f2f2f2;
      border-left: 0.3em solid #e6e6e6;
      border-radius: 0.25em;
    }

Дисковод гибких дисков имеет сплошной серый фон и четыре границы. Верхняя граница является самой темной, а нижняя граница ярче, чтобы она казалась освещенной сверху. Наконец, радиус границы закругляет углы.

## Собираем кусочки вместе

Каждая из частей, если их собрать, выглядит так:

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## Добавление анимации

Хотя то, что у нас есть, выглядит довольно хорошо, мы можем правильно показать тот факт, что это 3D-объект, заставляя его двигаться. Для этого мы будем использовать `keyframe` анимацию CSS.

В CSS есть два типа анимации. Переходы, в которых элементы на странице анимируются из одного стиля или позиции в другой, и `ключевые кадры`, которые представляют собой более сложную последовательность анимированных шагов.

Последовательность `ключевых кадров` может быть описана как ряд процентов, с CSS описанием каждого шага. Это может выглядеть примерно так:

    @keyframes back-and-forth {
      0% {
        transform: rotateY(40deg);
      }
      40%, 50% {
        transform: rotateY(-40deg);
      }
      90%, 100% {
        transform: rotateY(40deg);
      }
    }

В этом примере анимация называется **туда-сюда** и состоит из 3 шагов. Начинается с вращения на угол 40 градусов. Затем на отметке 40% поворачивается до минус 40 градусов. Он остается при этом вращении до 50%, затем при 90% возвращается в исходное положение.

Браузер автоматически заполняет пробелы, анимируя свойства. В этом случае он будет анимировать угол поворота.

### Применение анимации

Чтобы применить эту анимацию, мы можем использовать тег&nbsp;CSS&nbsp;**animation**.

Тег&nbsp;`animation` выглядит так:

    animation: back-and-forth 14s ease-in-out infinite;

Несколько вещей объединены в одну строку здесь. Он ссылается на анимацию по имени&nbsp;(&quot;back-and-forth&quot;), устанавливает свойство&nbsp;`продолжительность` в 14 секунд и говорит анимации повторяться бесконечно. Значение&nbsp;`ease-in-out`&nbsp;относится к `замедлению`, которое указывает браузеру постепенно начинать и заканчивать анимацию.

Применение этой анимации к div-у &laquo;positioning&raquo; приводит к чему-то вроде этого:

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## Что мы узнали

При создании и анимации трехмерного объекта в CSS мы рассмотрели немало методов. Мы устанавливаем&nbsp;`perspective` и&nbsp;`perspective-origin`. Затем мы использовали&nbsp;`transforms`, чтобы вращать, перемещать и позиционировать элементы, добавляли `градиенты`, чтобы придать более реалистичный 3D-эффект, и использовали некоторые CSS-приемы с `границами` для создания скосов и глубины. Наконец, мы использовали `ключевые кадры` и CSS-`анимацию`, чтобы оживить площадку.

### Совместимость браузера

Не все браузеры могут обрабатывать CSS-преобразования. Internet Explorer будет стараться, но есть надежда, что поддержка будет [получена в IE 11](http://caniuse.com/transforms3d). Все последние версии Chrome, Safari и Firefox подойдут.

[Modernizr[ предоставляет набор инструментов JavaScript для обнаружения возможностей браузера и может использоваться для отображения альтернативного содержимого в тех случаях, когда браузер не может поддерживать определенное свойство CSS. В примере кода вы обнаружите, что я использовал Modernizr для обнаружения присутствия 3D-преобразований. В тех случаях, когда они не существуют, вместо этого отображается изображение.

## Идти вперед

Хотя пример может показаться не тем, что вы используете на обычном веб-сайте, методы могут быть применимы ко всем видам сценариев.

Например, CSS-преобразования можно использовать для добавления глубины к переходам страниц, каруселям изображений, логотипам и кнопкам, и так далее.&nbsp; CSS-анимация может использоваться для добавления более интересных движений и изящества к вашим переходам, а CSS-градиенты могут добавлять глубину к страницам без необходимости использовать изображения.

<script src="//codepen.io/assets/embed/ei.js"></script>
