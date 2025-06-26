---
layout: post.njk
title: Transiciones vs. Animaciones
description: "Una descripci&oacute;n de las diferencias entre animaciones y transiciones dentro de la animaci&oacute;n web."
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
tweet_text: "&iquest;Cuando deber&iacute;as de utilizar una transici&oacute;n y cuando deber&iacute;as de utilizar una animaci&oacute;n?"
custom_header: posts/transitions-animations.html
translators:
  - name: Mario S. Maselli
    url: /es/
  - name: Juan Vazquez
    url: http://juanvazquez.me
---

&iquest;Cuando realizas una animaci&oacute;n web, utilizas una transici&oacute;n o una animaci&oacute;n? En ciertas ocasiones preferir&aacute;s utilizar una sobre el otra. Discutamos algunas de las diferencias.

## &iquest;Qu&eacute; son transiciones?

Una transici&oacute;n ocurre cuando un elemento cambia de un estado hacia otro. En el momento que hay un cambio de estado, el navegador genera una secuencia de estados y los coloca justo en medio del estado inicial y el final. Una transici&oacute;n, tiene un estado inicial y un estado final.

Normalmente, vemos transiciones utilizadas al momento de hover, o cuando cierto contenido es agregado o eliminado de una p&aacute;gina. El estado hover puede ser un cambio sutil del color de fuente o el contenido de una p&aacute;gina puede cambiar de invisible a visible.

Ya que las transiciones est&aacute;n limitadas a estos dos estados, pueden carecer de cierta flexibilidad, pero al mismo tiempo son m&aacute;s f&aacute;ciles de utilizar.

### &iquest;Cu&aacute;ndo hay que utilizarlas?

Si deseas cambiar un elemento de un estado hacia otro de manera suave o fluida, una transici&oacute;n es una buena opci&oacute;n. Cambios simples pueden ser generados por medio de transiciones y las funciones de tiempo pueden ser utilizadas para personalizar la forma en la que la transici&oacute;n aparece.

Una transici&oacute;n funciona correctamente cuando alguien realiza una acci&oacute;n hover o pulsa un bot&oacute;n.

<section class="shiny demo-container tap-to-activate"><button>Efecto brillante</button></section>

O cuando alg&uacute;n elemento es agregado a una p&aacute;gina:

<section class="add-to-list swing demo-container">
<ul>
  <li class="show" style="background-color: #d13c9e;">Un elemento&nbsp;</li>
  <li class="show" style="background-color: #3cd19e;">Un elemento&nbsp;</li>
</ul>

<button>Agrega un elemento&nbsp;</button></section>

## &iquest;Qu&eacute; son animaciones?

Animaciones CSS son una alternativa m&aacute;s poderosa que las transiciones. En vez de confiar en el secuencia de un estado inicial a un estado final, las animaciones pueden tener cuantos estados se necesiten en medio del estado inicial y el estado final, ofreciendo un mayor control de c&oacute;mo los estados son animados.

Mientras una transici&oacute;n se mueve de un estado A a un estado B, una animaci&oacute;n puede moverse de A, B, C a D. O puede tener la cantidad de estados que necesite.

Las animaciones pueden lograr este comportamiento utilizando una colecci&oacute;n de keyframes. Mientras una transici&oacute;n puede ser especificada con una l&iacute;nea de de c&oacute;digo en una clase, una animaci&oacute;n requiere un conjunto de keyframes que son descritos separados de la clase.

### &iquest;Cu&aacute;ndo utilizarlos?

Si una animaci&oacute;n necesita cargar al mismo tiempo que carga la p&aacute;gina web o si la animaci&oacute;n es m&aacute;s compleja de ir de un punto A a B, una animaci&oacute;n CSS probablemente sea la m&aacute;s adecuada.

Un ejemplo de esto puede ser si deseas tener una animaci&oacute;n que comienza despu&eacute;s de cierto tiempo predeterminado, como el efecto de parpadeo que tiene Baymax:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Una animaci&oacute;n tambi&eacute;n puede ser una buena opci&oacute;n cuando un elemento se tiene que mover por m&uacute;ltiples lugares, como una capa de instrucciones que se mueve siguiendo el cursor mostrando &aacute;reas de inter&eacute;s en la pantalla.

## Muchas veces no es obvio.

En una publicaci&oacute;n reciente utilic&eacute; una animaci&oacute;n inicialmente, pero luego se convirti&oacute; en un caso perfecto para utilizar una transici&oacute;n.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Cuando empec&eacute; a diseñar &eacute;ste reloj, las manecillas se mov&iacute;an constantemente al momento de cargar la p&aacute;gina. Este fue un buen caso para utilizar la propiedad animation. Quer&iacute;a empezar la animaci&oacute;n al momento de carga y continuar infinitamente. Cuando empec&eacute; a agregar una mayor complejidad, pens&eacute; que ten&iacute;a m&aacute;s sentido si los &aacute;ngulos de las manecillas eran determinados utilizando JavaScript.

Las manecillas se estaban moviendo por medio de JavaScript, transitions se convirti&oacute; en una mejor opci&oacute;n. Cuando JavaScript cambia el &aacute;ngulo de la manecilla, CSS transition se encarga del cambio (del estado A al estado B) de una forma mucho mas elegante de lo que una animaci&oacute;n lo podr&iacute;a hacer.

Mira este[ tutorial del reloj en CSS](/clocks/) para m&aacute;s detalles.

## En resumen

Trancisiones para crear una transici&oacute;n suave y flu&iacute;da de un estado a otro, mientras que las animaciones para una serie m&aacute;s compleja de moviemientos.

Transiciones usualmente son mas f&aacute;ciles de crear, de administrar y de aplicar a una mayor cantidad de casos. Si necesitas un mayor control sobre la animaci&oacute;n de un elemento por medio de una serie de pasos o si la animaci&oacute;n necesita iniciar al momento de que la p&aacute;gina cargue, entonces una animaci&oacute;n con keyframes puede ser la mejor opci&oacute;n.
