---
layout: post
bodyClass: shorter
title: Baymax in CSS
description: Een geanimeerde versie van Baymax, het Big Hero 6 personage, zijn gezicht gemaakt met &eacute;&eacute;n enkel element.
categories: [animation, tips, animations, transitions, pseudo-elements]
customCSS: baymax.css
imageURL: /assets/images/posts/baymax/baymax.gif
home_image: /assets/images/posts/baymax/home.png
tweet_text: Animeer een Baymax gezicht in CSS
translator: Denis Valcke
translator_link: https://twitter.com/DenisValcke
english_version: /baymax/
---

Laten we CSS gebruiken om het Baymax personage van de film Big Hero 6 te maken.

In deze post zullen we een achtergrondafbeelding animeren, samen met een subtiel effect op de timing van de animatie en maken we een CSS demo uit &eacute;&eacute;n HTML element.

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Je kan [het hier zien op je volledige scherm](http://codepen.io/donovanh/full/ZYaMjw/).

## Enkel element

Door gebruik te maken van pseudo-elementen, krijgen we de mogelijkheid om het gezicht te maken aan de hand van &eacute;&eacute;n HTML element. 
 

    <div class="baymax"></div>

## Opmaak

Om te beginnen geven we het scherm een subtiele gradient zodat het er uit ziet als een gebogen, wit hoofd. Hiervoor gebruiken we een radiale gradient op de `body`.
 

    body {
      background: radial-gradient(center, #fff, #fff 50%, #aaa);
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100vh;
    }

Vervolgens positioneren we het gezicht in het midden van de pagina. De mond is een simpele zwarte lijn, die maken we aan de hand van een rand.
 
    .baymax {
      border-bottom: 1.5em solid #000;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -40%);
    }

De eerste property stelt een zwarte rand in met een breedte van `1.5em`. Het positioneert de lijn absoluut, wat het 50% naar beneden duwt en 50% opzij vanuit de linkerkant. Deze 50% waarden baseren zich op de grootte van het container element (`body`).

Het probleem dat zich nu voor doet is dat het element nu voor de helft van het scherm naar beneden en opzij wordt geduwd. Het staat dus niet in het midden.

Om dit te compenseren gebruiken we een transform om het element 50% van zijn breedte naar links te trekken en 40% van zijn breedte omhoog te duwen.

Op dit moment wordt de mond als volgt gecentreerd:

<section class="demo-container baymax-container"><span class="baymax no-pseudo-elements"></span></section>

## De ogen toevoegen

We maken gebruik van de `before` en `after` pseudo-elementen om de ogen toe te voegen aan het gezicht. Dit heeft geen extra HTML nodig en wordt volledig in CSS geregeld.
 
    .baymax::before {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      left: -9em;
      top: -6em;
      transform: skewX(-4deg);
    }

    .baymax::after {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      right: -9em;
      top: -6em;
      transform: skewX(4deg);
    }

Elk van deze pseudo-elementen heeft een zwart achtergrondkleur en een border-radius van 50% om ze rond te maken. Ze zijn gepositioneerd aan de uiteinden van de mond. Tot slot gebruiken we een `skew` transform om ervoor te zorgen dat ze eruit zien alsof ze wat naar achter gekanteld zijn. Het resultaat zou er als volgt moeten uitzien:

<section class="demo-container baymax-container"><span class="baymax no-animation"></span></section>

## Batterij bijna leeg

Er is een grappige scene in de film waar Baymax zijn batterij bijna leeg is. Hij strompelt rond en zijn oogleden vallen wat dicht. We kunnen een combinatie van achtergrond gradients en animatie gebruiken om dit effect te cre&euml;ren.

Eerst geven we de achtergrond twee kleuren. Zwart voor het gedeelte van het oog dat open is, wit voor het ooglid. Het witte stuk moet initieel buiten de ogen gepositioneerd worden, dan animeren we het zo dat het lijkt alsof de oogleden wat dichtvallen.
 
    .baymax::before {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }

    .baymax::after {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }

Er wordt een lineaire gradient achtergrond toegevoegd, die is twee keer de hoogte van de container, we positioneren die zo bovenaan half uit de container valt.

Met de twee achtergrond gradients in hun plaats kunnen we de animatie `keyframes` toevoegen om de beweging van de oogleden te controleren.
 
    @keyframes blink {
      0%, 50% {
        background-position: 0 100%;
      }
      85%, 95% {
        background-position: 0 75%;
      }
      100% {
        background-position: 0 100%;
      }
    }

Animatie `keyframes` zijn een manier om een reeks frames te beschrijven aan de hand van een percentage. Het percentage komt overeen met hoe lang de animatie moet duren. Dus een percentage van 50% betekent dus halfweg doorheen de animatie.

Op deze manier kunnen we de achtergrond omhoog laten staan tot halfweg de animatie, tussen 50% en 85% beweegt hij naar omlaag en op het einde van de animatie schuift hij terug naar boven.

De volgende stap is om het pseudo-element deze animatie keyframes te laten gebruiken. Voeg de `animation` property toe aan de bestaande stijl.
 
    .baymax::before {
      animation: blink 6s infinite;
      ...
    }

    .baymax::after {
      animation: blink 6s 0.1s infinite;
      ...
    }

Hier vertellen we de browser om de `blink` animatie toe te voegen aan ieder element. De duur van de animatie is ingesteld op 6 seconden en loopt oneindig door.

Het tweede voorbeeld bevat een extra eigenschap. De `0.1s` na de `6s` vertelt de browser om de animatie met 0.1 seconden te vertragen. Dit cre&euml;ert het effect dat de indruk geeft dat het tweede oog iets later sluit dan het eerste. Het draagt bij aan het vermoeide, slaperige effect en zorgt voor een iets menselijkere indruk. Het eindresultaat zou er als volgt moeten uitzien:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Je kan [het volledige effect hier zien op je volledige scherm](http://codepen.io/donovanh/full/ZYaMjw/).

## Browsers

In de codevoorbeelden zijn de gebruikelijke `-webkit` en `-moz` prefixes weg gelaten. De `transform` en `animation` properties worden best voorzien van een prefix, hiervoor raad ik Autoprefixer aan. 

## Shareable gif versie

Hier is een versie in de vorm van een geanimeerde gif die je makkelijker online kan delen.

[<img src="/images/posts/baymax/baymax.gif" style="max-width:225px" />](/assets/images/posts/baymax/baymax.gif)
