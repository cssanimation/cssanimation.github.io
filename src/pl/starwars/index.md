---
layout: post.njk
title: Gwiezdne Wojny
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Tytuł Gwiezdnych Wojen z 'Przebudzenia Mocy' animowane za pomocą CSS
categories: [3d, css]
imageURL: /images/posts/starwars/home.jpg
home_image: /images/posts/starwars/home.jpg
tweet_text: Tytuł Gwiezdnych Wojen animowany za pomocą CSS
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-12-10-starwars.md
translator: Mateusz Kurlit
---

Zostawcie popcorn! Dzisiaj zbudujemy tytuł filmu Gwiezdne Wojny ze zwiastuna &quot;Przebudzenie Mocy&quot;

<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen"></p>

<div class="callout">
  <p>To jest fragment kursu, <a href="/courses/animation-101/">CSS Animation 101</a>. Przez ograniczony czas możesz <em>zapłacić ile chcesz</em>. <a href="/courses/animation-101/">Zapisz się teraz!</a></p>
</div>

Ten przykład łączy w sobie animacje CSS i inne właściwości CSS, kt&oacute;re mogą być przydatne w szczeg&oacute;lności transformacje `scale`, `translate` i `rotate`.

## Transformacje

Wydaje się, że to brzmi jak tworzenie animacji, ale właściwość transformacja tak naprawdę jest używana do określania statycznej pozycji, pochylenia lub skalowania elementu. Możemy ją użyć do stworzenia wspaniałych efekt&oacute;w, ale żeby to zrobić musimy mieć inną transformacje dla każdej klatki kluczowej lub stanu, kt&oacute;ry animujemy.

## Transformacja:&nbsp;scale(), translateZ() and rotateY()

Możemy powiększyć lub zmniejszyć elementy korzystając z `scale`. Używając `translateZ`, możemy przesuwać elementy na osi Z. Osi jest reprezentowana przez linię biegnącą od ciebie przez monitor.

W tym przypadku skorzystamy z kombinacji scale i translateZ, aby sprawić, żeby słowa latały w przestrzeni.

Na koniec skorzystamy z `rotateY`, aby litery podtytułu kręciły się.&nbsp; Obracanie wok&oacute;ł osi Y będzie wymagało trochę pracy 3D w przeglądarce.

## SVG, HTML i CSS

Przygotowując ten przykład, wykonałem dwa pliki SVG dla fragment&oacute;w logo [Star](/demo/starwars/images/star.svg) i [Wars](/demo/starwars/images/wars.svg). Nie krępuj się i skorzystaj z nich, jeśli chcesz.

Kod HTML tego dema wygląda następująco:

```html
<div class="starwars-demo">
  <img src="/images/star.svg" alt="Star" class="star">
  <img src="/images/wars.svg" alt="Wars" class="wars">
  <h2 class="byline" id="byline">The Force Awakens</h2>
</div>
```

Statyczny obraz [nieba z gwiazdami](/demo/starwars/images/bg.jpg) został użyty jako tło. Czcionkę podtytułu było ciężko znaleźć, więc w tym przykładzie odwołałem się do czcionki internetowej &quot;Lato&quot;.

Korzystając z pozycjonowania absolutnego, aby wyśrodkować treść na ekranie, zaczniemy od tego:

<img src="/images/posts/starwars/starwars.jpg" />

## Animowanie Star i Wars

Chcemy, aby tekst pojawił się, zaczynając od dużego rozmiaru i z czasem stawał się coraz mniejszy. To jest zadanie dla transformacji `scale()`. Użyjemy jej na słowie &quot;Star&quot; za pomocą tych klatek kluczowych.

```css
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
```

Istnieją dwie właściwości, kt&oacute;re zmieniają się w czasie tej animacji. `Opacity` i `transform`. Zmiana opacity sprawia, że napis jest na początku przezroczysty i zanika na końcu tak aby można było zapętlić animację.

Transformację rozpoczniemy ustawiając skalę na `1.5`. To oznacza, że początkowy rozmiar tekstu jest o 50% większy niż normalnie. Przy 89% ustawimy właściwość transformacji do scali 1. To oznacza, że między 0% a 89%, skala przechodzi od 150% do 100%.

Końcowy `transformZ` powoduje, że słowa oddalają się błyskawicznie.

Możemy zastosować te klatki kluczowe do słowa &quot;Star&quot; w ten spos&oacute;b:

```css
.star {
  animation: star 10s ease-out infinite;
}
.wars {
  animation: wars 10s ease-out infinite;
}
```

Właściwość `animation` określa tutaj animację o nazwie `star` i trwa 10 sekund. Dotyczy wbudowanej funkcji czasu `ease-out`, kt&oacute;ra powtarza się w nieskończoność Zastosujemy podobną zasadę do słowa &quot;Wars&quot;.

## Przenoszenie do 3D

Korzystając z transformacji 3D w CSS, przekształcanie wzdłuż osi Z lub obracanie wok&oacute;ł osi Y i Z wymagane jest przy konfigurowaniu etapu 3D. Jeśli chodzi o HTML, to oznacza stworzenie kontenera i przekazanie przeglądarce, że coś w 3D może się zdarzyć.

Wykonujemy to dodając następujący kod do&nbsp;`.starwars-demo` div:

```css
.starwars-demo {
  perspective: 800px;
  transform-style: preserve3d;
}
```

Istnieją dwie właściwości, kt&oacute;re m&oacute;wią przeglądarce, że podopieczne kontenera powinny znajdować się w 3D, a nie być płaski. [Sztuczki CSS[ zagłębiają się bardziej szczeg&oacute;łowo we właściwość.

Po drugie, właściwość `perspective` m&oacute;wi przeglądarce jak &quot;głęboko&quot; scena powinna być. W tym przypadku ustawiliśmy ją na `800px`. Mniejsze wartości tworzą bardziej &quot;ekstremalne&quot; efekty perspektywy w przypadku kr&oacute;tkiej sceny.

Po objaśnieniu tego, przejdziemy do podtytułu.

## Przebudzenie Mocy

Podtytuł &quot;The Force Awakens&quot; pojawia się w zwiastunie jako litery obracające się w miejscu. Możemy stworzyć ten efekt korzystając z transformacji `rotateY`. W tym przypadku owinęliśmy każdą literę za pomocą elementu `span`, w ten spos&oacute;b możemy zastosować animację dla każdej litery.

Problem, kt&oacute;ry szybko odkryłem, to było to, że nie ma prostego sposobu na animacje każdej litery podtytułu. Pierwszym podejściem było ręczne owinięcie każdej litery tagiem `span`. To zadziałało, ale sprawiło, że kod HTML był niechlujny. Bieżące demo zawiera trochę kodu JavaScript (podziękowania dla [Tady](https://twitter.com/tadywankenobi) za pomoc), kt&oacute;ry automatycznie owija każdą literę w `span`.

Zamierzamy zastosować animację dla każdej litery.

Najpierw klatki kluczowe:

```css
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
```

Aby zacząć, litery są obr&oacute;cone o 90 stopni, następnie po 70% animacji, są animowane, aby w stronę widza.

Możemy zastosować ten zestaw klatek kluczowy dla każdego tagu span w ten spos&oacute;b:&nbsp;

```css
.byline span {
  animation: spin-letters 10s linear infinite;
}
.byline {
  animation: move-byline 10s linear infinite;
}
```

Rezultatem każdego kontenera `span`, kt&oacute;ry zawiera każdą literę, pojawi się i obr&oacute;ci w miejscu przed oddaleniem na końcu animacji.

Składając to razem otrzymamy [ukończone demo](http://codepen.io/donovanh/pen/pJzwEw?editors=110).

<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen">

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

<div class="callout">
  <p>To jest fragment kursu, <a href="/courses/animation-101/">CSS Animation 101</a>. Przez ograniczony czas możesz <em>zapłacić ile chcesz</em>. <a href="/courses/animation-101/">Zapisz się teraz!</a></p>
</div>
