---
layout: post.njk
type: tutorial
title: Mac Plus CSS
description: Erstellen eines 3D-Modells des klassischen Mac Plus mit CSS
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: Erstellen Sie den klassischen Mac Plus von Apple neu
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Dion Budi Riyanto
---

Ich werde mich immer daran erinnern, wann ich den Apple Mac Plus verwenden konnte. In diesem Beitrag werde ich versuchen, diesem sch&ouml;nen Computer Tribut zu zollen, indem ich ihn in CSS erstellt.

## Retro-Stil

Lassen Sie uns (virtuell) einen Computer bauen. Nicht irgendein alter Computer, sondern ein Computer, der f&uuml;r viele von uns eine Einf&uuml;hrung in die Welt von Apple war. Der Macintosh Plus, Codename Mr. T, wurde 1986 erstmals eingef&uuml;hrt und verf&uuml;gt &uuml;ber 1 MB RAM und einen 8-MHz-Prozessor. Abgesehen von all dieser rohen Kraft war es ein wirklich s&uuml;&szlig;es Design, das den Computer mehr Spa&szlig; machte.

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

In diesem Projekt werde ich ein 3D-Modell des Macintosh Plus erstellen und dreidimensional darstellen. Durch die Verwendung der CSS-Keyframe-Animation bewegen wir uns auf dem Bildschirm, um den 3D-Effekt besser zu zeigen.

## Warum CSS verwenden?

Mit Cascading Style Sheets k&ouml;nnen Sie den Inhalt von Webseiten standardm&auml;&szlig;ig gestalten. CSS,
alles &uuml;ber Schriftarten, Farben, Positionierung und Hintergrundbilder,
ist ein unverzichtbares Werkzeug f&uuml;r die Erstellung moderner Webseiten. Es ist nicht nur f&uuml;r zweidimensionale Inhalte. Mithilfe von 3D-Transformationen und -Positionierungen k&ouml;nnen Sie mit CSS auch Tiefe hinzuf&uuml;gen.

Das Erstellen von Szenen in CSS f&uuml;hrt zu einer geringeren Dateigr&ouml;&szlig;e als f&uuml;r Bilder. In diesem Beispiel komprimiert das CSS auf nur 4 KB und der HTML-Code weniger als 1 KB. Ein gleichwertiges Bild w&auml;re 100 KB oder mehr.

## Live-Demo und Quellcode

Siehe den CSS Mac Plus online.

Der vollst&auml;ndige Quellcode kann hier heruntergeladen werden. Sie k&ouml;nnen die vollst&auml;ndige CSS-Datei auf Github anzeigen.

Sie k&ouml;nnen die verschiedenen Phasen auch verfolgen, indem Sie den Ordner 'Beispiele' in den Projektdateien nachschlagen.

## Auf Pr&auml;fixe

Ich habe alle CSS-Pr&auml;fixe in den Codebeispielen weggelassen, um den Code lesbarer zu machen. Wenn
Sie daran selbst arbeiten, stellen Sie sicher, dass Sie Pr&auml;fixe f&uuml;r die
anderen Browser wie Webkit, Moz, MS und O angeben.

## Die B&uuml;hne vorbereiten

Beim Erstellen von 3D mithilfe von HTML ben&ouml;tigen wir eine Szene, in der es erstellt werden kann. Beginnen Sie mit einem Container-HTML-Element:

```html
<div class="stage"></div>
```

Dies ist ein einfaches div mit der Klassenstufe und dient als Container f&uuml;r unser 3D-Objekt.

Um es als 3D-Container festzulegen, legen wir einige CSS-Eigenschaften, Perspektive und Ursprung der Perspektive fest. Die perspektivische Eigenschaft &auml;hnelt dem Fluchtpunkt einer Szene. Je kleiner der Wert, desto k&uuml;rzer der Fluchtpunkt und desto extremer der Effekt. Dieses Bild zeigt, wie das &Auml;ndern des Werts die Form einer Szene &auml;ndert:

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### Versuch es selber

Wenn Sie m&ouml;chten, suchen Sie nach der Datei screen.css im Ordner Examples / 01-Perspektive in den Projektdateien. Sie
k&ouml;nnen den perspektivischen Wert aktualisieren und den Effekt sehen,
indem Sie die Datei index.html aus demselben Ordner in Ihrem Browser
&ouml;ffnen.

Die Perspektive-Ursprung-Eigenschaft legt die Anzeigeposition fest. Wenn Sie sie &auml;ndern, k&ouml;nnen Sie von oben, von unten oder von der Seite auf die Szene blicken.

In diesem Beispiel habe ich einen perspektivischen Wert von 1.600 Pixel gew&auml;hlt. Das CSS sieht so aus:

```css
.stage {
  perspective: 1600px;
  perspective-origin: 50% 100px;
}
```

Der Stylesheets-Ordner in der ZIP-Datei des Projekts enth&auml;lt die
vollst&auml;ndigen CSS-Regeln zum Einstellen der verschiedenen anderen
Eigenschaften der B&uuml;hne, einschlie&szlig;lich Hintergrund, Breite und H&ouml;he.

## Planung der Struktur

Nach einer Etappe werden wir einige HTML-Elemente verwenden, um den Computer zu erstellen. Anstatt alles bis ins letzte Detail zu ber&uuml;cksichtigen, konzentrieren wir uns gr&ouml;&szlig;tenteils auf die Details der Front.

Der Hauptk&ouml;rper des Mac ist eine Box, die leicht schr&auml;g nach hinten geneigt ist und auf einer flachen Basis sitzt.

Dies
bedeutet, dass zwei Boxen hergestellt werden m&uuml;ssen, von denen sich
eine etwas nach hinten neigt und auf einer flacheren Box sitzt. Um diesen Effekt zu erzeugen, verwenden wir die CSS-Transformationseigenschaft.

Wenn Sie den vollst&auml;ndigen HTML-Code anzeigen m&ouml;chten, finden Sie ihn in den Projektdateien in der Datei index.html.

## Transforms

Mit der CSS-Transformationseigenschaft k&ouml;nnen wir Elemente auf der Seite drehen, neigen, positionieren und sogar skalieren. Wir k&ouml;nnen die Positionierung und Drehung nutzen, um unsere Szene zu erstellen.

Eine Transformationseigenschaft k&ouml;nnte folgenderma&szlig;en aussehen:

```css
.example {
  transform: rotateY(45deg) translateZ(-100px);
}
```

Sie erstellen eine Transformation durch Verketten einer Reihe von Anweisungen. In
diesem Beispiel wird das Beispielelement um 45 Grad um die Y-Achse
gedreht und dann entlang der Z-Achse um 100 Pixel nach hinten
verschoben.

Es sollte ungef&auml;hr so ​​aussehen:

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

Ein Beispiel f&uuml;r CSS-Transformationen finden Sie im Ordner Examples / 02-Transforms in den Projektdateien. Zwei
Elemente werden im Beispiel positioniert und ihre Position kann durch
Bearbeiten der Include-Datei`02-Transforms / css / screen.css` ge&auml;ndert
werden.

### Ursprung verwandeln

Wenn
Sie Elemente um den Ort drehen, sollten Sie bedenken, dass die
Transformationen einen Ursprung haben, der festgelegt werden kann. Der Transformationsursprung ist ein Punkt, auf den durch Angabe der X-, Y- und Z-Werte Bezug genommen wird. Dies ist die Standardeinstellung:

```css
.default-origin {
  transform-origin: 50% 50% 0;
}
```

Beim Erstellen dieses Beispiels habe ich die Standardeinstellung beibehalten.

## Die Boxen herstellen

Wir k&ouml;nnen einige Transformationen verwenden, um den Hauptteil des Computers einzurichten. Das HTML sieht so aus:

```html
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
```

Innerhalb der B&uuml;hne gibt es ein `Div`, mit dem ich den Computer auf der Seite positioniere. Darin ist der Mac selbst. Die beiden K&auml;sten bestehen selbst aus `Figure`nelementen. Diese Elemente repr&auml;sentieren die Seiten, die Oberseite, die Vorderseite und die R&uuml;ckseite der beiden Boxen.

Es gibt auch eine `Figure`, die den Schatten darstellt.

Dieses Beispiel finden Sie im Ordner `Examples / 03-Boxes`.

Das Ergebnis, das wir uns vorstellen, sieht so aus:

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

Jedes
der Felder wird mithilfe der CSS-Umwandlungseigenschaft an Ort und
Stelle transformiert. CSS-Verl&auml;ufe werden verwendet, um der Szene Tiefe
zu verleihen.

Das CSS sieht so aus:

```css
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
```

Jeder der Figuren wurde eine Breite und H&ouml;he sowie ein CSS-Hintergrundverlauf oder eine Farbe zugewiesen. Die Figuren werden dann mit der **transform **-Eigenschaft positioniert. Zum Beispiel wird die linke Seite um 90 Grad gedreht, bevor sie um die halbe Breite des Computers verschoben wird.

Die
vordere Figur wird entlang der Z-Achse nach vorne verschoben, die
H&auml;lfte der L&auml;nge des Computers und die R&uuml;ckseite wird um 180 Grad
gedreht, bevor sie zur&uuml;ck verschoben wird.

Bei den Teilen der oberen Box wird jede der Figuren um 5 Grad um die X-Achse zur&uuml;ck gedreht. Dies bedeutet, dass der Hauptteil des Macintosh Plus nach hinten geneigt ist.

Schlie&szlig;lich
verwendet die Schattenfigur die CSS-Eigenschaft `box-shadow`, um einen
Schatten zu erstellen, der den Eindruck erweckt, als w&uuml;rde die Box auf
einer flachen Oberfl&auml;che sitzen.

## die Schneide

Ein Merkmal dieses Computers sind die abgeschr&auml;gten Kanten an der Vorderseite. Diese
Kanten, die ich als Einfassungen bezeichne, helfen, die harten Ecken
der Box weicher zu machen und sie weniger kastenartig erscheinen zu
lassen.

Um dies zu erreichen, f&uuml;gte ich der vorderen `Figure` einige zus&auml;tzliche Elemente hinzu:

```html
<figure class="front">
  <span class="bezel-top"></span>
  <span class="bezel-left"></span>
  <span class="bezel-right"></span>
  <span class="bezel-bottom"></span>
</figure>
```

Die `Span` nelemente in der vorderen Figur repr&auml;sentieren jeweils eine dieser Blenden. Wenn einige Stile hinzugef&uuml;gt wurden, sehen sie folgenderma&szlig;en aus:

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

Dieses Beispiel finden Sie im Ordner `Examples / 04-Bezels`.

Das folgende CSS positioniert jeweils und verwendet einen Randbreiten-Trick, um abgeschr&auml;gte Kanten zu erstellen.

```css
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
```

Jede L&uuml;nette hat 3 R&auml;nder. F&uuml;r die obere Blende setzen wir oben einen farbigen Rand. Dann setzen wir links und rechts zwei _transparente_ Rahmen. Wenn in CSS eine Umrandung auf eine Umrandung einer anderen Farbe trifft, ist die Linie, an der sie sich treffen, diagonal. Dies bedeutet, dass die transparenten R&auml;nder diagonale R&auml;nder zum farbigen Rand ergeben.

Diese Technik wird auf alle Blenden angewendet, wodurch die abgeschr&auml;gten Kanten der Blenden aussehen.

Die
Blenden haben auch eine Transformation, die zum Drehen und
Positionieren an der Seite der vorderen Figur angewendet wird.

## Mehr Details

Mit
den Hauptfeldern des Computers k&ouml;nnen wir die verschiedenen Details
hinzuf&uuml;gen, die den Macintosh Plus aussehen lassen, beispielsweise
Bildschirm, Symbol und Laufwerk.

Die vordere Abbildung enth&auml;lt den folgenden HTML-Code:

```html
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
```

Ein Arbeitsbeispiel finden Sie im Ordner Examples / 05-Completed.

### der Bildschirm

Der
Bildschirm besteht aus mehreren Elementen, einschlie&szlig;lich eines
Beh&auml;lters, des Bildschirms selbst und einer 'Glanz' -Lage oben.

Das
CSS verwendet CSS-Farbverl&auml;ufe, damit es in die Vorderseite des
Computers eingef&uuml;gt wird, und der Glanzbereich verwendet einen fast
transparenten Farbverlauf, um dem Bildschirm etwas Glanz zu verleihen.

### das Logo

Das Logo besteht aus zwei Teilen, einem Bild und etwas Text. Die Bildspanne enth&auml;lt ein Hintergrundbild des alten bunten Apple-Logos. Der Text wird daneben positioniert. Die CSS f&uuml;r diese finden Sie in den Quelldateien.

Um das richtige Aussehen zu erzielen, wird eine eingebettete Schrift hinzugef&uuml;gt. Hierbei wird die CSS-Eigenschaft `font-face` verwendet. Es
gibt viele M&ouml;glichkeiten, dies zu tun, aber am einfachsten ist es
vielleicht, einen Dienst wie den Font font-face-Generator von Font
Squirrel zu verwenden, um das folgende CSS zu erstellen:

```
@font-face {
  font-family: "apple_garamondregular";
  src: url("../fonts/apple_garamond-webfont.eot");
  src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Font
Squirrel hilft dabei, die verschiedenen Dateien (eot, woff usw.) zu
generieren, die dann im Projekt platziert und wie gezeigt im CSS
aufgerufen werden k&ouml;nnen.

Das Ergebnis ist eine Schrift, die dem Original gut entspricht.

### Diskettenlaufwerk

Das
Diskettenlaufwerk ist ein einzelnes Element und verwendet CSS-R&auml;nder,
um es so aussehen zu lassen, als w&auml;re es vorne eingestellt. Das CSS, das den Effekt erstellt, sieht folgenderma&szlig;en aus:

```css
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
```

Das Diskettenlaufwerk hat eine durchgehende graue Hintergrundfarbe und vier R&auml;nder. Der obere Rand ist der dunkelste, der untere Rand ist heller, so dass er von oben beleuchtet erscheint. Schlie&szlig;lich rundet ein Randradius die Ecken.

## Die Teile zusammenf&uuml;gen

Jedes der Teile sieht zusammengesetzt so aus:

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## Animation hinzuf&uuml;gen

W&auml;hrend
das, was wir haben, ziemlich gut aussieht, k&ouml;nnen wir die Tatsache,
dass es sich um ein 3D-Objekt handelt, richtig darstellen, indem wir es
bewegen lassen. Dazu verwenden wir eine CSS-`Keyframe`-Animation.

In CSS gibt es zwei Arten von Animationen. `Transitions`,
bei denen Elemente auf der Seite von einem Stil oder einer Position zum
anderen animiert werden, und `Keyframes`, die eine komplexere Reihe
animierter Schritte darstellen.

Eine Reihe von `Keyframes` kann als eine Reihe von Prozents&auml;tzen beschrieben werden, wobei CSS jeden Schritt beschreibt. Es k&ouml;nnte ungef&auml;hr so ​​aussehen:

```css
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
```

In diesem Beispiel wird die Animation hin und her gerufen und besteht aus 3 Schritten. Es beginnt bis zu einem Winkel von 40 Grad gedreht. Dann wird um die 40% -Marke um _minus_ 40 Grad gedreht. Bei dieser Drehung bleibt es bis zu 50%, dann ist 90% in die urspr&uuml;ngliche Position zur&uuml;ckgekehrt.

Der Browser f&uuml;llt die L&uuml;cken automatisch durch Animieren der Eigenschaften. In diesem Fall wird der Drehwinkel animiert.

### Animation anwenden

Um diese Animation anzuwenden, k&ouml;nnen wir das CSS-**Animations**-Tag verwenden.

Das `Animations`-Tag sieht folgenderma&szlig;en aus:

```
animation: back-and-forth 14s ease-in-out infinite`
```

Einige Dinge sind hier in einer Zeile zusammengefasst. Sie
referenziert die Animation anhand des Namens ('hin und her'), legt eine
Dauer von 14 Sekunden fest und weist die Animation an, sich unendlich
zu wiederholen. Der
`Easy-In-Out`-Wert bezieht sich auf eine Lockerung, die dem Browser
mitteilt, die Animation allm&auml;hlich zu beginnen und zu beenden.

Wenn Sie diese Animation auf das div-Element 'positionieren' anwenden, wird Folgendes angezeigt:

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## Was wir gelernt haben

Beim Erstellen und Animieren eines 3D-Objekts in CSS haben wir einige Techniken behandelt. Wir setzen die `Perspektive` und den `Perspektivenursprung`. Anschlie&szlig;end
haben wir Transformationen zum Drehen, Verschieben und Positionieren
von Elementen verwendet, Gradienten hinzugef&uuml;gt, um einen
realistischeren 3D-Effekt zu erzielen, und einige CSS-Randtricks zum
Erstellen von Fasen und Tiefe verwendet. Schlie&szlig;lich nutzten wir Keyframes und CSS-Animationen, um der Szene Leben zu geben.

### Browser-Kompatibilit&auml;t

Noch k&ouml;nnen nicht alle Browser CSS-Transformationen verarbeiten. Internet Explorer wird Schwierigkeiten haben, aber es besteht die Hoffnung, dass Unterst&uuml;tzung im IE 11 eintreffen wird. Alle neueren Versionen von Chrome, Safari und Firefox werden funktionieren.

[Modernizr[
bietet eine Reihe von JavaScript-Tools zum Erkennen von
Browserfunktionen und kann verwendet werden, um alternative Inhalte
anzuzeigen, wenn der Browser eine bestimmte CSS-Eigenschaft nicht
unterst&uuml;tzt. Im Beispielcode finden Sie, dass ich Modernizr verwendet habe, um das Vorhandensein von 3D-Transformationen zu erkennen. Wenn sie nicht existieren, wird stattdessen ein Bild angezeigt.

## Vorw&auml;rts gehen

W&auml;hrend
das Beispiel nicht wie etwas aussieht, das Sie auf einer
durchschnittlichen Website verwenden w&uuml;rden, k&ouml;nnen die Techniken auf
alle m&ouml;glichen Szenarien angewendet werden.

CSS-Transformationen
k&ouml;nnen beispielsweise verwendet werden, um Seiten&uuml;berg&auml;ngen,
Bildkarussellen, Logos und Schaltfl&auml;chen Tiefe zu verleihen, um nur
einige zu nennen. CSS-Animationen
k&ouml;nnen verwendet werden, um Ihren &Uuml;berg&auml;ngen interessantere Bewegungen
und Finessen hinzuzuf&uuml;gen. CSS-Verl&auml;ufe k&ouml;nnen Seiten Tiefe verleihen,
ohne dass Bilder verwendet werden m&uuml;ssen.

<script src="//codepen.io/assets/embed/ei.js"></script>
