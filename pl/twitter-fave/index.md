---
layout: post
bodyClass: shorter
title: Twitterowa animacja &quot;dodaj do ulubionych&quot;
description: Dowiedz się jak jest zbudowana nowa animacja &quot;dodaj do ulubionych&quot;, kt&oacute;ra korzysta z funkcji steps() w CSS.
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
home_image: /images/posts/steps/home.png
translator: Paweł Kuna
---

Twitter ostatnio zaktualizował przycisk &quot;dodaj do ulubionych&quot;, dodając subtelną animację. Nasza animacja będzie się składała z serii obrazk&oacute;w. Oto jak odtworzyć ją za pomocą kodu CSS i funkcji `steps`.

## Złudzenie ruchu

Efekt jest podobny do starego urządzenia [Zoetrope](http://en.wikipedia.org/wiki/Zoetrope), kt&oacute;re przedstawiało szereg obrazk&oacute;w w sekwencji, dookoła wirującego cylindra. Zamiast obracającego się cylindra, możemy wyświetlić szereg obraz&oacute;w wewnątrz elementu.

## Demo

Najedź myszką na gwiazdkę, aby zobaczyć animację:

<section class="fave demo-container tap-to-activate"></section>

W tym przykładzie zaczynamy tworząc serię zdjęć, kt&oacute;re razem stworzą animację. Do tego będziemy korzystać z serii obrazk&oacute;w składających się na animowaną ikonkę.

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

Żeby stworzyć klatki animacji musimy umieścić wszystkie obrazki w jednej linii. W tym pliku umieściliśmy wszystko w jednej linii, dzięki czemu możemy przesuwać się od pierwszej do ostatniej klatki za pomocą przesuwania tła.

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Funkcja steps()

W większości funkcji w CSS animacja płynnie przechodzi od początku do końca. Funkcja `steps` działa trochę inaczej. Zamiast gładkiej animacji, powoduje &quot;skakanie&quot; przejścia pomiędzy elementami za pomocą określonej ilości krok&oacute;w.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

Zacznijmy od kodu HTML:

    <section class="fave"></section>

### Obrazek w tle

Z tym w miejscu możemy dodać trochę styl&oacute;w i ustawić obraz w tle:

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)

    .fave {
      width: 70px;
      height: 50px;
      background: url(images/twitter_fave.png) no-repeat;
      background-position: 0 0;
    }

Do kodu dodajemy akcję&nbsp;`hover`, kt&oacute;ra powoduje, że pozycja tła zostaje przesunięta na sam koniec serii obrazk&oacute;w.

    .fave:hover {
      background-position: -3519px 0;
      transition: background 1s steps(55);
    }

Dodajmy teraz kolejną regułę: `transition`. W tym przypadku chcemy przesunąć tło za pomocą animacji, kt&oacute;ra będzie trwała 2 sekundy i wykorzystywała funkcję `steps`. Funkcja `steps` w parametrze posiada wartość `55`, kt&oacute;ra oznacza 55 klatek naszej animacji.

W efekcie po najechaniu myszką na element, tło zostanie przesunięte za pomocą 55 r&oacute;wnych krok&oacute;w.

### Dlaczego nie gif?

Animowany gif może zostać potencjalnie wykorzystany, ale w tym przypadku nie byłoby to idealne rozwiązanie. Rozmiar pliku jest zazwyczaj gorsz, a ilość klatek jest trudniejsza do opanowania. Tą metodą możemy zatrzymywać, przewijać do tyłu lub dowolnie zmodyfikować animację za pomocą CSS.

## Inne zastosowania &quot;steps()&quot;

Animowanie tła jest tylko jednym z przykład&oacute;w użycia&nbsp;`steps`. Wszystko co potrzebuje animacji w formie kolejnych krok&oacute;w może zostać stworzone za pomocą tej funkcji. Możesz na przykład użyć do stworzenia tykającego zegara.

## Ściągawka

Jeśli podoba ci się ten artykuł, możesz podzielić się nim na [Twitterze](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) lub zapisać tą przydatną ściągawkę:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
