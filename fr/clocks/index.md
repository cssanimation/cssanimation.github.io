---
layout: post
title: Horloges
description: Utiliser CSS et JavaScript pour concevoir et animer des horloges de tous les styles.
categories: [animations, transitions, javascript]
customCSS: clocks.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js]
customJS: clocks.js
imageURL: /images/posts/clocks/clock.gif
home_image: /images/posts/clocks/home.png
tweet_text: Animer une horloge avec CSS
custom_header: posts/clocks.html
demo_url: http://codepen.io/donovanh/full/vEjywy/
translator: Pierre Choffe
translator_link: https://la-cascade.io
english_version: /clocks/
---

Le temps est venu. Dans cet article, nous allons relever le d&eacute;fi de cr&eacute;er et animer une horloge en utilisant des animations CSS simples et un peu de JavaScript.

Voici l&rsquo;horloge que nous allons cr&eacute;er avec quelques lignes de HTML, de CSS et de JavaScript et un background SVG. Nous utiliserons les animations ou les transitions CSS pour tous les mouvements et nous nous appuierons sur JavaScript pour d&eacute;terminer l&rsquo;heure initiale et pour ajouter quelques transformations CSS basiques.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### HTML

Pour commencer, nous avons besoin de HTML

    <article class="clock">
      <div class="hours-container">
        <div class="hours"></div>
      </div>
      <div class="minutes-container">
        <div class="minutes"></div>
      </div>
      <div class="seconds-container">
        <div class="seconds"></div>
      </div>
    </article>

&Agrave; l&rsquo;origine, j&rsquo;avais trois &eacute;l&eacute;ments repr&eacute;sentant chacun une aiguille de l&rsquo;horloge, mais je les ai finalement envelopp&eacute;s chacun dans un &eacute;l&eacute;ment conteneur. La premi&egrave;re version fonctionnait avec les animations basiques, mais nous avons besoin des &eacute;l&eacute;ments conteneurs pour positionner les aiguilles et les animer.

## L&rsquo;horloge, sans les aiguilles

Nous commencerons avec une horloge tr&egrave;s simple, sans design compliqu&eacute;.

    .clock {
      border-radius: 50%;
      background: #fff url(/images/posts/clocks/ios_clock.svg) no-repeat center;
      background-size: 88%;
      height: 20em;
      padding-bottom: 31%;
      position: relative;
      width: 20em;
    }

    .clock.simple:after {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 5%;
      height: 5%;
      z-index: 10;
    }

Vous pouvez [r&eacute;cup&eacute;rer le background SVG ici](/images/posts/clocks/ios_clock.svg). J&rsquo;ai &eacute;galement ajout&eacute; un pseudo-&eacute;l&eacute;ment pour avoir un cercle noir solide au centre. Les aiguilles de l&rsquo;horloge seront plac&eacute;es sous le pseudo-&eacute;l&eacute;ment.

Nous devrions maintenant avoir quelque chose comme ceci.

<div class="demo-container clocks single"> <article class="clock simple"></article></div>

Avant d&rsquo;ajouter les aiguilles, nous devons placer les conteneurs.

    .minutes-container, .hours-container, .seconds-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

Chaque conteneur est ainsi empil&eacute; au-dessus de l&rsquo;horloge. Passons maintenant aux aiguilles.

### Aiguille des heures

Chaque aiguille est positionn&eacute;e de mani&egrave;re absolue (`absolute`) et plac&eacute;e sur la position de midi. Commen&ccedil;ons par l&rsquo;aiguille des heures.

    .hours {
      background: #000;
      height: 20%;
      left: 48.75%;
      position: absolute;
      top: 30%;
      transform-origin: 50% 100%;
      width: 2.5%;
    }

J&rsquo;utilise les pourcentages pour la fluidit&eacute;, &ccedil;a donne un peu plus de boulot mais c&rsquo;est plus simple ensuite pour adapter l&rsquo;image aux dimensions de l&rsquo;&eacute;cran. Nous r&eacute;glons la propri&eacute;t&eacute; `transform-origin` sur le bas de l&rsquo;aiguille pour la faire tourner &agrave; partir du point central.

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours"></div> </div> </article></div>

### Aiguille des minutes

Elle est assez similaire, mais plus fine et plus longue.

    .minutes {
      background: #000;
      height: 40%;
      left: 49%;
      position: absolute;
      top: 10%;
      transform-origin: 50% 100%;
      width: 2%;
    }

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> </article></div>

### Aiguille des secondes

Elle aussi est plus fine, mais elle est &eacute;galement plac&eacute;e plus bas de fa&ccedil;on &agrave; ce qu&rsquo;une partie d&eacute;passe du centre. Il nous faut donc d&eacute;placer le point de `transform-origin` &agrave; 80%, ce qui laisse 20% de l&rsquo;aiguille d&eacute;passer au-del&agrave; du point central.

    .seconds {
      background: #000;
      height: 45%;
      left: 49.5%;
      position: absolute;
      top: 14%;
      transform-origin: 50% 80%;
      width: 1%;
      z-index: 8;
    }

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Animation

Une horloge arr&ecirc;t&eacute;e ne donnera l&rsquo;heure exacte que deux fois par jour. Ajoutons un peu d&rsquo;animation pour lui donner plus d&rsquo;utilit&eacute;.

Certaines horloges et certaines montres ont une aiguille qui se d&eacute;place de mani&egrave;re saccad&eacute;e, de seconde en seconde, souvent avec un petit bruit. D&rsquo;autres ont une aiguille qui avance en continu. Nous allons essayer les deux, en commen&ccedil;ant par le mouvement continu.

Nous pouvons utiliser une `keyframe` indiquant aux aiguilles de tourner sur 360 degr&eacute;s (&agrave; partir d&rsquo;une position 0% sous-entendue).

    @keyframes rotate {
      100% {
        transform: rotateZ(360deg);
      }
    }

Avec cette keyframe, nous disons que l&rsquo;&eacute;l&eacute;ment doit s&rsquo;animer sur 360 degr&eacute;s lorsque nous lui appliquons la propri&eacute;t&eacute; `animation`. Nous utiliserons une fonction de timing `linear` pour faire tourner l&rsquo;aiguille en continu sans &agrave;-coups.

    .hours-container {
      animation: rotate 43200s infinite linear;
    }
    .minutes-container {
      animation: rotate 3600s infinite linear;
    }
    .seconds-container {
      animation: rotate 60s infinite linear;
    }

L&rsquo;aiguille des heures fait le tour du cadran en 12 heures, soit 43.200 secondes. Celle des minutes le fait en une heure (3.600 secondes) et celle des secondes en une minute.

Tout cela mis ensemble, nous avons maintenant du mouvement !

<div class="demo-container clocks single linear"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Si vous avez un oeil de lynx, vous arriverez peut-&ecirc;tre m&ecirc;me &agrave; discerner le mouvement de l&rsquo;aiguille des minutes. Il faudra une heure &agrave; l'aiguille des minutes pour faire un tour et douze heures &agrave; l'aiguille des heures.

L'aiguille des secondes ne met que 60 secondes &agrave; faire le tour du cadran, c'est plus facile &agrave; voir.

### Ajouter un mouvement saccad&eacute;

Nous pouvons donner un comportement plus naturel &agrave; notre horloge en d&eacute;pla&ccedil;ant l&rsquo;aiguille des secondes en 60 mouvements s&eacute;par&eacute;s. Une fa&ccedil;on simple d&rsquo;y parvenir consiste &agrave; utiliser la fonction de timing `steps`. La propri&eacute;t&eacute; `animation` de chaque aiguille devient :

    .minutes-container {
      animation: rotate 3600s infinite steps(60);
    }
    .seconds-container {
      animation: rotate 60s infinite steps(60);
    }

L&rsquo;aiguille des secondes et celle des minutes tournent maintenant en 60 &ldquo;pas&rdquo; dont le navigateur calcule automatiquement l&rsquo;ampleur.

<div class="demo-container clocks single steps"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### &Agrave; la bonne heure !

Notre horloge a fi&egrave;re allure, mais elle nous plairait encore plus si elle &eacute;tait &agrave; l&rsquo;heure. Avec un peu de JavaScript nous pouvons donner l&rsquo;heure exacte &agrave; nos visiteurs. Voici le code :

    /*
     * Starts any clocks using the user's local time
     * From: cssanimation.rocks/clocks
     */
    function initLocalClocks() {
      // Get the local time using JS
      var date = new Date;
      var seconds = date.getSeconds();
      var minutes = date.getMinutes();
      var hours = date.getHours();

      // Create an object with each hand and it's angle in degrees
      var hands = [
        {
          hand: 'hours',
          angle: (hours * 30) + (minutes / 2)
        },
        {
          hand: 'minutes',
          angle: (minutes * 6)
        },
        {
          hand: 'seconds',
          angle: (seconds * 6)
        }
      ];
      // Loop through each of these hands to set their angle
      for (var j = 0; j < hands.length; j++) {
        var elements = document.querySelectorAll('.' + hands[j].hand);
        for (var k = 0; k < elements.length; k++) {
            elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
            elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
            // If this is a minute hand, note the seconds position (to calculate minute position later)
            if (hands[j].hand === 'minutes') {
              elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
            }
        }
      }
    }

Cette fonction convertit l&rsquo;heure (heures, minutes, secondes) en l&rsquo;angle correspondant, pour chacune des aiguilles. Elle fait une boucle (&quot;loop&quot;) sur chaque aiguille et applique cet angle en utilisant la propri&eacute;t&eacute; `style.transform` et `rotateZ`.

Ce code fonctionnera sur la plupart des navigateurs, sauf sur Safari ou d&rsquo;autres qui ont besoin d&rsquo;un pr&eacute;fixe. Nous devons donc &eacute;galement utiliser la propri&eacute;t&eacute; `style.webkitTransform`.

Et voil&agrave;, notre horloge est align&eacute;e avec l&rsquo;heure du syst&egrave;me local.

<div class="demo-container clocks single steps local no-bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Aligner les aiguilles des minutes et des secondes

Nous devons nous assurer que l&rsquo;aiguille des minutes se d&eacute;place au moment o&ugrave; l&rsquo;aiguille des secondes atteint la position de midi.

<img src="/images/posts/clocks/twelve.gif" alt="Minute hand moving when second hand hits 12" style="max-width: 180px" />

Lorsque l&rsquo;horloge est dessin&eacute;e pour la premi&egrave;re fois &agrave; l&rsquo;&eacute;cran, il reste moins d&rsquo;une minute avant que l&rsquo;aiguille des minutes ne doive se mouvoir. Pour g&eacute;rer ce cas particulier, nous pouvons calculer le temps qui reste jusqu&rsquo;&agrave; la prochaine minute et d&eacute;placer l&rsquo;aiguille manuellement. Puisque nous utilisons JavaScript pour ce premier mouvement, nous pouvons continuer &agrave; la faire avancer de 6 degr&eacute;s &agrave; chaque minute, en utilisant `setInterval`.

Avant de faire bouger l&rsquo;aiguille des minutes, nous devons indiquer o&ugrave; nous en sommes dans la minute en cours. Vous avez sans doute remarqu&eacute; ces lignes.

    if (degrees[j].hand === 'minutes') {
      elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
    }

Ces lignes v&eacute;rifient d&rsquo;abord que l&rsquo;aiguille est celle des minutes, et si c&rsquo;est le cas, donnent au data attribute l&rsquo;angle actuel de l&rsquo;aiguille des secondes.

Une fois ce data attribute r&eacute;gl&eacute;, nous pouvons utiliser cette donn&eacute;e pour d&eacute;terminer &agrave; quel moment faire avancer l&rsquo;aiguille des minutes.

    /*
     * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
     */
    function setUpMinuteHands() {
      // Find out how far into the minute we are
      var containers = document.querySelectorAll('.minutes-container');
      var secondAngle = containers[0].getAttribute("data-second-angle");
      if (secondAngle > 0) {
        // Set a timeout until the end of the current minute, to move the hand
        var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
        setTimeout(function() {
          moveMinuteHands(containers);
        }, delay);
      }
    }

    /*
     * Do the first minute's rotation
     */
    function moveMinuteHands(containers) {
      for (var i = 0; i < containers.length; i++) {
        containers[i].style.webkitTransform = 'rotateZ(6deg)';
        containers[i].style.transform = 'rotateZ(6deg)';
      }
      // Then continue with a 60 second interval
      setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
          if (containers[i].angle === undefined) {
            containers[i].angle = 12;
          } else {
            containers[i].angle += 6;
          }
          containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
          containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
      }, 60000);
    }

### Ajouter un rebond

Puisque nous utilisons JavaScript pour faire avancer l&rsquo;aiguille des minutes, nous pouvons maintenant supprimer la propri&eacute;t&eacute; animation. Mais plut&ocirc;t que de la supprimer, nous allons la remplacer par une transition, ce qui nous donne une bonne opportunit&eacute; pour ajouter un peu plus de caract&egrave;re &agrave; notre animation.

Lorsque JavaScript fixe un nouvel angle pour l&rsquo;aiguille, une transition CSS sur l&rsquo;&eacute;l&eacute;ment indique au navigateur d&rsquo;animer cette nouvelle position. Autrement dit, JavaScript ne va s&rsquo;occuper que du changement d&rsquo;angle, tandis que le navigateur s&rsquo;occupera de l&rsquo;animation.

Auparavant, nous devons mettre &agrave; jour le code afin d&rsquo;utiliser JavaScript pour d&eacute;placer &eacute;galement l&rsquo;aiguille des secondes. Nous allons animer l&rsquo;aiguille des secondes 60 fois par minute.

    /*
     * Move the second containers
     */
    function moveSecondHands() {
      var containers = document.querySelectorAll('.seconds-container');
      setInterval(function() {
        for (var i = 0; i < containers.length; i++) {
          if (containers[i].angle === undefined) {
            containers[i].angle = 6;
          } else {
            containers[i].angle += 6;
          }
          containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
          containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
        }
      }, 1000);
    }

Maintenant que les aiguilles des secondes et des minutes sont toutes deux g&eacute;r&eacute;es par JavaScript, mettons &agrave; jour notre CSS pour remplacer les propri&eacute;t&eacute;s `animation` par des `transitions`.

    .minutes-container {
      transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
    }
    .seconds-container {
      transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
    }

Ces transitions s&rsquo;appliquent &agrave; la propri&eacute;t&eacute; `transform` et utilisent la fonction de timing `cubic-bezier`. C&rsquo;est cette fonction qui donne aux aiguilles un l&eacute;ger rebond.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Style iOS 7

Je suis un grand fan de la simplicit&eacute; de l&rsquo;horloge qu&rsquo;on trouve sur iOS 7. Apple a depuis allong&eacute; les aiguilles, mais je pr&eacute;f&egrave;re la version courte.

Nous pouvons donner un style aux aiguilles et ajouter une image de background avec les num&eacute;ros pour cr&eacute;er ce look.

<div class="demo-container clocks single local bounce"> <article class="clock ios7"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Ce design est lui-m&ecirc;me inspir&eacute; de [l&rsquo;horloge des chemins de fer suisses](https://www.youtube.com/watch?v=IvIvKiDWDks) de Hans Hilfiker. En modifiant quelques styles et en ajoutant une nouvelle image de background, nous pouvons adapter notre horloge &agrave; ce style.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Si vous avez d&rsquo;autres id&eacute;es de design, faites-le moi savoir.

## Utiliser Moment.js

Quand j&rsquo;ai pens&eacute; &agrave; cet article, une de mes premi&egrave;res id&eacute;es a &eacute;t&eacute; de recr&eacute;er les panneaux d&rsquo;horloges qu&rsquo;on trouve dans certains h&ocirc;tels, qui vous donnent l&rsquo;heure selon diff&eacute;rents fuseaux horaires.

La fa&ccedil;on la plus simple de s&rsquo;ajuster &agrave; d&rsquo;autres fuseaux horaires est d&rsquo;utiliser la formidable biblioth&egrave;que [Moment.js Timezone](http://momentjs.com/timezone/).

<div class="demo-container clocks multiple active bounce"> <article class="clock station js-new-york"><div class="label">New York</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-london"><div class="label">Londres</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-tokyo"><div class="label">Tokyo</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Vous pouvez voir ce code en action dans [Codepen](http://codepen.io/donovanh/full/vEjywy/).

## Compatibilit&eacute; navigateurs

Les navigateurs modernes sont compatibles avec les transitions et animations CSS. IE10+, les derniers Chrome et Firefox les supportent sans pr&eacute;fixes et Safari requiert encore le pr&eacute;fixe `-webkit`.

N&rsquo;oubliez pas d&rsquo;utiliser les propri&eacute;t&eacute;s pr&eacute;fix&eacute;es avec JavaScript &eacute;galement.
