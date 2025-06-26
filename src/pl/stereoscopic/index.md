---
layout: post.njk
title: Stereoskopowy CSS
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/stereoscopic/
description: Skrzyżuj oczy, aby zobaczyć efekt 3D stworzony za pomocą CSSSkrzyżuj oczy, aby zobaczyć efekt 3D stworzony za pomocą CSS
categories: [3d, css]
imageURL: /images/posts/stereoscopic/home.png
home_image: /images/posts/stereoscopic/home.jpg
tweet_text: Cross your eyes to see a 3D effect created using CSS
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-11-17-stereoscopic.md
translator: Mateusz Kurlit
---

Przez jakiś czas blogowałem o tworzeniu r&oacute;żnego rodzaju efekt&oacute;w 3D przy wykorzystaniu CSS. W tym artykule p&oacute;jdę o krok dalej i spr&oacute;buje sprawić, że ujęcia będą wyglądały **bardziej tr&oacute;jwymiarowo**.

Zobacz [demo stereoskopowego sześcianu](https://cssanimation.rocks/demo/stereoscopic).

## Stereoskopowe

Istnieje wiele technik używanych do wydobycia z ekranu obrazu 3D. Jedną z najstarszych jest zastosowanie czerwonego i zielonego (lub niebieskiego) filmu, kt&oacute;ry oglądany przez czerwone/zielone okulary tworzy efekt 3D.&nbsp;

![Old-style 3D effect](/images/posts/stereoscopic/old-movie.jpg)

[Simurai[ włożył w to trochę pracy i stworzył świetną wtyczkę o nazwie [CSS3D](http://simurai.com/post/802968365/css3d-css3-3d-text), aby to osiągnąć.

Wadą tego rozwiązania jest to, że film może być tylko monochromatyczny, ponieważ kolory są ograniczone do tych wykorzystywanych do stworzenia efektu 3D.

### Stereoskopia ramię w ramię

Drugim podejściem zaprezentowania 3D jest zastosowanie umiejętności, kt&oacute;rą niekt&oacute;rzy z nas posiadają czyli skrzyżowania oczu. Pomysł polega na prezentacji dw&oacute;ch ujęć ramię w ramię, każda przedstawiona z innej perspektywy. Jeśli widz może skrzyżować oczy, dwa obrazy łączą się tworząc efekt 3D.

![How two images combine to form a 3D version](/images/posts/stereoscopic/example.png)

Chociaż to nie zawsze działa, świetnie kiedy działa i nie ogranicza liczby kolor&oacute;w, kt&oacute;re zawiera ujęcie. Kilka [fotografii, kt&oacute;re ładnie pokazują ten efekt](http://www.flickr.com/photos/ytf/5557882900/).

Aby spr&oacute;bować, patrz na poniższy obraz z odległości około 60 centymetr&oacute;w od monitora. Delikatnie skrzyżuj oczy aż dwa obrazy połączą się ze sobą i jeśli uda ci się wyr&oacute;wnać je prawidłowo, obraz powinien wyglądać jak 3D.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

Ta technika podw&oacute;jnych obraz&oacute;w jest w szczeg&oacute;lności używana w nowych [okularach Oculus Rift](http://www.oculusvr.com/). Nie posiadam ich, aby przetestować, ale sądzę, że jest możliwość wyświetlania stron w HTML, więc jakaś forma tej techniki może być tam przydatna.

## Ostrzeżenie

To tylko mała uwaga, ale jeśli zamierzasz spędzić dużo czasu wpatrując się w ekran krzyżując oczy, możesz doświadczyć b&oacute;lu głowy. Wiem, bo sam to robiłem. Jednak zdecydowanie warto!

## Ustaw ujęcie

Zaczniemy od stworzenia prostego ujęcia 3D za pomocą HTML.

```html
<div class="stage">
  <figure class="cube">
    <span class="back">S</span>
    <span class="top"></span>
    <span class="bottom"></span>
    <span class="left">3D!</span>
    <span class="right">S</span>
    <span class="front">C</span>
  </figure>
</div>
```

Mamy tutaj zawierający scenę `div`, kt&oacute;ra będzie działać jako scena, w kt&oacute;rej umieścimy sześcian, a niej figurę sześcianu. Sześcian składa się z 6 części.

&quot;Scena&quot; div jest potrzebna do ustanowienia przez przeglądarkę kilku ważnych ustawień związanych z 3D takich jak głębia ujęcia i kąt patrzenia na ujęcie. Te rzeczy ustawiamy za pomocą CSS.

```css
.stage {
  width: 480px;
  height: 500px;
  margin: 10px auto;
  position: relative;
  perspective: 1600px;
}
```

CSS przedstawia scenę za pomocą kilku proporcji i wartości `perspective`. Perspektywa opisuje głębie ujęcia, małe wartości reprezentują bardziej ekstremalne rezultaty. W tym przypadku 1600 pikseli wygląda całkiem nieźle, ale możesz spr&oacute;bować r&oacute;żnych wartości, aby zobaczyć jak wygląda ujęcie.

## Budowanie sześcianu

Sześcian jest zbudowany z sześciu elementu. Korzystając z właściwości `transform` w CSS, możemy manipulować składowymi w przestrzeni 3D i umieścić je, gdzie chcemy. Jednakże najpierw musimy przekazać przeglądarce, że naszą intencją jest przemieszczanie element&oacute;w w przestrzeni 3D. Nasz kod CSS jest w stanie to osiągnąć.

```css
.cube {
  transform-style: preserve-3d;
  transform-origin: 100px 50%;
  position: absolute;
  top: 120px;
  left: 140px;
}
```

Należy zwr&oacute;cić tutaj na gł&oacute;wne właściwości `transform-style` i `transform-origin`. Przekazują one przeglądarce, że ten i elementy podrzędne będą w stanie się przekształcać w kontekście &quot;sceny&quot; `figure`, jak r&oacute;wnież opisywać punkt względnie kt&oacute;rego będzie przebiegać rotacja, skalowanie lub pochylanie.

Następnie musimy określić wymiary ścian sześcianu, a potem przenieść je na miejsce używając właściwości `transform`.

```css
.cube span {
  color: white;
  display: block;
  font-size: 100px;
  height: 200px;
  line-height: 200px;
  opacity: 0.5;
  position: absolute;
  text-align: center;
  width: 200px;
}
.back {
  background-color: #f00;
  transform: rotateY(180deg) translateZ(100px);
}
.top {
  background-color: #ff7400;
  transform: rotateX(90deg) translateZ(100px);
}
.bottom {
  background-color: #aaa;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.7);
  transform: rotateX(-90deg) translateZ(100px);
}
.left {
  background-color: #099;
  transform: rotateY(-90deg) translateZ(100px);
}
.right {
  background-color: #0c0;
  transform: rotateY(90deg) translateZ(100px);
}
.front {
  background-color: #ff0;
  transform: translateZ(100px);
}
```

Aby wszystko było bardziej czytelne, usunąłem tutaj prefiksy &quot;-webkit&quot; i &quot;-moz&quot; z właściwości `transform`.

Ten kod CSS opisuje og&oacute;lne zasady dla składowych, kt&oacute;rych szerokość wynosi na przykład 200 pikseli i posiada biały tekst. Zasady, kt&oacute;re dotyczą obracania i pozycji każdej ściany wykorzystującej właściwość&nbsp;rotate i translate. Każda ściana posiada r&oacute;wnież kolor tła.

## Tworzenie stereoskopii

Teraz gdy mamy ujęcie z obiektem 3D, możemy go sklonować i uczynić stereoskopowym. Rozpoczniemy kopiując kod HTML do tagu div `left` i `right`.

```html
<div class="container">
  <div class="left">
    <div class="stage">
      <figure class="cube">
        <span class="back">S</span>
        <span class="top"></span>
        <span class="bottom"></span>
        <span class="left">3D!</span>
        <span class="right">S</span>
        <span class="front">C</span>
      </figure>
    </div>
  </div>
```

```html
  <div class="right">
    <div class="stage">
      <figure class="cube">
        <span class="back">S</span>
        <span class="top"></span>
        <span class="bottom"></span>
        <span class="left">3D!</span>
        <span class="right">S</span>
        <span class="front">C</span>
      </figure>
    </div>
  </div>
</div>
```

Celem jest podzielenie ekranu na dwie części i umieszczenie dw&oacute;ch sześcian&oacute;w obok siebie. Ponownie skorzystamy z magii o nazwie CSS, aby osiągnąć cel.

```css
.container {
  margin: 0 auto;
  width: 960px;
}
```

```css
.left, .right {
  height: 100%;
  overflow: hidden;
  width: 50%;
}
```

```css
.left {
  float: left;
}
```

```css
.right {
  float: right;
}
```

Nasz przykład nie musi być wyświetlany na pełnym ekranie, więc ustawiłem go w kolumnie kontenera. Każdy tag `div` jest ustawiony na 50% szerokości i pływa odpowiednio na lewej i prawej stronie.

Teraz mamy dwa identyczne obiekty 3D. To nie koniec, ponieważ musimy dostosować je do r&oacute;żnych kąt&oacute;w dla każdego oka. Aby to wykonać, nadpiszemy każdą właściwość perspective-origin tagu `stage`.

```css
.left .stage {
  perspective-origin: 63.5% -340px;
}
```

```css
.right .stage {
  perspective-origin: 36.5% -340px;
}
```

Lewa scena otrzymała perspektywę około dw&oacute;ch trzecich wzdłuż osi X, aby naśladować prawe oko, a prawa scena otrzymała wartość około jednej trzeciej. Poprawiłem je ręcznie, więc mogą wymagać dostosowania, aby działały zgodnie z twoim projektem.

Końcowy rezultat powinien zawierać dwie prawie identyczne ujęcia 3D w CSS w delikatnie r&oacute;żnych perspektywach.

![The finished stereoscopic 3D scene with just CSS](/images/posts/stereoscopic/stereoscopic-hop.ie.png)

Tutaj możesz obejrzeć [animowaną stereoskopową wersję](https://cssanimation.rocks/demo/stereoscopic).
