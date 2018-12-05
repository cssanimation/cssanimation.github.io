---
layout: post
title: Klokken
description: Met behulp van CSS en wat JavaScript, kunnen we een klok ontwerpen en animeren in verschillende stijlen.
categories: [animations, transitions, javascript]
customCSS: clocks.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js]
customJS: clocks.js
imageURL: /images/posts/clocks/twelve.gif
home_image: /images/posts/clocks/home.png
tweet_text: Een klok animeren met CSS
custom_header: posts/clocks.html
demo_url: http://codepen.io/donovanh/full/vEjywy/
translator: Denis Valcke
translator_link: https://twitter.com/DenisValcke
---

Het werd tijd. In dit artikel zullen we de uitdaging aangaan om een klok te maken en animeren met behulp van simpele CSS animaties en JavaScript gebruiken om die animatie in gang te zetten.

Dit is de klok die we zullen maken met behulp van HTML, CSS, een SVG achtergrond en een beetje JavaScript. We zullen CSS animaties en transities gebruiken voor elke beweging en gebruik maken van JavaScript voor de initi&euml;le timing en om eenvoudige CSS transformaties toe te voegen.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### HTML

Om te beginnen hebben we wat HTML nodig. 
 
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

Mijn initi&euml;le aanpak was om deze drie elementen te gebruiken voor elk van de wijzers. Daarna plaatste ik rond ieder element een container element. Ondanks dat de simpelere HTML ook werkte voor de eenvoudige CSS animaties, hebben we de container elementen nodig als we de positie van de wijzers willen bepalen en ze willen animeren.

## Wijzerplaat

We beginnen met een eenvoudig ontwerp met een ronde wijzerplaat en simpele wijzers.
 
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

Je vindt [de SVG achtergrond hier](/images/posts/clocks/ios_clock.svg). Ik heb ook een pseudo-element toegevoegd voor het zwarte cirkeltje in het midden. De wijzers van de klok kunnen achter dit pseudo-element geplaatst worden wanneer nodig.

We zouden nu iets als dit moeten hebben.

<div class="demo-container clocks single"> <article class="clock simple"></article></div>

Voor we de wijzers toevoegen, moeten we de containers positioneren.
 
    .minutes-container, .hours-container, .seconds-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

Dit stapelt iedere container bovenop de klok. Vervolgens cre&euml;ren we de wijzers.

### Uurwijzer

Elke wijzer krijgt een positie `absolute`&nbsp;en wordt in de &quot;12 uur&quot; positie geplaatst. We beginnen met de uurwijzer.
 
    .hours {
      background: #000;
      height: 20%;
      left: 48.75%;
      position: absolute;
      top: 30%;
      transform-origin: 50% 100%;
      width: 2.5%;
    }

We gebruiken percentages om de klok makkelijker te doen schalen. Dit is iets meer werk maar zorgt er voor dat het makkelijker is als deze moet passen op een mobiel toestel. We stellen de property `transform-origin` in op de onderkant van de wijzer zo dat die later kan roteren.

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours"></div> </div> </article></div>

### Minutenwijzer

De minutenwijzer is gelijkaardig maar langer en smaller.
 
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

### Secondenwijzer

De secondenwijzer is opnieuw smaller maar staat ook iets meer naar beneden zodat hij iets over het midden staat. Hiervoor zetten we `transform-origin` op 80%. Dit zorgt er voor dat 20% van de wijzer voorbij het midden zal staan.
 
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

### Animatie

Een stilstaande klok zal maar twee keer per dag juist staan. Laten we wat animaties toevoegen aan de klok zo dat ze zich meer gedraagt als een echte klok.

Sommige klokken verspringen per second en maken een tikkend geluid. Bij sommige klokken bewegen de wijzers dan weer heel vloeiend. We zullen beiden uitproberen. Eerst zullen we de handen vloeiend doen bewegen.

We kunnen een `keyframe` gebruiken om de wijzers te vertellen dat ze 360 graden moeten draaien (0% als startpositie is ge&iuml;mpliceerd).
 
    @keyframes rotate {
      100% {
        transform: rotateZ(360deg);
      }
    }

Deze keyframe zegt het element&nbsp;360 graden&nbsp;rond&nbsp;te animeren,&nbsp;wanneer&nbsp;toegevoegd met behulp van de animation property. We zullen een `linear` timing functie gebruiken om de wijzers vloeiend te doen bewegen.
 
    .hours-container {
      animation: rotate 43200s infinite linear;
    }
    .minutes-container {
      animation: rotate 3600s infinite linear;
    }
    .seconds-container {
      animation: rotate 60s infinite linear;
    }

De `hours` wijzer is ingesteld om elke 12 uur te roteren (43,200 seconden). De minutenwijzer roteert &eacute;&eacute;n keer per uur, de secondewijzer een keer per minuut.

Als je alles samenbrengt en we hebben beweging!

<div class="demo-container clocks single linear"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Als je heel goed kijkt kan je misschien zelf de minutenwijzer zien bewegen. Het zou een uur duren voor een complete rotatie en twaalf uren voor de uurwijzer om volledig rond te draaien.

De tweede wijzer doet er 60 seconden over, wat makkelijker op te merken is.

### Stappen toevoegen

We kunnen de wijzers meer doen bewegen als een normale clock door de secondewijzer te doen ronddraaien in 60 aparte bewegingen. Een simpele manier om dit te bereiken is door de `steps` timing functie te gebruiken. De `animation` property voor ieder wijzer wordt dan:
 
    .minutes-container {
      animation: rotate 3600s infinite steps(60);
    }
    .seconds-container {
      animation: rotate 60s infinite steps(60);
    }

Zowel de minuten- als de secondewijzer bewegen nu rond in 60 stappen. De browser berekend automatisch hoe die 60 stappen bewegen. 

<div class="demo-container clocks single steps"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### De correcte tijd

Allemaal goed en wel zo'n bewegende klok maar is het accuraat? Met een beetje JavaScript kunnen we de tijd correct zetten voor onze bezoekers. Hier is de code.
 
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

De functie converteert de tijd (uren, minuten en seconden) in de juiste hoek voor iedere wijzer. Dan loopt het door alle wijzers en stelt die hoek in aan de hand van de `style.transform` property van `rotateZ`.

Dit zal werken op de meeste browsers, behalve Safari of andere browsers die een prefix nodig hebben. Om dit toe te staan gebruiken we ook de `style.webkitTransform` property.

Dit stelt de klok dan in op het huidige tijdssysteem.

<div class="demo-container clocks single steps local no-bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### De seconde- en minutenwijzer uitlijnen.

We moeten er voor zorgen dat de minutenwijzer beweegt als de secondewijzer op twaalf uur komt te staan.

<img src="/images/posts/clocks/twelve.gif" alt="Minute hand moving when second hand hits 12" style="max-width: 180px" />

Als de klok voor het eerst op het scherm wordt getekend blijft er minder dan een minuut over voor de minutenwijzer moet bewegen. Om dit toe te staan moeten we uitrekenen hoe lang het duurt voor deze eerste minuut eindigt en manueel de wijzer een duwtje geven. Omdat we JavaScript gebruiken voor de eerste beweging kunnen we verdergaan met het elke minuut 6 graden te doen roteren met behulp van `setInterval`.

Voor we de minutenwijzer bewegen moeten we eerst communiceren hoe ver we in de huidige minuut staan. Deze lijntjes zijn je misschien al opgevallen.
 
    if (degrees[j].hand === 'minutes') {
      elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
    }

Deze extra lijnen zijn om na te kijken of de wijzer de minutenwijzer is en, als dat zo is, een data-attribuut in te stellen met de huidige hoek van de secondewijzer.

Als dat data-attribuut is ingesteld, kunnen we de data hieruit gebruiken om uit te zoeken wanneer we de minutenwijzer moeten bewegen.
 
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

### Bounce toevoegen

Omdat we nu JavaScript gebruiken om de minutenwijzer te bewegen moeten we de animatie property verwijderen. Eerder dan hem simpelweg te verwijderen kunnen we hem vervangen met een transitie. Dit is een opportuniteit om een beetje meer karakter aan de animatie te bezorgen.

Wanneer de JavaScript een nieuwe hoek instelt voor de wijzer zal een CSS transitie op het element de browser laten weten om deze nieuwe positie te animeren. Dit betekent dat de JavaScript enkel over de simpele hoeken gaat en de browser neemt de animatie dan voor zich.

Voor we dat doen, moeten we de code updaten om ook JavaScript te gebruiken voor de secondewijzer. Laten we deze code gebruiken om de secondewijzer containers 60 keer per minuut te animeren.
 
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

Nu JavaScript zorgt voor zowel de seconde- als de minutenwijzer, kunnen we de CSS updaten om de `animation` properties te vervangen door `transitions`.
 
    .minutes-container {
      transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
    }
    .seconds-container {
      transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
    }

Deze transities hebben effect op de `transform` property en gebruiken de `cubic-bezier` timing functie. Deze timing functie geeft de wijzers wat bounce.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### iOS 7 stijl

Ik ben een grote fan van de eenvoud van de klok die gebruikt wordt in Apple's iOS 7. Sindsdien hebben ze de wijzers langer gemaakt maar ik heb voorkeur voor de korter versie.

Door de wijzers op te maken en een achtergrondafbeelding toe te voegen met nummers, kunnen we deze stijl makkelijk nabootsen.

<div class="demo-container clocks single local bounce"> <article class="clock ios7"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Dit design is zelf ook een evolutie van de [Zwitserse Spoorweg klok](https://www.youtube.com/watch?v=IvIvKiDWDks) door Hans Hilfiker. Door een beetje opmaak te vervangen en een achtergrondafbeelding toe te voegen kunnen we onze klok aanpassen naar deze stijl.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Als je nog andere ontwerpen bedenkt mag je dat [altijd laten weten](mailto:hello@cssanimation.rocks).

## Moment.js gebruiken

E&eacute;n van mijn eerste idee&euml;n toen ik deze post plande was om de klokken in een hotel na te bootsen, de drie klokken in verschillende tijdszones.

De makkelijkste manier om aan te passen naar deze tijdszones is door de fantastische [Moment.js Timezone](http://momentjs.com/timezone/) library te gebruiken.

<div class="demo-container clocks multiple active bounce"> <article class="clock station js-new-york"><div class="label">New York</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-london"><div class="label">Londen</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-tokyo"><div class="label">Tokyo</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Je kan dit in actie zien [op Codepen](http://codepen.io/donovanh/full/vEjywy/).

## Browsercompatibiliteit

Moderne browsers kunnen de CSS transities en animaties voor deze klok aan. IE10+, de recente versies van Chrome en Firefox kunnen dit ondersteunen zonder prefixes, Safari heeft de `-webkit` prefix nodig.

Vergeet niet deze prefixes ook te gebruiken in JavaScript.

