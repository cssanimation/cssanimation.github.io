---
layout: post
bodyClass: shorter
title: Animer des pseudo-éléments
description: Pseudo-elements give you two extra HTML elements for free! Here's how to animate them on hover. Use them wisely.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Animer des pseudo-éléments
translator: Pierre Choffé
translator_link: https://twitter.com/pierrechoffe
english_version: /pseudo-elements/
---

Avec les pseudo-éléments, tout se passe comme si on avait des éléments supplémentaires dans le DOM gratuitement. Ils nous permettent d’ajouter à nos pages du contenu supplémentaire, de la décoration et bien d’autres choses, sans ajouter plus de HTML, et ils peuvent être animés. Dans cet article, je vais utiliser un pseudo-élément pour ajouter une touche d’élégance à un bouton.

/pl/

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

## Les pseudo-éléments

En CSS, nous pouvons spécifier un pseudo-élément à l’aide de :before ou :after. Le pseudo-élément est alors inséré à l’intérieur de votre élément, entre l’élément et tout autre contenu. Du fait qu’il se comporte comme un élément en soi, on peut le styler, le positionner et. Le code ressemble à ceci:


```
.pebble::before {
  ...
}
.pebble::after {
  ...
}
```

Pour l’instant, notre élément .pebble a deux éléments virtuels attachés, et nous pouvons leur appliquer le style que nous voulons.

## Remarque sur :: vs :

On considère en général qu’il faut utiliser les doubles deux-points :: pour dénoter les pseudo-éléments par contraste avec les pseudo-classes comme :hover et :first-child. Si vous souhaitez une compatibilité avec IE8, il vaut mieux utiliser les simples deux-points : à la place. Tous les autres navigateurs, y compris les versions d’IE postérieures à IE8 supportent les ::.

NdT : dans cet article, on adoptera la version simple : en suivant les recommandations de Chris Coyier.

## Noubliez pas “content”

Lorsqu’on ajoute des pseudo-éléments, il faut toujours se rappeler de spécifier la propriété content. Comme notre pseudo-élément n’a pas de contenu, il suffit de le spécifier comme suit:


```
.pebble::before {
  content: ""
  ... more styling goes here...
}
```

Cela garantira que notre élément soit visible.

## Exemple: un bouton luisant

Pour cet exemple, nous utiliserons un pseudo-élément afin de créer un effet de reflet au moment du survol du bouton. Voici un exemple de ce que cela donne:

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

Puisque nous utilisons les pseudo-éléments, nous n’aurons pas besoin de plus de HTML pour réaliser notre objectif. Vous pouvez ajouter une classe au bouton si vous stylez plus d’un bouton par page, mais pour la simplicité j’utiliserai un élément générique.

## Ajouter le reflet

L’effet de reflet luisant est un dégradé linéaire qui traverse le bouton. Pour le réaliser, nous allons utiliser le pseudo-élément :after et lui donner une position initiale située en-dehors du bouton:

```
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

Le reflet est constitué d’un dégradé allant de la couleur du bouton jusqu’au blanc et vice-versa. Pour l’instant, il est hors du bouton.

Nous devons cacher la couche luisante pour qu’elle n’apparaisse qu’au moment du survol (hover). Pour cela, nous allons donner à la propriété overflow la valeur hidden. Comme le pseudo-élément est situé à l’intérieur du bouton, cela signifie que tout ce qui est positionné à l’extérieur du bouton sera invisible.


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

J’ai ajouté d’autres styles pour donner son look particulier au bouton. Une chose à noter, l’utilisation de position: relative. J’ai ajouté cette propriété afin que le pseudo-élément positionné absolument puisse exister à l’intérieur du bouton. Si on ne spécifie pas la position, un item positionné absolument se positionnera à l’intérieur d’un élément parent.  NdT : Petit rappel vite fait sur le positionnement CSS ici.

## Ajouter l’animation

Il y a deux étapes à considérer. La première est de dire au navigateur d’utiliser une animation au survol. Ensuite, nous définirons exactement ce que fait l’animation au moyen de keyframes.

Ajouter l’état hover peut se faire en empilant :after et :hover comme suit:


```
button:hover::after, button:focus::after {
  animation: sheen 1s forwards;
}
```

Ici, nous disons au navigateur que lorsqu’on a un hover, le pseudo-élément doit avoir une animation. L’animation, que nous avons appelée sheen (reflet), dure une seconde et ne se répète pas une fois terminée.

L’ordre est important ici. Si l’on utilise :after:hover ça ne marchera pas, car cela revient à demander au navigateur de réagir à l’état de hover sur le pseudo-élément lui-même.

Spécifions maintenant les keyframes de cette animation.


```
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}
```

Nous n’avons besoin que d’un keyframe dans notre exemple. Puisque le point de départ (0%) est impliqué par la position de départ du pseudo-élément, nous n’avons à décrire que le point d’arrivée. Celui-ci se situe en haut et à droite du bouton. Le navigateur animera l’effet à travers le bouton pour nous.


<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

## Compatibilité

La [propriété animation est bien supportée](http://caniuse.com/#feat=css-animation), de même que les [pseudo-éléments](http://caniuse.com/#feat=css-gencontent). Il est toujours bon néanmoins d’inclure les préfixes -webkit et -moz pour les keyframes et pour les transformations. Vous pouvez le faire automatiquement grâce à Autoprefixer.



