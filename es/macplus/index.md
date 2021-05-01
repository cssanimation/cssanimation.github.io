---
layout: post
type: tutorial
title: Mac Plus CSS
description: Creando un modelo 3D del clásico Mac Plus con CSS
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: Recrea el clásico Mac Plus de Apple
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Natalia Giraldo
---

Siempre recordaré el momento en que pude usar Apple Mac Plus En esta publicación intentaré rendir homenaje a esta hermosa computadora creándola en CSS

## Estilo retro

Construyamos (virtualmente) un computador. No cualquier computadora vieja, sino una computadora que fue, para muchos de nosotros, una introducción al mundo de Apple. El Macintosh Plus, cuyo nombre en clave es Mr. T, se introdujo por primera vez en 1986 y tenía un almacenamiento de 1 MB de RAM y un procesador de 8 MHz. Aparte de toda esa potencia bruta, era un diseño realmente lindo, que hizo que la computadora fuera más divertida de usar.

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

En este proyecto, construiré un modelo 3D del Macintosh Plus y lo mostraré en un entorno tridimensional. Usando la animación CSS Keyframe, haremos que se mueva en la pantalla para mostrar mejor el efecto 3D.

## Por qué usar CSS?

Con Cascading Style Sheets son la forma estándar de diseñar el contenido de una página web. Todo, desde fuentes, colores, posicionamiento e imágenes de fondo, es manejado por CSS, y es una herramienta esencial para crear páginas web modernas. No es solo para contenido bidimensional. Con el uso de transformaciones 3D y posicionamiento, también puede usar CSS para agregar profundidad.

La creación de escenas en CSS da como resultado tamaños de archivo más pequeños que las imágenes. En este ejemplo, el CSS se comprime a solo 4 KB y el HTML a menos de 1 KB. Una imagen equivalente sería de 100 KB o más.

## Demostración en vivo y código fuente.

Ver el [CSS Mac Plus en línea](https://cssanimation.rocks/mac/).

El código fuente completo [se puede descargar aquí](https://github.com/donovanh/mac/archive/master.zip), y puede ver el archivo [CSS completo en Github](https://github.com/donovanh/mac/blob/master/stylesheets/screen.css).

También puede seguir las distintas etapas buscando la carpeta de `ejemplos` en [los archivos del proyecto](https://github.com/donovanh/mac/archive/master.zip).

## Sobre prefijos

He omitido los prefijos CSS de los ejemplos de código para facilitar la lectura del código. Cuando trabaje en esto, asegúrese de incluir prefijos para los otros navegadores, como `webkit`, `moz`, `ms` y `o`.

## Preparando el escenario

Cuando estamos creando 3D usando HTML, necesitamos una escena dentro de la cual construirlo. Comience con un elemento HTML contenedor:
 
```
<div class="stage"></div>
```

Este es un div simple con la etapa de clase y actúa como un contenedor para nuestro objeto 3D.

Para establecerlo como un contenedor 3D, configuramos algunas propiedades CSS, `perspectiva` y `origen de perspectiva`. La propiedad de perspectiva es similar al punto de fuga de una escena. Cuanto menor sea el valor, más corto será el punto de fuga y más fuerte el efecto. Esta imagen muestra cómo cambiando el valor, cambia la forma en una escena:

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### Intentalo tu mismo

Si desea probar, busque el archivo `screen.css` en la carpeta `examples / 01-Perspective` en los archivos del proyecto. Podrá actualizar el valor de perspectiva y ver el efecto abriendo el archivo `index.html` desde la misma carpeta en su navegador.

La propiedad de `origen de perspectiva` establece la posición de visualización. Cambiarlo le permite mirar hacia abajo en la escena desde arriba, hacia arriba desde abajo o hacia adentro desde un lado.

En este ejemplo, he optado por un valor de perspectiva de 1.600 píxeles. El CSS se ve así:
 
```
.stage {
  perspective: 1600px;
  perspective-origin: 50% 100px;
}
```

La carpeta de `hojas de estilo` dentro del archivo ZIP del proyecto contiene las reglas CSS completas para configurar las otras propiedades en el escenario, incluyendo un fondo, ancho y alto.

## Planificando la estructura

Con una etapa en su lugar, usaremos algunos elementos HTML para crear la computadora. En lugar de intentar incluir hasta el último detalle, nos centraremos en los detalles del frente en su mayor parte.

El cuerpo principal de la Mac es una caja, ligeramente inclinada hacia atrás en ángulo y asentada sobre una base plana.

Esto significará crear dos cajas, una un poco inclinada hacia atrás y colocada en una caja más plana. Para crear este efecto, usaremos la propiedad de `transformación` CSS.

Si desea ver el HTML completo, puede encontrarlo en los archivos del proyecto dentro del archivo `index.html.`

## Transforma

La propiedad de `transformación` CSS nos permite rotar, sesgar, posicionar e incluso escalar elementos en la página. Podemos hacer uso del posicionamiento y la rotación para crear nuestra escena.

Una propiedad de `transformación` podría verse así:
 
```
.example {
  transform: rotateY(45deg) translateZ(-100px);
}
```

Construye una transformación encadenando una serie de declaraciones. En este ejemplo, el elemento de ejemplo se gira 45 grados alrededor del eje Y y luego se empuja hacia atrás 100 px a lo largo del eje Z.

Debería verse algo como esto:

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

Puede encontrar un ejemplo de transformaciones CSS en la carpeta `examples / 02-Transforms` dentro de los archivos del proyecto. Se colocan dos elementos en el ejemplo, y su posición se puede cambiar editando el archivo inclusiones `02-Transforms / css / screen.css.`

### Transformar-origen

Al rotar elementos por el lugar, vale la pena tener en cuenta que las transformaciones tienen un origen que se puede configurar. El origen de la transformación es un punto al que se hace referencia especificando los valores X, Y y Z. Este es el valor predeterminado:
 
```
.default-origin {
  transform-origin: 50% 50% 0;
}
```

Al crear este ejemplo, mantuve el predeterminado, pero vale la pena saber que está ahí.

## Haciendo las cajas

Podemos usar algunas transformaciones para configurar el cuerpo principal de la computadora. El HTML tiene este aspecto:
 
```
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
```

Dentro del escenario, hay un `div` que usaré para colocar la computadora en la página. Dentro de eso está la propia Mac. Las dos cajas están compuestas a su vez por elementos de `figura`. Estos elementos representan los lados, la parte superior, el frente y la parte posterior de las dos cajas.

También hay una `figura` para representar la sombra.

Este ejemplo se puede encontrar en la carpeta `examples / 03-Boxes`.

El resultado que buscaremos se ve así:

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

Cada uno de los cuadros se `transforma` en su lugar utilizando la propiedad de `transformación` CSS, y los degradados CSS se utilizan para agregar profundidad a la escena.

El CSS se ve así:
 
```
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
```

A cada una de las figuras se le ha dado un ancho y alto, y un degradado o color de fondo CSS. A continuación, las figuras se colocan utilizando la propiedad **transform**. Por ejemplo, el lado izquierdo se gira 90 grados antes de trasladar (mover) hacia atrás la mitad del ancho de la computadora.

La figura frontal se traslada hacia adelante, a lo largo del eje Z, la mitad de la longitud de la computadora y la parte posterior se gira 180 grados antes de trasladarse hacia atrás.

Para las piezas del cuadro superior, cada una de las figuras se gira 5 grados hacia atrás alrededor del eje X. Esto significa que el cuerpo principal del Macintosh Plus está inclinado hacia atrás.

Finalmente, la `figura` de la sombra hace uso de la propiedad CSS `box-shadow` para crear una sombra que hace que parezca que la caja está asentada sobre una superficie plana.

## Biseles

Una característica de esta computadora son los bordes inclinados alrededor del frente. Estos bordes, a los que me referiré como biseles, ayudan a suavizar las esquinas duras de la caja y hacer que parezca menos cuadrada.

Para lograr esto, agregué algunos elementos adicionales a la `figura` frontal, así:
 
```
<figure class="front">
  <span class="bezel-top"></span>
  <span class="bezel-left"></span>
  <span class="bezel-right"></span>
  <span class="bezel-bottom"></span>
</figure>
```

Los elementos de `tramo` dentro de la figura frontal representan cada uno de estos biseles. Con algunos estilos agregados, se verán así:

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

Este ejemplo se puede encontrar en la carpeta `examples / 04-Bezels`.

El siguiente CSS posiciona cada uno y hace uso de un truco de ancho de borde para crear bordes inclinados.
 
```
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
```

Cada bisel tiene 3 bordes. Para el bisel superior, colocamos un borde de color en la parte superior. Luego colocamos dos bordes *transparentes* en los lados izquierdo y derecho. En CSS, cuando un borde se encuentra con un borde de otro color, la línea donde se encuentran es diagonal. Esto significa que los bordes transparentes dan como resultado bordes diagonales al borde de color.

Esta técnica se aplica a cada uno de los biseles, creando la apariencia de bordes inclinados en cada uno.

Los biseles también tienen una transformación aplicada para rotarlos y colocarlos al lado de la figura frontal.

## Más detalles

Con las cajas principales de la computadora en su lugar, podemos agregar los diversos detalles que hacen que parezca un Macintosh Plus, como la pantalla, el icono y la unidad de disco.

La figura frontal contiene el siguiente HTML:
 
```
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
```

Puede encontrar un ejemplo de trabajo en la carpeta `examples / 05-Completed`.

### Pantalla

La pantalla está formada por varios elementos, incluido un contenedor, la pantalla en sí y una capa de &quot;brillo&quot; en la parte superior.

El CSS para esto hace uso de `degradados` de CSS para que parezca insertado en la parte frontal de la computadora y el `tramo` de brillo usa un degradado casi transparente para darle a la pantalla algo de brillo.

### Logo

El logo se compone de dos partes, una imagen y algo de texto. El `intervalo` de imágenes contiene una imagen de fondo del antiguo logotipo de Apple en colores, y el texto se coloca junto a él. El CSS para estos se puede encontrar en los archivos fuente.

Para crear el aspecto correcto, se agrega una fuente incrustada. Esto usa la propiedad `font-face` de CSS. Hay muchas formas de hacer esto, pero quizás la más fácil es usar un servicio como el generador [@font-face de Font Squirrel](http://www.fontsquirrel.com/tools/webfont-generator) para crear el siguiente CSS:
 
```
@font-face {
  font-family: "apple_garamondregular";
  src: url("../fonts/apple_garamond-webfont.eot");
  src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Font Squirrel ayuda a generar varios archivos (eot, woff, etc.) que luego se pueden colocar en el proyecto y llamar dentro del CSS como se muestra.

El resultado es una fuente que se asemeja mucho al original.

### Unidad de disquete

La unidad de disquete es un solo elemento y usa bordes CSS para que parezca que está colocada en el frente. El CSS que crea el efecto se ve así:
 
```
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
```

La unidad de disquete tiene un color de fondo gris sólido y cuatro bordes. El borde superior es el más oscuro, mientras que el borde inferior es más brillante para que parezca iluminado desde arriba. Finalmente, un radio de borde redondea las esquinas.

## Juntando las piezas

Cada una de las piezas, cuando se juntan, se ve así:

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## Añadiendo animación

Si bien lo que tenemos se ve bastante bien, podemos mostrar correctamente el hecho de que es un objeto 3D haciéndolo moverse. Para hacer esto, haremos uso de la animación de `fotogramas clave` CSS.

En CSS, hay dos tipos de animación. `Transiciones`, en las que los elementos de la página se animan de un estilo o posición a otro, y `fotogramas clave`, que representan una serie más compleja de pasos animados.

Una serie de fotogramas clave se puede describir como una serie de porcentajes, con CSS describiendo cada paso. Podría verse algo como esto:
 
```
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
```

En este ejemplo, la animación se denomina ida y vuelta y consta de 3 pasos. Esto comienza girado en un ángulo de 40 grados. Luego, en la marca del 40%, se gira a menos 40 grados. Permanece en esta rotación hasta el 50%, luego al 90% ha vuelto a la posición original.

El navegador llena automáticamente los huecos animando las propiedades. En este caso animará el ángulo de rotación.

### Aplicar animación

Para aplicar esta animación podemos usar la etiqueta de **animación** CSS.

La etiqueta de `animación` se ve así:
 
```
animation: back-and-forth 14s ease-in-out infinite;
```

Aquí se combinan algunas cosas en una sola línea. Hace referencia a la animación por su nombre (&quot;ida y vuelta&quot;), establece una `duración` de 14 segundos y le dice a la animación que se repita indefinidamente. El valor de la `facilidad de entrada y salida` se refiere a la `relajación`, que le indica al navegador que la animación comience y finalice gradualmente.

La aplicación de esta animación al div &quot;posicionamiento&quot; da como resultado algo como esto:

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## Lo que aprendimos

Al crear y animar un objeto 3D en CSS, cubrimos bastantes técnicas. Establecemos la `perspectiva` y el `origen de la perspectiva`.  Luego hicimos uso de `transformaciones` para rotar, mover y colocar elementos, agregamos `degradados` para dar un efecto 3D más realista y usamos algunos trucos de `borde` CSS para crear biseles y profundidad. Finalmente hicimos uso de `fotogramas clave` y `animación` CSS para darle vida a la escena.

### Compatibilidad del navegador

No todos los navegadores pueden manejar transformaciones CSS. Internet Explorer tendrá dificultades, pero hay esperanzas de que el soporte [llegue a IE 11.](http://caniuse.com/transforms3d) Todas las versiones recientes de Chrome, Safari y Firefox funcionarán bien.

[Modernizr[ proporciona un conjunto de herramientas JavaScript para detectar las capacidades del navegador y se puede utilizar para mostrar contenido alternativo en los casos en que el navegador no puede admitir una determinada propiedad CSS. En el código de ejemplo, encontrará que hice uso de Modernizr para detectar la presencia de transformaciones 3D. En los casos en los que no existen, se muestra una imagen en su lugar.

## Avanzando

Si bien el ejemplo puede no parecer algo que usaría en un sitio web promedio, las técnicas pueden aplicarse a todo tipo de escenarios.

Por ejemplo, las transformaciones CSS se pueden usar para agregar profundidad a las transiciones de página, carruseles de imágenes, logotipos y botones, por nombrar algunos. Las animaciones CSS se pueden usar para agregar un movimiento más interesante y delicadeza a sus transiciones, y los degradados CSS pueden agregar profundidad a las páginas sin necesidad de usar imágenes.

<script src="//codepen.io/assets/embed/ei.js"></script>
