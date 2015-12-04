---
layout: post
title: Reguły animacji w sieci
description: How Disney's 12 Principles of Animation can be applied to web designs
categories: [animation, tips, animations, transitions, apple watch]
customCSS: principles.css
imageURL: /images/posts/principles/principles.png
home_image: /images/posts/principles/principles.png
tweet_text: Zastosowanie 12 Reguł Animacji Disney'a w animacji stron internetowych
custom_header: posts/principles.html
demo_url: http://codepen.io/collection/AxKOdY/
published: true
translator: Mat Chabros
translator_link: http://matchabros.com
english_version: /principles/
---

Jako projektanci oraz deweloperzy front-endowi, wykorzystujemy CSS do stylizacji, pozycjonowania oraz tworzenia świetnie wyglądających stron. Bardzo często, CSS służy Nam również w celu dodania ruchu na naszej stronie w formie przejść oraz animacji, niestety najczęściej nie wykraczamy poza ów obszar.

Animacje potrafią być bardzo potężnym narzędziem dla Naszych klientów i gości aby pomóc im zrozumieć oraz docenić Nasz design. Istnieje szereg reguł które możemy wcielić w Nasze prace aby wykorzystać maksimum ich możliwości.

Dawno utwierdzone, fundamentalne zasady pracy w Disney, [12 Reguł Animacji](http://en.wikipedia.org/wiki/12_basic_principles_of_animation) zostały opublikowane jako "The Illusion of Life: Disney Animation" w 1981. Reguły które mówią w jaki sposób animacja może być wykorzystana aby pomóc widzowi pogrążyć się w realistycznie przedstawionym świecie.

W tym artykule omówię każdą z 12stu reguł oraz przedyskutuję w jaki sposób można je wykorzystać na stronie internetowej. [Link do kodu możecie znaleźć tutaj](http://codepen.io/collection/AxKOdY/).

## Squash and stretch (Zgnieć i rozciągnij)

<section class="demo-container principle principle-one">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>

Wyobrażenie że każdy obiekt posiada swoją masę która pozostaje taka sama w momencie ruchu. Piłka się rozszerzy podczas odbijania się od ziemi, ale też stanie się niższa kiedy jej masa się rozłoży.

Jest to bardzo pomocne podczas tworzenia obiektów które chcemy aby uważano je za cos fizycznego i prawdziwego - jak ludzie, zegarki lub odbijające się piłki.

Możliwe jest pominięcie ów zasady podczas tworzenia stron internetowych. Elementy DOM nie są koniecznie powiązane z obiektami fizycznymi i mogą się zwiększać oraz zmniejszać na ekranie kiedy jest wymagane. Na przykład - przycisk może się zwiększyć i zmienić w okno dialogowe lub mogą się pojawiać i znikać informacje o błędach.

Jednak wciąż reguła "Squash and stretch" może być wykorzystana aby nadać obiektowi wrażenia posiadania masy fizycznej. Nawet małe zmiany w kształcie mogą być subtelne ale przyciągające wrażenie.

## Anticipation (Oczekiwanie)

<section class="demo-container principle principle-two">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>

Ruch na ogół nie wydarzy się błyskawicznie. W prawdziwym życiu ruch jest poprzedzany przygotowaniem jak na przykład piłka która dopiero zaczyna się staczać zanim spadnie ze stołu lub osoba która ugina kolana aby przygotować się do skoku.

Możemy to wykorzystać aby Nasze przejścia i animacje były bardziej żywe. Oczekiwanie może być w formie subtelnej sprężystości która pomoże widzom zrozumieć zmiany i bacznie obserwować obiekty na ekranie.

Na przykład, element mógłby się trochę zmniejszyć przed powiększeniem kiedy najedziemy na niego kursorem; dodawania dodatkowych przedmiotów do listy mogłoby być przedstawione w taki sposób że starsze przedmioty robiłyby miejsce dla nowych.

## Staging (Inscenizacja)

<section class="demo-container principle principle-three">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>

Inscenizacja polega na tym aby obiekt był w centrum uwagi w momencie kiedy inne obiekty grają rolę drugoplanową. Można to osiągnąć pozycjonując główne wydarzenie w widocznym miejscu lub maskując inne elementy aby uwidocznić na czym użytkownik musi skupić swoją uwagę.

Kolejnym podejściem jest wykorzystanie ruchu. Kiedy w tym samym momencie porusza się bardzo dużo obiektów, trudno jest Nam skupić uwagę na tym na czym powinniśmy. Jeżeli wszystkie inne obiekty przestaną się poruszać a tylko jeden będzie się wciąż poruszał, nawet odrobinę - będzie to o wiele łatwiejsze do spostrzeżenia.

Jedną z technik jest sprawienie aby przycisk "Save" zadrżał lub błysną chwilowo aby zasugerować użytkownikowi chęć zapisania dokumentu. Kiedy cała reszta ekranu jest statyczna, nawet subtelny ruch będzie się wyróżniał.

## Straight-Ahead Action and Pose-to-Pose (Rysowanie Progresywne i według Klatek Kluczowych oraz od Pozy do Pozy)

<section class="demo-container principle principle-four">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

Straight-Ahead Action jest wtedy kiedy każda klatka animacji jest narysowana. Od pozy do pozy występuje kiedy seria klatek kluczowych jest wykonana a później uzupełniona, najczęściej przez asystenta.

Większość animacji wykorzystuje styl od pozy do pozy: przejściami między klatkami może się zając przeglądarka która dodaje zmiany wśród klatek i wyciąga tyle klatek ile może aby animacja była płynna.

Jednym z wyjątków do tego jest funkcja czasowa 'steps'(kroki). Dzięki ów funkcji, przeglądarka 'steps'(wykonuje kroki) przez tyle klatek ile jest zdefiniowanych. W ten sposób możemy pokazać serię obrazków i sprawić aby przeglądarka wyświetlała je jedno po drugim, tworząc w ten sposób animację w stylu "Straight-Ahead Action".

## Follow Through and Overlapping Action (Nakładanie się i podążanie za akcją)

<section class="demo-container principle principle-five">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape"></div>
  </div>
  </div>
</section>

Wszystko nie dzieje się w tym samym momencie. Kiedy samochód niespodziewanie się zatrzymuje, przechyla się do przodu, z dymem spod kół oraz kierowcą który kontynuuje ruch aż do momentu zatrzymania.

Takie detale są przykładem nakładania się i podążania za akcją.
Mogą być wykorzystane w sieci aby podkreślić fakt ze coś się zatrzymuje. Na przykład, przedmiot w liście może się wsunąć trochę za daleko, skorygować swoje położenie i ustawić się w odpowiednim miejscu.

Do stworzenia wrażenia nakładania się akcji, możemy sprawić aby elementy poruszały się z różnymi prędkościami względem siebie.
Jest to technika wykorzystywana w systemach operacyjnych iOS kiedy następuje przejście między widokami.
Niektóre przyciski i guziki poruszają się w różnych odstępach, efekt jest bardziej realistyczny i mniej płaski niż kiedy wszystko porusza się w tym samym momencie. Połączone efekty dają użytkownikowi czas aby dokładnie zrozumieli zmianę.

## Slow In and Slow Out (Rozpędzania i zwolnienie)

<section class="demo-container principle principle-six">
  <div class="wrapper">
  <div class="shape a"></div>
  </div>
</section>

Obiekty bardzo rzadko uzyskują maksymalną prędkość ze stanu spoczynku, stopniowo zwiększają swoja prędkość lub ją wytrącają przed zatrzymaniem. Bez przyspieszenia i zwolnienia, ruch sprawia wrażenie mechanicznego.

W CSS, rozpędzania i zwolnienie jest znane nam jako 'easing'. Easing jest funkcja czasową, sposobem zdefiniowania prędkości zmian podczas animacji.

Przy wykorzystaniu funkcji czasowej, animacja może się rozpocząć powoli i stopniowo zwiększać swoją prędkość(ease-in), rozpocząć szybko a potem zwolnić swoje tempo(ease-out) lub bardziej kompleksowe efekty dzięki wykorzystaniu 'cubic-bezier'.

## Arc (Łuki)

<section class="demo-container principle principle-sevena">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape a"></div>
  </div>
  </div>
</section>

Obiekty są bardziej realistyczne kiedy poruszają się wedle zasady 'Rozpędzenia i Zwolnienia', bardzo rzadko podążają wzdłuż linii prostej: mają one również tendencję do ruchu w trajektorii łuku.

W CSS możemy ów efekt ruchu uzyskać na różne sposoby. Jednym z nich jest połączenie ze sobą kilku animacji. Animacja odbijającej się piłki, na przykład, może być połączeniem dwóch animacji, jednej która wprawia piłkę w ruch poziomy a druga animacja w ruch pionowy. Piłka poruszała by się wtedy na ekranie po trajektorii łuku.

<section class="demo-container principle principle-sevenb">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

Inną opcją jest obrócenie obiektu. Możemy dostosować środek rotacji obiektu poprzez ustawienie opcji 'transform' poza obszar elementu. Kiedy obrócimy obiekt, będzie się on obracał po trajektorii łuku.

## Secondary Action (Akcja drugoplanowa)

<section class="demo-container principle principle-eight">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>

W momencie kiedy dzieje się główna akcja, akcja drugoplanowa może ją wzbogacić lub podkreślić. Może to być ruch rękami podczas spaceru lub przechylenie głowy. Lub odbijająca się piłka która wznieca tuman kurzu.

Na stronie internetowej, akcja drugoplanowa może polegać na tym że elementy ustępują miejsce głównemu elementowi który jest przedstawiony, jak na przykład, przeciągnięcie przedmiotu na środek listy.

## Timing (Taktowanie/Czas trawania)

<section class="demo-container principle principle-nine">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

Taktowanie/Czas trwania może być wykorzystany aby pokazać ciężar poruszającego się obiektu, lub by dodać poruszającemu się obiektowi charakteru.

W sieci jest to proste dzięki dostosowaniu wartości 'animation-duration' oraz 'transition-duration'.

Sprawienie że animacja trwa dłużej niż powinna jest proste. Dostosowanie czasu trwania może być pomocne aby pozbyć się animacji z treści lub interakcji.

## Exaggeration (Wyolbrzymienie)

<section class="demo-container principle principle-ten">
  <div class="wrapper">
  <div class="shape"></div>
  </div>
</section>

Najczęściej wykorzystywane w kreskówkach, wyolbrzymienie może przyciągnąć uwagę na niektóre zachowania i sprawić że wyglądają bardziej dramatycznie. Wilk chcąc ugryźć może otworzyć szczęki szerzej niż normalnie aby efekt był przerażający albo śmieszny.

Na stronie internetowej, obiekt może być zmniejszony i powiększony aby przyciągnąć uwagę. Na przykład podczas wypełniania formy, sekcja która jest aktywna może się powiększyć a reszta zmniejszyć lub zniknąć.

## Solid drawing (Rysunek przestrzenny)

<section class="demo-container principle principle-eleven">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="front"></span>
      <span class="back"></span>
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
  </div>
</section>

Podczas animowania obiektu w trzech wymiarach należy mieć na uwadze fakt aby dany obiekt przestrzegał zasad perspektywy. Ludzie są przyzwyczajeni do życia w świecie trój wymiarowym, więc kiedy obiekt zachowuje się nie tak jak powinien - wygląda to źle.

Nowoczesne przeglądarki mają przyzwoite wsparcie dla trój wymiarowych transformacji. Oznacza to ze możemy obracać oraz ustawiać obiekt w scenie a przeglądarka zajmie się przejściem automatycznie.

## Appeal (Urok)

<section class="demo-container principle principle-twelve">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="item one"></span>
      <span class="item two"></span>
      <span class="item three"></span>
      <span class="item four"></span>
    </div>
  </div>
  </div>
</section>

Urok jest charakterem szaty graficznej i może pomóc Nam nawiązać połączenie z intencjami artysty. Jak charyzma u aktora, kombinacja uwagi na detal i ruch tworzy atrakcyjny efekt.

Starannie przygotowane animacje na stronach internetowych mogą stworzyć urok. Firmy jak na przykład Stripe wykorzystały animacje aby dodać wiarygodności do swojego procesu płatności.

## Spróbuj!

Wykorzystanie innych reguł jest dobrym sposobem na poprawienie animacji. Animacje które utrzymują fizyczny ciężar obiektów, oczekują zmian, dobrze wykorzystują akcje drugoplanowe oraz wyczucie czasu będą świetnym dodatkiem do treści Twojej strony.

Kiedy masz szansę dodać kilka animacji na swoją stronę, wykorzystanie jednej lub więcej wyżej wymienionych reguł sprawi że będą bardziej efektywne oraz lepiej wyglądały.
