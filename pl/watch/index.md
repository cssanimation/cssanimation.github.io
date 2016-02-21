---
layout: post
title: Tarcze Apple Watch
description: Odtworzenie radialnych tarcz Apple Watch za pomocą CSS.
categories: [animation, tips, animations, transitions, apple watch]
customCSS: watch.css
imageURL: /images/posts/watch/watch.gif
home_image: /images/posts/watch/watch.png
tweet_text: Odtworzenie tarcz Apple Watch za pomocą CSS.
custom_header: posts/watch.html
translator: Mateusz Kurlit
translator_link: http://transgent.co.nf
---

Po ogłoszeniu nowego zegarka firmy Apple w tym tygodniu, postanowiłem stworzyć tarcze aktywności za pomocą CSS.

W tym artykule wykorzystamy animacje klatek kluczowych CSS i sztuczki z `overflow`, aby stworzyć radialne paski postępu znajdujące się w sekcji aktywności nowego zegarka od Apple.

## Demo

Oto przykład końcowego efektu.

<section class="demo-container watch-container"><article class="watch"><div class="bg-image"></div> <div class="screen"> <header><span class="title">Activity<span class="title">&nbsp;<span class="time">10:09</span> </header><section class="dials"><div class="dial move"> <div class="dial-background one"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> <div class="dial exercise"> <div class="dial-background two"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> <div class="dial stand"> <div class="dial-background three"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> </section><section class="pips"><div></div> <div></div> <div></div> <div></div> </section></div> </article></section>

## Radialne paski postępu

Wyświetlacz aktywności zegarka składa się z 3 tarcz. Każdy jest czymś w rodzaju paska postępu w kształcie łuku wok&oacute;ł okręgu. Stworzenie tego kształtu jest trochę skomplikowane, ale możemy to zrobić wykorzystując dwa kliny i starannie dopasowaną animację.

Rozpoczniemy od prostego kształtu p&oacute;łkola.

<section class="demo-container"><div class="example example0"> <div class="wedge"></div> </div></section>

Tak wygląda kod HTML dla tego kształtu:

```
<div class="dial-container">
  <div class="wedge"></div>
</div>
```

Nadajemy klinowi kształt p&oacute;łkola korzystając z właściwości `border-radius` i obracamy go używając `keyframe`.

```
.wedge {
  animation: rotate 4s infinite linear;
  border-radius: 0 4em 4em 0;
  background: red;
  width: 2em;
  height: 4em;
  transform-origin: 0% 50%;
}

@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
```

## Maskowanie

We wcześniejszych eksperymentach, pr&oacute;bowałem stworzenie tego efektu za pomocą właściwość `clip` w CSS. Działało w niekt&oacute;rych przeglądarkach, ale to przestarzała i skomplikowana właściwość. W zamian możemy stworzyć podobny efekt korzystając z `overflow:hidden` na kontenerze.

W grę wchodzą dwa elementy. `dial-container` jest dwa razy kr&oacute;tszy niż `wedge` i posiada właściwość `overflow` ustawioną na `hidden`. Umieszczając go poza kontenerem, możemy obr&oacute;cić go w polu widzenia.

<section class="demo-container"><div class="example example1"> <div class="wedge"></div> </div></section>

```
.dial-container {
  position: absolute;
  top: 0;
  left: 2em;
  width: 2em;
  height: 4em;
  overflow: hidden;
}
```

Kontener jest umieszczony po prawej stronie klina, a klin jest następnie obr&oacute;cony w polu widzenia.

Aby stworzyć pełne koło, musimy stworzyć drugi klin. Możemy to zrobić tworząc drugi kontener umieszczony po lewej stronie i obracając klin z prawej.

<section class="demo-container"><div class="example example2"> <div class="wedge"></div> </div></section>

Możemy teraz to połączyć i stworzyć okrągłą tarczę. Dodamy r&oacute;wnież animację, aby druga połowa tarczy zaczęła się poruszać po pierwszej.

## Pełne koło

Oto kod HTML dla tych dw&oacute;ch części. Dodałem osłonę, aby można było umieścić oba kontenery na wierzchu każdej części

```
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
</div>
```

I CSS, aby obsługiwała osłonę, kontenery i dwa kliny.

```
.wrapper {
  position: absolute;
  width: 4em;
  height: 4em;
  left: calc(50% - 2em);
}
.dial-container {
  position: absolute;
  top: 0;
  bottom: 0;
  overflow: hidden;
  width: 2em;
}
.wedge {
  background: red;
  height: 4em;
  width: 2em;
}
.container1 {
  left: 2em;
}
.container1 .wedge {
  animation: rotate-bg-1 4s infinite linear;
  border-radius: 0 4em 4em 0;
  left: 0;
  transform-origin: 0 50%;
}
.container2 {
  left: 0;
}
.container2 .wedge {
  animation: rotate-bg-2 4s infinite linear;
  border-radius: 4em 0 0 4em;
  transform-origin: 2em 2em;
}
/* First animation moves 180 degrees in the first 2 seconds */
@keyframes rotate-bg-1 {
  50%, 100% {
    transform: rotateZ(180deg);
  }
}
/* Second animation moves 180 degrees in the last 2 seconds */
@keyframes rotate-bg-2 {
  0%, 50% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(180deg);
  }
}
```

Rezultat powinien wyglądać tak:

<section class="demo-container"><div class="example example3"> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> </div></section>

## Postęp

Kolejnym krokiem jest zmienienie klina w pasek. Możemy to wykonać maskując środek. Dodanie okrągłego pseudo-elementu do kontenera i ustawienie koloru tła daje pożądany efekt.

```
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
</div>

.wrapper::after {
  content: "";
  background: #fff;
  border-radius: 50%;
  width: 3em;
  height: 3em;
  position: absolute;
  top: 0.5em;
  left: 0.5em;
}
```

Otrzymaliśmy coś wyglądające bardziej jak radialne paski postępu aktywności od Apple.

<section class="demo-container"><div class="example example4"> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> </div></section>

## Zaokrąglanie krawędzi

Prezentacja Apple Watch pokazuje ładnie zaokrąglone końce pask&oacute;w postępu. Aby to odtworzyć, dodamy i zaanimujemy kilka element&oacute;w na każdym końcu paska. Aby rozpocząć, dodamy dodatkowe elementy.

```
<div class="wrapper">
  <div class="dial-container container1">
    <div class="wedge"></div>
  </div>
  <div class="dial-container container2">
    <div class="wedge"></div>
  </div>
  <div class="marker start"></div>
  <div class="marker end"></div>
</div>
```

Znacznik `start` pozostanie na początku, a znacznik `end` musi być zaanimowany, aby podążać za paskiem postępu. Możemy poradzić sobie z tym za pomocą CSS.

```
.marker {
  background: green;
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;
  position: absolute;
  top: 0;
  left: calc(50% - 0.25em);
}
.end {
  animation: rotate-marker 4s infinite linear;
  transform-origin: 50% 2em;
}
@keyframes rotate-marker {
  100% {
    transform: rotateZ(360deg);
  }
}
```

CSS ustawia dwa znaczniki jako zielone koła i umieszcza je w g&oacute;rnej środkowej części ekranu. Następnie znacznik `end` uzyskuje animację `rotate-marker` i transformację `transform-origin` na środku kontenera. To oznacza, że podczas obracania znaczniki będą poruszały się po łuku.

<section class="demo-container"><div class="example example5"> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div></section>

Zmiana koloru znacznik&oacute;w na czerwony pozwala na wkomponowanie ich w pasek i nadanie efektu zaokrąglenia. Wzbogacenie animacji o cubic-bezier dodaje r&oacute;wnież trochę charakteru.

<section class="demo-container"><div class="example example6"> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div></section>

## Składając wszystko razem

Te trzy radialne paski postępu razem tworzą tarcze aktywności Apple Watch. Jeśli chcesz zobaczyć cały kod, pełne demo [jest dostępne na Codepen](http://codepen.io/donovanh/full/GgYEBZ/).

<section class="demo-container watch-container"><article class="watch"><div class="bg-image"></div> <div class="screen"> <header><span class="title">Activity<span class="title">&nbsp;<span class="time">10:09</span> </header><section class="dials"><div class="dial move"> <div class="dial-background one"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="dial-container container2"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> <div class="dial exercise"> <div class="dial-background two"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> <div class="dial stand"> <div class="dial-background three"></div> <div class="dial-container container1"> <div class="wedge"></div> </div> <div class="marker start"></div> <div class="marker end"></div> </div> </section><section class="pips"><div></div> <div></div> <div></div> <div></div> </section></div> </article></section>
