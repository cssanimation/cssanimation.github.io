---
layout: post
title: Zegary
description: Korzystając z CSS i JavaScript, zaprojektujemy i zaanimujemy r&oacute;żne rodzaje zegar&oacute;w.
categories: [animations, transitions, javascript]
customCSS: clocks.css
extraJS:
  [
    vendor/moment.min.js,
    vendor/moment-timezone.min.js,
    vendor/moment-timezone-with-data-2010-2020.min.js,
  ]
customJS: clocks.js
imageURL: /images/posts/clocks/twelve.gif
home_image: /images/posts/clocks/home.png
tweet_text: Animowanie zegara w CSS
custom_header: posts/clocks.html
demo_url: http://codepen.io/donovanh/full/vEjywy/
translator: Mateusz Kurlit
---

Nadszedł czas. W tym artykule podejmiemy wyzwanie stworzenia i animacji zegara za pomocą prostych animacji CSS oraz języka JavaScript, aby je wywołać.

Oto zegar, kt&oacute;ry stworzymy za pomocą HTML, CSS, tła SVG i języka JavaScript. Użyjemy animacji CSS lub przejść dla każdego ruchu i oprzemy się na JavaScript, aby ustawić czas początkowy dodając podstawowe przejścia CSS.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### HTML

Rozpoczniemy od fragmentu kodu HTML.

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

Moim pierwszym podejściem było użycie trzech element&oacute;w dla każdej wskaz&oacute;wki. Następnie wr&oacute;ciłem i owinąłem każdy w element kontenera. Chodź prostszy HTML działał w miarę jak podstawowe animacje CSS, będziemy potrzebować elementy zawierające, jeśli chcemy umieścić wskaz&oacute;wki i zaanimować je.

## Tarcza zegara

Rozpoczniemy od podstawowego wyglądu zegara z okrągłą tarczą, prostymi wskaz&oacute;wkami godzin, minut i sekund.

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

Możesz [pobrać tło SVG tutaj](/images/posts/clocks/ios_clock.svg). Dodałem r&oacute;wnież pseudo-element, aby dodać czarne koło na środek. Wskaz&oacute;wki zegara mogą być umieszczone pod tym pseudo-elementem w razie potrzeby.

Powinnyśmy teraz mieć coś takiego:

<div class="demo-container clocks single"> <article class="clock simple"></article></div>

Przed dodaniem wskaz&oacute;wek, musimy umieścić kontenery.

    .minutes-container, .hours-container, .seconds-container {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

To układa każdy kontener na wierzchu zegara. Następnie tworzymy wskaz&oacute;wki.

### Wskaz&oacute;wka godzin

Każda wskaz&oacute;wka otrzymała właściwość pozycji `absolute` i została umieszczona na godzinie dwunastej. Zaczniemy od wskaz&oacute;wki godzin.

    .hours {
      background: #000;
      height: 20%;
      left: 48.75%;
      position: absolute;
      top: 30%;
      transform-origin: 50% 100%;
      width: 2.5%;
    }

Używam wartości procentowych, aby skalowanie zegar&oacute;w było łatwiejsze. To wymaga trochę więcej pracy, ale ułatwia dostosowanie wyglądu do urządzeń mobilnych. Ustawimy r&oacute;wnież właściwość `transform-origin` na dole wskaz&oacute;wki tak, aby można było ją p&oacute;źniej obracać.

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours"></div> </div> </article></div>

### Wskaz&oacute;wka minut

Wskaz&oacute;wka minut jest podobna, ale wyższa i cieńsza.

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

### Wskaz&oacute;wka sekund

Wskaz&oacute;wka sekund jest jeszcze cieńsza, ale r&oacute;wnież wystaje poza środek. Aby to zrobić ustawiłem `transform-origin` na 80%. To sprawia, że 20% wskaz&oacute;wki wystaje poza środek.

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

### Animacja

Stojący zegar będzie wskazywał prawidłową godzinę tylko dwa razy dziennie. Dodajmy animację, aby zegar zachowywał się bardziej prawidziwie.

Niekt&oacute;re zegary skaczą co sekundę wytwarzając dźwięk tykania. Inne mruczą wraz z płynnym poruszaniem się wskaz&oacute;wek. Wypr&oacute;bujemy obu sposob&oacute;w. Najpierw sprawimy, że wskaz&oacute;wki będą poruszały się płynnie.

Możemy użyć `keyframe`, aby przekazać wskaz&oacute;wkom, aby obracały się o 360 stopni (zakładamy 0% jako pozycję startową).

@keyframes rotate {
100% {
transform: rotateZ(360deg);
}
}

Ta klatka kluczowa m&oacute;wi elementowi, aby obracał się o 360 stopni po zastosowaniu dla elementu właściwości `animation`. Wykorzystamy funkcję czasu `linear`, aby wskaz&oacute;wka poruszała się płynnie.

.hours-container {
animation: rotate 43200s infinite linear;
}
.minutes-container {
animation: rotate 3600s infinite linear;
}
.seconds-container {
animation: rotate 60s infinite linear;
}

Wskaz&oacute;wka `hours` jest ustawiona tak, aby wykonywać pełny obr&oacute;t co 12 godzin&nbsp;(43,200 sekund). Wskaz&oacute;wka minut wykonuje pełny obr&oacute;t co godzinę, a wskaz&oacute;wka sekund co minutę.

Składając to razem otrzymujemy ruch.

<div class="demo-container clocks single linear"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Jeśli masz bystre oko, możesz nawet zauważyć ruch wskaz&oacute;wki minut. Pełny obr&oacute;t zajmie godzinę oraz dwanaście godzin w przypadku wskaz&oacute;wki godzin.

Wskaz&oacute;wka sekund wykonuje pełny obr&oacute;t w 60 sekund, więc łatwiej ją zauważyć.

### Dodawanie krok&oacute;w

Możemy sprawić, że wskaz&oacute;wki będą zachowywać się jak w zwykłym zegarze tworząc 60 osobnych ruch&oacute;w dla wskaz&oacute;wki sekund. Prostym sposobem na osiągnięcie tego jest użycie funkcji czasowej `steps`. Właściwość `animation` dla każdej wskaz&oacute;wki wygląda tak:

.minutes-container {
animation: rotate 3600s infinite steps(60);
}
.seconds-container {
animation: rotate 60s infinite steps(60);
}

Teraz wskaz&oacute;wki minut i sekund obracają się w 60 krokach. Przeglądarka automatycznie oblicza o ile każdy z tych 60 krok&oacute;w ma się przesunąć.

<div class="demo-container clocks single steps"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Prawidłowy czas

Dobrze jest mieć ładny zegar, ale co z wskazywaniem właściwego czasu? Z pomocą kodu JavaScript możemy ustawić prawidłowy czas dla naszych odwiedzających. Oto kod.

/\*

- Starts any clocks using the user's local time
- From: cssanimation.rocks/clocks
  \*/
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

Ta funkcja konwertuje czas (godziny, minuty i sekundy) do odpowiedniego kąta każdej wskaz&oacute;wki. Następnie zapętla każdą wskaz&oacute;wkę i stosuje kąt korzystając z `style.transform` właściwości `rotateZ`.

To zadziała na większości przeglądarek z wyjątkiem Safari i innych wymagających prefiksu. Aby to umożliwić użyjemy r&oacute;wnież właściwość&nbsp;`style.webkitTransform`.

To następnie synchronizuje zegar z czasem systemu.

<div class="demo-container clocks single steps local no-bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Wyr&oacute;wnywanie wskaz&oacute;wek sekund i minut.

Musimy się upewnić, że wskaz&oacute;wka minut przesunie się w momencie, gdy wskaz&oacute;wka sekund będzie wskazywała godzinę dwunastą.

<img src="/images/posts/clocks/twelve.gif" alt="Minute hand moving when second hand hits 12" style="max-width: 180px" />

Kiedy zegar jest po raz pierwszy rysowany na ekranie, minie mniej niż jedna minuta zanim wskaz&oacute;wka musi się przesunąć.&nbsp; Aby to umożliwić, możemy obliczyć jak długo trwa pierwsza minuta i ręcznie popchnąć wskaz&oacute;wkę. Ponieważ korzystamy z JavaScript, aby wykonać pierwszy ruch, możemy nadal obracać wskaz&oacute;wki o sześć stopni co minutę za pomocą `setInterval`.

Przed przesunięciem wskaz&oacute;wki minut, musimy zakomunikować ile trwa bieżąca minuta. Być może zauważyłeś te wiersze.

if (degrees[j].hand === 'minutes') {
elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
}

Te dodatkowe wiersze sprawdzają czy wskaz&oacute;wka jest &quot;minutowa&quot; i jeśli jest, to zestawia atrybut danych z bieżącym kątem wskaz&oacute;wki sekund.

Po ustawieniu atrybutu danych, możemy użyć ich do określenia momentu przesunięcia wskaz&oacute;wki minutowej.

/\*

- Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
  _/
  function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
  // Set a timeout until the end of the current minute, to move the hand
  var delay = (((360 - secondAngle) / 6) + 0.1) _ 1000;
  setTimeout(function() {
  moveMinuteHands(containers);
  }, delay);
  }
  }

/\*

- Do the first minute's rotation
  \*/
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

### Dodawanie odbicia

Ponieważ korzystamy z JavaScript do poruszania wskaz&oacute;wki minut, powinniśmy usunąć właściwość animacja. Zamiast usuwać, możemy zastąpić ją przejściem. To okazja, aby dodać nieco więcej charakteru do animacji.

Kiedy JavaScript ustawia nowy kąt dla wskaz&oacute;wki, przejście CSS na elemencie przekaże przeglądarce, aby animować nową pozycję. To oznacza, że JavaScript odnosi się tylko do prostych zmian kąta i przeglądarka może zająć się animowaniem ich.

Zanim to zrobimy, powinniśmy zaktualizować kod, aby użyć JavaScript r&oacute;wnież do poruszania wskaz&oacute;wką sekund. Użyjmy tego kodu, aby animować kontenery wskaz&oacute;wki sekund sześćdziesiąt razy na minutę.

/\*

- Move the second containers
  \*/
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

Po skonfigurowaniu obsługiwania wskaz&oacute;wek minut i sekund przez JavaScript, zaktualizuj CSS zastępując `animation` właściwościami `transition`.

.minutes-container {
transition: transform 0.3s cubic-bezier(.4,2.08,.55,.44);
}
.seconds-container {
transition: transform 0.2s cubic-bezier(.4,2.08,.55,.44);
}

Te przejścia dotyczą właściwości `transform` i korzystają z funkcji czasowej `cubic-bezier`. Funkcja czasowa nadaje wskaz&oacute;wkom efekt odbicia.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Styl iOS 7

Jestem wielkim fanem prostoty zegara znajdującego się w Apple iOS 7. Od tego czasu wydłużyli wskaz&oacute;wki, ale ja wolę wersję z kr&oacute;tszymi.

Stylizując wskaz&oacute;wki i dodając obrazek tła z liczbami, możemy z łatwością osiągnąć ten wygląd.

<div class="demo-container clocks single local bounce"> <article class="clock ios7"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Projekt jest ewolucją [Zegara&nbsp;Swiss Railway](https://www.youtube.com/watch?v=IvIvKiDWDks) od Hansa Hilfikera. Zmieniając kilka rzeczy i dodając nowy obrazek tła, możemy przystosować nasz zegar do tego stylu.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Jeśli opracujesz inne projekty, [daj mi znać](mailto:hello@cssanimation.rocks).

## Używanie Moment.js

Jednym z moich pierwszych pomysł&oacute;w podczas planowania tego artykułu było odtworzenie sceny z trzema zegarami hotelowymi pokazującymi r&oacute;żne strefy czasowe.

Najprostszym sposobem na ustawienie r&oacute;żnych stref czasowych jest użycie wspaniałej biblioteki&nbsp;[Moment.js Timezone](http://momentjs.com/timezone/).

<div class="demo-container clocks multiple active bounce"> <article class="clock station js-new-york"><div class="label">Nowy Jork</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-london"><div class="label">Londyn</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-tokyo"><div class="label">Tokio</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Możesz zobaczyć kod w akcji na&nbsp;[Codepen](http://codepen.io/donovanh/full/vEjywy/).

## Kompatybilność z przeglądarkami

Nowoczesne przeglądarki są w stanie obsłużyć przejścia i animacje CSS związane z zegarem. IE10+ oraz najnowsze przeglądarki Chrome i Firefox obsługują je bez prefiks&oacute;w, a Safari wymaga prefiksu `-webkit`.

Nie zapomnij dodać prefiks&oacute;w do właściwości w kodzie JavaScript.
