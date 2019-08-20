---
layout: post
title: Sfery
description: Rysowanie sfer 3D za pomocą CSS i przejść CSS
categories: [animation, balls, spheres, css]
imageURL: /images/posts/spheres/home.png
home_image: /images/posts/spheres/home.png
tweet_text: Stw&oacute;rz tę niesamowitą animację Portalu za pomocą CSS
custom_header: posts/spheres.html
customCSS: spheres.css
translator: Mateusz Kurlit
---

Korzystając z właściwości CSS&nbsp;`border-radius` możemy stworzyć okrągłe kształty i koła. Po dodaniu gradient&oacute;w staną się sferami. Zr&oacute;bmy to i dodajmy animację, aby tchnąć w nie życie.

## Płaski design

Istnieją dwa sposoby wykonywania sfer za pomocą CSS.

Jeden z nich to stworzenie sfery 3D za pomocą wielu element&oacute;w. Tutaj można zobaczyć ich [piękne](http://codepen.io/peterwestendorp/pen/wGECk) [przykłady](http://www.cssplay.co.uk/menu/cssplay-3D-sphere.html). Potencjalną wadą jest to, że wymagają od przeglądarki wyświetlania wielu element&oacute;w, kt&oacute;re mogą mieć wpływ na wydajność. Mogą r&oacute;wnież wyglądać nieco gorzej, ponieważ wysokiej jakości sfera wymaga wielu element&oacute;w.

Zamiast tego, spr&oacute;buję drugiego sposobu, wykorzystując gradienty CSS, aby dodać cieniowanie i stworzyć efekt 3D na jednym elemencie.

## Przykład i kod źr&oacute;dłowy

Wszystkie wymienione przykłady można zobaczyć na [moim koncie Codepen](http://codepen.io/donovanh) lub wybierając linki &quot;Edit on Codepen&quot; w każdym przykładzie ponizej.

W przykładach kodu usunąłem wszystkie prefiksy przeglądarki. Zalecam skorzystanie z narzędzia [Autoprefixer](http://css-tricks.com/autoprefixer/) lub dodaj prefiksy w razie potrzeby

## Podstawowy kształt

Przed dodaniem szczeg&oacute;ł&oacute;w, stworzymy początkowy kształt koła. Zaczynając od HTML:

    <figure class="circle"></figure>

Używamy tutaj elementu `figure`, ale może to być dowolny element. Figure jest elementem wykorzystywanym w HTML5, aby przedstawić obraz lub diagram będący częścią treści, kt&oacute;ra może być usunięta bez wpływu na jej znaczenie.

Aby stworzyć koło z elementu `figure`, nadam mu szerokość i wysokość oraz ustawię promień ramki na 50%. Ponad 50% spowoduje całkowicie zaokrąglony r&oacute;g.

    .circle {
      display: block;
      background: black;
      border-radius: 50%;
      height: 300px;
      width: 300px;
      margin: 0;
    }

Pojawia się koło.

<div class="codepen" data-height="400" data-type="result" data-href="sdLhc" data-user="donovanh" data-safe="true"> </div>

Teraz kiedy mamy podstawowe koło, możemy zacząć zmieniać je w coś bardziej sferycznego.

## Cieniowanie 101

Pierwsza rzecz o jakiej piszą w poradnikach to dodanie pojedynczego radialnego gradientu, przesunięcie go do g&oacute;ry i w lewo względem środka koła.

Możemy to zrobić korzystając z następującego kodu CSS.

    .circle {
      display: block;
      background: black;
      border-radius: 50%;
      height: 300px;
      width: 300px;
      margin: 0;
      background: radial-gradient(circle at 100px 100px, #5cabff, #000);
    }

Powinno to wyglądać mniej więcej tak:

<div class="codepen" data-height="400" data-type="result" data-href="zDqAs" data-user="donovanh" data-safe="true"> </div>

### Radialne gradienty

Właściwość `radial-gradient` wymaga kilku ustawień. Pierwszym jest pozycja środkowa dla rozpoczynania gradientu. Zgodnie z formułą&nbsp;`*shape* at *position*`. W tym przypadku jest to koło z pozycją środkową ustawioną na 100 pikseli z lewej i 100 pikseli z g&oacute;ry.

Następna to określony zestaw kolor&oacute;w. Możesz wybrać ponad dwa kolory, ale wtedy konieczne jest określenie odległości w każdym, tak aby gradient wiedział, kiedy przejść z jednego koloru na drugi.

W tym przykładzie określimy tylko dwa kolory. To pozwoli przeglądarce założyć, że pierwszy jest na 0%, a drugi 100% i rysuje gradient między tymi kolorami. Jeśli chcemy ustawić gradient inaczej, możemy określić odległości w pikselach lub procentowo jak zobaczymy p&oacute;źniej.

Teraz mamy coś co jest podobne do 3D. Wygląda _dobrze_, ale spr&oacute;bujmy to nieco upiększyć.

## Cienie i 3D

W zależności od rodzaju cieniowania zastosowanego na powierzchni, możesz tworzyć r&oacute;żne sfery. Ale najpierw wykonajmy scenę, w kt&oacute;rej umieścimy kulę.

HTML, kt&oacute;rego użyjemy posiada jeszcze kilka element&oacute;w:

    <section class="stage">
      <figure class="ball"><span class="shadow"></span></figure>
    </section>

Element kuli uzyskał znacznik span, kt&oacute;rego użyjemy do stworzenia cienia i został owinięty div&nbsp;`stage`. div stage jest użyteczny, kiedy chcemy ustawić perspektywę i pozycję cienia sprawiając, że będzie wyglądał bardziej 3D.

Zastosuj kilka styl&oacute;w do stage i pozycję cienia, aby ustawić scenę.

    .stage {
      width: 300px;
      height: 300px;
      display: inline-block;
      margin: 20px;
      perspective: 1200px;
      perspective-origin: 50% 50%;
    }
    .ball .shadow {
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0) 50%);
      transform: rotateX(90deg) translateZ(-150px);
      z-index: -1;
    }

Zwr&oacute;ć uwagę, że nie pokazuję prefiks&oacute;w w przykładowych fragmentach CSS. Przykłady z Codepen zawierają w pełni prefiksowe fragmenty CSS. W przykładzie powyżej ustawiłem div `stage`, aby uzyskać `perspective` wynoszącą 1,200 pikseli. Właściwość perspektywy jest jak znikający punkt w scenie 3D.

Cień kuli jest umieszczany poprzez nadanie radialnego gradientu, ale pozycjonowany przy wykorzystaniu `transform`. Transforms w CSS pozwalają obracać, skalować, przesuwać i pochylać rzeczy w przestrzeni 3D. Cień jest obr&oacute;cony o 90 stopni według osi X i następnie przesunięty w d&oacute;ł o 150 pikseli od środka kuli.

Ponieważ ustanowiliśmy wartość perspektywy w kontenerze stage, końcowym rezultatem był rozciągnięty kształt owalny.

<div class="codepen" data-height="400" data-type="result" data-href="pwGxn" data-user="donovanh" data-safe="true"> </div>

Zaczyna to wyglądać trochę lepiej. Dodajmy trochę więcej cieniowania do kuli.

## Wielokrotne cieniowanie

W prawdziwym świecie bardzo rzadko zdarzają się obiekty oświetlone pod jednym kątem. Powierzchnie odbijają światło na inne powierzchnie i efektem tego są zmieszane r&oacute;żne źr&oacute;dła światła.&nbsp; Aby stworzyć bardzie realistyczną kulę, utworzymy światło z dw&oacute;ch źr&oacute;deł korzystając z pseudoelementu, aby dodać dwa gradienty.

    .ball {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 50%;
      position: relative;
      background: radial-gradient(circle at 50% 120%, #81e8f6, #76deef 10%, #055194 80%, #062745 100%);
    }
    .ball:before {
      content: "";
      position: absolute;
      top: 1%;
      left: 5%;
      width: 90%;
      height: 90%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%);
      filter: blur(5px);
      z-index: 2;
    }

Tutaj mamy dwa nieco bardziej kompleksowe gradienty.

Pierwszy gradient jest subtelnym efektem oświetleniowym zastosowanym w elemencie `kuli`. Środek gradientu jest znajduje się w połowie w poprzek i na 120% wysokości kuli. To ustawia środek poza powierzchnię kuli. Zrobiłem to, żeby ostry kolor końcowy nie był widoczny powodując łagodniejszy gradient.

Drugi gradient jest podświetleniem umiejscowionym na g&oacute;rze. Jego wymiary mają 90% szerokości i 90% wysokości kuli. Gradient jest wyśrodkowany na g&oacute;rze tak, aby zanikł mniej więcej w połowie kuli.

Użyłem pseudo elementu `before` zamiast tworzenia nowego elementu zawierającego cieniowanie.

Ponieważ gradient podświetlenie ma ostrą krawędź, wykorzystałem efekt `blur`, aby złagodzić podświetlenie. Niestety jest to obecnie jedyna funkcja webkitu (Chrome i Safari), ale może być bardziej przydatna w przyszłości na innych przeglądarkach.

Oba gradienty łączą się, aby stworzyć o wiele lepszy efekt:

<div class="codepen" data-height="400" data-type="result" data-href="fEaru" data-user="donovanh" data-safe="true"> </div>

## Bardziej Błyszczący

Efekt jest p&oacute;ki co całkiem łagodny, dodajmy trochę blasku i stw&oacute;rzmy coś podobnego do kuli bilardowej.

Aby to uzyskać, wykorzystamy łagodne podświetlenie jak wcześniej, ale zmniejszymy i wyostrzymy g&oacute;rne podświetlenie. Musimy wykorzystać dwa pseudo selektory do przechowywania koloru kuli, dolnego podświetlenia i odbicia.

    .ball {
      display: inline-block;
      width: 100%;
      height: 100%;
      margin: 0;
      border-radius: 50%;
      position: relative;
      background: radial-gradient(circle at 50% 120%, #323232, #0a0a0a 80%, #000000 100%);
    }
    .ball:before {
      content: "";
      position: absolute;
      background: radial-gradient(circle at 50% 120%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0) 70%);
      border-radius: 50%;
      bottom: 2.5%;
      left: 5%;
      opacity: 0.6;
      height: 100%;
      width: 90%;
      filter: blur(5px);
      z-index: 2;
    }
    .ball:after {
      content: "";
      width: 100%;
      height: 100%;
      position: absolute;
      top: 5%;
      left: 10%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8) 14%, rgba(255, 255, 255, 0) 24%);
      transform: translateX(-80px) translateY(-90px) skewX(-20deg);
      filter: blur(10px);
    }

Tutaj mamy początkowy kolor zastosowany jak subtelny gradient na kuli. Pseudo element `before` zawiera jaśniejsze podświetlenie, kt&oacute;re zaczyna się na dole kuli i tworzy efekt odbitego światła od powierzchni.

Nowy dodatek to pseudo selektor `after`. On zawiera okrągły gradient, kt&oacute;ry zaczyna się białym kolorem na środku i zanika do około 24%. To tworzy efekt białego błysku, ale aby uzyskać efekt odbicia na tr&oacute;jwymiarowym obiekcie, zastosujemy CSS `transform`.

Transform przesuwa efekt błysku o 80 pikseli w lewo i 90 pikseli w g&oacute;re i dodaje efekt nachylenia. Efekt nachylenia rozciąga koło wzdłuż osi X, aby efekt był podobny do połysku znajdującego się na błyszczącej kuli.

<div class="codepen" data-height="400" data-type="result" data-href="LuEAB" data-user="donovanh" data-safe="true"> </div>

### Kula 8

Jeśli już robimy kulę bilardową, wykonajmy dodatkowy krok i dodajmy cyfrę 8.

Potrzebujemy dodatkowy element przechowujący 8 jak r&oacute;wnież style zastosowane na kuli.

    <section class="stage">
      <figure class="ball">
        <span class="shadow"></span>
        <span class="eight"></span>
      </figure>
    </section>

    .ball .eight {
      width: 110px;
      height: 110px;
      margin: 30%;
      background: white;
      border-radius: 50%;
      transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg);
      position: absolute;
    }
    .ball .eight:before {
      content: "8";
      display: block;
      position: absolute;
      text-align: center;
      height: 80px;
      width: 100px;
      left: 50px;
      margin-left: -40px;
      top: 44px;
      margin-top: -40px;
      color: black;
      font-family: Arial;
      font-size: 90px;
      line-height: 104px;
    }

100% Promień ramki jest ponownie wykorzystany do stworzenia koła i to koło jest umiejscowione w g&oacute;rnym prawym rogu przy wykorzystaniu właściwości `transform`. Zamiast wstawić cyfrę 8 w zawartość, użyję pseudo selektora `before`, aby dodać zawartość przez CSS i następnie nachylić cyfrę w podobny spos&oacute;b do koła w kt&oacute;rym się znajduje.

Rezultatem jest błyszcząca kula 8.

<div class="codepen" data-height="400" data-type="result" data-href="nzmJq" data-user="donovanh" data-safe="true"> </div>

## Ma na ciebie oko

Jedną ze świetnych rzeczy o transformacji CSS to możliwość animacji. Korzystając `keyframes` CSS do animacji, możesz opisać serie transformacji jako animację i zastosować ją w elemencie. Aby to pokazać, stworzę i zaanimuję gałkę oczną.&nbsp;

Pierwszym krokiem jest dostosowanie niekt&oacute;rych kolor&oacute;w wykorzystywanych w przykładzie kuli 8. Kilka poprawek i bardziej wygląda jak oko. Najpierw HTML:

    <section class="stage">
      <figure class="ball">
        <span class="shadow"></span>
        <span class="iris"></span>
      </figure>
    </section>

Większość CSS jest podobna do kuli 8 z wyjątkiem tęcz&oacute;wki i części źrenicy.

    .iris {
      width: 40%;
      height: 40%;
      margin: 30%;
      border-radius: 50%;
      background: radial-gradient(circle at 50% 50%, #208ab4 0%, #6fbfff 30%, #4381b2 100%);
      transform: translateX(68px) translateY(-60px) skewX(15deg) skewY(2deg);
      position: absolute;
      animation: move-eye-skew 5s ease-out infinite;
    }
    .iris:before {
      content: "";
      display: block;
      position: absolute;
      width: 37.5%;
      height: 37.5%;
      border-radius: 50%;
      top: 31.25%;
      left: 31.25%;
      background: black;
    }
    .iris:after {
      content: "";
      display: block;
      position: absolute;
      width: 31.25%;
      height: 31.25%;
      border-radius: 50%;
      top: 18.75%;
      left: 18.75%;
      background: rgba(255, 255, 255, 0.2);
    }

Niebieski gradient formuje kolorową część tęcz&oacute;wki, a następnie źrenicę i tworzone jest podświetlenie jako pseudo elementy. Dodałem r&oacute;wnież właściwość animacji do elementu tęcz&oacute;wki. Animacje są dołączone do element&oacute;w wykorzystujących taki format:

    animation: animation-name 5s ease-out infinite;

W tym przypadku zastosujemy animację o nazwie &quot;animation-name&quot;, ustawimy jej trwanie na 5 sekund, zapętlimy i zastosujemy wartość łagodzenia &quot;easy-out&quot;. Ease-out oznacza, że animacja zwalnia, gdy osiąga koniec tworząc bardziej naturalny efekt.

Bez utworzonej animacji, mamy bardzo statyczną gałkę oczną.

<div class="codepen" data-height="400" data-type="result" data-href="nwsqa" data-user="donovanh" data-safe="true"> </div>

Utw&oacute;rzmy kilka klatek kluczowych, aby opisać jak gałka oczna powinna się poruszać.

    @keyframes move-eye-skew {
      0% {
        transform: none;
      }
      20% {
        transform: translateX(-68px) translateY(30px) skewX(15deg) skewY(-10deg) scale(0.95);
      }
      25%, 44% {
        transform: none;
      }
      50%, 60% {
        transform: translateX(68px) translateY(-40px) skewX(5deg) skewY(2deg) scaleX(0.95);
      }
      66%, 100% {
        transform: none;
      }
    }

Klatki kluczowe w CSS mogą wydawać się trochę skomplikowane na początku. To co teraz robimy to opisujemy stan elementu w serii etap&oacute;w. Każdy stan jest mapowany procentowo. W tym przypadku tęcz&oacute;wka zacznie bez stosowania trasnformacji. Następnie przy 20% nastąpi przeniesienie i nachylenie do lewej. Przerwa między 0 a 20% jest automatycznie obliczana przez przeglądarkę tworząc łagodne przejście między tym dwoma punktami.

Sytuacja powtarza się w każdej klatce kluczowej i cała animacja w tym przypadku trwa 5 sekund jak określono wcześniej.

Nie zapomnij utworzyć moz, ms, o i wersji bez prefiksu animacji klatek kluczowych, ponieważ niekt&oacute;re przeglądarki wymagają prefiks&oacute;w.

<div class="codepen" data-height="400" data-type="result" data-href="iBolr" data-user="donovanh" data-safe="true"> </div>

## Bąbelki

Używając kombinacji cieniowania i animacji można wykonać r&oacute;żnego rodzaju interesujące i zr&oacute;żnicowane efekty. Co myślisz o bąbelkach?

Tworzenie bąbelka wygląda podobnie, ale musimy wykorzystać więcej przeźroczystości w gł&oacute;wnym kolorze i dwa pseudo elementy, aby dodać połysk.

Animacja wykorzystuje transformacje `scale`, aby bąbelek się kołysał.

    @keyframes bubble-anim {
      0% {
        transform: scale(1);
      }
      20% {
        transform: scaleY(0.95) scaleX(1.05);
      }
      48% {
        transform: scaleY(1.1) scaleX(0.9);
      }
      68% {
        transform: scaleY(0.98) scaleX(1.02);
      }
      80% {
        transform: scaleY(1.02) scaleX(0.98);
      }
      97%, 100% {
        transform: scale(1);
      }
    }

Animacja dotyczy całego bąbelka i jego pseudo element&oacute;w.

<div class="codepen" data-height="400" data-type="result" data-href="pvrzK" data-user="donovanh" data-safe="true"> </div>

## Wykorzystując obrazy

Jak dotąd wszystkie kule zostały stworzone bez wykorzystania żadnych obraz&oacute;w. Stosując obraz w tła można dodać więcej szczeg&oacute;ł&oacute;w i nadal wykorzystać cieniowanie CSS w pseudo elementach. Na przykład, nieosłonięta tekstura piłki tenisowej:

<img src="http://hop.ie/balls/images/tennisball.png" style="max-width:200px" alt="Unshaded tennis ball image" />

Dodanie kilku gradient&oacute;w CSS może stworzyć iluzję głębi.

<div class="codepen" data-height="400" data-type="result" data-href="vsEIK" data-user="donovanh" data-safe="true"> </div>

### Dookoła świata

Animacja może być tez zastosowana do pozycji obraz&oacute;w tła. Korzystając z tego, możemy stworzyć obracający się globus.

Płaski obraz został delikatnie rozciągnięty na g&oacute;rze i dole, aby można było go wykorzystać jako obraz tła.

<img src="http://hop.ie/balls/images/world-map-one-color.png" alt="Flat world map" />

Z dodatkiem cieniowania i animacja. można stworzyć globus w 3D. Wybierz &quot;Result&quot; w Codepen, aby zobaczyć go w akcji. Ustawiłem domyślne wyświetlanie HTML, ponieważ wydajność tego przykładu była całkiem niska powodując zwiększenie szybkości wentylatora w moim laptopie.

Uwaga: Wielkie podziękowania dla&nbsp;Sidoruk Sergey &rlm;([@Sidoruk_SV](http://twitter.com/Sidoruk_SV)) za rozbudowę tego globu. Wygląda świetnie.

<div class="codepen" data-height="400" data-type="html" data-href="GBIiv" data-user="donovanh" data-safe="true"> </div>

## Zasoby

Kilka [dobrych informacji o radialnych gradientach](https://developer.mozilla.org/en-US/docs/Web/CSS/radial-gradient), jeśli chcesz się dowiedzieć więcej.

Szukasz więcej przykład&oacute;w 3D? Odwiedź [Portal CSS](/portal/) po inspiracje.

## Opinie

Wszystkie wspomniane przykłady możesz zobaczyć na [moim koncie Codepen](http://codepen.io/donovanh). Serdeczne podziękowania dla Chrisa i zespołu tworzącego niesamowite zasoby.

Jeśli masz jakieś pytania dotyczące poradnika, skontaktuj się przez [email](mailto:hello@cssanimation.rocks) lub [Twitter](http://twitter.com/cssanimation).

<script src="//codepen.io/assets/embed/ei.js"></script>
