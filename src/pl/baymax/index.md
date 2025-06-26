---
layout: post.njk
bodyClass: shorter
title: Baymax w CSS
description: Jednoelementowa animowana wersja twarzy bohatera Baymax z filmu Big Hero 6.
categories: [animation, tips, animations, transitions, pseudo-elements]
customCSS: baymax.css
imageURL: /images/posts/baymax/baymax.gif
home_image: /images/posts/baymax/home.png
tweet_text: Animowanie twarzy Baymaxa w CSS
translator: Mateusz Kurlit
---

Użyjmy CSS, aby stworzyć bohatera o imieniu Baymax z filmu Big Hero 6.

W tym artykule będziemy animować obraz tła jak r&oacute;wnież efekt czasowy&nbsp;subtelnej animacji oraz wykonamy demo w CSS&nbsp;pojedynczego elementu HTML.

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Tutaj możesz [obejrzeć rezultat na pełnym ekranie.](http://codepen.io/donovanh/full/ZYaMjw/)

## Pojedynczy element

Wykorzystując pseudo-elementy, będziemy w stanie stworzyć fragmenty twarzy używając jeden element HTML.

```html
<div class="baymax"></div>
```

## Stylizacja

Aby skonfigurować scenę, dodamy subtelny gradient na ekran, aby wyglądała jak zakrzywiona biała głowa. Do tego użyjemy radialny gradient na `body`.

```
body {
  background: radial-gradient(circle at center, #fff, #fff 50%, #aaa);
  background-size: 100%;
  background-repeat: no-repeat;
  height: 100vh;
}
```

Następnie ustawimy twarz na środku strony. Usta to prosta czarna linia, kt&oacute;rą stworzymy korzystając z ramki.

```css
.baymax {
  border-bottom: 1.5em solid #000;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-50%, -40%);
}
```

Pierwsza właściwość szerokość czarnej ramki na `1.5em`. Następnie umieszczamy linię używając pozycjonowania absolutnego, przesuwając w d&oacute;ł o 50% i w prawo o 50%. Wartości 50% odnoszą się do rozmiaru elementu kontenera (`body`)

Pojawia się problem z elementem, kt&oacute;ry rozpoczyna się na środku i biegnie w prawo przez ekran. Nie jest na środku

Aby skorygować to, użyjemy transformacji, aby przesunąć element w lewo o 50% szerokości i w g&oacute;rę o 40% szerokości.

Na tym etapie usta są wyśrodkowane w ten spos&oacute;b:

<section class="demo-container baymax-container"><span class="baymax no-pseudo-elements"></span></section>

## Dodawanie oczu

Użyjemy pseudo-element&oacute;w `before` i `after`, aby dodać oczy do twarzy. Nie będą wymagały żadnego dodatkowego kodu HTML i mogą być całkowicie obsługiwane za pomocą CSS.

```css
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
```

```css
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
```

Każdy pseudo-element posiada czarne tło i ramkę radialną ustawioną na 50%, aby były okrągłe. Każdy jest umieszczony na końcach ust oraz posiada transformację `skew`, aby wyglądały na delikatnie pochylone Rezultat powinien wyglądać tak:

<section class="demo-container baymax-container"><span class="baymax no-animation"></span></section>

## Niski poziom baterii

W filmie możemy zobaczyć zabawną scenę, gdzie bateria Baymaxa jest słaba. Zatacza się i jego powieki opadają. Możemy skorzystać z kombinacji gradient&oacute;w tła i animacji, aby stworzyć ten efekt.

Najpierw chcemy nadać tłu dwa kolory. Czarny dla fragmentu, kiedy oko jest otwarte i biały dla powieki. Biały fragment musi być umieszczony poza oczami na początku, a następnie będziemy animować w d&oacute;ł wykonując opadanie powiek.

```css
.baymax::before {
  background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
  background-position: 0 -100%;
  background-size: 200%;
  ...
}
```

```css
.baymax::after {
  background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
  background-position: 0 -100%;
  background-size: 200%;
  ...
}
```

Dodajemy gradient liniowy tła, ustawiamy mu dwukrotność wysokości kontenera i umieszczamy go w ten spos&oacute;b, że g&oacute;rna połowa znajduje się poza kontenerem.

Po umieszczeniu dw&oacute;ch gradient&oacute;w tła, możemy dodać animację `keyframes`, aby sterować ruchem powiek.

```css
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
```

Animacja `keyframes` jest sposobem na opisanie serii klatek używając wartości procentowych. Wartość procentowa odnosi się do czasu trwania animacji. Wartość 50% oznacza, że połowę czasu trwania animacji.

W ten spos&oacute;b możemy ustawić tło, aby pozostało w g&oacute;rze przez połowę czasu, następnie od 50% do 85% przesunęło się w d&oacute;ł, by na końcu animacji wr&oacute;cić do g&oacute;ry.

Kolejnym etapem jest przekazanie pseudo-elementom, aby używały klatek kluczowych animacji. Dodaj właściwość `animation` do istniejących styl&oacute;w.

```css
.baymax::before {
  animation: blink 6s infinite;
  ...
}
```

```css
.baymax::after {
  animation: blink 6s 0.1s infinite;
  ...
}
```

Tutaj powiedzieliśmy przeglądarce, aby używała animacji `blink` na każdym elemencie. Animacja trwa 6 sekund i będzie się powtarzała w nieskończoność.

Dodatkowa właściwość znajduje się w drugim przykładzie. `0.1s` po `6s` m&oacute;wi przeglądarce, aby op&oacute;źniła animację o 0.1 sekundy. W ten spos&oacute;b drugie oko zamyka się nieco p&oacute;źniej niż pierwsze. To dodaje efekt zmęczenia i sprawia, że animacja wygląda bardziej naturalnie. Wynik końcowy powinien wyglądać tak:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Tutaj możesz&nbsp;[obejrzeć rezultat na pełnym ekranie](http://codepen.io/donovanh/full/ZYaMjw/).

## Przeglądarki

W kodzie pominąłem wszystkie typowe prefiksy `-webkit` i `-moz`. Właściwości `transform` i `animation` powinny posiadać prefiksy i zalecam wykorzystanie do tego Autoprefixera.

## Wersja gif do udostępnienia

Poniżej znajduje się wersja gif, kt&oacute;rą możesz z łatwością udostępnić w internecie.

[<img src="/images/posts/baymax/baymax.gif" style="max-width:225px" />](/images/posts/baymax/baymax.gif)
