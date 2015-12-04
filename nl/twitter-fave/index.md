---
layout: post
bodyClass: shorter
title: De &quot;fave&quot; animatie van Twitter
description: Ontdek hoe de fancy, nieuwe &quot;fave&quot; animatie werkt door het gebruik van de CSS steps() timing functie.
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-01-17-twitter-fave.md
home_image: /images/posts/steps/home.png
translator: Denis Valcke
translator_link: https://twitter.com/ShortyEx
english_version: /twitter-fave/
---

Twitter heeft onlangs een update gegeven aan hun &quot;fave&quot;, ook&nbsp;gekend als &quot;fav&quot; knop, door er een nieuwe animatie aan mee te geven. In plaats van CSS transities maakt de animatie gebruik van een reeks afbeeldingen. Hieronder zie je hoe je deze animatie kan recre&euml;ren door middel van de CSS animatie `steps` timing functie.

De volgende techniek kan ook gebruikt worden met de nieuwe “hart’ animatie, deze wordt in dezelfde manier uitgewerkt.

<section class="fave demo-container tap-to-activate heart"></section>

Zie het voorbeeld [live op CodePen]((http://codepen.io/donovanh/pen/dYqxNb)).

## De illusie van beweging

Dit effect is vergelijkbaar met dat van de oude&nbsp;[Zo&ouml;troop](http://en.wikipedia.org/wiki/Zoetrope) apparaten, die tonen een reeks illustraties die elkaar opvolgen in een cilinder. In plaats van in een cilinder, tonen we de afbeeldingen in een platte reeks in een element.

## Demo

Hover over de ster om de animatie te zien:

<section class="fave demo-container tap-to-activate"></section>

In dit voorbeeld beginnen we door de reeks afbeeldingen te maken waaruit de animatie zal bestaan. Hier gebruiken we een deel van de afbeeldingen uit de animatie van het Twitter fave icoon.

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

Om deze frames te animeren moeten we ze eerst op &eacute;&eacute;n lijn plaatsen. In [dit bestand[ staan ze op &eacute;&eacute;n rij, dit betekent dat de transitie kan lopen van de eerste tot de laatste frame door de positie van de achtergrond te veranderen.

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Steps() timing functie

Bij de meeste timing functies zoals de cubic-bezier animeert de transitie soepel van begin tot eind. De `steps` timing functie werkt anders. In plaats van een soepele transitie wordt de transitie verdeeld in een aantal stappen die scherp op elkaar volgen.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

Om te beginnen zetten we de HTML op:

```html
<section class="fave"></section>
```

### Achtergrondafbeelding

Hierna voegen we wat opmaak toe en stellen we de positie van de achtergrondafbeelding in:

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)

```css
.fave {
  width: 70px;
  height: 50px;
  background: url(images/twitter_fave.png) no-repeat;
  background-position: 0 0;
}
```

De `hover` state wordt toegevoegd, dit is wanneer we de achtergrondpositie verplaatsen naar het eind van de reeks van afbeeldingen:

```css
.fave:hover {
  background-position: -3519px 0;
  transition: background 1s steps(55);
}
```

Let op de tweede regel, hier bepalen we de `transition`. In dit geval willen we dat de transitie werkt voor de achtergrondpositie, we laten de transitie twee seconden duren en maken gebruik van de `steps` timing functie. Het `steps` gedeelte bevat de waarde `55`, dit is omdat de animatie 55 frames bevat.

Het effect is dat wanneer we over het element hoveren, het element door de transitie springt in 55 gelijke stappen.

### Waarom geen gif?

Geanimeerde gifs kunnen gebruikt worden in dit geval maar zijn niet de beste optie. Het bestand is vaak groter en de frame rate is moeilijker te controleren. Met deze methode kunnen we pauzeren, terugspoelen en diverse andere soorten aanpassingen maken aan de animatie door middel van CSS.

## Andere mogelijkheden met &quot;steps()&quot;

Achtergrond sprites animeren is maar &eacute;&eacute;n van de vele mogelijkheden met de `steps` timing functie. Alles wat geanimeerd moet worden in een beperkt aantal stappen kan gebruik maken van deze functie. Zo kan je er bijvoorbeeld een klok mee laten tikken.

## Cheatsheet

As je dit artikel interessant vond kan je het [delen op Twitter](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) af kan je dit handige overzicht downloaden:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
