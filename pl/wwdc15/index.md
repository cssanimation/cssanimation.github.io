---
layout: post
title: WWDC 2015
description: Tworzenie i animowanie zaproszenia na WWDC 2015 za pomocą nieprzezroczystości i kolorowania.
categories: [animation, tips, animations, transitions, wwdc]
customCSS: wwdc15.css
imageURL: /images/posts/wwdc15/wwdc15.png
home_image: /images/posts/wwdc15/wwdc15.png
tweet_text: Animowanie logo WWDC w CSS
custom_header: posts/wwdc15.html
demo_url: https://cssanimation.rocks/demo/wwdc15/
translator: Mateusz Kurlit
translator_link: http://transgent.co.nf
---

Każdego roku Apple uruchamia specjalne wydarzenie dla swoich deweloper&oacute;w. [WWDC](Międzynarodowa Konferencja Deweloper&oacute;w Apple) jest szansą dla projektant&oacute;w i deweloper&oacute;w systemu iOS i OSX, aby dowiedzieć się co szykuje Apple i czego można się spodziewać w nowych wersjach mobilnego i stacjonarnego oprogramowania.

Każdego roku tworzy piękne zaproszenie do wydarzenia. W tym roku byłem przejęty nakładającymi się k&oacute;łkami i kształtami i podjąłem decyzją wykonania tego w HTML i CSS.

## Zaproszenie na WWDC 15

Ikony Apple często wykorzystują nakładające się kolory i kształty jak [ikona&nbsp;Zdjęcia iOS 7](https://cssanimation.rocks/demo/photos/) . Tego roku zaproszenie na WWDC zawierało ten obraz:

<img src="/images/posts/wwdc15/wwdc15.jpg" alt="WWDC 15 invitation logo" style="max-width:600px" />

Składa się z zestawu nakładających się, p&oacute;łprzezroczystych kształt&oacute;w. Idealne do odtworzenia za pomocą HTML i CSS.

## Planowanie: HTML

Wykonanie tak kompleksowego elementu wymaga planowania. W tym przykładzie, podzieliłem układ na części.

Logo składa się z 3 zestaw&oacute;w kształt&oacute;w. Podstawa założona jest z 8 dużych k&oacute;łek, więc utworzyłem ich listę:
 
    <div class="large circle one"></div>
    <div class="large circle two"></div>
    <div class="large circle three"></div>
    <div class="large circle four"></div>
    <div class="large circle five"></div>
    <div class="large circle six"></div>
    <div class="large circle seven"></div>
    <div class="large circle eight"></div>

Korzystam tutaj z wielu klas, aby można było zastosować CSS dla wszystkich element&oacute;w `large` i wszystkich element&oacute;w `circle`, itd. Im więcej możemy wykorzystać ponownie CSS, tym prostszy powinien on być.

Teraz mamy osiem mniejszych kształt&oacute;w, kt&oacute;re znajdują się na wierzchu i pod spodem krawędzi dużych k&oacute;łek. Te kształty składają się z czterech k&oacute;łek i czterech &quot;squircles&quot;, kwadrat&oacute;w z zaokrąglonymi krawędziami. Dodam do nich kod HTML:
 
    <div class="small circle one"></div>
    <div class="small squircle two"></div>
    <div class="small circle three"></div>
    <div class="small squircle four"></div>
    <div class="small circle five"></div>
    <div class="small squircle six"></div>
    <div class="small circle seven"></div>
    <div class="small squircle eight"></div>

Mamy tutaj wymienione osiem mniejszych kształt&oacute;w zmiennymi klasami&nbsp;`circle` i `squircle`. Oznakowałem każdy zestaw za pomocą liczb od jeden do osiem. Wykorzystam to podczas umieszczania kształt&oacute;w i nadawania im kolor&oacute;w.

Na końcu mamy dwa duże &quot;squircles&quot; na środku logo.
 
    <div class="large squircle one"></div>
    <div class="large squircle two"></div>

Te ponownie mają rozmiar `large` i kształt `squircle`. 

## Logo i zawartość

Przed przejściem do stylizacji tego kodu HTML, dodamy nieco treści do centralnego &quot;squircle&quot;.
 
    <div class="large squircle two">
      <div class="content">
        <svg viewBox="0 0 160 164" xmlns="http://www.w3.org/2000/svg">
       <g>
        <g id="svg_1">
         <path d="m127.805969,90.003128c0.224838,24.213104 21.241287,32.270615 21.474121,32.373459c-0.177704,0.56826 -3.358078,11.482742 -11.072464,22.756622c-6.668747,9.746841 -13.590027,19.457977 -24.493088,19.659103c-10.713348,0.197403 -14.158287,-6.353043 -26.406677,-6.353043c-12.24469,0 -16.072174,6.151901 -26.213551,6.550446c-10.52422,0.398254 -18.538303,-10.539917 -25.26247,-20.251053c-13.740021,-19.864456 -24.24024,-56.132286 -10.1411,-80.613663c7.004152,-12.157551 19.521101,-19.85622 33.10713,-20.053638c10.334515,-0.197132 20.089069,6.952717 26.406689,6.952717c6.313614,0 18.167473,-8.59832 30.628998,-7.335548c5.21682,0.217129 19.860519,2.1073 29.263641,15.871029c-0.75766,0.469692 -17.472931,10.200527 -17.291229,30.443592m-20.134499,-59.456692c5.587379,-6.7633 9.348007,-16.178439 8.322067,-25.546439c-8.053787,0.32369 -17.792625,5.36682 -23.569427,12.126399c-5.177124,5.985922 -9.711121,15.566772 -8.48777,24.749359c8.976891,0.69453 18.147476,-4.561718 23.73513,-11.329308"/>
        </g>
       </g>
      </svg>
      <h1>The epicenter of change.</h1>
      <p><strong>WWDC</strong>15</p>
    </div>

Tutaj mamy zgodny obraz SVG i tekst zaproszenia. Czcionka użyta w oryginalnym obrazie to &quot;San Francisco&quot;. Ta czcionka nie jest jeszcze standardem na OS X, dlatego zamienię ją na Helvetica Neue Light. 

## Stylizowanie k&oacute;łek i &quot;squircles&quot;

Pierwszą rzeczą jest ustawienie element&oacute;w `circle` i `squircle`.
 
    .circle, .squircle {
      border-top: 0.1em solid rgba(255,255,255,0.4);
      height: 12.5em;
      position: absolute;
      width: 12.5em;
    }

Większość kształt&oacute;w posiadają duży rozmiar, więc domyślnie je powiększę. Każdy z element&oacute;w korzysta z pozycji `absolute` i ma jasną białą ramkę na wierzchu. Ta ramka może nie odpowiadać obrazowi zaproszenia, ale umożliwi nadanie kształtom trochę połysku.

Następnie ustawimy style dla dużych k&oacute;łek. Wykorzystując 50% `border-radius`, możemy utworzyć kształt k&oacute;łka. Potem umieścimy je używając wartości `left` i `top`.
 
    .circle {
      border-radius: 50%;
      box-shadow: 0 1em 2em rgba(0,0,0,0.5);
      left: calc(50% - 6.25em);
      top: calc(50% - 12.5em);
      transform-origin: 50% 12.5em;
    }

W tym punkcie, wszystkie k&oacute;łka są w tym samym miejscu! Klucz tkwi w wartości `transform-origin`. Kiedy obracasz obiekt w HTML korzystając z `transform`, obraca się on wok&oacute;ł punktu o nazwie `transform-origin`. Ten punkt znajduje się zazwyczaj na środku&nbsp;(50%, 50%) elementu.

W tym przypadku przesunęliśmy ten punkt do dolnej części k&oacute;łek. Kiedy obr&oacute;cimy k&oacute;łka, uformują one kształt kołowy w logo.

<img src="/images/posts/wwdc15/step1.png" alt="Circles fanned out into position" style="max-width:400px" />

Dodajmy kod CSS, aby umiejscowić każde z tych k&oacute;łek. Patrząc uważnie na obraz zaproszenia, możemy zobaczyć, że k&oacute;łko umieszczone za całą resztą znajduje się w lewym dolnym rogu. Pamiętając o tym, upewnimy się, że pierwsze k&oacute;łko w HTML jest obr&oacute;cone wok&oacute;ł tej pozycji.
 
    .one {
      background: rgba(16, 63, 236, 0.75);
      transform: rotateZ(225deg);
    }
    .two {
      background: rgba(37, 172, 162, 0.75);
      transform: rotateZ(180deg);
    }
    .three {
      background: rgba(233, 124, 32, 0.75);
      transform: rotateZ(135deg);
    }
    .four {
      background: rgba(235, 67, 35, 0.75);
      transform: rotateZ(90deg);
    }
    .five {
      background: rgba(190, 28, 65, 0.75);
      transform: rotateZ(45deg);
    }
    .six {
      background: rgba(208, 57, 159, 0.75);
      transform: rotateZ(0);
    }
    .seven {
      background: rgba(150, 32, 198, 0.75);
      transform: rotateZ(-45deg);
    }
    .eight {
      background: rgba(95, 33, 203, 0.75);
      transform: rotateZ(-90deg);
    }

Każdy z tych styl&oacute;w posiada kolor i `transform`, aby m&oacute;c obracać go w miejscu. Ta animacja pokazuje jak wszystkie k&oacute;łka są umieszczone w g&oacute;rnej części ekranu, następnie obr&oacute;cone w miejscu.

[<img src="/images/posts/wwdc15/circles.gif" alt="Circles fanning out into position" style="max-width:400px" />](https://cssanimation.rocks/demo/wwdc15/)

Po umieszczeniu k&oacute;łek, możemy stylizować inne kształty. Najpierw `squircle` jest `circle`, ale z innym promieniem ramki.
 
    .squircle {
      border-radius: 25%;
    }

Kiedy ustawiliśmy k&oacute;łka, określiliśmy rotację i kolor. Szczęśliwie mniejsze kształty mogą skorzystać z tego samego kodu CSS. Najpierw musimy dodać do kształt&oacute;w `small` kilka styl&oacute;w własnych.
 
    .small {
      width: 4em;
      height: 4em;
      left: calc(50% - 2em);
      top: calc(50% - 15em);
      transform-origin: 50% 15em;
      box-shadow: 0 0.25em 0.5em rgba(0,0,0,0.2);
    }

Zmniejszamy te kształty i przesuwamy je&nbsp;w g&oacute;rę na dużą odległość od środka . Korzystając z tej samej sztuczki `transform-origin`, transformacja `rotate` umieści je w prawidłowej pozycji bez potrzeby dodatkowe kodu CSS.

### Małe &quot;squircles&quot;

Małe kształty `squircle` są pod złym kątem. Muszą być obr&oacute;cone o 45 stopni.

<img src="/images/posts/wwdc15/step3.png" alt="Squircles in the wrong place" style="max-width:400px" />

Istnieje kilka spos&oacute;b na wykonanie tego. Możemy dodać dodatkowy element do każdego `squircle` i dodać transformację lub użyć [pseudo-elementu](/pseudo-elements/) w CSS. Każdy ze sposob&oacute;w jest dobry, ale pomyślałem, że warto poradzić sobie z tym za pomocą CSS.

Najpierw usuniemy tło, ramkę i cień pudełka z małych &quot;squircles&quot;.
 
    .small.squircle {
      background: none;
      border: none;
      box-shadow: none;
    }

Możemy teraz użyć pseudo-elementu `::after`, aby utworzyć nowy &quot;squircle&quot; w każdym i obr&oacute;cić je o 45 stopni.
 
    .small.squircle::after {
      background: red;
      border-radius: 25%;
      box-shadow: -0.25em 0.25em 0.5em rgba(0,0,0,0.2);
      content: "";
      height: 100%;
      position: absolute;
      transform: rotateZ(-45deg);
      width: 100%;
    }

    .small.squircle.two::after {
      background: rgba(37, 172, 162, 0.75);
    }
    .small.squircle.four::after {
      background: rgba(235, 67, 35, 0.75);
    }
    .small.squircle.six::after {
      background: rgba(208, 57, 159, 0.75);
    }
    .small.squircle.eight::after {
      background: rgba(95, 33, 203, 0.75);
    }

Powinniśmy teraz mieć oba duże k&oacute;łka i mniejsze kształty na miejscu.

<img src="/images/posts/wwdc15/step2.png" alt="Circles and squircles oh my" style="max-width:400px" />

## Zawartość &quot;squircles&quot;

Ostatnimi elementami obrazu są dwa &quot;squircles&quot;, kt&oacute;re zawierają treść. Ustawmy je na środku i nadajmy im delikatnie przezroczysty ciemny kolor.
 
    .large.squircle {
      background: rgba(30, 7, 66, 0.65);
      border: none;
      height: 15em;
      left: calc(50% - 7.5em);
      position: absolute;
      top: calc(50% - 7.5em);
      transform: none;
      width: 15em;
    }

Następnie możemy obr&oacute;cić pierwszy &quot;squircle&quot; (ten, kt&oacute;ry znajduje się za &quot;squircle&quot; zawierającym treść).
 
    .large.squircle.one {
      transform: rotateZ(45deg);
    }

[<img src="/images/posts/wwdc15/step4.png" alt="Finished WWDC invitation graphic" style="max-width:400px" />](https://cssanimation.rocks/demo/wwdc15/)

## Dodawanie animacji

Oryginalny obraz zaproszenia nie jest animowany, ale moja strona nosi nazwę&nbsp;[CSS Animation Rocks](https://cssanimation.rocks), dlatego dodamy animację.

Chcę sprawić, aby każdy zestaw k&oacute;łek i &quot;squircles&quot; kręcił się. Aby to zrobić, możemy wrzucić każdy do `span` i zastosować animację dla opakowania&nbsp;`span`.
 
    <span class="large-circles">
      <!-- Large Circles here ... -->
    </span>
    <span class="small-shapes">
      <!-- Small Shapes here... -->
    </span>
      <!-- Squircles -->
    <span class="content-squircle">
      <div class="large squircle one"></div>
    </span>

Najpierw ustawiamy elementy `span`, aby nie rozbiły one układu.
 
    span {
      display: block;
      height: 20em;
      left: calc(50% - 10em);
      position: absolute;
      top: calc(50% - 10em);
      width: 20em;
    }

To umieszcza opakowania `span` na środku strony.

Następnie zastosujemy animację dla każdego z tych trzech element&oacute;w `span`.
 
    .large-circles {
      animation: spin 10s linear infinite;
    }

    .small-shapes {
      animation: spin 30s linear infinite;
    }

    .content-squircle {
      animation: spin 20s linear infinite;
    }

Korzystamy z tych samych zestaw&oacute;w klatek kluczowych za każdym razem zmieniając tylko&nbsp;`animation-duration`. Wybrałem 10 sekund, 20 sekund i 30 sekund, aby wyr&oacute;wnywały się co minutę.

Mając ustawioną właściwość `animation`, zbierzmy razem `keyframes`.
 
    @keyframes spin {
      0% {
        transform: rotateZ(0);
      }
      100% {
        transform: rotateZ(360deg);
      }
    }

Animacja rozpoczyna się od pozycji zero i kończy po obr&oacute;ceniu się o 360 stopni. [Zobacz jak działa demo[.

## Ponowne wykorzystanie CSS

To był ciekawy eksperyment, w kt&oacute;rym stworzyliśmy nakładające kształty za pomocą CSS, ale jedna rzecz, kt&oacute;ra najbardziej się przydała to ponowne wykorzystanie kodu CSS w kilku miejscach. Obracanie obu k&oacute;łek i mniejszych kształt&oacute;w było obsługiwane przez taki sam kod CSS, a animacje używały jednego zestawu klatek kluczowych. To może być dobrym sposobem na uzyskanie małych plik&oacute;w CSS i umożliwić szybsze wczytywanie.

## Prefiksy

Podczas tworzenia tego przykładu, wykorzystałem [autoprefixer](https://github.com/postcss/autoprefixer), aby uniknąć dodawania prefiks&oacute;w przeglądarki. Pamiętaj o tym, jeśli używasz `transitions`, `animations` lub `transforms` w swojej pracy.

