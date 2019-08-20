---
layout: post
bodyClass: shorter
title: Animowanie pseudo element&oacute;w
description: Pseudo elementy zapewniają za darmo dwa dodatkowe elementy HTML! Tutaj zobaczymy jak animować je po najechaniu. Używać je mądrze.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Błyszczące przyciski w CSS
translator: Mateusz Kurlit
---

Pseudo elementy są jak uzyskanie dodatkowych element&oacute;w DOM za darmo. Pozwalają dodać&nbsp;do naszych stron dodatkową zawartość, dekorację i znacznie&nbsp;więcej&nbsp;bez dodawania dodatkowego HTML i następnie ją animować. W tym poradniku wykorzystamy pseudo element, aby dodać małą wizualną klasę do przycisku.
/pl/

<section class="shiny demo-container tap-to-activate"><button>Efekt połysku</button></section>

## Pseudo elementy

Za pomocą CSS możemy określić pseudo element wykorzystując&nbsp;`::before` or&nbsp;`::after`. Pseudo element jest następnie wstawiany w element, między element i zawartość. Ponieważ to działa jako samodzielny element, może być stylizowany, pozycjonowany i znacznie więcej. Kod wygląda mniej więcej tak:

    .pebble::before {
      ...
    }
    .pebble::after {
      ...
    }

W tym punkcie nasz element `.pebble` ma dołączone dwa wirtualne elementy i możemy stylizować je dowolnie.

### Uwaga do&nbsp;&quot;::&quot; versus &quot;:&quot;

Generalnie akceptowane jest wykorzystanie podw&oacute;jnego dwukropka&nbsp;`::`, aby oznaczyć pseudo elementy (w przeciwieństwie do pseudo klas takich jak&nbsp;:hover, :first-child). Jeśli chcesz dodać obsługę IE8, najlepiej użyć pojedynczego `:`. Wszystkie inne przeglądarki i nowsze wersje IE obsługują podw&oacute;jne.

### Nie zapomnij o &quot;treści&quot;

Podczas dodawania pseudo element&oacute;w należy zwr&oacute;cić uwagę na określenie właściwości `content` zanim będą mogły być widoczne na stronie. Gdy pseudo element jest stworzony w stanie bez treści, możemy skłonić go pojawienia się używając pustego `content`:

    .pebble::before {
      content: ""
      ... more styling goes here...
    }

To powinno załatwić element widoczny na ekranie.

## Przykład: Błyszczący przycisk

W tym przykładzie wykorzystamy pseudo element do stworzenia efektu połysku po najechaniu na przycisk. Tutaj mamy realny przykład (najedź lub stuknij, aby zobaczyć efekt).

<section class="shiny demo-container tap-to-activate"><button>Efekt połysku</button></section>

Zacznijmy od HTML:

<button>Oooh SHINY</button>

Ponieważ używamy pseudo element&oacute;w, nie potrzebujemy więcej HTML, aby kontynuować. Można dodać klasę do przycisku, jeśli stylizujesz więcej niż jeden typ na stronie, ale teraz wykorzystamy og&oacute;lny element, aby uprościć proces.

### Dodawanie efektu połysku

Efekt połysku jest liniowym gradientem, kt&oacute;ry przechodzi przez przycisk. Aby go stworzyć, użyjemy pseudo elementu `after` i ustanowimy początkową pozycję poza przyciskiem:

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

Efekt połysku składa się z gradientu od koloru przycisku do białego i z powrotem. W tym momencie jest umiejscowiony poza przyciskiem.

Musimy ukryć warstwę połysku tak, aby pojawiała się po najechaniu. Aby to zrobić, ustawimy właściwość `overflow` przycisku na `hidden`. Ponieważ pseudo element znajduje się w przycisku, jego pozycja poza przyciskiem nie będzie widoczna.

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

Wstawiłem r&oacute;wnież kilka inny styl&oacute;w, aby dać przyciskowi indywidualny wygląd. Jedną rzeczą, na kt&oacute;rą należy zwr&oacute;cić uwagę jest użycie&nbsp;`position: relative`. Dodałem tę właściwość tak, aby bezwzględnie ustawiony pseudo element będzie istniał w przycisku. Bez określania pozycji, pozycja bezwzględnie ustawiona będzie umiejscowiony w elemencie nadrzędnym.

## Dodawanie animacji

Ponieważ użyjemy animacji w tym przykładzie, wykonamy dwa dodatkowe kroki. Najpierw powiemy przeglądarce, aby rozpoczęła animację po najechaniu. Następnie ustawimy dokładnie co będziemy animować za pomocą `keyframes`.

Dodawanie stanu najechania może być wykonane przez ułożenie `after` na `hover` w taki spos&oacute;b:

    button:hover::after, button:focus::after {
      animation: sheen 1s forwards;
    }

Tutaj m&oacute;wimy przeglądarce, że po najechaniu pseudo element `after` ma mieć `animation`. Animacja o nazwie połysk trwa jedną sekundę i zatrzymuje się bez powtarzania.

Porządek ma tutaj znaczenie. Użycie&nbsp;`::after:hover` nie zadziała, ponieważ będzie m&oacute;wić przeglądarce, aby zareagować na stan najechania pseudo elementu.

Dodałem r&oacute;wnież stan skupienia. Oznacza to, że widzowie przewijający przez stronę r&oacute;wnież zobaczą efekt połysku bez potrzeby najechania. (Dziękuję [&Scaron;ime Vidas](https://twitter.com/simevidas) za wskaz&oacute;wkę)

Określmy `keyframes` dla tej animacji:

    @keyframes sheen {
      100% {
        transform: rotateZ(60deg) translate(1em, -9em);
      }
    }

Potrzebujemy tylko jednej klatki kluczowej w tym przypadku. Ponieważ początkowa pozycja (0%) wynika z pozycji pseudo elementu, opiszemy tylko pozycję końcową. W tym przypadku końcowa pozycja po drugiej stronie w g&oacute;rnym prawym rogu przycisku. Przeglądarka będzie animować efekt połysku przez cały przycisk.

<section class="shiny demo-container tap-to-activate"><button>Efekt połysku</button></section>

## Rozważania na temat przeglądarek

[Właściwość animacji jest dobrze obsługiwana](http://caniuse.com/#feat=css-animation) tak jak [pseudo elementy](http://caniuse.com/#feat=css-gencontent). Zawsze warto się upewnić i dołączyć prefiksy&nbsp;`-webkit`&nbsp;i&nbsp;`-moz` dla `keyframes` i dowolnych transformacji.
