---
layout: post
bodyClass: shorter
title: Pseudo-elementen animeren
description: Met pseudo-elementen krijg je twee extra HTML elementen bij ieder element! Hieronder zie je hoe je deze kan animeren als je er over hovert. Ga hier wel doordacht mee om.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /assets/images/posts/sheen/sheen.gif
home_image: /assets/images/posts/sheen/home.png
tweet_text: Glanzende knoppen met CSS
translator: Denis Valcke
translator_link: https://twitter.com/DenisValcke
english_version: /pseudo-elements/
---

Pseudo-elementen is als zomaar twee extra DOM elementen krijgen. Ze staan ons toe om extra content, decoratie enzoverder toe te voegen zonder extra HTML toe te voegen. Bovendien kunnen ze geanimeerd worden. In deze post zullen we een pseudo-element gebruiken om een beetje meer visuele flair toe te voegen aan een knop.

<section class="shiny demo-container tap-to-activate"><button>Glanzend effect</button></section>

## Pseudo-elementen

Binnen CSS kan je een pseudo-element defini&euml;ren met behulp van `::before` of `::after`. Het pseudo-element wordt dan toegevoegd aan je element, tussen het element en enige content. Doordat het reageert als een alleenstaand element kan er stijl, positie enzovoort aan toegevoegd worden. De code ziet er dan min of meer uit als volgt:
 
```
.pebble::before {
  ...
}
.pebble::after {
  ...
}
```

Op dit punt zijn aan ons `.pebble` element twee virtuele elementen toegevoegd, deze kunnen we voorzien van opmaak als we ze nodig hebben.

### Opmerking bij &quot;::&quot; tov. ':'

De dubbele dubbelpunt `::` is algemeen aanvaard als notatie voor pseudo-elementen (tegenover de notatie voor pseudo-klasses zoals :hover, :first-child). Als je support voor IE8 nodig hebt is het beter om de enkele `:` te gebruiken. Alle andere browsers en nieuwere versies van IE bieden ondersteuning voor de dubbele.

### Vergeet de &quot;content&quot; niet

Als je psuedo-elementen toevoegt is het belangrijk om ook de `content` property te&nbsp;specificeren om het element zichtbaar te maken op de pagina. Als het psuedo-element aangemaakt is in een&nbsp;inhoudsloze&nbsp;staat dan kunnen&nbsp;we de `content` property als leeg defini&euml;ren op deze manier:
 
```
.pebble::before {
  content: ""
  ... more styling goes here...
}
```

Op deze manier zou het element zichtbaar moeten zijn op het scherm.

## Voorbeeld: Glanzende knop

Voor dit voorbeeld gebruiken we een pseudo-element om een glanzend effect te cre&euml;ren als je er over hovert. Hieronder vind je een voorbeeld hiervan (hover of tik om het effect te zien).

<section class="shiny demo-container tap-to-activate"><button>Glanzend effect</button></section>

Om te beginnen, wat HTML:
 
```
<button>Oooh SHINY</button>
```

Omdat we pseudo-elementen gebruiken hebben we niet meer dan deze HTML nodig om dit te doen werken. Het is aangeraden om een klasse toe te voegen aan de knop als je hem van stijl zou moeten voorzien op meer dan &eacute;&eacute;n pagina. Voor dit voorbeeld houden we het bij de generische knop voor de eenvoud.

### Het glanseffect toevoegen

Het glanzende effect is een&nbsp;lineaire gradient die over de knop ligt. Om dit te cre&euml;ren gebruiken we het `after` pseudo-element en positioneren het in een beginpositie buiten de knop:
 
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

Het glanseffect is opgebouwd uit een gradient die gaat van de kleur van de knop tot wit en terug. Op dit punt staat het nu aan de buitenkant van de knop.

We moeten deze glanzende laag verbergen zodat ze enkel zichtbaar bij hover. Om dit te toen zetten we de `overflow` property van de knop op `hidden`. Omdat het pseudo-element in de knop zit zal het niet zichtbaar zijn als het buiten de knop gepositioneerd is.
 
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

Ik heb ook wat andere stijl meegegeven om de knop zijn eigen look te geven. Wat belangrijk is om mee te geven is het gebruik van `position: relative`. Ik heb deze property meegegeven om ervoor te zorgen dat het absoluut&nbsp;gepositioneerd psuedo-element zou bestaan binnen de knop. Zonder de positie te specificeren zou het absoluut gepositioneerd item zich plaatsen binnen het parent element.

## De animatie toevoegen

Doordat we animatie gebruiken in dit voorbeeld zijn er twee stappen die we moeten doorlopen. De eerste stap is om aan de browser mee te geven dat er animatie moet zijn bij de hover-state. Dan werken we exact uit wat de animatie moet doen aan de hand van `keyframes`.

De hover-state toevoegen kan door `after` aan de `hover` vast te hangen.
 
```
button:hover::after, button:focus::after {
  animation: sheen 1s forwards;
}
```

Hier vertellen we de browser dat bij een hover-state, het `after` pseudo-element een `animation` moet hebben. De animatie, die we sheen noemen, duurt &eacute;&eacute;n seconde en stop zonder op het einde te herhalen.

De volgorde is hier belangrijk. `::after:hover` gebruiken zal niet werken omdat we de browser dan vertellen om te reageren op de hover-state van het pseudo-element zelf.

Ik heb de focus-state ook toegevoegd. Dit betekent dat de gebruikers die door te pagina gaan met de 'tab'-toets ook het glanseffect zullen zien, zonder over de knop te moeten hoveren. (Bedankt,&nbsp;[&Scaron;ime Vidas](https://twitter.com/simevidas), voor de tip)

Laten we de `keyframes` specificeren voor deze animatie:
 
```
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}
```

In dit geval hebben we maar &eacute;&eacute;n keyframe nodig. Omdat de startpositie (0%) ge&iuml;mpliceerd wordt door de startpositie van het pseudo-element moeten we enkel de eindpositie bepalen. In dit geval is de eindpositie aan de rechterbovenhoek van de knop. De browser zal het glanseffect dan voor ons animeren over de knop heen.

<section class="shiny demo-container tap-to-activate"><button>Glanzend effect</button></section>

## Browser gerelateerde opmerkingen

De [animation property wordt goed ondersteund](http://caniuse.com/#feat=css-animation), net als de [pseudo-elementen](http://caniuse.com/#feat=css-gencontent). Het is altijd een goed idee om de `-webkit` en `-moz` prefixes aan de `keyframes` en transforms toe te voegen.

