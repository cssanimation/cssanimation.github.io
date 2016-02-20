---
layout: post
bodyClass: shorter
title: Animowanie Element&oacute;w Listy
description: Kilka sztuczek dotyczących wyświetlania element&oacute;w listy za pomocą animacji.Animowanie Element&oacute;w Listy
description: Some tricks to help announce list items through animation.
categories: [animation, tips, animations, transitions]
customCSS: list_items.css
customJS: list_items.js
imageURL: /assets/images/posts/list_items/list_items.png
home_image: /assets/images/posts/list_items/home.png
tweet_text: Animowanie Element&oacute;w Listy
translator: Mateusz Kurlit
translator_link: /pl/
---

Kiedy fragmenty strony internetowej zmieniają się, dodanie animacji jest dobrym sposobem na wskazanie odwiedzającym co się dzieje.&nbsp; Animacje mogą zapowiadać pojawienie się nowej treści lub przyciągnąć uwagę do treści, kt&oacute;ra jest w trakcie usuwania. W tym artykule, przyjrzymy się jak wprowadzenie nowej treści może być wykorzystane, pokazując i ukrywając elementy na liście.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

## Wprowadzenie treści

Animacja może być przydatna w przypadku gdy chcemy pom&oacute;c odwiedzającym zrozumieć kiedy rzeczy zmieniają się na stronie. Kiedy treść jest dodawana lub usuwana bez animacji, mogą oni przeoczyć nagłe zmiany i być zdezorientowani. Za pomocą animacji można tego uniknąć i pom&oacute;c poprzez &quot;ogłoszenie&quot;, że coś może zniknąć ze strony lub pojawić się na niej.

Jednym z przykład&oacute;w dodawania lub usuwania treści jest zarządzanie listą. Większość animacji może być użyta do innych rodzaj&oacute;w treści. Jeśli uznasz je za przydatne lub masz inne pomysły, [skontaktuj się z nami](mailto:hello@cssanimation.rocks), z radością o nich usłyszymy.

## Konfigurowanie HTML

Aby rozpocząć, skorzystamy z wstępnie wypełnionej listy i przycisku do dodawania nowych element&oacute;w do listy.
 
    <ul id="list">
      <li class="show">List item</li>
      <li class="show">List item</li>
    </ul>
    <button id="add-to-list">Add a list item</button>

Kilka rzeczy wartych uwagi. Po pierwsze, mamy dwa ID w HTML. Zazwyczaj nie wykorzystujemy ID do stylizacji, ponieważ mogą one powodować problemy z ich specyfiką Jednakże są one przydatne podczas używania JavaScript.

Początkowe elementy posiadają klasę &quot;show&quot;, ponieważ tę klasę użyjemy p&oacute;źniej, aby dodać efekt animacji.

## Trochę JavaScript

Na potrzeby wersji demonstracyjnej napiszemy kod JavaScript, aby dodać nowy element do listy, a następnie klasę &quot;show&quot;, aby pojawiła się animacja. Istnieje pow&oacute;d wykorzystania tego dwuetapowego procesu. Jeśli elementy listy byłyby dodane w stanie widocznym, nie byłoby czasu na przeprowadzanie przejścia.

Moglibyśmy obejść to aplikując animację na elemencie `li`, ale to byłoby trudniejsze do zastąpienia podczas usuwania element&oacute;w za pomocą innej animacji.
 
    /*
     * Add items to a list - from cssanimation.rocks/list-items/
     */
    document.getElementById('add-to-list').onclick = function() {
      var list = document.getElementById('list');
      var newLI = document.createElement('li');
      newLI.innerHTML = 'A new item';
      list.appendChild(newLI);
      setTimeout(function() {
        newLI.className = newLI.className + " show";
      }, 10);
    }

## Brak animacji

Najprościej możemy napisać kod CSS, aby pokazać elementy listy. Korzystamy z klasy `show `jako sposobu, aby były widoczne oraz usuwamy klasę `show`, co powinno spowodować ich zniknięcie.
 
    li {
      list-style: none;
      background: #d1703c;
      color: #fff;
      height: 0;
      line-height: 2em;
      margin: 0;
      padding: 0 0.5em;
      overflow: hidden;
      width: 10em;
    }

    li.show {
      height: 2em;
      margin: 2px 0;
    }

W tych stylach określamy elementy `li` w taki spos&oacute;b, aby wyglądały jak prostokąty bez kropek i nadajemy im `height` 0, `margin` 0 i ustawiamy `overflow` na ukryty. W ten spos&oacute;b pozostaną ukryte dop&oacute;ki nie zastosujemy klasy `show`.

Klasa `show` dotyczy wysokości i marginesu. Ponieważ nie używamy jeszcze animacji, elementy powinny&nbsp;nagle&nbsp;pojawiać się na stronie. Spr&oacute;buj r&oacute;wnież kliknąć elementy listy, aby zobaczyć jak znikają.

<section class="add-to-list demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

### Zanikanie

Jako pierwszą animację, dodamy prosty efekt zanikania. Elementy listy pojawiają się bardziej stopniowo niż przedtem. Wizualnie to wciąż wygląda trochę niezdarnie, ale ma tę zaletę, że zwraca uwagę odwiedzających, że coś się dzieje.

<section class="add-to-list fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

Aby dodać efekt, utworzyłem osobny fragment kodu CSS. Aby zastosować go do listy, dodaj klasę `fade` do kontenera otaczającego twoją listę.
 
    .fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
      height: 2em;
    }
    .fade li.show {
      opacity: 1;
    }

### Przesuwanie w d&oacute;ł i Zanikanie

Nagły skok za każdym razem, gdy element jest dodawany lub usuwany powoduje mały zgrzyt. Dostosujmy r&oacute;wnież wysokość, aby stworzyć płynny efekt przesuwania.

<section class="add-to-list slide-fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

R&oacute;żnica między tym i klasą `fade` widoczną powyżej jest tylko to, że `height: 2em` zostało usunięte. Ponieważ klasa `show` zawiera ustawioną wysokość (dziedziczoną od pierwszego fragmentu CSS), przeniesie ona wysokość automatycznie.
 
    .slide-fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
    }
    .slide-fade li.show {
      opacity: 1;
    }

### Kołysanie

Razem z zanikaniem i przesuwaniem, możemy iść dalej dodając mały efekt 3D. Przeglądarka może przekształcić elementy nie tylko po osi X i Y, użyteczne w przypadku dodawania głębi sceny.

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

Aby to ustawić, musimy zdefiniować `section` jako etap, w kt&oacute;rym przejścia 3D mają miejsce. Wykonujemy to określając wartość `perspective`.

Perspektywa w CSS jest głębią sceny. Mała liczna oznacza płytszą perspektywę z bardziej ekstremalnymi kątami. Warto pobawić się wartością, aby znaleźć rezultat, kt&oacute;ry najbardziej ci odpowiada.
 
    .swing {
      perspective: 100px;
    }

Następnie ustawimy elementy `li`, aby przekształcić w miejscu. Skorzystamy z `opacity`, aby utworzyć efekt zanikania jak wcześniej, ale dodamy `transform`, aby obr&oacute;cić `li` w miejscu.
 
    .swing li {
      opacity: 0;
      transform: rotateX(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

    .swing li.show {
      opacity: 1;
      transform: none;
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

W tym przykładzie zaczniemy z `li` obr&oacute;conym o 90 stopni przeciwnie do wskaz&oacute;wek zegara. Po dodaniu klasy `show`, `transform` jest ustawiona jako `none`, pozwalając na przejście w miejscu. Aby uzyskać efekt kołysania, skorzystam z funkcji czasowej `cubic-bezier`.

### Kołysanie z boku

Możemy dostosować ten efekt, aby z łatwością stworzyć r&oacute;żne style. Oto przykład, w kt&oacute;rym elementy kołyszą się z boku.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Element listy</li><li class="show" style="background-color: #3cd19e;">Element listy</li>
</ul>
<button>Dodaj element listy</button></section>

Aby stworzyć ten efekt, musimy tylko zmienić oś obrotu.
 
    .swing li {
      opacity: 0;
      transform: rotateY(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

Wszystko co zmieniliśmy to&nbsp;`rotateX`&nbsp;na `rotateY`.

## Prefiksy i testowanie w przeglądarce

Dla czytelności kod widoczny powyżej nie zawiera żadnych prefiks&oacute;w&nbsp; Zalecam dodanie prefiks&oacute;w, aby umożliwić działanie w przeglądarkach, kt&oacute;re wymagają prefiks&oacute;w `-webkit` lub innych. Ja korzystam z [Autoprefixer](https://github.com/postcss/autoprefixer), aby nie martwić się o te rzeczy.

Ponieważ te animację znajdują się na g&oacute;rze podstawowego mechanizmu pokaż / ukryj, powinny się pogorszyć z gracją w przeglądarkach, kt&oacute;re nie obsługują animacji. Testowanie r&oacute;żnych urządzeń i przeglądarek jest ważne, ale najnowsze przeglądarki powinny być w stanie wyświetlić te animacje.
