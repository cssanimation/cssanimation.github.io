---
layout: post
bodyClass: shorter
title: Animaci&oacute;n del bot&oacute;n&nbsp;&quot;favorito&quot; de Twitter
description: Descubre con funciona la nueva animaci&oacute;n en CSS del bot&oacute;n &quot;favorito&quot; de Twitter con la funci&oacute;n de tiempo steps().
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /assets/images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-01-17-twitter-fave.md
home_image: /assets/images/posts/steps/home.png
translator: M Rubare
translator_link: /
---

Recientemente Twitter ha actualizado el dise&ntilde;o de su bot&oacute;n &quot;favorito&quot; (tambi&eacute;n conocido como &quot;fav&quot;), con una nueva animaci&oacute;n. En vez de basarse en transiciones CSS, la animaci&oacute;n usar&aacute; una serie de im&aacute;genes. As&iacute; es como se recrea la animaci&oacute;n utilizando CSS con la funci&oacute;n de tiempo `steps`

## Ilusi&oacute;n de movimiento

El efecto es similar al de los antiguos&nbsp;[Zo&oacute;tropos](http://en.wikipedia.org/wiki/Zoetrope), que mostraban una secuencia de ilustraciones en serie alrededor de un cilindro. En vez de un cilindro, utilizaremos una serie de im&aacute;genes en fila dentro de un elemento.

## Demo

Pasa el rat&oacute;n por encima de la estrella para ver la animaci&oacute;n:

<section class="fave demo-container tap-to-activate"></section>

En este ejemplo empezamos creando una serie de im&aacute;genes que formar&aacute;n la animaci&oacute;n. En este caso vamos a usar parte del grupo de im&aacute;genes que forman parte de la animaci&oacute;n del icono favoritos de Twitter:

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

Para animar estos frames, necesitamos ponerlos seguidos en una fila. Las im&aacute;genes est&aacute;n en [este archivo[ puestas en fila, lo que significa que podemos hacer una transici&oacute;n del primer frame al &uacute;ltimo frame posicionando la im&aacute;gen como background.

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Funci&oacute;n de tiempo Steps()

Con la mayor&iacute;a de las funciones de tiempo como m&aacute;s r&aacute;pido-m&aacute;s lento o c&uacute;bicas-B&eacute;zier, la transici&oacute;n entre los estados inicial y final se anima suavemente. La funci&oacute;n de tiempo `steps` es diferente. En vez de una transici&oacute;n suave, la transici&oacute;n se divide en un n&uacute;mero de pasos y el movimiento entre ellos es r&aacute;pido.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

Para empezar escribimos el HTML:

    <section class="fave"></section>

### Imagen de fondo

Con esto en su sitio podemos a&ntilde;adir un poco de estilo y posicionar la imagen de fondo:

![Image sprite for the animation](/assets/images/posts/steps/twitter_fave.png)

    .fave {
      width: 70px;
      height: 50px;
      background: url(images/twitter_fave.png) no-repeat;
      background-position: 0 0;
    }

A&ntilde;adimos estado `hover`, que es cuando especificamos que la posici&oacute;n de fondo se mover&aacute; hasta el final de la serie de im&aacute;genes.

    .fave:hover {
      background-position: -3519px 0;
      transition: background 1s steps(55);
    }

Toma nota de la segunda regla, especificamos la `transition` En este caso queremos hacer la transici&oacute;n sobre la propiedad background, y que la transici&oacute;n dure dos segundos, para ello empleamos la funci&oacute;n de tiempo `steps` La parte `steps` incluye el valor de `55`, ya que hay 55 frames en la animaci&oacute;n.

El efecto es que cuando pasamos el rat&oacute;n por encima del elemento, la transici&oacute;n se realiza en 55 pasos iguales.

### &iquest;Por qu&eacute; no un gif?

Se pueden utilizar gifs animados, pero en este caso no ser&iacute;a una buena soluci&oacute;n. El tama&ntilde;o del archivo es generalmente peor y velocidad de fotogramas es dif&iacute;cil de controlar. Con este m&eacute;todo podemos pausar, rebobinar o hacer todo tipo de otros ajustes a la animaci&oacute;n mediante CSS.

## Otros usos de &quot;steps()&quot;

Animando sprites de fondo es s&oacute;lo un uso de los `steps` en la funci&oacute;n de tiempo. Todo lo que necesita ser animado en una serie de pasos discretos es una buena soluci&oacute;n. Se podr&iacute;a utilizar para crear un reloj por ejemplo.

## Resumen

Si te ha gustado este art&iacute;culo, puedes [compartirlo en Twitter](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) o guardar este resumen pr&aacute;ctico:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
