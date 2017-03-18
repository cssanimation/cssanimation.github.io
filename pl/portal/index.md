---
layout: post
title: Portal CSS
description: Odtwarzanie klasycznego wideo instruktażowego Portalu za pomocą HTML i CSS
categories: [animation, experiment, css]
imageURL: /assets/images/posts/portal/home.png
home_image: /assets/images/posts/portal/home.png
tweet_text: Odtw&oacute;rz niesamowitą animację Portalu za pomocą czystego kodu CSS
custom_header: posts/portal.html
demo_url: https://cssanimation.rocks/demo/portal/
customCSS: portal.css
translator: Mateusz Kurlit
translator_link: http://transgent.co.nf
---

Nie potrzebujesz JavaScript, aby tworzyć imponujące projekty 3D w przeglądarce internetowej. W tym artykule pokażę jak stworzyć i animować scenę inspirowaną Portalem używając tylko kod CSS.

Zobacz demo [Portal CSS online](http://hop.ie/portal/) i pobierz [kod źr&oacute;dłowy na Github](https://github.com/donovanh/portal).

## Wideo Orientacji Portalu Nr 1

Jako przykład pokazania r&oacute;żnych etap&oacute;w tworzenia, stylizowania i animowania sceny 3D, ten artykuł będzie miał na celu odtworzenie sceny z [Wideo Treningowego Portalu](http://www.youtube.com/watch?v=gr_9Fw_gC4I). W szczeg&oacute;lności, stylizowany, kresk&oacute;wkowy wygląd pierwszej części wideo, w kt&oacute;rej sylwetka postaci przechodzi przez portal i pojawia się po drugiej stronie. To jest oryginalne wideo:

<div class="videoWrapper">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/0jhDAVkdsAI?modestbranding=1&cc_load_policy=0&iv_load_policy=3&vq=hd720" frameborder="0" allowfullscreen></iframe>
</div><br>

Wideo rzuciło mnie na kolana, kiedy zostało opublikowane. Portal (kt&oacute;ry został stworzony przez [Narbacular Drop](http://en.wikipedia.org/wiki/Narbacular_Drop)) wprowadza zabawny zwrot w gatunku gier platformowych 3D.

Izometryczne, kresk&oacute;wkowe grafiki w wprowadzającym wideo bardzo się r&oacute;żnią od samej gry, ale daje się uchwycić ich styl. W tym artykule zobaczę czy kresk&oacute;wkowy styl może być odtworzony z wykorzystaniem HTML i CSS.

W szczeg&oacute;lności, tę scenę będziemy tworzyć:

<img src="/images/posts/portal/video.jpg" alt="Portal video screenshot" />

### Kr&oacute;tka uwaga o prefiksach

Usunąłem prefiksowne wersje reguł w poniższym kodzie CSS. Zalecam skorzystanie z czegoś podobnego do [prefiks free](http://leaverou.github.io/prefixfree/) lub [SASS](http://sass-lang.com/), aby zarządzać prefiksami. W przeciwnym wypadku pamiętaj, że prefiksy większości przeglądarek muszą być zastosowane. Pełne wersje CSS i SaSS możesz znaleźć [na Github](https://github.com/donovanh/portal) razem z kodem HTML.

### Czas na naukę

Ten projekt został opracowany i przetestowany gł&oacute;wnie w przeglądarce Chrome. Korzysta z CSS, kt&oacute;ry nie będzie działać poprawnie w Internet Explorer. Obejmuje kilka interesujących technik 3D CSS, kt&oacute;re nie są jeszcze popularne, ale mogą okazać się przydatne w innym rozwoju front-end.

## Pierwsze kroki

Musimy ustawić scenę, w kt&oacute;rej możemy zbudować nasz projekt 3D. Aby to zrobić musimy użyć elementu HTML i nadać mu wymaganych właściwości, kt&oacute;re poinformują przeglądarkę o zawartości 3D. Rozpocznijmy od HTML:

    <article class="container">...</article>

W tym przypadku kontener jest tagiem `article`. W HTML5 *article* stanowi samodzielną część zawartości, kt&oacute;ra może być wykorzystana gdzie indziej i nadal będzie miała sens.

Pierwsza zastosowana właściwość to [perspective](http://docs.webplatform.org/wiki/css/properties/perspective). Ta właściwość przyjmuje wartość w pikselach i stanowi głębie sceny 3D. Mniejsza wartość przyniesie bardziej dramatyczny efekt i zazwyczaj jest ustawiona między 800 i 1200 pikseli.

<img src="/images/posts/portal/perspective.gif" alt="Alternating between a perspective value of 900 pixels and 2000 pixels" class="bordered centered" />

Dla tej sceny, aby odzwierciedlić duży pok&oacute;j, ustawimy wartość perspektywy całkiem wysoko na 2600 pikseli. Ignorując r&oacute;żne prefiksy przeglądarki, użyjemy poniższego kodu:

    article.container {
      perspective: 2600px;
    }

### Punkt zbiegu

Kontener dla tej sceny posiada głębie, więc kolejnym krokiem jest określenie kąta widzenia. Dostosowując właściwość [perspective-origin](http://docs.webplatform.org/wiki/css/properties/perspective-origin), możemy ustalić punkt zbiegu sceny i określić czy patrzymy na obiekt z g&oacute;ry czy z boku.

    .container {
      perspective-origin: 50% -1400px;
    }

Właściwość `perspective-origin` przyjmuje dwie wartości, poziome i pionowe przesunięcie. W tym przypadku ustawiamy go w połowie sceny i 1400 pikseli w g&oacute;rę. W ten spos&oacute;b nasz punkt widzenia będzie nad obiektem z widokiem z g&oacute;ry.

Aby określić te wartości, dostosowałem je w panelu inspektora sieci przeglądarki Chrome i oceniłem na oko. Podczas ustawiania sceny, wartość może być wyższa lub niższa niż ta. To zależy od efektu, kt&oacute;ry chcesz osiągnąć. Pamiętaj r&oacute;wnież, że ta wartość może być animowana, tworząc interesujące efekty zmiany perspektywy.

### Bez wektor&oacute;w, Wiktor

Obiekty, kt&oacute;re umieścimy w HTML są zwykłymi elementami. Posiadają szerokość wysokość i są prostokątne. To oznacza, że podczas budowania obiektu 3D, należy umieścić każdy prostokąt w miejscu. Biorąc pod uwagę inne metody, ta r&oacute;żni się opisywaniem punkt&oacute;w i linii do tworzenia kształt&oacute;w. To r&oacute;wnież oznacza, że nie ma takich figur jak k&oacute;łka lub kostki, z kt&oacute;rych możemy czerpać.

Elementy HTML są umieszczone w scenie 3D za pomocą właściwości `transform`.

### Przekształcanie

Właściwość `transform` składa się z szeregu ustawień dotyczących elementu HTML. Te ustawienia mogą przyjąć formę `translate`, aby przesunąć element, `rotate`, aby zmienić kąt, `skew` i nawet `scale`. Wszystkie powyższe mogą być połączone w celu stworzenia bardziej kompleksowych przekształceń, na przykład:

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

Powyższy kod obr&oacute;ci element o 45 stopni wok&oacute;ł osi Y oraz przesunie w głąb 100 pikseli wzdłuż osi Z. Efekt wygląda tak:

<img src="/images/posts/portal/transform.png" alt="A transform in action" class="bordered centered" />

### Właściwość transform-origin

Podczas obracania element&oacute;w w miejscu, warto pamiętać, że przekształcenia posiadają punkt źr&oacute;dło, kt&oacute;re może być ustawione. [Transform origin](http://docs.webplatform.org/wiki/css/properties/transform-origin) jest punktem określanym przez wartości na osi X, Y i Z. To jest ustawienie domyślne:

    .default-origin {
      transform-origin: 50% 50% 0;
    }

Podczas budowania tego przykładu, zachowałem domyślne ustawienie, ale warto wiedzieć, że coś takiego istnieje.

## Zbudujmy

Po ustawieniu sceny, możemy rozpocząć składanie naszego arcydzieła w 3D. Zanim zaczniemy budować obiekty 3D za pomocą HTML i CSS, warto poświęcić chwilę na zrozumienie jak to podejście r&oacute;żni się od innych program&oacute;w 3D.

    <section class="stage">
      <div class="shadow"></div>
      <div class="back-left"></div>
      <div class="back-right"></div>
      <div class="platform-left"><span></span></div>
      <div class="platform-right"><span></span></div>
      <div class="pit-left"></div>
      <div class="pit-right"></div>
      <div class="pit-back"></div>
    </section>

Powyższy kod zawiera sekcję *stage*, kt&oacute;rą będziemy używać umieszczenia wszystkich element&oacute;w. Zestaw element&oacute;w div w sekcji stage formują gł&oacute;wne części struktury. Przyjmują formę tylnych ścian, platform, ścian dołu i cienia umieszczonego pod nimi.

Kiedy zacząłem budować tę scenę, pr&oacute;bowałem umieścić ściany bezpośrednio na sekcji stage, obracając je i dostosowując ich pozycję. Ponieważ scena będzie oglądana z widoku izometrycznego, łatwiejszym podejściem jest umieszczenie fragment&oacute;w sceny i obr&oacute;cenie całe sceny o 45 stopni.

Mając to na uwadze, elementy HTML są przekształcane w miejscu zgodnie z następującym szkicem:

<img src="/images/posts/portal/sketch.png" alt="Plan view of the scene" class="centered" />

Powyższy skecz pokazuje, że fragment *back-left* jest wyr&oacute;wnany do lewej, ale fragment *back-right* jest bezpośrednio widzem. Aby to skorygować, obr&oacute;cimy p&oacute;źniej całą scenę o 45 stopni.

Przed zastosowaniem przekształceń, musimy nadać elementom div kilku wsp&oacute;lnych właściwości:

    .stage div {
      position: absolute;
      transform-style: preserve-3d;
    }

Każdy div zostanie umieszczony bezwzględnie, a właściwość `transform-style` przekaże przeglądarce, że przekształcenia 3D są zastosowane w relacji do perspektywy, kt&oacute;rą ustawiliśmy wcześniej.

Po wykonaniu tego możemy rozpocząć umieszczanie element&oacute;w div:

    .stage .back-left {
      background-color: #6b522b;
      border-left: 6px solid #574625;
      border-top: 6px solid #8a683d;
      height: 120px;
      transform: rotateY(90deg) translateX(-256px);
      width: 500px;
    }

Powyższe reguły opisują szerokość 500 pikseli, kt&oacute;ra jest długością boku naszej sceny 3D, wysokość 120 pikseli i jasnobrązowy kolor tła. Następnie obracamy div o 90 stopni i odsuwamy wzdłuż osi X. Div posiada obramowanie o grubości 6 pikseli, zastosowane w celu stworzenia iluzji głębi.

Podobne przekształcenie jest zastosowane dla div *back-right*:

    .stage .back-right {
      background-color: #9c7442;
      border-right: 6px solid #78552c;
      border-top: 6px solid #b5854a;
      height: 120px;
      transform: translateX(253px) translateZ(3px);
      width: 446px;
    }

Ten div jest trochę mniejszy, ponieważ pok&oacute;j w oryginalnym wideo Portalu nie jest do końca kwadratem.

Następnie dodajmy platformy i ściany dołu:

    .stage .platform-left {
      background-color: #bcb3a8;
      border-bottom: 6px solid #857964;
      height: 220px;
      transform: rotateX(90deg) translateY(396px) translateX(253px) translateZ(-13px);
      width: 446px;
    }
    .stage .platform-right {
      background-color: #bcb3a8;
      border-bottom: 6px solid #847660;
      border-right: 6px solid #554c3d;
      height: 164px;
      transform: rotateX(90deg) translateY(88px) translateX(253px) translateZ(-41px);
      width: 446px;
    }
    .stage .pit-left {
      background-color: #4d4233;
      height: 800px;
      transform: translate3D(254px, 125px, 285px);
      width: 447px;
    }
    .stage .pit-right {
      background-color: #847660;
      height: 800px;
      top: -1400px;
      transform: translate3D(254px, 125px, 173px);
      width: 451px;
    }
    .stage .pit-back {
      background-color: #6b522b;
      height: 220px;
      transform: rotateY(90deg) translate3D(-200px, 87px, 168px);
      width: 170px;
    }

Efektem końcowym powinna być scena wyglądająca tak:

<img src="/images/posts/portal/layout01.png" alt="Initial layout of the stage divs" />

Nie wygląda jeszcze właściwie. Musimy obr&oacute;cić całą scenę, aby wyświetlić ją poprawnie. Dodaj `transform` do sekcji *scene*:

    .stage {
      margin: 0 auto;
      transform-style: preserve-3d;
      transform: rotateY(-45deg);
      width: 460px;
    }

Rezultat powinien wyglądać mniej więcej tak:

<img src="/images/posts/portal/layout02.png" alt="Initial layout rotated to show the stage properly" />

Możesz zauważyć, że obramowanie tworzy ładny efekt głębi, szczeg&oacute;lnie w rogach, gdzie r&oacute;żnokolorowe obramowania spotykają się pod kątem 45 stopni. Ponieważ scena, kt&oacute;rą budujemy, jest oglądana pod kątem 45 stopni, ten efekt działa na naszą korzyść większości przypadk&oacute;w. Kilka rog&oacute;w nie wygląda całkiem dobrze, ale biorąc pod uwagę to jak prosto obramowania są zastosowane i brak obraz&oacute;w, myślę, że to rozsądny kompromis.

### W cieniu

Wideo posiada ładne cienie pod platformami. Możemy odtworzyć to za pomocą właściwości `box-shadow`.

    .stage .shadow {
      background-color: transparent;
      box-shadow: -600px 0 50px #afa79f;
      height: 550px;
      transform: rotateX(90deg) translateZ(-166px) translateX(550px);
      width: 550px;
    }

Powyższe reguły dodają cień do elementu div&nbsp;*shadow*, kt&oacute;ry jest przezroczysty. Cień jest przesunięty o 600 pikseli tak, aby rzeczywisty element div *shadow* nie wchodził w drogę cieniowi. Całość jest obr&oacute;cona i umieszczona poza sceną tak, aby tylko cień był widoczny na scenie. Rezultat powinien wyglądać tak:

<img src="/images/posts/portal/layout03.png" alt="Initial layout with a shadow" />

## Czerwony KONTRA Niebieski

Następnie musimy dodać dekorację i świecące portale.

<img src="/images/posts/portal/portal.png" alt="Red portal" />

Kod HTML niezbędny dla dw&oacute;ch portali jest dość prosty:

    <div class="portal red"></div>
    <div class="portal blue"></div>

Każdy portal posiada element `div`, jeden czerwony i drugi niebieski. Oba mają podobne style z gradientami użytymi do stworzenia efektu świecenia. Ponieważ składają się z jednego elementu HTML, kod CSS zawiera pseudo-element, kt&oacute;ry możemy stylizować, aby osiągnąć pełny efekt.

Pierwszym krokiem jest ustalenie og&oacute;lnego kształtu portalu:

    .stage .portal {
      background-color: black;
      border-radius: 44px/62px;
      box-shadow: 0 0 15px 4px white;
      height: 72px;
      width: 48px;
    }

To tworzy portal i korzysta z właściwości `border-radius` w celu uzyskania owalnego kształtu, a biały cień powoduje efekt świecenia. Następnie dodajemy pseudo-element o podobnych wymiarach i białe obramowanie:

    .stage .portal:before {
      border-radius: 44px/62px;
      border: 4px solid white;
      content: "";
      display: block;
      height: 72px;
      margin-left: -4px
      margin-top: -4px;
      width: 48px;
    }

Jak na razie style zostały og&oacute;lnie zastosowane dla portali. Ponieważ jeden jest czerwony, a drugi niebieski, użyjemy oddzielnych zestaw&oacute;w reguł CSS, aby opisać każdy z nich. Najpierw czerwony portal:

    .stage .portal.red {
      background: radial-gradient(#000000, #000000 50%, #ff4640 70%);
      border: 7px solid #ff4640;
      transform: translate3D(223px, 25px, 385px) rotateY(90deg) skewX(5deg);
    }
    .stage .portal.blue {
      background: radial-gradient(#000000, #000000 50%, #258aff 70%);
      border: 7px solid #258aff;
      transform: translate3D(586px, 25px, 4px) skewX(-5deg);
    }

Czerwony portal otrzymał tło [gradientu radialnego](http://docs.webplatform.org/wiki/css/functions/radial-gradient) i czerwone obramowanie. Przekształcenie w tym przypadku obraca go i umieszcza na lewej ścianie. Niebieski portal jest podobny, ale posiada niebieski gradient i jest umieszczony na prawej ścianie. Oba wyglądały trochę dziwnie w testach, więc dodałem efekt pochylenia o 5 stopni, kt&oacute;ry wyglądał znacznie lepiej.

### Świecenie portalu

Dodany wcześniej kod HTML zawierał&nbsp;w każdej z dw&oacute;ch platform tag `span`. Te tagi zostały dodane tak, aby mogły być stylizowane gradientem radialny w celu nadania efektu świecenia za portalem.

    .stage .platform-left span {
      background: radial-gradient(left, #f3cac8, #c8b8ad 70px, #bcb3a8 90px);
      display: block;
      height: 200px;
      left: 0;
      position: absolute;
      width: 120px;
    }
    .stage .platform-right span {
      background: radial-gradient(top, #cdebe8, #c2cbc1 40px, #bcb3a8 60px);
      display: block;
      height: 60px;
      left: 280px;
      position: absolute;
      width: 150px;
    }

Dwa tagi span są umieszczone bezwzględnie, nadano im czerwony i niebieski gradient oraz umieszczono za każdym portalem. Pseudo-element m&oacute;głby zostać użyty do osiągnięcia tego efektu, ale niestety animowanie ich nie jest dobrze obsługiwane (nawet w wersjach Webkit), w tym przypadku wykorzystamy oddzielny element span.

### Drzwi

Jednym z nieoczekiwanych osiągnięć było wykorzystanie obramowań do stworzenia otworu w prawej ścianie, reprezentującej wyjście. Aby zrobić te drzwi, użyłem pojedynczego elementu div oraz kolorowych obramowań, kt&oacute;re wyglądają jak wstawka.

<img src="/images/posts/portal/door.png" alt="Door" />

Drzwi w HTML są proste. Dodaj poniższy kod do sekcji *stage*.

    <div class="door"></div>

Stylizowanie drzwi obejmuje kilka obramowań i przekształcenie, kt&oacute;re umieszcza je na prawej ścianie:

    .stage .door {
      background: #efe8dd;
      border-bottom: 6px solid #bcb3a8;
      border-left: 7px solid #78552e;
      height: 85px;
      transform: translate3D(450px, 34px, 4px);
      width: 65px;
    }

Aby stworzyć ten efekt, użyłem dwa obramowania. Dolne i lewe obramowanie wtapia się w platformę i bok prawej ściany, dając wrażenie głębi. Ponieważ g&oacute;rne obramowanie nie jest określone, lewe obramowanie kończy się r&oacute;wno z g&oacute;rny elementem div, kt&oacute;re w tym przypadku zdaje egzamin.

## Postacie

Po wstawieniu portali i drzwi, potrzebujemy osoby, kt&oacute;ra wskoczy w ten pierwszy i pojawi się po drugiej stronie. Pierwszy krokiem jest stworzenie osoby, kt&oacute;ra przeskoczy przez portal.

W pierwszym teście pr&oacute;bowałem użyć jednej postaci, zatrzymać animacje przy pierwszym portalu i natychmiast kontynuować ją po drugiej stronie. Jednakże kiedy animowałem pojedynczą postać, w momencie przenoszenia między portalami występowało migotanie. Aby tego uniknąć, użyłem dw&oacute;ch postaci i animowałem je oddzielnie.

### Budowanie postaci

<img src="/images/posts/portal/dude1.png" alt="The first of two characters to animate through the scene" />

Na początku kształt postaci składa się z 2 gł&oacute;wnych części, głowy i ciała. Nogi zostały dodane za pomocą pseudo-element&oacute;w . Podobna konstrukcja została zastosowana jako cień:

    <div class="dude one">
      <figure class="head"></figure>
      <figure class="body"></figure>
      <div class="dude-shadow one">
        <figure class="head"></figure>
        <figure class="body"></figure>
      </div>
    </div>

Ponieważ cień jest zawarty elemencie div postaci, obie rzeczy mogą być animowane w tym samym czasie. CSS wygląda tak:

    .dude, .dude-shadow {
      height: 100px;
      width: 30px;
    }
    .dude figure, .dude-shadow figure {
      background-color: black;
      display: block;
      position: absolute;
    }
    .dude figure.head, .dude-shadow figure.head {
      border-radius: 22px;
      height: 20px;
      left: 3px;
      top: 0;
      width: 20px;
    }
    .dude figure.body, .dude-shadow figure.body {
      border-radius: 30px 30px 0 0;
      height: 30px;
      top: 21px;
      width: 26px;
    }
    .dude figure.body:before, .dude figure.body:after, .dude-shadow figure.body:before, .dude-shadow figure.body:after {
      background-color: black;
      content: "";
      height: 15px;
      position: absolute;
      top: 30px;
      width: 9px;
    }
    .dude figure.body:before, .dude-shadow figure.body:before {
      left: 3px;
    }
    .dude figure.body:after, .dude-shadow figure.body:after {
      left: 14px;
    }

Reguły podwajają się w każdym przypadku i opisują obie postacie i ich cienie. Każda z części jest umieszczona bezwzględnie, a `border-radius` został użyty do stworzenia okrągłych kształt&oacute;w. Pseudo-elementy n&oacute;g są opisane w jednym fragmencie, następnie umieszczone za pomocą osobnych reguł.

### Postać 1

Po określeniu kształtu postaci, umieść go na pozycji startowej:

    .stage .dude.one {
      transform: translate3D(514px, 50px, 375px) rotateY(78deg);
    }
    .stage .dude-shadow.one {
      opacity: 0.1;
      transform: translateX(-12px) rotateX(90deg) translateY(8px);
    }

Przekształcenia CSS umieszczają obie postacie, ale r&oacute;wnież ich cienie. Widoczność cienia jest ustawiona na 0.1 zamiast koloru szarego. W ten spos&oacute;b szczeg&oacute;ły tła są widoczne za cieniem.

Pierwsza postać znajduje się na pozycji startowej i jest obr&oacute;cony pod podobnym kątem, w kt&oacute;rym był w wideo. P&oacute;źniej dodamy animację skoku przez portale.

### Ręce

<img src="/images/posts/portal/dude2.png" alt="The second of two characters to animate through the scene" />

Druga postać posiada coś więcej, ręce. Pomysł polega na tym, że postać skacze przez portal i świętuje to podnosząc swoje ręce. Oto kod HTML:

    <div class="dude two">
        <figure class="head"></figure>
        <figure class="body"></figure>
        <figure class="arm left"></figure>
        <figure class="arm right"></figure>
        <div class="dude-shadow two">
            <figure class="head"></figure>
            <figure class="body"></figure>
            <figure class="arm left"></figure>
            <figure class="arm right"></figure>
        </div>
    </div>

Na początku druga postać będzie nie widoczna, następnie przeskoczy przez portal mniej więcej w połowie animacji (gdy pierwsza postać dotrze do swojego portalu). Aby to ustawić, druga postać jest umieszczona w portalu.

    .stage .dude.two {
      transform: translate3D(610px, 40px, 10px) rotateY(15deg);
    }
    .stage .dude.two figure.arm {
      background: black;
      height: 8px;
      position: absolute;
      top: 20px;
      width: 20px;
    }
    .stage .dude.two figure.arm.left {
      left: -13px;
      transform: rotateZ(40deg);
    }
    .stage .dude.two figure.arm.right {
      right: -10px;
      transform: rotateZ(-40deg);
    }
    .stage .dude-shadow.two {
      opacity: 0.1;
      transform: translateY(12px) translateX(-16px) translateZ(-6px) rotateZ(-90deg) rotateY(90deg) rotateZ(50deg) skewX(30deg) scaleX(0.8);
    }

Druga animacje zostanie zastosowana dla rąk, kt&oacute;re r&oacute;wnież będą niewidoczne, ale pojawią się p&oacute;źniej.

## Scena ustawiona

Po umieszczeniu postaci i tła, scena jest gotowa do animacji.

<img src="/images/posts/portal/stage_set.png" alt="The scene is ready, with 2 characters ready to be animated." />

Dowiedzmy się jak sprawić, że mała osoba skacze przez pierwszy portal i pojawia się w drugim.

## Animacja

Jeśli [oglądniesz demo](http://hop.ie/portal/), zobaczysz kilka animacji. Zamiast przechodzić przez wszystkie animacje, kt&oacute;re składają scenę, skupię się na animacji postaci przechodzącej przez portale.

### Animacja klatek kluczowych

Synchronizowanie i animowanie element&oacute;w HTML jest osiągane za pomocą [keyframes](http://docs.webplatform.org/wiki/css/atrules/@keyframes), a dołączanie zestawu klatek kluczowych do elementu za pomocą właściwości [animation](http://docs.webplatform.org/wiki/css/properties/animation).

Pierwszą rzeczą jest animowanie pierwszej postaci, kt&oacute;ra osiąga i skacze do lewego portalu. Tak wygląda zestaw klatek kluczowych:

    @keyframes move-dude-one {
      /* Character flies into scene */
      0% {
        transform: translate3D(514px, -10px, 375px) rotateY(78deg) scaleY(2);
      }
      /* Waits a moment */
      1%, 18% {
        opacity: 1;
        transform: translate3D(514px, 50px, 375px) rotateY(78deg) scaleY(1);
      }
      /* Moves toward the portal */
      34%, 39% {
        opacity: 1;
        transform: translate3D(284px, 40px, 375px) rotateY(78deg);
      }
      /* Pauses, them jumps in */
      41%, 42% {
        opacity: 1;
        transform: translate3D(234px, 40px, 375px) rotateY(78deg);
      }
      /* Vanishes */
      43%, 100% {
        opacity: 0;
        transform: translate3D(234px, 40px, 375px) rotateY(78deg);
      }
    }
    /* Note: Use prefixes, such as @-webkit-keyframes, @-moz-keyframes, etc! */

Klatki kluczowe są serią krok&oacute;w, opisany za pomocą wartości procentowych. Dotyczą one czasu animacji i jeśli animacja trwałaby 10 sekund, 10% odpowiadałoby 1 sekundzie. 90% odpowiadało by 9 sekundom.

Aby postać przeskoczyła przez portale w ładnej pętli, ustawimy dwie animacje, kt&oacute;re będą trwały 10 sekund, aby pasowały. Wpisałem kilka komentarzy, kt&oacute;re opisują każdy etap animacji. Właściwość `transform` została użyta w każdym etapie, aby określić pozycję postaci i kąt.

Do 43% czasu animacji, `opacity` postaci jest ustawiona na 0. Wtedy pierwsza postać znika w portalu. Druga postać powinna zatem pojawić się od 43% czasu animacji.

Zanim to zrobimy, zastosujmy pierwszą animację dla pierwszej postaci.

    .dude.one {
      animation: move-dude-one 10s linear infinite;
      opacity: 0;
    }

Powyższa właściwość `animation` dotyczy animacji elementu *dude one*. Dołącza go za pomocą nazwy animacji, ustawia czas trwania na 10 sekund i dodaje animację w pętli.

Widoczność ustawiona na 0 sprawia, że postać jest niewidoczna przed rozpoczęciem animacji.

Po wykonaniu tego, ustawmy odpowiednie klatki kluczowe animacji dla drugiej postaci:

    @keyframes move-dude-two {
      /* Dude be invisible */
      0%, 42% {
        opacity: 0;
        transform: translate3D(610px, 40px, 10px) rotateY(15deg);
      }
      /* Apparato! */
      42.5% {
        display: block;
        opacity: 1;
        transform: translate3D(610px, 40px, 10px) rotateY(15deg);
      }
      /* Move onto the platform */
      46%, 75% {
        opacity: 1;
        transform: translate3D(610px, 40px, 120px) rotateY(15deg);
      }
      /* Stand there for a bit */
      76%, 97% {
        opacity: 0;
        transform: translate3D(610px, -10px, 120px) rotateY(15deg) scaleY(2);
      }
      /* Fly up into the sky! */
      98%, 100% {
        opacity: 0;
        transform: translate3D(610px, -10px, 120px) rotateY(15deg) scaleY(2);
      }
    }

    @keyframes arms {
      /* No arms */
      0%, 53% {
        opacity: 0;
      }
      /* Yes arms! */
      54%, 100% {
        opacity: 1;
      }
    }

Jak zaplanowano, ta animacja rozpoczyna się od 42%. Postać wyskakuje z portalu, stoi przez kr&oacute;tką chwilę i wylatuje w powietrze. Drugi zestaw klatek kluczowy opisuje animację rąk. Najpierw są one niewidoczne, następnie pojawiają się w połowie animacji.

Możemy zastosować te klatki kluczowe dla drugiego postaci w ten spos&oacute;b:

    .dude.two {
      animation: move-dude-two 10s linear infinite;
      opacity: 0;
    }

    .dude.two figure.arm {
      animation: arms 10s linear infinite;
      opacity: 0;
    }

Dzięki temu dwie animację zostały zastosowane. Ponieważ obie trwają 10 sekund i są zapętlone, powinny pasować czasowo z pierwszą animacją.

Jeśli jeszcze tego nie zrobiłeś, [sprawdź końcowy rezultat](http://hop.ie/portal/) w przeglądarce, aczkolwiek lepiej nie Internet Explorer.

## Ostrzeżenia i dziwactwa przeglądarek

Ponieważ jesteśmy w temacie przeglądarek, powinienem zwr&oacute;cić uwagę, że obecnie animacja nie będzie działać w Internet Explorer. Firefox jest trochę *meh*, ale nieźle, Safari prawie dobrze (czekamy, aż Apple w końcu załata webkit), a Chrome w 100% prawidłowo. Hej, przeglądarki mają przeglądać.

Wydajność jest całkiem dobra na r&oacute;żnych urządzeniach (pomijając problemy przeglądarek). Testowałem na iPhone z Safari i działa lepiej niż Chrome na laptopie. To dlatego, że użyte reguły CSS (przekształcenia 3D) wykorzystują sprzęt graficzny.

## Demo i informacje kontaktowe

Zobacz [demo&nbsp;Portal CSS online](http://hop.ie/portal)&nbsp;i pobierz&nbsp;[kod źr&oacute;dłowy na Github](https://github.com/donovanh/portal).
