---
layout: post
title: Animacja wczytywania Buffera
description: Stworzenie lekkiej i zarazem płynnej animacji za pomocą CSS i SVG
categories: [animation, loader, svg, how-to]
imageURL: /images/posts/buffer/buffer.png
home_image: /images/posts/buffer/buffer.png
tweet_text: Animacja CSS z obrazem SVG w celu stworzenia prostego efektu wczytywania
custom_header: posts/buffer.html
demo_url: https://cssanimation.rocks/demo/buffer/
customCSS: buffer.css
customJS: buffer.js
translator: Mateusz Kurlit
---

Lubie odkrywać przykłady subtelnych animacji na stronach internetowych. Ostatnio, gdy logowałem się do [Buffera](https://bufferapp.com), zauważyłem ładny efekt w czytywania w ich logo. Oto jak odtworzyć go za pomocą obrazu SVG i CSS.

## Wskazanie aktywności

Kiedy coś trwa dłużej niż zakładano, dobrym pomysłem jest dodanie wizualnej informacji zwrotnej, aby przekazać odwiedzającemu, że coś się dzieje. Pierwszy spos&oacute;b to subtelna animacja lub animacja wczytywania na stronie. Podejściem Buffera jest ich animowane logo:

<img src="/images/posts/buffer/buffer.gif" alt="Buffer loading animation" style="max-width: 272px" />

Animacja została osiągnięta poprzez animowany plik GIF.

<img src="/images/posts/buffer/buffer-loading.gif" alt="Buffer icon gif" style="max-width: 26px; border: 1em solid #fff;" />

Po zakończeniu wczytywania, animowany GIF jest zamieniany na statyczna wersję PNG loga.

Płynna podmiana animowanego GIFa na statyczny obraz może być trudna i w tym przypadku widzimy delikatny &quot;skok&quot; podczas przejścia.

Zobaczmy czy możemy obejść to tworząc animację i stan końcowy za pomocą CSS.

## Dlaczego skorzystać z CSS?

Istnieje parę istotnych zalet wykorzystania CSS zamiast animowany plik&oacute;w GIF. Gł&oacute;wną zaletą jest rozmiar. Podczas gdy animowany GIF używany tutaj jest całkiem lekki, ważący zaledwie 6Kb, kod CSS potrzebny do stworzenia podobnego efektu zajmuje ułamek tego. (Cały kod HTML i CSS strony dema waży 2.8Kb, włącznie z nagł&oacute;wkiem i stylami przycisk&oacute;w)

CSS daje nam więcej opcji niż animowany GIF, kt&oacute;ry nie może być edytowany po utworzeniu. Mając to na uwadze, GIFy mogą być dowolnymi animacjami, więc mogą nadawać się do bardziej skomplikowanych animacji, z kt&oacute;rymi CSS sobie nie poradzi. Zobacz przykład jak [animacja ikony Twittera](http://cssanimation.rocks/twitter-fave/) używa obrazu, aby to obejść.

Inną zaletą korzystania z CSS jest niezależność od rozdzielczości. Możemy powiększyć animację do dowolnego rozmiaru bez utraty jakości. Aby w pełny z tego skorzystać, możemy użyć obrazu SVG.

## Tworzenie logo SVG

Przed stworzeniem SVG, spędziłem parę chwil pr&oacute;bując storzyć logo Buffera za pomocą CSS. Podobny efekt można zobaczyć na stronie [Fabric](https://get.fabric.io/), gdzie 3 kwadraty pojawia ją się za pomocą CSS. Niestety bardziej subtelne szczeg&oacute;ły w warstwach Buffera sprawiły, że był za trudny, więc przeszedłem na SVG.

SVG (Skalowalna Grafika Wektorowa) jest typem pliku wektorowego obrazu. Pliki składają się z serii ścieżek, kt&oacute;re są skalowalne w nieskończoność i mogą być bardzo wydajne. Istnieje wiele narzędzi, w kt&oacute;rych można je stworzyć, takich jak Sketch, Affinity Designer i Adobe Illustrator.

<img src="/images/posts/buffer/image_trace.png" alt="Tracing the image using illustrator" />

W tym przypadku wykorzystałem logo w formacie PNG w programie Illustrator i stworzyłem plik SVG. Rezultat jest ładny i wydajny. Tutaj jest w całości:

    <svg width="100%" height="100%" x="0px" y="0px" viewBox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve">
      <path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1
    c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9
    C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"/>
      <path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3
    c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1
    c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4
    c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"/>
      <path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1
    c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4
    c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"/>
    </svg>

Tutaj jest rezultat:

<div class="demo-container non-grey"> <svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></div>

[Pobierz plik SVG tutaj](/images/posts/buffer/buffer_icon.svg)

## Stylizowanie warstw SVG

Mogłeś zauważyć części `class` SVG. Dodałem je, aby można było stylizować SVG za pomocą CSS.

Istnieje parę atrybut&oacute;w, kt&oacute;re możemy stylizować za pomocą CSS, takich jak obrys, wypełnienie oraz dodanie filtr&oacute;w CSS. Na przykład, pracowałem na właściwości `fill`, kt&oacute;ra jest jak `background-color`.

Zwr&oacute;ć uwagę, że kiedy odnosimy się do obraz&oacute;w SVG za pomocą tagu `img`, nie możemy stylizować zawartości SVG za pomocą CSS. W tym przykładzie dołączam text pliku SVG bezpośrednio do źr&oacute;dła. To pozwala CSS nad nim pracować.

Możemy nadać warstwom Buffera kolor szary za pomocą tego kodu CSS:

    .layer {
      fill: #4b4b4b;
    }

<div class="demo-container"> <svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></div>

## Animowanie

Możemy użyć animacji `keyframe`, aby stworzyć efekt animacji wczytywania. Podczas planowania tego typu animacji, lubię przejść na oł&oacute;wek i papier i rozrysować animację. Cele są 3 animacje, wszystkie zsynchronizowane w pętli.

<img src="/images/posts/buffer/timeline.jpg" alt="Timeline of the animations on the layers" />

Klatki kluczowe opisują animację jako serie krok&oacute;w od 0% do 100%. Aby to zilustrować, oznaczyłem obszary, gdzie warstwy muszą być &quot;włączone&quot;, aby stworzyć podobny efekt do animowanego GIFa.

Stworzymy trzy zestawy klatek kluczowych, jeden dla każdej warstwy:

    @keyframes layer1 {
      0%, 65% {
        fill: #b2b2b2;
      }
      75%, 82% {
        fill: #4b4b4b;
      }
      92%, 100% {
        fill: #b2b2b2;
      }
    }

    @keyframes layer2 {
      0%, 40% {
        fill: #b2b2b2;
      }
      50%, 86% {
        fill: #4b4b4b;
      }
      96%, 100% {
        fill: #b2b2b2;
      }
    }

    @keyframes layer3 {
      0%, 15% {
        fill: #b2b2b2;
      }
      25%, 90% {
        fill: #4b4b4b;
      }
      100% {
        fill: #b2b2b2;
      }
    }

Każda warstwa zaczyna się od jasnoszarego (#b2b2b2) i przechodzi do ciemnoszarego&nbsp;(#4b4b4b). Rozłożyłem r&oacute;wnież koniec każdej animacji tak, aby ciemniejszy kolor przechodzi z g&oacute;ry w d&oacute;ł przed powt&oacute;rzeniem.

Po ustawieniu klatek kluczowych, musimy zastosować je do warstw.

    .layer {
      animation: 4s linear infinite;
    }

    .layer1 {
      animation-name: layer1;
    }

    .layer2 {
      animation-name: layer2;
    }

    .layer3 {
      animation-name: layer3;
    }

To dotyczy każdego z trzech zestawu klatek kluczowych przeznaczonego dla właściwej warstwy.

<section class="demo-container animated"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></section>

## Skalowanie w d&oacute;ł

Zobaczmy jak to wygląda obok prawdziwego logo:

<section class="demo-container finished"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 363.1 74.2" style="enable-background:new 0 0 363.1 74.2;" xml:space="preserve"><path class="layer" d="M102,71.3c0-3.5,0-6.6,0-9.7c0-18.2,0.2-36.3-0.1-54.5c-0.1-4.7,1.3-6.3,5.9-5.8c2.3,0.3,4.6,0,7.5,0c0,8.4,0,16.2,0,23.1 c5.8-1.7,11.3-4.3,16.9-4.6c9.4-0.5,16.4,5.6,19.6,15.5c2.5,7.7,2.4,15.5-0.4,23c-5.5,14.7-21.5,18.9-33.7,9.1 c-0.5-0.4-1-0.7-1.9-1.3c-0.2,1.9-0.4,3.3-0.6,5.1C111,71.3,106.9,71.3,102,71.3z M114.6,46.6c0.8,3.6,0.7,7.8,2.7,10.6 c3.2,4.4,10.7,5.1,15.5,2.5c5.1-2.7,7.9-9.5,6.7-16.4c-1-6.2-4.8-10.5-10.1-11.5C120,30.2,115.4,35,114.6,46.6z"></path><path class="layer" d="M291.7,50.4c0.9,12,12.1,14.8,27.7,7.5c1.7,2.5,3.5,5.1,5.2,7.5c-8.1,8.7-26,10-36.7,2.8c-10.2-6.9-13.9-21.3-8.5-33.5 c5.2-11.6,18.2-17.7,30.8-14.3c12,3.2,19.3,15,17.9,29.9C316.1,50.4,303.9,50.4,291.7,50.4z M315.5,41.2c-1.3-7.5-6.1-11.4-12.8-11 c-6.4,0.3-10.7,4.4-11.3,11C299.3,41.2,307.2,41.2,315.5,41.2z"></path><path class="layer" d="M193.5,21.1c4.7,0,8.5,0,12.7,0c0,16.7,0,33.2,0,50.2c-3.9,0-8,0-12.3,0c-0.2-1.5-0.4-3.1-0.8-5.4c-5.7,4.7-11.7,7.4-18.9,7 c-8.9-0.5-14.4-4.9-14.7-13.7c-0.4-12.5-0.1-24.9-0.1-37.8c4.2,0,8.3,0,13.1,0c0,5.5,0,11.1,0,16.7c0,4.2,0.1,8.3,0,12.5 c-0.1,4.7,0.8,8.7,6.1,10.1c5,1.3,12.1-1,14.2-5c0.7-1.4,0.7-3.2,0.7-4.8C193.5,41.1,193.5,31.4,193.5,21.1z"></path><path class="layer" d="M248.9,5.3c-1.5,2.4-3,4.6-4.3,6.8c-10.3-2.1-13.1-0.1-11.8,8.6c3,0.2,6.1,0.3,9.4,0.5c0,3.7,0,7.2,0,11 c-3.1,0.2-6.2,0.4-10,0.6c0,12.9,0,25.6,0,38.5c-4.8,0-8.8,0-13.5,0c0-13,0-25.7,0-38.6c-2.8-0.2-5.1-0.4-7.8-0.6 c0-3.7,0-7.2,0-11.1c2.5-0.2,4.9-0.3,7.6-0.5c0.1-8.4,2-15.8,10.7-19.1C235.5-0.8,243.4,0.6,248.9,5.3z"></path><path class="layer" d="M253.1,32.9c-3.3-0.2-5.6-0.4-8.1-0.6c0-3.7,0-7.1,0-11c2.4-0.2,4.8-0.3,7.8-0.6c0.2-8.8,2.3-16.9,12-19.5 c6.5-1.7,12.8-1,18.5,3.8c-1.6,2.6-3.1,5-4.5,7.2c-9.4-2.7-12.7-0.5-11.9,8.5c3,0,6.1,0,9.5,0c0,4.1,0,7.6,0,11.5 c-3.2,0.2-6.1,0.3-9.7,0.5c0,12.8,0,25.5,0,38.5c-4.7,0-8.7,0-13.5,0C253.1,58.6,253.1,45.9,253.1,32.9z"></path><path class="layer" d="M347.4,71c-1,0.4-1.3,0.6-1.6,0.6c-11.6,0.9-11.6,0.9-11.6-10.7c0-11.3,0-22.6,0-33.9c0-1.8,0-3.6,0-5.7c4.6,0,8.7,0,13,0 c0.1,1.7,0.3,3.4,0.4,4.7c4.9-2.4,9.8-4.8,15.6-7.6c0,5.5,0,9.4,0,13.6c-1.7,0.1-3.5,0.1-5.3,0.5c-9,2.1-11,4-10.6,12 C347.8,53.3,347.4,62.1,347.4,71z"></path><path class="layer layer1" d="M36.2,0c0.9,0,1.8,0.4,2.6,0.7c10.5,4.9,21,9.8,31.6,14.7c0.8,0.4,1.8,0.5,1.9,1.6c0,1.2-1.1,1.3-1.8,1.6 c-10.6,5-21.2,9.9-31.8,14.8c-1.7,0.8-3.4,0.8-5.1,0c-10.8-5-21.5-10-32.3-15.1c-0.5-0.3-1.3-0.9-1.2-1.4c0-0.5,0.7-1.1,1.3-1.4 C12.1,10.7,22.9,5.6,33.6,0.6C34.4,0.3,35.7,0,36.2,0z"></path><path class="layer layer2" d="M36.1,54.2c-0.7,0-1.8-0.4-2.6-0.8c-10.7-5-21.5-10-32.2-15c-0.6-0.3-1.3-0.9-1.3-1.3c0.1-0.5,0.7-1.2,1.3-1.5 c1.7-0.9,3.5-1.7,5.3-2.5c1.8-0.8,3.6-0.8,5.4,0c7,3.3,14.1,6.5,21.1,9.9c2,0.9,3.9,0.9,5.9,0c7-3.3,14.1-6.6,21.1-9.9 c1.8-0.8,3.6-0.9,5.3,0c1.9,0.9,3.8,1.7,5.6,2.7c0.5,0.2,1.1,0.9,1.1,1.2c0,0.5-0.6,1.1-1.1,1.4c-10.8,5.1-21.6,10.1-32.5,15.2 C37.9,53.9,36.9,54.2,36.1,54.2z"></path><path class="layer layer3" d="M36.2,74.2c-1.1,0-2.1-0.5-3.1-1c-10.4-4.8-20.8-9.7-31.2-14.6C1.1,58.3,0,58.2,0,57c0-1.2,0.9-1.3,1.6-1.6 c3.2-1.5,3.4-1.5,5-2.3c1.9-0.9,3.7-0.9,5.6,0c6.9,3.2,13.8,6.4,20.7,9.7c2.2,1.1,4.3,1.1,6.5,0c6.9-3.3,13.8-6.4,20.7-9.7 c1.9-0.9,3.8-0.9,5.7,0c1.8,0.9,3.6,1.7,5.4,2.6c0.5,0.2,1.1,0.8,1.1,1.2c0,0.6-0.6,1.1-1.1,1.4c-7.4,3.5-14.9,7-22.3,10.5 c-3.2,1.5-6.4,3-9.6,4.5C38.2,73.7,37.3,74.2,36.2,74.2z"></path></svg></section>

Całkiem nieźle!

Rezultat jest mały (łącznie ~3Kb włącznie z CSS, korzystając z Gzip), skaluje się do ekranu retina i wyżej oraz może być z łatwością zmieniony w CSS w razie potrzeby. Animacja może być r&oacute;wnież zatrzymana za pomocą JavaScript zamiast zastępowania innym obrazem. Zobacz [demo](/demo/buffer) w akcji.

## Idąc dalej

Ponieważ wykorzystaliśmy CSS do ustawienia animacji, możemy spr&oacute;bować r&oacute;żnych odmian bez zmiany pliku SVG.

<section class="demo-container multiple variation1"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></section>

<section class="demo-container multiple variation2"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></section>

<section class="demo-container multiple variation3"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></section>

<section class="demo-container multiple variation4"><svg width="100%" height="100%" x="0px" y="0px" viewbox="0 0 313.3 321.4" style="enable-background:new 0 0 313.3 321.4;" xml:space="preserve"><path class="layer layer1" d="M157.1,0c3.8,0,7.9,1.5,11.4,3.2c45.6,21.1,91.2,42.4,136.7,63.8c3.3,1.5,8,2.1,8.1,7c0.1,5-4.7,5.6-7.9,7.1 c-45.8,21.5-91.7,42.9-137.6,64.3c-7.4,3.4-14.8,3.5-22.2,0C99,123.6,52.3,101.9,5.8,80c-2.4-1.1-5.4-4-5.4-6c0-2,3.1-4.8,5.5-5.9 C52.4,46.2,99.1,24.4,145.8,2.8C149.1,1.2,154.5,0,157.1,0z"></path><path class="layer layer2" d="M156.6,235c-3.1,0-7.7-1.7-11.3-3.3c-46.5-21.6-93-43.3-139.4-65.1c-2.4-1.1-5.8-4.1-5.6-5.8c0.3-2.4,3.2-5,5.7-6.3 c7.5-4,15.3-7.3,23-10.9c7.9-3.7,15.7-3.6,23.6,0.1c30.4,14.3,61,28.4,91.4,42.7c8.6,4.1,16.8,4,25.4-0.1 c30.4-14.3,60.9-28.4,91.4-42.7c7.7-3.6,15.4-3.7,23.1-0.1c8.2,3.8,16.4,7.4,24.4,11.5c2.1,1.1,4.9,3.7,4.7,5.4 c-0.2,2.1-2.7,4.8-4.9,5.9c-46.8,22.1-93.7,44-140.7,65.8C164.2,233.5,159.9,235,156.6,235z"></path><path class="layer layer3" d="M156.8,321.4c-4.6,0-9.3-2.3-13.4-4.2c-45.2-20.9-90.3-42-135.4-63.1c-3.3-1.5-8-2.1-8-7.1c0-5,3.8-5.5,7-7.1 c13.9-6.5,14.9-6.5,21.8-9.8c8-3.8,16-3.7,24.1,0.1c29.9,14,59.8,27.7,89.6,41.9c9.6,4.6,18.5,4.7,28.2,0.1 c29.8-14.2,59.8-27.9,89.6-41.9c8.2-3.9,16.3-4,24.5,0c7.8,3.8,15.8,7.2,23.5,11.1c2.1,1.1,4.8,3.3,4.8,5.4 c-0.1,2.4-2.7,4.8-4.9,5.9c-32.2,15.3-64.5,30.3-96.8,45.4c-13.9,6.5-27.7,13.1-41.7,19.3C165.7,319.2,161.5,321.4,156.8,321.4z"></path></svg></section>

## Pobieranie plik&oacute;w

Możesz [tutaj pobrać gotowy kod HTML i CSS](https://cssanimation.rocks/demo/buffer/buffer_icon_svg.zip).

## Kompatybilność z przeglądarką

Na szczęście format SVG stał się popularny. Często sprawdzam takie rzeczy na [CanIUse.com](http://caniuse.com/#feat=svg). Tutaj widzimy porządne wsparcie dla SVG we wszystkich aktualnych przeglądarkach. Jeśli chcesz zapewnić prawidłowe wyświetlanie strony odwiedzającym, kt&oacute;rzy korzystają ze starszych przeglądarek zalecam skorzystanie z [Modernizr](http://modernizr.com) i zastosowanie statycznego obrazu.
