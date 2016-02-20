---
layout: post
title: Mac Plus CSS
description: Creating a 3D model of the classic Mac Plus with CSS
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: Recreate Apple's classic Mac Plus
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Matt Chabros
translator_link: http://matchabros.com
---

Zawsze będę pamiętał dzień w którym poraz pierwszy przyszło mi korzystać z Apple Mac Plus. W tym poście postaram się oddać hołd temu komputerowi odtwarzając go w CSS.

## W stylu retro

Zbudujmy teraz (wirtualnie) komputer. Nie byle jaki komputer, ale komputer który dla większości z nas był wstępem do świata Apple. Macintosh Plus, kryptonim Mr. T, poraz pierwszy został przedstawiony w roku 1986 z szalenie pojemną pamięcią RAM 1MB oraz procesorem 8Mhz. Oprócz całej tej dzikiej mocy obliczeniowej posiadał również uroczy design, co sprawiało że był jeszcze ciekawszy w użyciu.

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

W tym projekcie zbuduję model 3D Macintosha Plus i wyświetlę go w plaszczyźnie trójwymiarowej. Wykorzystując animację CSS Keyframe sprawimy że będzie się poruszał aby lepiej ukazać efekt 3D.

## Dlaczego CSS ?

CSS jest standardem stylizowania stron internetowych. Zajmuje się wszystkim - od fontów, kolorów, pozycjonowania aż do tła, dzięki temu stał się niezbędnym narzędziem tworzenia stron internetowych. Nie jest tylko dla treści dwuwymiarowej. Z wykorzystaniem przemian 3D oraz pozycjonowania można również nadać głębi używając CSS.

Tworzenie scen w CSS skutkuje mniejszym rozmiarem niż gdybyśmy używali obrazów. Na tym przykładzie, CSS jest skompresowany do 4KB a HTML do mniej niż 1KB. Ekwiwalent w postaci zdjęcia zajmowałby 100KB albo i więcej.

## Wersja demonstracyjna i kod źródłowy

Sprawdź [CSS Mac Plus online](https://cssanimation.rocks/mac/).

Pełny kod źródłowy [może być ściągnięty tutaj](https://github.com/donovanh/mac/archive/master.zip), a cały plik CSS możecie zobaczyć na [Github](https://github.com/donovanh/mac/blob/master/stylesheets/screen.css).

Możesz śledzić `przykłady` w folderze [projektu](https://github.com/donovanh/mac/archive/master.zip).

## Prefixy

Pominąłem prefixy z tego względu aby kod był lepiej czytelny. Pracując sam, pamiętaj aby dodać ów prefixy dla innych przeglądarek, jak `webkit`, `moz`, `ms`, i `o`.

## Przygotowanie sceny

Tworząc 3D przy wykorzystaniu HTML, musimy mieć scenę na której będziemy budować. Rozpocznij od kontenera HTML:

    <div class="stage"></div>

Prosty div z klasą stage który służy jako kontener dla naszego obiektu 3D.

Aby założyć go jako kontener 3D, ustanawiamy kilka właściwości CSS `perspective (perspektywa)` i `perspective-origin (punkt wyjściowy perspektywy)`. Perspective jest podobne do znikającego punktu sceny w perspektywnie graficznej. Im mniejsza wartość tym punkt znikający jest krótszy a efekt bardziej wyrazisty. Zdjęcie poniżej przedstawia jak zmiany wartości zmieniają kształt sceny:

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### Spróbuj

Jeżeli chcesz spróbować, znajdź `screen.css` w folderze `examples/01-Perspective`. Będziesz w stanie aktualizować wartość perspective i zobaczyć efekt otwierając plik `index.html` w swojej przeglądarce.

`perspective-origin` ustawia pozycję oglądania. Zmiany powodują że możemy obserwować scenę patrząc z góry, z dołu lub z boku.

Na tym przykładzie, wartość perspective wynosi 1,600 pixeli. CSS wygląda tak:

    .stage {
      perspective: 1600px;
      perspective-origin: 50% 100px;
    }

Folder `stylesheets` który znajduje się w pliku ZIP projektu zawiera całą gamę wartości sceny, między innymi tło, szerokość oraz wysokość.

## Planowanie struktury

Z gotową już sceną, wykorzystamy kilka elementów HTML do stworzenia komputera. Zamiast próbować zawrzeć każdy najmniejszy szczegół, skupimy się bardziej na froncie.

Obudowa Maca jest pudełkiem, lekko przechylonym w tył stojącym na płaskiej podstawie.

Oznacza to stworzenie dwóch pudełek, jednego przechylonego lekko w tył, stojącego na drugim, niższym. Aby uzyskać ów efekt, wykorzystamy `transform (transformacja)`.

Jeżeli chciałbys przeanalizować cały kod HTML, znajduje sie w pliku `index.html` który mieści się w folderze projektu.

## Transforms

`transform` pozwala nam na rotację, pochylenie oraz na zmniejszanie i powiększanie elementów na stronie. Możemy wykorzystać rotację oraz pozycjonowanie aby stworzyć naszą scenę.

Własność `transform` może wyglądać tak:

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

Budujesz transform łącząc serię instrukcji. W tym przykładzie element jest obrócony o 45 stopnii wzdłóż osi Y oraz wgłędbiony o 100px wdłóż osi Z

Powinno to wyglądać mniej więcej tak:

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

Przykłady CSS transform mogą być znalezione w folderze `examples/02-Transforms`. Znajdują się tam dwa elementy których pozycję można zmienić modyfikując wartości w pliku `02-Transform/css/screen.css`.

### Transform-origin (Punky Wyjściowy Transformacji)

Podczas obracania elementów warto mieć na uwadze fakt że transforms mają wartość wyjsciową którą można zdefiniować. Wartość wyjściowa transform jest punktem do którego można nawiązać precyzując wartosci osi X, Y oraz Z. Tak wygląda domyślnie:

    .default-origin {
      transform-origin: 50% 50% 0;
    }

Budując ten przykład zostawiłem wartości domyślne, ale dobrze jest wiedzieć, że można je zmienić.

## Tworzenie obudowy

Możemy wykorzystać transforms aby zbudować obudowę komputera. HTML wygląda mniej wiecej tak:

    <div class="stage">
      <div class="positioning animated">
        <div class="mac">
          <figure class="back"></figure>
          <figure class="left"></figure>
          <figure class="right"></figure>
          <figure class="top"></figure>
          <figure class="base-front"></figure>
          <figure class="base-left"></figure>
          <figure class="base-right"></figure>
          <figure class="base-back"></figure>
          <figure class="front"></figure>
          <figure class="shadow"></figure>
        </div>
      </div>
    </div>

`div` który znajduje się wewnątrz sceny zostanie wykorzystany do pozycjonowania komputera na stronie. Wewnątrz znajduje sie Mac. Dwie skrzynki tymczasowo zbudowane są z elementów `figure`. Ów elementy reprezentują boki, górę, front oraz tył dwóch skrzynek.

Znajduje się tam również element `figure` reprezentujący cień.

Przykład może być znaleziony w folderze `examples/03-Boxes`

Efekt końcowy który chcemy uzyskać będzie wyglądał właśnie tak:

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

Każda ze skrzynek jest przeobrażona przy pomocy własności CSS `transform` oraz `gradients` któro nadaje scenie głębi.

CSS wygląda tak:

    .front {
      height: 11.5em;
      width: 9.6em;
      background: #e0e0e0;
      transform: rotateX(5deg) translateZ(5.43em);
    }
    .back {
      height: 11.5em;
      width: 9.6em;
      background: linear-gradient(top, #f2f2f2, #e6e6e6 0.25em, #c2c2c2);
      transform: rotateX(5deg) translateZ(-5.45em) rotateY(180deg);
    }
    .top {
      height: 10.95em;
      width: 9.6em;
      background-color: #ebf0dc;
      background: linear-gradient(left, #fafafa, #d9d9d9 0.25em, #d9d9d9 9.35em, #fafafa);
      transform: rotateX(5deg) rotateX(90deg) translateZ(5.45em);
    }
    .left {
      height: 11.5em;
      width: 10.9em;
      background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
      transform: rotateX(5deg) rotateY(-90deg) translateZ(5.45em);
    }
    .right {
      height: 11.5em;
      width: 10.9em;
      background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
      transform: rotateX(5deg) rotateY(90deg) translateZ(4.14em);
    }
    .base-front {
      height: 2.1em;
      width: 9.6em;
      background: #c2c2c2;
      transform: translateY(10.7em) translateZ(5em);
    }
    .base-back {
      height: 2.1em;
      width: 9.6em;
      background: #b3b3b3;
      transform: translateY(10.7em) translateZ(-5em) rotateY(180deg);
    }
    .base-left {
      height: 2.1em;
      width: 10em;
      background: #b3b3b3;
      transform: translateY(10.7em) rotateY(-90deg) translateZ(4.99em);
    }
    .base-right {
      height: 2.1em;
      width: 10em;
      background: #b3b3b3;
      transform: translateY(10.7em) rotateY(90deg) translateZ(4.58em);
    }
    .shadow {
      width: 10em;
      height: 11em;
      background: transparent;
      transform: rotateX(90deg) translateZ(-7.4em) translateX(20em);
      box-shadow: -20.2em 0 1.8em rgba(100, 90, 100, 0.4);
    }

Każda z `figure` posiada szerokość, wysokość, tło CSS z gradientem lub kolorem. `figure` są później ustawione przy pomocy własności **transform**. Na przykład, strona lewa jest obrócona o 90 stopnii zanim zostanie przesunięta do tyłu o połowę szerokości komputera.

Przednia `figure` jest przesunięta do przodu wzdłóż osi Z o połowę długości komputera a tył obrócony o 180 stopni zanim zostaje przesunięty do tyłu.

Dla górnej części obudowy każda z `figure` jest obrócona o 5 stopni w tył wzdłóż osi X. Oznacza to, że główna część Macintosha Plus jest odchylona.

W końcu `figure` odpowiedzialna za cień wykorzystuje własność CSS `box-shadow` do stworzenia wrażenia że obudowa stoi na płaskiej powierzchni.

## Bezels (Ramki)

Cechą tego komputera są nachylone krawędzie z przodu. Krawędzie, do których będę nawiązywał od tej pory jako ramki, pomagają wygładzić twarde rogi obudowy i sprawić aby wyglądała mniej jak pudełko.

Aby to osiągnąć dodam kilka dodatkowych elementów do frontowych `figure`, w taki sposób:

    <figure class="front">
      <span class="bezel-top"></span>
      <span class="bezel-left"></span>
      <span class="bezel-right"></span>
      <span class="bezel-bottom"></span>
    </figure>

Elementy `span` w środku frontowych `figure` reprezentują jedną z ramek. Po stylizacji będą wyglądały tak:

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

Przykład może być znaleziony w folderze `examples/04-Bezels`

Następujący CSS pozycjonuje każdą z nich oraz dzięki wykrozystaniu sztuczki z `border-width` tworzymy nachylone krawędzie.

    .front .bezel-top {
      border-top: 0.75em solid #f2f2f2;
      border-right: 0.5em solid transparent;
      border-left: 0.5em solid transparent;
      width: 8.6em;
    }
    .front .bezel-left {
      border-top: 0.5em solid #d9d9d9;
      border-right: 0.75em solid transparent;
      border-left: 0.75em solid transparent;
      width: 10em;
      transform: rotateZ(-90deg) translateX(-5.5em) translateY(-5.5em);
    }
    .front .bezel-right {
      border-top: 0.5em solid #d4d4d4;
      border-right: 0.75em solid transparent;
      border-left: 0.75em solid transparent;
      width: 10em;
      transform: rotateZ(90deg) translateX(5.5em) translateY(-3.62em);
    }
    .front .bezel-bottom {
      border-top: 0.75em solid #cccccc;
      border-right: 0.5em solid transparent;
      border-left: 0.5em solid transparent;
      width: 8.65em;
      transform: rotateZ(180deg) translateY(-10.76em);
    }

Każda ramka ma 3 obramowania. Dla górnej ramki, ustawiliśmy pokolorwane obramowanie. Potem ustanawiamy dwie _przezroczyste_ obramowania po stronie lewej i prawej. W CSS, kiedy spotkają się obramowania w dwóch kolorach, linia, w której się łączą, jest ukośna. Oznacza to, że przezroczyste obramowanie doda widoczną ukośną krawędż przy łączeniach obramowań.

Wykorzystujemy ów technikę przy każdej z ramek, tworząc dzieki temu efekt pochylonych krawędzi.

Ramki mają również transform aby je obrócic oraz ustawić z boku przedniej części.

## Więcej detali

Z gotową główną obudową komputera możemy dodać kilka szczegółów które sprawią, że będzie wyglądał jak Macintosh Plus jak na przykład ekran, ikonka oraz stacja dyskietek.

Przednia część zawiera ten HTML:

    <figure class="front">
      <span class="bezel-top"></span>
      <span class="bezel-left"></span>
      <span class="bezel-right"></span>
      <span class="bezel-bottom"></span>
      <figure class="screen-container">
        <span class="screen">
          <p>hello, Dave</p>
          <span class="sheen"></span>
        </span>
      </figure>
      <figure class="logo">
        <span class="image"></span>
        <span class="text">Macintosh Plus</span>
      </figure>
      <figure class="floppy"></figure>
    </figure>

Działający przykład znajduje się w `examples/05-Completed`

### Ekran

Ekran zbudowany jest z kilku elementów, zawiera kontener, sam ekran oraz połyskujący efekt ekranu.

Efekt uzyskujemy dzięki `gradients` aby sprawić wrażenie że jest włożony w komputer a połysk jest uzyskany dzięki prawie przezroczystemu gradientowi na elemencie `span`.

### Logo

Logo składa się z dwóch części: obrazka i tekstu. `span` zawiera tło z obrazkiem dawnego kolorowego loga Apple, a tekst jest ustawiony obok. CSS do ów elementów może być znaleziony w plikach źródłowych.

Aby stworzyć ten wygląd dodany jest wbudowany font. Wykorzustujemy własność `font-face`. Jest wiele sposobów na uzyskanie tego efektu, bodajże najłatwiejszym sposobem jest wykorzystanie serwisu [Font Squirrel’s @font-face generator](http://www.fontsquirrel.com/tools/webfont-generator) aby stworzyć następujący CSS:

    @font-face {
      font-family: "apple_garamondregular";
      src: url("../fonts/apple_garamond-webfont.eot");
      src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
      font-weight: normal;
      font-style: normal;
    }

Font Squirrel pomaga nam generować różne pliki(eot, woff itd.) które mogą być umieszczone w naszym projekcie i wykorzystane w CSS jak pokazano powyżej.

Rezultat przypomina oryginał.

### Stacja dyskietek

Stacja dyskietek jest pojedynczym elementem, wykorzystujemy obramowania CSS aby nadać jej charakterystyczny wygląd. CSS który tworzy ów efekt wygląda tak:

    .floppy {
      height: 0.2em;
      width: 2.8em;
      transform: translate3d(4.8em, 8.9em, 0);
      background: #555555;
      border-top: 0.1em solid #cccccc;
      border-right: 0.3em solid #e6e6e6;
      border-bottom: 0.1em solid #f2f2f2;
      border-left: 0.3em solid #e6e6e6;
      border-radius: 0.25em;
    }

Stacja dyskietek ma stałe szare tło oraz cztery obramowania. Górne jest najciemniejsze, dolne nieco jaśniejsze aby wyglądało na oświetlone z góry. Na koniec, `border-radius` zaokrągla krawędzie.

## Składanie wszystkiego do kupy

Każda z części kiedy złożona w całość wygląda tak:

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## Dodawanie animacji

Na razie to co mamy wygląda dobrze, teraz wprawimy komputer w ruch aby podkreślić jego właściwości 3D. Aby to uzyskać wykorzystamy własność animacji CSS `keyframe`.

W CSS są dwa typy animacji. `Transitions (przejścia)`, w której elementy na stronie są animowane z jednego stylu na inny lub z jednej pozycji na drugą, `keyframes` reprezentuje bardziej złożone kroki animacji.

Seria `keyframes` może być opisana w procentach a CSS zajmującym się opisaniem wyglądu każdego kroku. Mogłoby to wyglądać tak:

    @keyframes back-and-forth {
      0% {
        transform: rotateY(40deg);
      }
      40%, 50% {
        transform: rotateY(-40deg);
      }
      90%, 100% {
        transform: rotateY(40deg);
      }
    }

W tym przykładzie, animacja jest nazwana **back-and-forth** i składa się z trzech kroków. Rozpoczyna się od obrócenia o 40 stopni. Przy 40% jest obracane o _minus_ 40 stopni. Pozostaje w tej pozycji aż do 50%, potem przy 90% wraca do pozycji wyjściowej.

Przeglądarka automatycznie wypełnia luki animując właściwości. W tym wypadku animuje stopnie rotacji.

### Zastosowanie animacji

Aby zastosować ów animację wykorzystujemy znacznik CSS **animation (animacja)**.

Znacznik `animation` wygląda tak:

    animation: back-and-forth 14s ease-in-out infinite;

Kilka rzeczy jest połączone w jednej linijce kodu. Nawiązuje do animacji po jej nazwie (“back-and-forth”), wyznacza `duration (czas trwania)` 14 sekund oraz mówi aby animacja trwała w nieskonczoność. `ease-in-out` nawiązuje do `easing` któro mówi przeglądarce aby animacja się stopniowo rozpoczynała oraz kończyła.

Zastosowanie animacji w divie “positioning” wygląda tak:

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## Czego się nauczyliśmy

Pokryliśmy kilka technik tworząc obiekt 3D w CSS. Ustanowiliśmy `perspective` oraz `perspective-origin`. Następnie do obracania, poruszania i pozycjonowania elementów wykorzystaliśmy `transforms`, dodaliśmy `gradients` aby nadać bardziej realistyczny efekt 3D i do dodania głębi ramkom użyliśmy `border`. W końcu wykorzystaliśmy `keyframes` oraz `animation` aby tchnąć życie w naszą scenę.

### Kompatybilność przeglądarek

Nie wszystkie przeglądarki obsługują transformacje CSS. Internet Explorer będzie sobie słabo radził, ale jest szansa aby obsługa [została wprowadzona wraz z IE 11](http://caniuse.com/transforms3d). Wszystkie ówczesne wersje Chrome, Safari oraz Firefox poradzą sobie bez problemu.

[Modernizr](http://modernizr.com/) zawiera kilka narzędzi JavaScript do wykrywania możliwości przeglądarek i w razie konieczności pokazywania materiału zastępczego kiedy przeglądarka nie może wspierać pewnych własności CSS. W przykładowym kodzie powyżej dowiesz się, że wykorzystałem Modernizr do wykrywania obecności obsługiwanych własności 3D. W razie jakby sie nie pojawiły, pokazywane jest zdjęcie.

## Brnąc do przodu

Pomimo tego, że przykłady powyżej wydają się nieprzydatne na normalnej stronie internetowej są to jednak techniki które mogą być zastosowane w różnych scenariuszach.

Na przykład, transformacje CSS mogą być wykorzystane aby nadać głębi przejsciom na stronie, karuzelom zdjęć, logom oraz przyciskom. Animacje CSS mogą być zastosowane w celu dodania interesującego ruchu oraz finezji Twoim przejściom a gradienty CSS mogą nadać głębi Twojej stronie bez konieczności wykorzystywania zdjęć.

<script src="http://codepen.io/assets/embed/ei.js"> </script>
