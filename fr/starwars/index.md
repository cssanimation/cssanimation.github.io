---
layout: post
title: Star Wars
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Les titres de Star Wars 'Le Réveil de la Force' animés en CSS
categories: [3d, css]
imageURL: /images/posts/starwars/home.jpg
home_image: /images/posts/starwars/home.jpg
tweet_text: Les titres de Star Wars animés en CSS
translator: Pierre Choffé
translator_link: https://twitter.com/pierrechoffe
---

Sortez les popcorns ! Aujourd'hui, nous allons cr&eacute;er le titre de la bande annonce de Star Wars 'Le R&eacute;veil de la Force'.
<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen">

<div class="callout"> 

Cet article est un extrait du cours <a href="/courses/animation-101/">CSS Animation 101</a>. Pour une p&eacute;riode limit&eacute;e, <em>vous pouvez payer ce que vous voulez</em>. <a href="/courses/animation-101/">Inscrivez-vous</a> !

</div>

Notre exemple associe l'animation CSS &agrave; quelques autres propri&eacute;t&eacute;s CSS utiles, en particulier les transformations `scale`, `translate` et `rotate`.

## Transformations

On pourrait penser que la propri&eacute;t&eacute; transform cr&eacute;e une animation, mais en r&eacute;alit&eacute; elle est utilis&eacute;e pour d&eacute;finir la position statique, la d&eacute;formation ou le redimensionnement d'un &eacute;l&eacute;ment. Nous pouvons l'utiliser pour cr&eacute;er de superbes effets mais pour cela nous avons besoin d'un transform diff&eacute;rent pour chaque keyframe ou chaque &eacute;tat que nous animons.

## Transform: scale(), translateZ() et rotateY()

Nous pouvons agrandir ou rapetisser des &eacute;l&eacute;ments gr&acirc;ce &agrave; `scale`. Avec `translateZ`, nous pouvons d&eacute;placer des &eacute;l&eacute;ments sur l'axe des Z. Cet axe correspond &agrave; une ligne que vous traceriez depuis vous jusqu'&agrave; l'&eacute;cran.

Dans le cas pr&eacute;sent, j'utiliserai un m&eacute;lange de scale et translateZ pour cr&eacute;er l'illusion que les mots volent dans l'espace.

Enfin, nous utiliserons `rotateY` pour faire tourner sur elles-m&ecirc;mes les lettres du sous-titre. Pour les faire tourner sur l'axe des Y nous ferons travailler notre navigateur en 3D.

## SVG, HTML et CSS

Pour pr&eacute;parer cet exemple, j'ai cr&eacute;&eacute; deux fichiers SVG pour les mots [Star](/demo/starwars/images/star.svg) et [Wars](/demo/starwars/images/wars.svg) du logo. N'h&eacute;sitez pas &agrave; les t&eacute;l&eacute;charger si vous voulez jouer avec pour suivre la d&eacute;mo.

Le HTML de la d&eacute;mo est le suivant :

    <div class="starwars-demo">
      <img src="/images/star.svg" alt="Star" class="star">
      <img src="/images/wars.svg" alt="Wars" class="wars">
      <h2 class="byline" id="byline">The Force Awakens</h2>
    </div>

Une image statique d'[&eacute;toiles](/demo/starwars/images/bg.jpg) est utilis&eacute;e pour l'arri&egrave;re-plan. La police de caract&egrave;res du sous-titre a &eacute;t&eacute; compliqu&eacute;e &agrave; trouver, alors pour cet exemple j'ai choisi la police web &quot;Lato&quot;.

Le positionnement absolu du contenu au centre de l'&eacute;cran nous donne ceci :

<img src="/images/posts/starwars/starwars.jpg" />

## Animer Star et Wars

Nous voulons que le texte principal disparaisse en fade out, et nous voulons &eacute;galement que sa taille diminue progressivement. C'est un excellent cas d'utilisation de la transformation `scale()`. Utilisons-la sur le mot &quot;Star&quot; avec ces keyframes :

    @keyframes star {
      0% {
        opacity: 0;
        transform: scale(1.5) translateY(-0.75em);
      }
      20% {
        opacity: 1;
      }
      89% {
        opacity: 1;
        transform: scale(1);
      }
      100% {
        opacity: 0;
        transform: translateZ(-1000em);
      }
    }

Il y a deux propri&eacute;t&eacute;s qui changent durant cette animation, `opacity` et `transform`. Le changement d'opacit&eacute; le fait d&eacute;marrer transparent puis dispara&icirc;tre &agrave; la fin, de fa&ccedil;on &agrave; ce que nous puissions reprendre l'animation en boucle.

La transformation commence par la d&eacute;finition de scale &agrave; `1.5`. Cela signifie que la taille du texte au d&eacute;part est &agrave; 150% de sa taille normale. &Agrave; 89%, nous fixons la propri&eacute;t&eacute; transform sur une scale de 1. Autrement dit, entre 0% et 89%, la dimension passe de 150% &agrave; 100%.

Le `transformZ` final fait dispara&icirc;tre rapidement les mots.

Nous pouvons appliquer ces keyframes au mot &quot;Star&quot; ainsi :

    .star {
      animation: star 10s ease-out infinite;
    }
    .wars {
      animation: wars 10s ease-out infinite;
    }

La propri&eacute;t&eacute; `animation`&nbsp;d&eacute;finit ici une animation que nous avons appel&eacute;e `star`&nbsp;ayant une dur&eacute;e de 10 secondes. Elle applique la fonction int&eacute;gr&eacute;e de timing `ease-out` et elle indique qu'elle doit se r&eacute;p&eacute;ter ind&eacute;finiment. Nous appliquons une r&egrave;gle similaire pour le mot &quot;Wars&quot;.

## Cr&eacute;er la 3D

Pour utiliser les transformations 3D en CSS, que ce soit pour d&eacute;placer un &eacute;l&eacute;ment le long de l'axe des Z ou pour le faire tourner sur les axes des Y ou des Z, il faut cr&eacute;er un cadre pour la 3D. En termes HTML, cela signifie qu'il faut cr&eacute;er un container et indiquer au navigateur que ce sera le cadre de notre 3D.

Pour cela, nous ajoutons ceci &agrave; notre div&nbsp;`.starwars-demo` :
 

    .starwars-demo {
      perspective: 800px;
      transform-style: preserve3d;
    } 


Ces deux propri&eacute;t&eacute;s indiquent au navigateur que les &eacute;l&eacute;ments enfants du container doivent &ecirc;tre positionn&eacute;s en 3D et non &agrave; plat. [CSS Tricks[ donne de plus amples d&eacute;tails sur la propri&eacute;t&eacute;.

Par ailleurs, la propri&eacute;t&eacute; `perspective` indique au navigateur la &quot;profondeur&quot; de la sc&egrave;ne. Ici, nous avons choisi `800px`. Des valeurs plus r&eacute;duites cr&eacute;ent des perspectives plus &quot;extr&ecirc;mes&quot; car le point de fuite est plus rapproch&eacute;.

Maintenant que cette partie est au point, passons au sous-titre.

## Le R&eacute;veil de la Force

Dans la bande-annonce, les lettres du sous-titre tournent sur elles-m&ecirc;mes. Nous pouvons recr&eacute;er cet effet gr&acirc;ce &agrave; la transformation `rotateY`. Dans cet exemple, nous avons ins&eacute;r&eacute; chaque lettre dans un &eacute;l&eacute;ment `span`, de fa&ccedil;on &agrave; pouvoir animer chacune.

Mais je me suis rapidement rendu compte d'un probl&egrave;me : il n'existe pas de mani&egrave;re simple d'animer chacune des lettres du sous-titre. Ma premi&egrave;re approche &eacute;tait d'ins&eacute;rer manuellement chacune des lettres dans une balise `span`. &Ccedil;a marchait, mais le HTML &eacute;tait un peu confus. La d&eacute;mo actuelle inclut un peu de JavaScript (merci &agrave; [Tady](https://twitter.com/tadywankenobi) pour son assistance) qui ins&egrave;re automatiquement chaque lettre dans un `span`.

Appliquons maintenant une animation &agrave; chaque lettre.

D'abord, les keyframes :
 

    @keyframes spin-letters {
      0%, 10% {
        opacity: 0;
        transform: rotateY(90deg);
      }
      30% {
        opacity: 1;
      }
      70%, 86% {
        transform: rotateY(0);
        opacity: 1;
      }
      95%, 100% {
        opacity: 0;
      }
    }


On commence par faire tourner les lettres de 90 degr&eacute;s, puis aux alentours de 70% de l'animation elles font face au spectateur.

Nous pouvons appliquer cet ensemble de keyframes &agrave; chaque span de cette fa&ccedil;on :
 

    .byline span {
      animation: spin-letters 10s linear infinite;
    }
    .byline {
      animation: move-byline 10s linear infinite;
    }


Le r&eacute;sultat est que chaque span contenant une lettre va dispara&icirc;tre et tourner sur lui-m&ecirc;me lentement, avant de s'effacer &agrave; la fin de l'animation.

Si on met tout ensemble, nous avons notre [d&eacute;mo finale](http://codepen.io/donovanh/pen/pJzwEw?editors=110).
<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen">

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<div class="callout"> 

Cet article est un extrait du cours <a href="/courses/animation-101/">CSS Animation 101</a>. Pour une p&eacute;riode limit&eacute;e, <em>vous pouvez payer ce que vous voulez</em>. <a href="/courses/animation-101/">Inscrivez-vous</a> !

</div>

