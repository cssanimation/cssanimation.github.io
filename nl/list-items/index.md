---
layout: post
bodyClass: shorter
title: Lijstitems Animeren
description: Wat trucjes om lijstitems aan te kondigen met behulp van animatie.Lijstitems animeren
description: Some tricks to help announce list items through animation.
categories: [animation, tips, animations, transitions]
customCSS: list_items.css
customJS: list_items.js
imageURL: /images/posts/list_items/list_items.png
home_image: /images/posts/list_items/home.png
tweet_text: Animating List Items
translator: Denis Valcke
translator_link: https://twitter.com/DenisValcke
---

Als er stukken van de pagina veranderen kan animatie een goede manier zijn om uw gebruikers te helpen begrijpen wat er gebeurt. Animaties kunnen nieuwe inhoud aankondigen of aandacht trekken naar inhoud die op punt staat verwijderd te worden. In dit artikel zullen we bekijken hoe we dit kunnen gebruiken om nieuwe inhoud in te leiden door items in een lijst te tonen en verbergen.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

## Inhoud inleiden

Animatie kan nuttig zijn als je bezoekers wilt helpen begrijpen wanneer er dingen veranderen op je website. Als er inhoud wordt toegevoegd of verwijderd zonder animatie kunnen sommige veranderingen gemist worden en leiden tot verwarring. Subtiele animaties kunnen dit vermijden en helpen om aan te kondigen dat iets aan de pagina zal worden toegevoegd of verwijderd.

Een voorbeeld van inhoud toevoegen of verwijderen is inhoud van een lijst beheren. De meeste animaties kunnen gebruikt worden voor andere soorten inhoud. Als je ze nuttig vindt, of je wilt andere idee&euml;n toevoegen, [neem dan zeker contact op](mailto:hello@cssanimation.rocks), we horen graag jouw mening en gedachten.

## De HTML opzetten

Om te starten gebruiken we een lijst die reeds gevuld is en een knop om nieuwe items toe te voegen aan de lijst.
 
    <ul id="list">
      <li class="show">List item</li>
      <li class="show">List item</li>
    </ul>
    <button id="add-to-list">Add a list item</button>

Goed om te weten. Eerst en vooral hebben we twee ID's in de HTML In het algemeen gebruiken we ID's niet voor opmaak omdat ze voor problemen kunnen zorgen door dat ze zo specifiek zijn. Ze zijn echter wel nuttig als je JavaScript gebruikt.

De initi&euml;le items hebben een klasse &quot;show&quot;, dit is de klasse die we zullen gebruiken om het effect van de animatie toe te voegen.

## Een beetje JavaScript

Voor deze demo zullen we een stukje JavaScript maken om een nieuw item toe te voegen aan de lijst, daarna voegen we de &quot;show&quot; klasse toe zo dat de animatie kan doorgaan. Er is een reden om dit proces in twee stappen uit te voeren. Als de lijst items zouden worden toegevoegd in een zichtbare staat, zou er geen tijd zijn om de transitie te laten doorgaan.

We zouden dit kunnen vermijden door een animatie te voorzien op de `li` elementen, dit zou echter moeilijker zijn om te overschrijven als je de elementen verwijdert zonder een andere animatie.
 
  
    /*
     * Add items to a list - from cssanimation.rocks/list-items/
     */
    document.getElementById('add-to-list').onclick = function() {
      var list = document.getElementById('list');
      var newLI = document.createElement('li');
      newLI.innerHTML = 'A new item';
      list.appendChild(newLI);
      setTimeout(function() {
        newLI.className = newLI.className + " show";
      }, 10);
    }

## Geen animatie

We kunnen basis CSS schrijven om de lijstitems te tonen. We gebruiken de `show` klasse als een manier om hen zichtbaar te maken, de `show` klasse verwijderen zou ze dus moeten doen verdwijnen.
 
    li {
      list-style: none;
      background: #d1703c;
      color: #fff;
      height: 0;
      line-height: 2em;
      margin: 0;
      padding: 0 0.5em;
      overflow: hidden;
      width: 10em;
    }

    li.show {
      height: 2em;
      margin: 2px 0;
    }

In deze stijl zetten we de `li` elementen op om er uit te zien als rechthoeken, zonder de opsommingstekens en geven we hen een `height` van 0 en een `margin` van 0 met de `overflow` op hidden. Dit is om ze onzichtbaar te doen lijken tot we de klasse `show` toevoegen.

De `show` klasse heeft effect op de hoogte en de marge. Omdat we nog geen animatie gebruiken zouden de items&nbsp;op deze manier gewoon&nbsp;plots op de pagina moeten verschijnen. Probeer ook eens op de lijstitems te klikken om ze te zien verdwijnen.

<section class="add-to-list demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

### Fade

Als eerste animatie voegen we een simpel fade effect toe. De lijstitems verschijnen steeds iets meer als ervoor. Visueel ziet dit er wat onhandig uit maar het heeft als voordeel dat gebruikers langer de tijd hebben om te zien dat er iets gebeurd.

<section class="add-to-list fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

Om het effect toe te voegen heb ik een apart stukje CSS gemaakt. Om dit toe te voegen aan uw lijst voeg je de klasse `fade` toe aan een container rond uw lijst.
 
    .fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
      height: 2em;
    }
    .fade li.show {
      opacity: 1;
    }

### Slide down &amp; Fade

De plotse sprong telkens er een item wordt toegevoegd of verwijderd is een beetje schokkerig. We zullen de hoogte ook aanpassen om een zachter slide effect te bekomen.

<section class="add-to-list slide-fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

Het verschil tussen dit en de `fade` klasse hierboven is enkel dat `height: 2em` verwijderd is. De `show` klasse heeft een ingestelde hoogte (overge&euml;rfd van het eerste stukje CSS), de transitie op de hoogte zal automatisch gebeuren.
 
    .slide-fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
    }
    .slide-fade li.show {
      opacity: 1;
    }

### Binnen schommelen

Samen met de fade en slide kunnen we ook nog verder gaan door een klein 3D effect toe te voegen. De browser kan elementen transformeren in meer dan de X en Y richting, dit is handig om diepte toe te voegen aan scenes.

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

Om dit op te zetten moeten we de omliggende `section` defini&euml;ren als een stage waarin de 3D transitie plaats vindt. We doen dit door het een `perspective` waarde te geven.

Perspectief in CSS is de diepte van de scene. Een lager nummer betekent een minder diep perspectief, met hardere hoeken. Het is de moeite waard om met deze waarde te spelen en zien wat specifiek voor u werkt.
 
    .swing {
      perspective: 100px;
    }

Vervolgens zetten we de `li` elementen zo op, om naar hun plaats te transformeren. We gebruiken `opacity` om een fade effect te bekomen, zoals voordien, maar we voegen ook een `transform` toe om de `li` in plaats te roteren.
 
    .swing li {
      opacity: 0;
      transform: rotateX(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

    .swing li.show {
      opacity: 1;
      transform: none;
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

In dit voorbeeld beginnen we met de `li` die -90 graden gedraaid is. Als de `show` klasse wordt toegevoegd zal de `transform` worden terug gebracht naar `none`, om het naar zijn zijn plaats te brengen. Om het een schommelend effect te geven gebruiken we de `cubic-bezier` timing functie.

### Binnen schommelen uit de zijkant

We kunnen dit effect aanpassen om makkelijk andere stijlen te cre&euml;ren. Hieronder een voorbeeld waarbij de items binnen schommelen van opzij.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Lijstitem</li><li class="show" style="background-color: #3cd19e;">Lijstitem</li>
</ul>
<button>Een lijstitem toevoegen</button></section>

Om dit effect te cre&euml;ren moeten we enkel de as van de rotatie aanpassen.
 
    .swing li {
      opacity: 0;
      transform: rotateY(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

Het enige wat we verandert hebben is `rotateX` in `rotateY`.

## Prefixes en browser testing

De code hierboven bevat, omwille&nbsp;van de leesbaarheid, nog geen prefixes. Het is aanbevolen om prefixes toe te voegen om browsers te ondersteunen die de `-webkit` of een andere&nbsp;prefix&nbsp;nodig hebben. Ik gebruik [Autoprefixer](https://github.com/postcss/autoprefixer) zodat ik niet hoef in te zitten met die soort zaken.

Omdat deze animaties bovenop het basis show/hide mechanisme worden geplaatst zouden ze nog steeds functioneel moeten blijven op browsers die dit soort animaties niet ondersteunen. Het is belangrijk om in verschillende browsers en toestellen te testen maar de meeste moderne browsers zouden dit soort animatie moeten ondersteunen.
