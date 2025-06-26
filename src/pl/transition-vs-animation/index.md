---
layout: post.njk
title: Przejścia vs Animacje
description: Opis różnic między transiations (przejścia) a animations (animacje) w web animacjach.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS:
  [
    vendor/moment.min.js,
    vendor/moment-timezone.min.js,
    vendor/moment-timezone-with-data-2010-2020.min.js,
    custom/list_items.js,
    custom/clocks.js,
  ]
imageURL: /images/posts/transitions-animations/transitions-animations.gif
home_image: /images/posts/transitions-animations/transitions-animations.png
tweet_text: Kiedy powinieneś/powinnaś korzystać z przejść a kiedy z animacji?
custom_header: posts/transitions-animations.html
translator: Matt Chabros
---

Podczas tworzenia animacji na stronach internetowych, kiedy korzystasz z przejść a kiedy z animacji? Instnieją sytuacje kiedy chciałbyś/chciałabyś wykorzystać jedno a nie drugie. Omówmy różnice.

## Czym są przejścia?

Przejście zachodzi w momencie kiedy element zmienia swój stan z jednego na drugi a przeglądarka wypełnia ów zmianę sekwencją klatek które to przejście wypełnia. Posiada stan początkowy i końcowy.

Najczęściej przejścia można zaobserwować podczas najeżdżania (hover state) kursorem na link lub podczas dodawania i usuwania informacji ze strony internetowej. Najeżdżanie (hover) może mieć subtelną zmianę koloru fontu oraz, informacja na stronie może z widzialnej przejść w niewidzialną.

Z tego względu przejścia są ograniczone tylko do dwóch faz, być może brakuje im niuansów animacji ale tym samym sprawia że są łatwiejsze w używaniu.

### Kiedy z nich korzystać

Kiedy chcesz płynnie zmienić stan elementu z jednego na drugi przejście to dobry wybór. Przejścia mogą się zająć prostymi zmianami a funkcje czasowe (timing functions) mogą być wykorzystane do dostosowania sposobu w jaki animacja przebiega.

Przejście działa świetnie w momencie kiedy ktoś najeżdża (hover on) lub klika na guzik:

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

Lub w momencie kiedy nowy element jest dodany na stronę:

<section class="add-to-list swing demo-container">
  <ul>
```html
<li class="show" style="background-color: #d13c9e;">A list item</li>
<li class="show" style="background-color: #3cd19e;">A list item</li>
```
  </ul>
  <button>Add a list item</button>
</section>

## Czym są animacje (animations)?

Animacje CSS są potężniejszą alternatywą przejść. Zamiast polegać na zmianie stanu początkowego w stan końcowy, animacje mogą się składać z dowolnej ilości stanów, tym samym oferują większą kontrolę nad przebiegiem animacji.

Gdzie przejście przebiega od punktu A do punktu B, animacja może przejść od punktu A do B potem z B do C kończąc na D. Ilość etapów zależy od zapotrzebowania.

Animacje osiągają ów efekt dzięki serii `keyframes` (kluczowe klatki). Gdzie przejście może być określone jedną linijką w klasie, animacja działa poprzez odwołanie się do keyframes które są osobno opisywane w CSS.

### Kiedy z nich korzystać

Kiedy animacja musi przebiegać w momencie załadowania się strony lub jest bardziej skomplikowana od prostego przejścia z punktu A do B, animacja CSS może się okazać bardziej stosowna.

Przykładem może być animacja na stronie która odtwarza się po danym upływie czasu, jak ten efekt mrugania u Baymaxa:

<section class="demo-container baymax-container">
  <a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a>
</section>

Animacja CSS może być dobrym wyborem w momencie kiedy animowany przedmiot ma się poruszać jak na przykład instrukcje na stronie które ujawniają się w różnych miejscach zainteresowania po najechaniu na nie kursorem myszki.

## Czasami nie jest to aż tak oczywiste

Ostatni post rozpoczął się jako animacja ale później stał się zadaniem dla przejścia.

<div class="demo-container clocks single local bounce">
  <article class="clock station">
```html
<div class="hours-container">
  <div class="hours angled"></div>
</div>
<div class="minutes-container">
  <div class="minutes angled"></div>
</div>
<div class="seconds-container">
  <div class="seconds"></div>
</div>
```
  </article>
</div>

Kiedy rozpocząłem projektowanie tego zegara, wskazówki poruszały się nieprzerwanie. Był to dobry przkład wykorzystania właściwości `animation`. Animacja miała rozpocząć się podczas załadowania strony i trwać w nieskonczoność. W momencie kiedy animacja zacznała być bardziej złożona zauważyłem że więcej sensu miałoby aby za kąt wskazówek odpowiedzialny był JavaScript.

Wskazówki poruszane są przy pomocy JavaScript'u, `transitions` (przejście) stało się lepszym wyborem. Gdy JavaScript zmienia kąt wskazówek, CSS `transition` zajmuje się zmianą z puntku A do B z większą elegancją niż animacja CSS.

Dla większej ilości informacji sprawdź [poradnik - Zegar CSS](/clocks/).

## Podsumowanie

Do tworzenia płynnych przejść z jednego stanu do drugiego, wykorzystujemy przejścia a animacje do bardziej skomplikowanych serii ruchów.

Przejścia generalnie są łatwiejsze w tworzeniu i zarządzaniu, można je wykorzystać w większości sytuacji. Jeżeli wymagasz większej kontroli nad animowaniem elementu poprzez serię kroków lub, kiedy animacja musi rozpocząć się podczas ładowania strony, animacja z wykorzstaniem keyframes będzie lepszym wyborem.
