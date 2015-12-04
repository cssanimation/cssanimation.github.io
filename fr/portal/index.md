---
layout: post
title: Portal CSS
description: Recreating the classic Portal intstruction video using HTML and CSS
categories: [animation, experiment, css]
imageURL: /images/posts/portal/home.png
home_image: /images/posts/portal/home.png
tweet_text: Recreate this amazing Portal animation with pure CSS
custom_header: posts/portal.html
demo_url: https://cssanimation.rocks/demo/portal/
customCSS: portal.css
translator: Pierre Choffe
translator_link: https://la-cascade.io
english_version: /portal/
---


Vous n'avez pas nécessairement besoin de JavaScript pour créer des projets 3D impressionnants dans le navigateur web. Dans cet article, je vais vous montrer comment créer et animer une scène inspirée de Portal, uniquement à l'aide de CSS.

Vous pouvez regarder [la démo Portal CSS en ligne](http://hop.ie/portal/) et télécharger [le projet sur Github](https://github.com/donovanh/portal).

## Vidéo d'explication Portal #1

Pour vous montrer les étapes de création, stylisation et animation d'une scène 3D, j'ai choisi de recréer une scène de [la vidéo d'entraînement de Portal](http://www.youtube.com/watch?v=gr_9Fw_gC4I). En particulier, le look stylisé, façon bande dessinée, de la première partie de la vidéo dans laquelle une silhouette passe à travers un portail et réapparaît de l'autre côté. Voici la vidéo originale:

<div class="video-wrapper">
  <iframe src="http://www.youtube.com/embed/V5paXrfkYmI" width="720" height="405" data-height="405" frameborder="0">
  </iframe>
</div>

Cette vidéo m'a époustouflé lorsqu'elle est sortie. Portal (développé à partir de [Narbacular Drop](http://en.wikipedia.org/wiki/Narbacular_Drop)) a introduit un peu de fun dans les plateformes 3D.

Les graphiques isométriques de la vidéo d'introduction sont très différents du jeu, mais ils arrivent à reproduire son style. Dans cet article, je vais essayer de reproduire ce style bande dessinée en utilisant seulement HTML et CSS.

Voici en particulier le décor que nous allons créer:

<img src="/images/posts/portal/video.jpg" alt="Portal video screenshot" />

### Un mot rapide sur les préfixes

J'ai supprimé toutes les versions préfixées des règles CSS dans le code qui suit. Je vous recommande d'utiliser quelque chose comme prefix free ou Sass pour les gérer à votre place ( NdT : et aujourd'hui, la Cascade vous recommande d'utiliser Autoprefixer). Vous pourrez trouver les versions préfixées de CSS et Sass sur Github.

Le projet qui suit a été développé et testé sur Chrome. Il utilise un CSS qui ne fonctionnera pas comme il faut avec Internet Explorer. Il couvre quelques techniques intéressantes de CSS 3D qui, même si elles ne sont pas toujours d'usage courant peuvent s'avérer intéressantes dans certains projets front-end.

The following project has been developed and tested primarily in Chrome. It uses CSS that won't work properly in Internet Explorer. It covers some interesting 3D CSS techniques that while they aren't yet mainstream, can prove useful in other front-end development.

## On commence

Nous allons d'abord planter le décor dans lequel construire notre création 3D. Pour cela, nous avons besoin d'un élément HTML auquel nous allons donner des propriétés indiquant au navigateur qu'il doit s'attendre à trouver du contenu 3D. Commençons avec un HTML simple:

    <article class="container">...</article>

Notre conteneur est une balise `article`. En HTML5, article représente un contenu autonome qui pourrait être reproduit ailleurs tout en gardant du sens.

La première propriété à appliquer est perspective. Cette propriété prend une valeur en pixels et représente la profondeur de la scène 3D. Plus la valeur est petite, moins l'effet est dramatique, et il est habituel de la fixer quelque part entre 800 et 1.200px.

<img src="/images/posts/portal/perspective.gif" alt="Alternating between a perspective value of 900 pixels and 2000 pixels" class="bordered centered" />

Pour donner l'impression que ce décor est une grande pièce, nous allons donner une valeur élevée à cette perspective, à 2.600px. Comme déjà indiqué, nous ne tenons pas compte des préfixes vendeurs et nous écrivons simplement :

    article.container {
      perspective: 2600px;
    }

### Point de fuite

Le conteneur a une profondeur, l'étape suivante consiste à déterminer un angle de vue. En ajustant la propriété [perspective-origin](http://docs.webplatform.org/wiki/css/properties/perspective-origin), nous pouvons établir [le point de fuite](http://fr.wikipedia.org/wiki/Point_de_fuite) et déterminer si nous regardons du dessus ou de côté.

    .container {
      perspective-origin: 50% -1400px;
    }

La propriété `perspective-origin` prend deux valeurs, correspondant au décalage horizontal et vertical. Dans notre cas, nous le plaçons à mi-chemin en travers du décor et 1.400px au-dessus. Il en résultera un point de vue placé au-dessus de l'objet, regardant vers le bas.

J'ai déterminé ces valeurs en les ajustant manuellement dans le panneau Chrome web inspector et en jugeant à l'oeil. Lorsque vous créerez votre scène, vos valeurs seront peut-être plus ou moins élevées, cela dépendra de l'effet que vous voulez faire passer. N'oubliez pas que ces valeurs peuvent être animées et on peut créer des effets intéressants de déplacement de perspective.

### No vectors, Victor

Les objets que nous positionnons en HTML sont des éléments HTML normaux. Ils ont une largeur, une hauteur, et ils sont rectangulaires. Lorsque vous construisez un objet en 3D, vous mettez chaque rectangle en place. D'autres méthodes, différentes, décrivent des points et des lignes pour créer des formes, mais ce n'est pas le cas ici. Cela signifie aussi qu'il n'y a pas beaucoup de formes simples à partir desquelles dessiner.

Les éléments HTML sont placés dans le décor 3D grâce à la propriété `transform`.

### Transformer

La propriété `transform` consiste en une série d'ajustements de l'élément HTML. Ces ajustements peuvent prendre la forme de `translate` pour déplacer l'élément, `rotate` pour ajuster son angle, `skew` et même `scale`. On peut accumuler ces ajustements pour créer des transformations complexes, par exemple:

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

Cette règle fait tourner un élément de 45 degrés sur l'axe des Y, puis le déplace en arrière (en profondeur) de 100px sur l'axe des Z. L'effet donnerait ceci:

<img src="/images/posts/portal/transform.png" alt="A transform in action" class="bordered centered" />

### La propriété transform-origin

Lorsqu'on fait tourner les éléments, il faut garder à l'esprit que les transformations ont une origine que nous pouvons fixer. [Transform-origin](http://docs.webplatform.org/wiki/css/properties/transform-origin) est un point auquel se réfèrent les valeurs X, Y et Z. Voici sa valeur par défaut :

    .default-origin {
      transform-origin: 50% 50% 0;
    }

En réalisant cet exemple, j'ai conservé les valeurs par défaut, mais il est intéressant de savoir qu'elles sont là et qu'on peut les modifier.

## Construisons

Notre décor est planté, nous pouvons maintenant assembler notre chef-d'oeuvre en 3D. Quand on commence à construire des objets en 3D à l'aide de HTML et CSS, il est utile de prendre un petit moment pour bien comprendre comment cette approche diffère de celle des logiciels de 3D.

    <section class="stage">
      <div class="shadow"></div>
      <div class="back-left"></div>
      <div class="back-right"></div>
      <div class="platform-left"><span></span></div>
      <div class="platform-right"><span></span></div>
      <div class="pit-left"></div>
      <div class="pit-right"></div>
      <div class="pit-back"></div>
    </section>

C-dessus, nous avons une section stage, qui contiendra tous nos éléments. Un ensemble de div forme la partie principale de la structure. Ce sont les deux plateformes, un puits, des murs, et une ombre.

Lorsque j'ai commencé à construire ce décor, j'ai essayé de placer les murs directement sur la scène, en la tournant et en ajustant sa position. Cependant, comme le décor est vu depuis un angle isométrique, une approche plus simple était de placer les parties du décor puis de faire tourner le tout de 45 degrés en une seule fois.

Gardons ceci à l'esprit et plaçons nos éléments HTML à partir du schéma suivant:

<img src="/images/posts/portal/sketch.png" alt="Plan view of the scene" class="centered" />

Comme on peut le voir, le fond gauche est aligné sur la gauche, mais le fond droit fait face à l'observateur. Pour ajuster ceci, nous ferons tourner le tout de 45 degrés tout à l'heure.

Avant d'appliquer les transformations, nous devons donner à nos div quelques propriétés partagées:

    .stage div {
      position: absolute;
      transform-style: preserve-3d;
    }

Chaque div sera positionnée absolument et la propriété transform-style indique au navigateur que des transformations 3D doivent être appliquées en fonction de la perspective que nous avons fixée plus tôt.

Nous pouvons maintenant commencer à positionner les div:

    .stage .back-left {
      background-color: #6b522b;
      border-left: 6px solid #574625;
      border-top: 6px solid #8a683d;
      height: 120px;
      transform: rotateY(90deg) translateX(-256px);
      width: 500px;
    }

Les règles ci-dessus donnent une largeur de 500px, qui est la longueur du côté gauche de notre décor 3D, une hauteur de 120px et une couleur de background marron clair. La div est ensuite pivotée de 90 degrés et repoussée le long de l'axe des X. La div a une bordure de 6 px pour donner l'illusion de la profondeur.

Une transformation similaire est appliquée au fond droit:

    .stage .back-right {
      background-color: #9c7442;
      border-right: 6px solid #78552c;
      border-top: 6px solid #b5854a;
      height: 120px;
      transform: translateX(253px) translateZ(3px);
      width: 446px;
    }

La div est un peu plus petite, car la pièce originale dans la vidéo de Portal n'est pas tout à fait carrée.

Ensuite, ajoutons les plateformes et les côtés du puits:

    .stage .platform-left {
      background-color: #bcb3a8;
      border-bottom: 6px solid #857964;
      height: 220px;
      transform: rotateX(90deg) translateY(396px) translateX(253px) translateZ(-13px);
      width: 446px;
    }
    .stage .platform-right {
      background-color: #bcb3a8;
      border-bottom: 6px solid #847660;
      border-right: 6px solid #554c3d;
      height: 164px;
      transform: rotateX(90deg) translateY(88px) translateX(253px) translateZ(-41px);
      width: 446px;
    }
    .stage .pit-left {
      background-color: #4d4233;
      height: 800px;
      transform: translate3D(254px, 125px, 285px);
      width: 447px;
    }
    .stage .pit-right {
      background-color: #847660;
      height: 800px;
      top: -1400px;
      transform: translate3D(254px, 125px, 173px);
      width: 451px;
    }
    .stage .pit-back {
      background-color: #6b522b;
      height: 220px;
      transform: rotateY(90deg) translate3D(-200px, 87px, 168px);
      width: 170px;
    }

Le résultat final est un décor qui devrait ressembler à ceci:

<img src="/images/posts/portal/layout01.png" alt="Initial layout of the stage divs" />

Ce n'est pas encore ça. Nous devons faire pivoter tout ce décor pour le voir comme il faut. Ajoutons un transform à la section:

    .stage {
      margin: 0 auto;
      transform-style: preserve-3d;
      transform: rotateY(-45deg);
      width: 460px;
    }

Le résultat devrait maintenant être celui-ci:

<img src="/images/posts/portal/layout02.png" alt="Initial layout rotated to show the stage properly" />

Vos pouvez remarquer que les bordures créent un joli effet de profondeur, en particulier sur les coins, là où les différentes bordures colorées se rencontrent en formant un angle de 45 degrés. Comme ce décor doit être vu à 45 degrés, cet effet marche très bien dans la plupart des cas. Certains coins ne sont pas aussi réussis, mais si l'on considère la simplicité du procédé et l'absence d'images, je trouve que c'est un compromis acceptable.

### Dans l'ombre

Dans la vidéo, il y a une belle ombre sous les plateformes. Nous pouvons reproduire cet effet avec la propriété CSS `box-shadow`.

    .stage .shadow {
      background-color: transparent;
      box-shadow: -600px 0 50px #afa79f;
      height: 550px;
      transform: rotateX(90deg) translateZ(-166px) translateX(550px);
      width: 550px;
    }

Les règles ci-dessus ajoutent une `box-shadow` à la div shadow, qui est elle-même transparente. La `box-shadow` est décalée de 600px de façon à ce que la div shadow n'empiète pas sur l'ombre. Le tout est pivoté et positionné en dehors du décor, afin que seule une partie de l'ombre soit visible. Le résultat devrait ressembler à ceci:

<img src="/images/posts/portal/layout03.png" alt="Initial layout with a shadow" />


## Rouge et Bleu

Ensuite, il nous faut ajouter un peu de décoration et les portails étincelants.

<img src="/images/posts/portal/portal.png" alt="Red portal" />

Le HTML dont nous avons besoin est assez simple:

    <div class="portal red"></div>
    <div class="portal blue"></div>

Il y a une div pour chaque portail, une rouge et une bleue. Elles ont toutes les deux un style similaire, avec des dégradés utilisés pour donner l'effet brillant. Comme il s'agit d'un élément HTML simple, le CSS comprend un pseudo-élément auquel nous pouvons appliquer un style pour obtenir l'effet désiré.

La première étape est de donner sa forme générale au portail:

    .stage .portal {
      background-color: black;
      border-radius: 44px/62px;
      box-shadow: 0 0 15px 4px white;
      height: 72px;
      width: 48px;
    }

On crée ainsi le portail, en utilisant la propriété `border-radius` pour obtenir une forme ovale, et une `box-shadow` blanche pour la brillance. Un pseudo-élément est ensuite ajouté, avec les mêmes dimensions, et la bordure blanche:

    .stage .portal:before {
      border-radius: 44px/62px;
      border: 4px solid white;
      content: "";
      display: block;
      height: 72px;
      margin-left: -4px
      margin-top: -4px;
      width: 48px;
    }

Jusqu'à présent les mêmes styles s'appliquent aux deux portails. Mais puisque l'un est rouge et l'autre bleu, nous allons utiliser des ensembles de règles CSS séparés pour décrire les caractéristiques propres à chacun. D'abord le portail rouge, puis le bleu:

    .stage .portal.red {
      background: radial-gradient(#000000, #000000 50%, #ff4640 70%);
      border: 7px solid #ff4640;
      transform: translate3D(223px, 25px, 385px) rotateY(90deg) skewX(5deg);
    }
    .stage .portal.blue {
      background: radial-gradient(#000000, #000000 50%, #258aff 70%);
      border: 7px solid #258aff;
      transform: translate3D(586px, 25px, 4px) skewX(-5deg);
    }

On donne au portail rouge un background dégradé radial et une bordure rouge. Dans ce cas, le transform le fait pivoter et le place sur le mur gauche. Même chose pour le portail bleu, mais avec un dégradé bleu et un positionnement sur le mur de droite. Dans mon test, ils étaient tous les deux un peu de travers, alors j'ai ajouté un effet de déformation (skew) qui leur donne meilleure allure.

### Un portail étincelant

Le HTML que nous avons créé initialement comprenait une balise span sur chaque plateforme. Ces spans ont été ajoutés de façon à être stylisés avec un dégradé radial pour donner un effet de luminosité éclatante sous chacun des portails.

    .stage .platform-left span {
      background: radial-gradient(left, #f3cac8, #c8b8ad 70px, #bcb3a8 90px);
      display: block;
      height: 200px;
      left: 0;
      position: absolute;
      width: 120px;
    }
    .stage .platform-right span {
      background: radial-gradient(top, #cdebe8, #c2cbc1 40px, #bcb3a8 60px);
      display: block;
      height: 60px;
      left: 280px;
      position: absolute;
      width: 150px;
    }

Les deux spans sont positionnés absolument et on leur donne un dégradé rouge et bleu, positionné sous chacun des portails. On aurait pu utiliser un pseudo-élément pour obtenir cet effet, mais comme l'animation des pseudo-élements n'est pas très bien supportée (même dans des versions de Webkit), un span séparé les remplace.

### La porte

Un succès inattendu a été l'utilisation des bordures pour créer ce qui ressemble à une ouverture dans le mur de droite, représentant la sortie. Pour créer cette porte, j'ai utilisé une simple div et quelques bordures colorées qui donnent l'illusion de la profondeur.

<img src="/images/posts/portal/door.png" alt="Door" />

Le HTML de la porte est très simple. Ajoutez le code suivant à l'intérieur de la section *stage*.

    <div class="door"></div>

Pour donner un style à la porte, il nous faut quelques bordures et un `transform` qui la positionne dans le mur de droite:

    .stage .door {
      background: #efe8dd;
      border-bottom: 6px solid #bcb3a8;
      border-left: 7px solid #78552e;
      height: 85px;
      transform: translate3D(450px, 34px, 4px);
      width: 65px;
    }

Deux bordures sont utilisées pour créer cet effet. Les bordures bottom et left correspondent à la plateforme et à un côté du mur. Comme il n'y a pas de bordure spécifiée pour le haut de la porte, la bordure de gauche est coupée par le haut de la div, ce qui fonctionne bien.

## Les personnages

Les portails et la porte sont en place, il nous faut maintenant un personnage pour sauter dans l'un et réapparaître par l'autre. La première étape consiste à créer la persone.

Dans mes premiers tests, j'ai essayé d'utiliser un personnage et d'arrêter l'animation au premier portail puis de continuer immédiatement de l'autre côté. Mais quand j'animais un seul personnage, il y avait un scintillement pendant son transfert de l'autre côté. Pour éviter ce problème, j'utilise deux personnages et je les anime séparément.

### Construire le personnage

<img src="/images/posts/portal/dude1.png" alt="The first of two characters to animate through the scene" />

La forme du premier personnage est constituée de deux parties principales, la tête et le corps. Les jambes sont ajoutées en utilisant des pseudo éléments sur le corps. Une structure similaire est aussi intégrée pour créer l'ombre:

    <div class="dude one">
      <figure class="head"></figure>
      <figure class="body"></figure>
      <div class="dude-shadow one">
        <figure class="head"></figure>
        <figure class="body"></figure>
      </div>
    </div>

Comme l'ombre (*dude-shadow*) est incluse dans la div contenant le personnage, elle peut être animée simultanément. Voici le CSS:

    .dude, .dude-shadow {
      height: 100px;
      width: 30px;
    }
    .dude figure, .dude-shadow figure {
      background-color: black;
      display: block;
      position: absolute;
    }
    .dude figure.head, .dude-shadow figure.head {
      border-radius: 22px;
      height: 20px;
      left: 3px;
      top: 0;
      width: 20px;
    }
    .dude figure.body, .dude-shadow figure.body {
      border-radius: 30px 30px 0 0;
      height: 30px;
      top: 21px;
      width: 26px;
    }
    .dude figure.body:before, .dude figure.body:after, .dude-shadow figure.body:before, .dude-shadow figure.body:after {
      background-color: black;
      content: "";
      height: 15px;
      position: absolute;
      top: 30px;
      width: 9px;
    }
    .dude figure.body:before, .dude-shadow figure.body:before {
      left: 3px;
    }
    .dude figure.body:after, .dude-shadow figure.body:after {
      left: 14px;
    }

Ces règles sont dédoublées dans chaque cas, pour décrire à la fois le personnage et son ombre. Chaque partie est positionnée absolument et on utilise `border-radius` pour créer des formes arrondies. Les pseudo-éléments représentant les jambes sont décrits puis positionnés dans des règles séparées.

### le personnage 1

Une fois la forme du personnage réalisée, positionnons celui-ci sur son point de départ:

    .stage .dude.one {
      transform: translate3D(514px, 50px, 375px) rotateY(78deg);
    }
    .stage .dude-shadow.one {
      opacity: 0.1;
      transform: translateX(-12px) rotateX(90deg) translateY(8px);
    }

Les `transform` CSS positionnent à la fois le personnage et son ombre. Plutôt que de donner une couleur grise à l'ombre, on utilise la propriété opacité, réglée à 0.1, ce qui permet à des détails de background d'être vus en-dessous de l'ombre.

Le premier personnage est maintenant sur son point de départ et pivoté selon un angle similaire à celui de la vidéo. Nous allons ajouter l'animation plus tard, pour le faire sauter à travers le portail.

### Des bras

<img src="/images/posts/portal/dude2.png" alt="The second of two characters to animate through the scene" />

Le deuxième personnage a quelques détails supplémentaires, des bras, l'idée étant que lorsque le personnage passe à travers le portail, il lève les bras en signe de victoire. Voici le HTML:

    <div class="dude two">
        <figure class="head"></figure>
        <figure class="body"></figure>
        <figure class="arm left"></figure>
        <figure class="arm right"></figure>
        <div class="dude-shadow two">
            <figure class="head"></figure>
            <figure class="body"></figure>
            <figure class="arm left"></figure>
            <figure class="arm right"></figure>
        </div>
    </div>

Le second personnage sera invisible au début de l'animation, puis il saute à travers le portail à mi-chemin de l'animation (après que le premier personnage ait sauté). Pour mettre ceci en place, le deuxième personnage est positionné sur le portail.

    .stage .dude.two {
      transform: translate3D(610px, 40px, 10px) rotateY(15deg);
    }
    .stage .dude.two figure.arm {
      background: black;
      height: 8px;
      position: absolute;
      top: 20px;
      width: 20px;
    }
    .stage .dude.two figure.arm.left {
      left: -13px;
      transform: rotateZ(40deg);
    }
    .stage .dude.two figure.arm.right {
      right: -10px;
      transform: rotateZ(-40deg);
    }
    .stage .dude-shadow.two {
      opacity: 0.1;
      transform: translateY(12px) translateX(-16px) translateZ(-6px) rotateZ(-90deg) rotateY(90deg) rotateZ(50deg) skewX(30deg) scaleX(0.8);
    }

Une deuxième animation sera appliquée aux bras, dans laquelle ceux-ci seront d'abord invisibles pour apparaître ensuite.

## Le décor est planté

Les personnages sont là dans leur décor, nous sommes prêts pour l'animation.

<img src="/images/posts/portal/stage_set.png" alt="The scene is ready, with 2 characters ready to be animated." />

Voyons comment nous pouvons donner l'illusion que le personnage saute dans le premier portail et réapparaît dans le second.

## Animation

Si vous regardez la démo, vous verrez plusieurs animations. Plutôt que de passer en revue toutes les animations, je vais me concentrer sur l'animation du personnage passant d'un portail à l'autre.

### Keyframe animation

L'animation des éléments HTML dans le temps est réalisée en utilisant des [keyframes](https://docs.webplatform.org/wiki/css/atrules/@keyframes), et en attachant un ensemble de keyframes à un élément au moyen d'une propriété [animation](https://docs.webplatform.org/wiki/css/properties/animation). Nous allons commencer en animant le premier personnage, qui s'approchera du portail de gauche et sautera au travers. Voici un ensemble de keyframes qui permettent de réaliser cette animation:

    @keyframes move-dude-one {
      /* Character flies into scene */
      0% {
        transform: translate3D(514px, -10px, 375px) rotateY(78deg) scaleY(2);
      }
      /* Waits a moment */
      1%, 18% {
        opacity: 1;
        transform: translate3D(514px, 50px, 375px) rotateY(78deg) scaleY(1);
      }
      /* Moves toward the portal */
      34%, 39% {
        opacity: 1;
        transform: translate3D(284px, 40px, 375px) rotateY(78deg);
      }
      /* Pauses, them jumps in */
      41%, 42% {
        opacity: 1;
        transform: translate3D(234px, 40px, 375px) rotateY(78deg);
      }
      /* Vanishes */
      43%, 100% {
        opacity: 0;
        transform: translate3D(234px, 40px, 375px) rotateY(78deg);
      }
    }
    /* Note: Use prefixes, such as @-webkit-keyframes, @-moz-keyframes, etc! */

Les keyframes sont une série d'étapes, décrites à l'aide de pourcentages. Les pourcentages sont relatifs au timing de l'animation, c'est à dire que si l'animation dure 10 secondes, 10% représenteraient une étape d'une durée de 1 seconde.

Afin de voir nos personnages sauter à travers les portails dans une belle continuité, nous allons créer deux animations de 10 secondes chacune qui fonctionneront de manière simultanée. J'ai mis quelques commentaires dans le code pour décrire chaque étape de l'animation. La propriété transform est utilisée à chaque étape pour régler la position et l'angle des personnages.

À 43% de l'animation, l'`opacity` du personnage est fixée à 0. C'est le moment où le personnage disparaît dans le portail. Le second personnage devrait donc apparaître vers 43% grâce à son animation.

Avant cela, appliquons cette première animation au premier personnage:

    .dude.one {
      animation: move-dude-one 10s linear infinite;
      opacity: 0;
    }

La propriété `animation` ci-dessus applique l'animation à l'élément dude one. Il l'attache au moyen du nom de l'animation (*move-dude-one*), lui assigne une durée de 10 secondes et une répétition à l'infini.

Une opacité de 0 permet de garantir que le personnage est invisible avant le début de l'animation.

Passons maintenant à l'animation du second personnage.

    @keyframes move-dude-two {
      /* Dude be invisible */
      0%, 42% {
        opacity: 0;
        transform: translate3D(610px, 40px, 10px) rotateY(15deg);
      }
      /* Apparato! */
      42.5% {
        display: block;
        opacity: 1;
        transform: translate3D(610px, 40px, 10px) rotateY(15deg);
      }
      /* Move onto the platform */
      46%, 75% {
        opacity: 1;
        transform: translate3D(610px, 40px, 120px) rotateY(15deg);
      }
      /* Stand there for a bit */
      76%, 97% {
        opacity: 0;
        transform: translate3D(610px, -10px, 120px) rotateY(15deg) scaleY(2);
      }
      /* Fly up into the sky! */
      98%, 100% {
        opacity: 0;
        transform: translate3D(610px, -10px, 120px) rotateY(15deg) scaleY(2);
      }
    }

    @keyframes arms {
      /* No arms */
      0%, 53% {
        opacity: 0;
      }
      /* Yes arms! */
      54%, 100% {
        opacity: 1;
      }
    }

Comme prévu, cette animation commence autour de 42%. Le personnage saute par le portail, il reste immobile quelques instants, puis il s'envole dans les airs. Un deuxième ensemble de keyframes décrit l'animation des bras. Ils sont invisibles au départ, puis apparaissent à mi-chemin de l'animation.

Nous pouvons appliquer ces keyframes au deuxième personnage de la façon suivante:

    .dude.two {
      animation: move-dude-two 10s linear infinite;
      opacity: 0;
    }

    .dude.two figure.arm {
      animation: arms 10s linear infinite;
      opacity: 0;
    }

De cette manière, les deux animations sont appliquées. Comme elles ont toutes les deux une durée identique de 10 secondes, et qu'elles se reproduisent à l'infini, elles sont parfaitement coordonnées.

Si ce n'est déjà fait, vous pouvez vérifier [le résultat final dans](](http://hop.ie/portal/)) un navigateur moderne, de préférence pas Internet Explorer.

## Précautions

Puisque nous parlons des navigateurs, je dois dire que tout ceci ne fonctionnera pas dans IE... Firefox est un peu bof, mais pas mal. Safari y est presque et Chrome est bon à 100%. Mais on va y arriver. ( NdT : l'article date de juin 2013, on y est).

Ça marche bien aussi sur la plupart des terminaux (toute question de navigateur mise à part), un test sur iPhone montre une performance meilleure encore que sur un laptop avec Chrome, parce que les règles CSS utilisées (transformations 3D) utilisent la carte graphique.

## Demo and contact

Check out the [online Portal CSS demo](http://hop.ie/portal) or download the [source from Github](https://github.com/donovanh/portal).

Regardez [la démo](](http://hop.ie/portal)) ou téléchargez [le code sur Github](https://github.com/donovanh/portal).

Je serais ravi de connaître votre avis, vous pouvez me joindre sur [Twitter](https://twitter.com/donovanh).
