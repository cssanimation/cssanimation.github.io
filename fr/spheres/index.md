---
layout: post
title: Sph&egrave;res
description: Dessiner des sph&egrave;res 3D en CSS et avec les transitions
categories: [animation, balls, spheres, css]
imageURL: /images/posts/spheres/home.png
home_image: /images/posts/spheres/home.png
tweet_text: Recr&eacute;ons cette fantastique animation en pur CSS
custom_header: posts/spheres.html
customCSS: spheres.css
translator: Philippe Auriol
translator_link: https://twitter.com/PhilAllergie
---


Avec la propri&eacute;t&eacute; CSS `border-radius`, nous pouvons faire des formes arrondies et des cercles. Ajoutons y quelques d&eacute;grad&eacute;s et elles sont devenues des sph&egrave;res. Essayons &ccedil;a, et ajoutons y un peu d'animation pour les rendre plus vivantes.

## Flat Design

Il y a deux mani&egrave;res de faire des sph&egrave;res en CSS.

La premi&egrave;re, c'est de cr&eacute;er une sph&egrave;re 3D en assemblant de multiples &eacute;l&eacute;ments. Il y a de [magnifiques](http://codepen.io/peterwestendorp/pen/wGECk) [exemples](http://www.cssplay.co.uk/menu/cssplay-3D-sphere.html) &agrave; d&eacute;couvrir. Le c&ocirc;t&eacute; n&eacute;gatif de la chose, c'est que cela n&eacute;cessite que le navigateur affiche de nombreux &eacute;l&eacute;ments et cela peut impacter la performance du rendu. Elles ont &eacute;galement tendance &agrave; para&icirc;tre un peu anguleuses car l'arrondi de la sph&egrave;re n&eacute;cessite plus d'&eacute;l&eacute;ments.

Au lieu de cela je vais essayer une deuxi&egrave;me approche, utilisant les d&eacute;grad&eacute;s CSS pour les ombres et avec un effet 3D sur un seul &eacute;l&eacute;ment.

## D&eacute;mo et code cource

Tous les exemples ici mentionn&eacute;s peuvent &ecirc;tre retrouv&eacute;s sur [mon Codepen](http://codepen.io/donovanh), ou en s&eacute;lectionnant les liens &quot;&Eacute;diter dans Codepen&quot; dans chaque exemple plus loin.

Dans les exemples de code, j'ai laiss&eacute; tomb&eacute; les pr&eacute;fixes d&eacute;di&eacute;s des navigateurs. Je vous recommande l'usage d'un outil genre [Autoprefixer](http://css-tricks.com/autoprefixer/), ou d'ajouter les pr&eacute;fixes selon les besoins.

## Forme de base

Avant d'ajouter les d&eacute;tails, nous cr&eacute;ons la forme circulaire de base. Cela commence avec le HTML :

    <figure class="circle"></figure>

Nous utilisons un &eacute;l&eacute;ment `figure` ici, mais cela peut &ecirc;tre n'importe quel &eacute;l&eacute;ment. Figure est un &eacute;l&eacute;ment HTML5 qui repr&eacute;sente une image ou un diagramme qui peut &ecirc;tre retir&eacute; du contenu sans en affecter le sens.

Pour cr&eacute;er un cercle &agrave; partir de cet &eacute;l&eacute;ment `figure`, Je lui donne une largeur, une hauteur et un radian de 50% de la bordure. N'importe quoi au-del&agrave; de 50% r&eacute;sultera en un angle absolument rond.

    .circle {
      display: block;
      background: black;
      border-radius: 50%;
      height: 300px;
      width: 300px;
      margin: 0;
    }

Un cercle appara&icirc;t.

<div class="codepen" data-height="400" data-type="result" data-href="sdLhc" data-user="donovanh" data-safe="true"> </div>

Maintenant que nous avons le cercle de base, nous pouvons le styler en quelques chose de plus sph&eacute;rique.

## Shading 101

La premi&egrave;re chose que la plupart des tutoriels de sph&egrave;res 3D font est d'ajouter un simple d&eacute;grad&eacute; lin&eacute;aire, allant du haut &agrave; gauche vers le centre du cercle.

Nous pouvons le faire avec ce code CSS:

    .circle {
      display: block;
      background: black;
      border-radius: 50%;
      height: 300px;
      width: 300px;
      margin: 0;
      background: radial-gradient(circle at 100px 100px, #5cabff, #000);
    }

Vous devriez obtenir quelque chose comme &ccedil;a:

<div class="codepen" data-height="400" data-type="result" data-href="zDqAs" data-user="donovanh" data-safe="true"> </div>

### D&eacute;grad&eacute;s lin&eacute;aires

La propri&eacute;t&eacute; `radial-gradient` accepte plusieurs arguments. La premi&egrave;re est la position centrale de d&eacute;part du d&eacute;grad&eacute;. Selon la syntaxe `*forme* &agrave; *position*`. Dans cet exemple, c'est un cercle avec une position de centre &agrave; 100 pixels de la gauche et &agrave; 100 pixels du haut.

Puis on sp&eacute;cifie un ensemble de couleurs. Vous pouvez donner plus de deux couleurs mais il faudra alors un diff&eacute;rentiel de teinte suffisant pour que le d&eacute;grad&eacute; soit harmonieux.

Dans cet exemple nous n'utilisons que deux couleurs. Cela permet au navigateur de passer du premier &agrave; 0% au suivant &agrave; 100%, et de dessiner le gradient entre les deux. Si nous voulions d'autres &eacute;tapes de d&eacute;grad&eacute;, nous devrions sp&eacute;cifier les distances en pixel ou pourcentage comme nous le verrons plus loin.

Nous avons donc quelque chose qui a une t&ecirc;te de 3D. C'est pas mal, mais essayons de faire plus sympa.

## Ombres &amp; 3D

Selon le type d'ombre que vous appliquerez sur la surface, vous pourrez cr&eacute;er diff&eacute;rents aspects de sph&egrave;res. D'abord mettons en place la sc&egrave;ne o&ugrave; nous mettrons nos balles.

Le HTML que nous utilisons contient quelques &eacute;l&eacute;ments de plus.

    <section class="stage">
      <figure class="ball"><span class="shadow"></span></figure>
    </section>

L'&eacute;l&eacute;ment &quot;ball&quot; se voit attribuer un span que nous allons utiliser pour cr&eacute;er une ombre et il est encadr&eacute; d'une section de classe&nbsp;`stage`. La section de classe stage est utile pour donner un peu de perspective et pour positionner l'ombre, ce qui nous donnera un aspect plus 3D.

Appliquons quelques styles au stage et positionnons une ombre pour finir la sc&egrave;ne.

    .stage {
      width: 300px;
      height: 300px;
      display: inline-block;
      margin: 20px;
      perspective: 1200px;
      perspective-origin: 50% 50%;
    }
    .ball .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
      transform: rotateX(90deg) translateZ(-150px);
      z-index: -1;
    }

Remarquez que je ne mets pas les pr&eacute;fixes dans ces exemples CSS. Les exemples Codepen contiennent du CSS totalement pr&eacute;fix&eacute;. Au-dessus, j'ai r&eacute;gl&eacute; la section&nbsp;`stage` de mani&egrave;re &agrave; avoir une `perspective` de 1.200 pixels. La propri&eacute;t&eacute; perspective donne un point de fuite &agrave; la sc&egrave;ne 3D.

L'ombre de la balle est alors plac&eacute;e en donnant un d&eacute;grad&eacute; lin&eacute;aire mais en la positionnant avec un `transform`. L'action transforms en CSS permet la rotation, la mise &agrave; l'&eacute;chelle, le d&eacute;placement en ligne ou vectoriel de quelque chose dans un espace 3D. On applique une rotation de 90 degr&eacute;s &agrave; l'ombre sur l'axe X avec un d&eacute;calage vers le bas de la balle de 150 pixels.

Avec la perspective que nous avons donn&eacute; au conteneur stage et en regardant vers le bas, nous pouvons le voir comme une forme ovale &eacute;tir&eacute;e.

<div class="codepen" data-height="400" data-type="result" data-href="pwGxn" data-user="donovanh" data-safe="true"> </div>

Cela commence &agrave; &ecirc;tre plus sympa maintenant. Ajoutons une ombre &agrave; la balle elle-m&ecirc;me.

## Ombres multiples

Dans le monde r&eacute;el vous trouverez rarement des objets &eacute;clair&eacute;s sous un seul angle. Les surfaces refl&egrave;tent la lumi&egrave;re sur les autres surfaces et au final les diff&eacute;rentes sources lumineuses se m&eacute;langent entre elles. Pour avoir un aspect de balle plus r&eacute;aliste, nous allons faire comme s'il y avait deux sources lumineuses avec un pseudo-element pour avoir deux d&eacute;grad&eacute;s.

    .ball {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 50%;
      position: relative;
      background: radial-gradient(circle at 50% 120%, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
    }
    .ball:before {
      content: "";
      position: absolute;
      top: 1%;
      left: 5%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%);
      filter: blur(5px);
      z-index: 2;
    }

Ici nous avons deux d&eacute;grad&eacute;s nettement plus &eacute;volu&eacute;s.

Le premier d&eacute;grad&eacute; est un subtil soulign&eacute; lumineux qui s'applique &agrave; l'&eacute;l&eacute;ment `ball`. Le point de d&eacute;part central du d&eacute;grad&eacute; est positionn&eacute; &agrave; mi-chemin et &agrave; 120% de la hauteur de la balle. Cela positionne le centre de la balle. C'est fait pour que la couleur de fin ne soit pas visible, ce qui permet un rendu de d&eacute;grad&eacute; plus att&eacute;nu&eacute;.

Le deuxi&egrave;me d&eacute;grad&eacute; est un &eacute;claircissement, plac&eacute; au sommet. Il est positionn&eacute; &agrave; 90% de la largeur de la balle et &agrave; 90% de sa hauteur. Le d&eacute;grad&eacute; est centr&eacute; sur le haut si bien qu'il s'att&eacute;nue &agrave; mi-chemin en descendant sur la balle.

Pour contenir l'ombre, j'ai utilis&eacute; le pseudo-&eacute;l&eacute;ment `before` plut&ocirc;t que d'en cr&eacute;er un autre.

Comme cet &eacute;claircissement est un peu violent, j'utilise l'effet `blur` pour l'att&eacute;nuer. Malheureusement il n'est pr&eacute;sent que sur les navigateurs webkit (Chrome et Safari) mais il pourrait &ecirc;tre utile plus tard sur les autres navigateurs.

Les deux gradients combin&eacute;s r&eacute;alisent un effet nettement plus sympa :

<div class="codepen" data-height="400" data-type="result" data-href="fEaru" data-user="donovanh" data-safe="true"> </div>

## Brillant

En l'&eacute;tat l'effet est assez doux, ajoutons y un peu de brillance et cr&eacute;ons quelque chose plus comme une boule de billard.

Pour y arriver nous allons utiliser une douce lumi&egrave;re en soulignement comme avant, mais en ajustant l'&eacute;clairage lumineux du sommet pour qu'il soit plus petit et &eacute;troit. Il nous faudra utiliser deux pseudo-s&eacute;lecteurs pour contenir la couleur de la balle, une lumi&egrave;re en bas et une r&eacute;flection.


    .ball {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 50%;
      position: relative;
      background: radial-gradient(circle at 50% 120%, #323232, #0a0a0a 80%, #000000 100%);
    }
    .ball:before {
      content: "";
      position: absolute;
      background: radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      bottom: 2.5%;
      left: 5%;
      opacity: 0.6;
      height: 100%;
      width: 90%;
      filter: blur(5px);
      z-index: 2;
    }
    .ball:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 5%;
      left: 10%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
      transform: translateX(-80px) translateY(-90px) skewX(-20deg);
      filter: blur(10px);
    }

Ici nous avons la couleur originale &agrave; laquelle nous appliquons un d&eacute;grad&eacute; sur la balle elle-m&ecirc;me. Le pseudo-element `before` contient un surlignement plus lumineux qui l&agrave; aussi commence &agrave; la base de la balle et cr&eacute;e l'effet de r&eacute;flection de la lumi&egrave;re sur la surface.

Le pseudo-selecteur `after` est notre nouvel ajout. Il contient un d&eacute;grad&eacute; circulaire qui part d'un blanc opaque au centre pour s'att&eacute;nuer en transparent &agrave; environ 24% de la marque. Cela cr&eacute;e un effet de brillance blanc, mais pour qu'il donne le sentiment d'une r&eacute;flection 3D, nous appliquons une transformation CSS.

La transformation d&eacute;place l'effet de brillance de 80 pixels &agrave; gauche et 90 en haut et pour donner un effet de d&eacute;formation. L'effet de translation court le long du cercle sur l'axe X, de mani&egrave;re &agrave; ce qu'il soit comme celui que vous observiez sur une boule brillante.

<div class="codepen" data-height="400" data-type="result" data-href="LuEAB" data-user="donovanh" data-safe="true"> </div>

### La boule num&eacute;ro 8

Pour faire une boule de billard, ajoutons une &eacute;tape suppl&eacute;mentaire et ajoutons le num&eacute;ro 8.

il nous faut un &eacute;l&eacute;ment suppl&eacute;mentaire pour contenir le 8, ainsi que des styles pour le placer sur la boule.


    <section class="stage">
      <figure class="ball">
        <span class="shadow"></span>
        <span class="eight"></span>
      </figure>
    </section>

    .ball .eight {
      width: 110px;
      height: 110px;
      margin: 30%;
      background: white;
      border-radius: 50%;
      transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg);
      position: absolute;
    }
    .ball .eight:before {
      content: "8";
      display: block;
      position: absolute;
      text-align: center;
      height: 80px;
      width: 100px;
      left: 50px;
      margin-left: -40px;
      top: 44px;
      margin-top: -40px;
      color: black;
      font-family: Arial;
      font-size: 90px;
      line-height: 104px;
    }

Le bord arrondi &agrave; 100% est &agrave; nouveau utile pour cr&eacute;er le cercle, et ce cercle est positionn&eacute; en haut &agrave; droite avec la propri&eacute;t&eacute; `transform`. Plut&ocirc;t que de mettre le num&eacute;ro 8 dans le contenu, j'utilise le pseudo-selecteur `before` pour ajouter du contenu via la CSS et ensuite faire la translation du num&eacute;ro de mani&egrave;re comparable au cercle qui le contient.

Le r&eacute;sultat est une boule num&eacute;ro 8 brillante.

<div class="codepen" data-height="400" data-type="result" data-href="nzmJq" data-user="donovanh" data-safe="true"> </div>

## Je garde un oeil sur vous

Un truc vraiment sympa avec les transformations CSS c'est que l'on peut faire des animations. Avec les `keyframes` CSS pour animations, vous pouvez d&eacute;crire une s&eacute;rie de transformations comme animation et l'appliquer &agrave; un &eacute;l&eacute;ment. Pour vous montrer &ccedil;a, je vais cr&eacute;er et animer un globe oculaire.

Pour la premi&egrave;re &eacute;tape je vais adapter les couleurs que j'avais utilis&eacute; sur l'exemple de la boule num&eacute;ro 8. Quelques petits trucs et cela ressemble davantage &agrave; un oeil. En premier, le HTML :&nbsp;

    <section class="stage">
      <figure class="ball">
        <span class="shadow"></span>
        <span class="iris"></span>
      </figure>
    </section>

Le gros de la CSS est comparable &agrave; la boule num&eacute;ro 8, &agrave; l'exception de la pupille et de l'iris.

    .iris {
      width: 40%;
      height: 40%;
      margin: 30%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, #208ab4 0%, #6fbfff 30%, #4381b2 100%);
      transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg);
      position: absolute;
      animation: move-eye-skew 5s ease-out infinite;
    }
    .iris:before {
      content: "";
      display: block;
      position: absolute;
      width: 37.5%;
      height: 37.5%;
      border-radius: 50%;
      top: 31.25%;
      left: 31.25%;
      background: black;
    }
    .iris:after {
      content: "";
      display: block;
      position: absolute;
      width: 31.25%;
      height: 31.25%;
      border-radius: 50%;
      top: 18.75%;
      left: 18.75%;
      background: rgba(255, 255, 255, 0.2);
    }

Un d&eacute;grad&eacute; bleu fait la partie color&eacute; de l'iris et maintenant la pupille et le surlignement sont cr&eacute;es par des pseudo-&eacute;lements. J'ai aussi ajout&eacute; une propri&eacute;t&eacute; d'animation sur l'&eacute;l&eacute;ment de l'iris. Les animations sont attach&eacute;es &agrave; un &eacute;l&eacute;ment sous cette forme :

```
animation: animation-name 5s ease-out infinite;
```

Dans ce cas, nous appliquons une animation appel&eacute;e &quot;animation-name&quot;, qui durera 5 secondes, en boucle infinie et avec un effet d'att&eacute;nuation de type &quot;ease-out&quot;. Ease-out, c'est quand l'animation ralenti en arrivant &agrave; sa fin, cr&eacute;ant un effet plus naturel.

Sans l'animation cr&eacute;&eacute;e, nous avons un globe oculaire tr&egrave;s statique.

<div class="codepen" data-height="400" data-type="result" data-href="nwsqa" data-user="donovanh" data-safe="true"> </div>

Cr&eacute;ons quelques keyframes pour d&eacute;crire comment ce globe oculaire doit bouger.

    @keyframes move-eye-skew {
      0% {
        transform: none;
      }
      20% {
        transform: translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);
      }
      25%, 44% {
        transform: none;
      }
      50%, 60% {
        transform: translateX(68px) translateY(-40px) skewX(5deg) skewY(2deg) scaleX(0.95);
      }
      66%, 100% {
        transform: none;
      }
    }

Les keyframes d'animations en CSS peuvent sembler un peu compliqu&eacute; eu premier abord. Ce que vous &ecirc;tes en train de faire c'est de d&eacute;crire l'&eacute;tat d'un &eacute;l&eacute;ment dans une s&eacute;rie de moments. Chaque &eacute;tat est attach&eacute; &agrave; un pourcentage. Dans ce cas l'iris commence sans aucune transformation. Puis, &agrave; 20%, une transformation s'applique qui va le bouger et en faire une translation vers la gauche. L'espace entre 0 et 20% est calcul&eacute; automatiquement par le navigateur, il cr&eacute;e une transition douce entre les deux points.

cela se poursuit entre chaque keyframe et l'animation en entier dure 5 secondes comme sp&eacute;cifi&eacute; avant.

N'oubliez pas de cr&eacute;ez les versions pr&eacute;fix&eacute;es et non pr&eacute;fix&eacute;es moz, ms, o des animations keyframe car certains navigateurs auront besoin de ces pr&eacute;fixes.

<div class="codepen" data-height="400" data-type="result" data-href="iBolr" data-user="donovanh" data-safe="true"> </div>

## Bulles

En utilisant une combinaison d'ombres et d'animation, il est possible de faire de nombreux effets vari&eacute;s et int&eacute;ressants. Et pourquoi pas quelques bulles?

Faire des bulles est assez similaire &agrave; avant, plus de transparence sur la couleur principale et deux pseudo-elements pour la brillance.

L'animation utilise la transformation `scale` pour faire varier les bulles.

    @keyframes bubble-anim {
      0% {
        transform: scale(1);
      }
      20% {
        transform: scaleY(0.95) scaleX(1.05);
      }
      48% {
        transform: scaleY(1.1) scaleX(0.9);
      }
      68% {
        transform: scaleY(0.98) scaleX(1.02);
      }
      80% {
        transform: scaleY(1.02) scaleX(0.98);
      }
      97%, 100% {
        transform: scale(1);
      }
    }

L'animation s'applique sur la bulle enti&egrave;re et ses pseudo-elements.

<div class="codepen" data-height="400" data-type="result" data-href="pvrzK" data-user="donovanh" data-safe="true"> </div>

## Utiliser des images

Jusque l&agrave; toutes les boules cr&eacute;es l'ont &eacute;t&eacute; sans utiliser d'images. l'application d'une image de fond peut donner plus de d&eacute;tails et continuer &agrave; user de l'avantage des ombres CSS avec les pseudo-elements. Par exemple, une texture sans ombre de balle de tennis :&nbsp;

<img src="http://hop.ie/balls/images/tennisball.png" style="max-width:200px" alt="Unshaded tennis ball image" />

Ajoutons lui un d&eacute;grad&eacute; CSS pour une illusion de profondeur.

<div class="codepen" data-height="400" data-type="result" data-href="vsEIK" data-user="donovanh" data-safe="true"> </div>

### Autour du monde

Les animations peuvent &eacute;galement &ecirc;tre appliqu&eacute;es &agrave; la position de l'image de fond. Cela permet de cr&eacute;er un globe terrestre qui tourne.

Cette image plate a &eacute;t&eacute; &eacute;tir&eacute;e un peu en haut et en bas pour &ecirc;tre utilis&eacute;e comme image de fond.

<img src="http://hop.ie/balls/images/world-map-one-color.png" alt="Flat world map" />

Avec un peu d'ombre et d'animation, le globe terrestre en 3D est l&agrave;. S&eacute;lectionnez &quot;Result&quot; dans le Codepen pour le voir en action. Je l'ai r&eacute;gl&eacute; pour afficher le HTML par d&eacute;faut car la performance de cette exemple est faible, du coup le ventilateur de mon portable &agrave; tendance &agrave; s'emballer.

Note : un grand merci &agrave; Sidoruk Sergey ([@Sidoruk_SV](http://twitter.com/Sidoruk_SV)) pour l'am&eacute;lioration de ce globe. &Ccedil;a rend bien.

<div class="codepen" data-height="400" data-type="html" data-href="GBIiv" data-user="donovanh" data-safe="true"> </div>

## Ressources

Quelques [bons conseils &agrave; propos des d&eacute;grad&eacute;s lin&eacute;aires](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient) au cas o&ugrave; vous souhaiteriez en savoir plus.

Vous cherchez d'autres exemples en 3D? Essayez [Portal CSS](/portal/) pour votre inspiration.

## Vos retours

Tous les exemples donn&eacute;s sont pr&eacute;sents sur [mon compte Codepen](http://codepen.io/donovanh). Un grand merci &agrave; Chris et &agrave; l'&eacute;quipe pour avoir fait ce fantastique outil.

Si vous avez des questions &agrave; propos de cet article, contactez moi [par mail](mailto:hello@cssanimation.rocks) ou [sur Twitter](http://twitter.com/cssanimation).

<script src="//codepen.io/assets/embed/ei.js"></script>


