---
layout: post
title: CSS Portal
description: Nachbildung einer Videoanleitung für ein klassisches Portal mit HTML und CSS
categories: [animation, experiment, css]
imageURL: /images/posts/portal/home.png
home_image: /images/posts/portal/home.png
tweet_text: Erstelle diese beeindruckende Portal-animation mit ausschliesslich CSS
custom_header: posts/portal.html
demo_url: https://cssanimation.rocks/demo/portal/
customCSS: portal.css
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-07-08-portal.md
translator: Martin Hesseler
translator_link: https://twitter.com/waslangewaehrt
english_version: /portal/
---

Ihr benötigt kein JavaScript um beeindruckende 3D-Projekte in Eurem Web Browser zu erstellen. In diesem Artikel werde ich Euch zeigen, wie man eine Portal-Szene mit ausschliesslich CSS erstellt und animiert.

Schaut Euch die [CSS Portal demo](http://hop.ie/portal/) an und ladet Euch den [Quellcode bei Github](https://github.com/donovanh/portal) herunter.

## Portal Orientation Video No. 1

Um Euch die verschiedenen Schritte einer 3D-Szene (erstellen, stylen und schließlich animieren) nahe zu bringen, werden wir in diesem Artikel eine Szene aus dem [Portal Training Video](http://www.youtube.com/watch?v=gr_9Fw_gC4I) nachbauen. Insbesondere konzentrieren wir uns auf den stilisierten Cartoon-look aus dem ersten Teil des Videos, in dem die Silhouette einer Figur durch ein Portal springt und auf der anderen Seite wieder auftaucht.
Hier ist das originale Video:

<div class="video-wrapper">
  <iframe src="http://www.youtube.com/embed/V5paXrfkYmI" width="720" height="405" data-height="405" frameborder="0">
  </iframe>
</div>

Als dieses Video zum ersten Mal veröffentlicht wurde, hat es mich völlig umgehauen. Portal (entwickelt von [Narbacular Drop](http://en.wikipedia.org/wiki/Narbacular_Drop)) führte mit der Einführung ihrer Spielmechanik zu einer interessanten Wendung im 3D Genre.

Die isometrische Zeichentrick-Grafik im Einführungsvideo unterscheidet sich sehr vom eigentlichen Spiel, spiegelt aber dennoch zum Teil seinen Charakter wider. In diesem Post werde ich versuchen, den Zeichentrick-Stil mit nichts als HTML und CSS nachzustellen.

Genauer gesagt ist dies die Szene, die wir erstellen werden:

<img src="/images/posts/portal/video.jpg" alt="Portal video screenshot" />

### Ein kurzer Hinweis zu *browser prefixes*

Ich habe im folgenden CSS die prefix-Versionen entfernt und empfehle Euch, entweder [prefix free](http://leaverou.github.io/prefixfree/) oder [SASS](http://sass-lang.com/) oder etwas Ähnliches zu benutzen, um diese automatisch zu handhaben. Denkt auf der anderen Seite daran, dass ihr die meisten Browser prefixes werdet benutzen müssen. Die vollständigen Versionen des CSS und SASS zusammen mit dem HTML könnt ihr auf [Github](https://github.com/donovanh/portal) finden.

### Es gibt noch einiges zu tun

Dieses Projekt wurde in erster Linie in Chrome entwickelt und getestet. Es enthält CSS, dass im Internet Explorer nicht einwandfrei laufen wird. Einige der CSS 3D-Techniken könnten sich, obwohl sie noch nicht im mainstream angekommen sind, in der Front-End Entwicklung als nützlich erweisen.

## Los geht’s

Wir müssen zunächst einen Rahmen erstellen, in welchem unsere 3D-Szene stattfinden soll. Dazu nehmen wir ein HTML-Element und lassen den Browser über die entsprechenden Eigenschaften wissen, dass er Elemente in 3D zu erwarten hat. Legen wir also mit etwas HTML los:

    <article class="container">...</article>

In diesem Fall ist der Container ein *article tag*. Dieser *tag* ist in HTML5 ein Inhalt, welcher für sich alleine Sinn macht und sich an anderer Stelle auf der Seite wiederholen kann.

Die erste Eigenschaft, die wir setzen, ist *[perspective](http://docs.webplatform.org/wiki/css/properties/perspective)*. Sie akzeptiert einen Wert in Pixeln und repräsentiert die Tiefe der 3D-Szene. Ein kleinerer Wert produziert einen dramatischeren Effekt. Gängige Werte für diese Eigenschaft liegen zwischen 800 und 1200 Pixeln.

<img src="/images/posts/portal/perspective.gif" alt="Wechsel zwischen Perspektiv-werten von 900 und 2000 Pixeln" class="bordered centered" />

Damit die Szene den Eindruck eines großen Raumes erweckt, werden wir den Wert für *perspective* recht hoch setzen, 2600px. Die verschiedenen Browser Präfixe außer Acht lassend, sieht das folgendermaßen aus:

    article.container {
      perspective: 2600px;
    }

### Fluchtpunkt

Der Container der Szene hat nun eine Tiefe. Der nächste Schritt besteht darin, einen Blickwinkel zu bestimmen. Mit der *[perspective-origin](http://docs.webplatform.org/wiki/css/properties/perspective-origin)* Eigenschaft können wir den Fluchtpunkt der Szene festlegen und somit beeinflussen, ob wir z.B. von oben oder von der Seite auf die Szene schauen.

    .container {
      perspective-origin: 50% -1400px;
    }

Diese Eigenschaft erwartet zwei Werte: einen für den horizontalen und einen für den vertikalen Versatz des Fluchtpunktes. In diesem Fall setzen wir den ersten, horizontalen Wert genau in die Mitte der Szene. Den vertikalen hingegen versetzen wir nach oben auf 1400 Pixel. Wir schauen dadurch also von oben auf die Szene herab.

Diese Werte habe ich im Chrome Web Inspector mit gutem Augenmaß ermittelt und eingestellt. Bei Eurer Szene werdet Ihr die Werte möglicherweise höher oder niedriger setzen. Das wird davon abhängen, welchen Effekt Ihr beim Betrachter erzielen wollt. Denkt auch daran, dass man die *perspective-origin* Eigenschaft und somit den Blickwinkel animieren kann, womit man einen interessanten Effekt erreichen kann.

### Keine Vektoren

Unsere Objekte im HTML *markup* sind normale HTML-Elemente. Sie besitzen  eine Breite und eine Höhe und sind rechteckig. Während Ihr also ein 3D-Objekt erstellt, wird jedes dieser Rechtecke positioniert. Dieser Ansatz unterscheidet sich von einigen anderen Methoden, bei denen mit Hilfe von Punkten und Linien Formen erstellt werden. Dies bedeutet auch, dass wir weniger für 3D-Programme typische primitive Formen wie z.B. Kreise und Teekannen zur Verfügung haben.

Unsere HTML-Elemente werden innerhalb der 3D-Szene mit Hilfe der *transform* Eigenschaft arrangiert.

### Transformieren

Die *transform* Eigenschaft beinhaltet eine Reihe von Neuausrichtungen für das HTML-Element. Diese Neuausrichtungen des Elements können im Versetzen (*translate*), in seiner Rotation (*rotate*), seiner Verdrehung (*skew*) and sogar seiner Skalierung (*skale*) bestehen. Diese Neuausrichtungen lassen sich kombinieren um noch komplexere Transformationen zu animieren, wie z.B.:

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

Dieser Befehl rotiert das Element zunächst um 45 Grad um die Y-Achse und verschiebt es anschließend um 100 Pixel auf der Z-Achse. Das Ganze würde dann so aussehen:

<img src="/images/posts/portal/transform.png" alt="Eine Transformation in Aktion" class="bordered centered" />

### Die *transform-origin* Eigenschaft

Wenn wir Element rotieren, lohnt es sich im Hinterkopf zu behalten, dass sich der Ursprung der Transformation festlegen lässt. Der Wert der *tranform-origin* Eigenschaft ist ein Punkt im Koordinatensystem, wird also durch Werte auf der X-, Y- und Z-Achse bestimmt. Der Standardwert ist:

    .default-origin {
      transform-origin: 50% 50% 0;
    }

Für unser Beispiel habe ich die Eigenschaft auf Ihrem Standardwert belassen. Allerdings ist es nützlich zu wissen, dass diese Eigenschaft existiert.

## Wir bauen uns eine 3D-Welt

Unser Schauplatz ist eingerichtet, und wir können somit beginnen, unser Meisterwerk zusammenzustellen. Für das Arbeiten mit 3D-Objekten in HTML und CSS macht es Sinn, sich einen Moment Zeit zu nehmen um zu verstehen, wie sich dieser Ansatz von anderer 3D-Software unterscheidet.

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

Der oben gezeigte Code beinhaltet ein *section* Element, welches unsere Bühne sein wird (*stage*). Eine Reihe von *div* Elementen innerhalb des *section* Elements bilden das Grundgerüst. Sie werden die Formen der Hintergründe, der Ebenen, die Seiten des Schachtes und der Schatten unter den Objekten annehmen.

Als ich mit der Szene begann, habe ich zunächst versucht, die Wände direkt auf der Bühne aufzustellen, zu drehen und in Position zu bringen. Da wir die Szene jedoch von einem isometrischen Winkel betrachten, ist es einfacher, alle Elemente aufzustellen und anschließend die gesamte Szene um 45 Grad zu drehen.

Wenn wir dies berücksichtigen, können wir die Elemente gemäß folgender Zeichnung in Position bringen:

<img src="/images/posts/portal/sketch.png" alt="Grundriss der Szene" class="centered" />

Wie man sehen kann, ist die Seite, die sich hinten links befinden soll, links ausgerichtet. Aber die Seite, die sich hinten rechts befinden soll, sitzt dem Zuschauer direkt gegenüber. Um dies auszugleichen, werden wir später die gesamte Szene um 45 Grad drehen.

Bevor wir allerdings die Transformationen ausführen können, müssen wir zunächst einige gemeinsame Eigenschaften für die *divs* festlegen:

    .stage div {
      position: absolute;
      transform-style: preserve-3d;
    }

Jedes div wird *absolute* positioniert. Außerdem setzen wir die *transform-style* Eigenschaft, um den Browser wissen zu lassen, dass unsere Transformationen unter Berücksichtigung der eingestellten Perspektive ausgeführt werden sollen.

Nachdem dies erledigt ist, können wir nun die *divs* positionieren:

    .stage .back-left {
      background-color: #6b522b;
      border-left: 6px solid #574625;
      border-top: 6px solid #8a683d;
      height: 120px;
      transform: rotateY(90deg) translateX(-256px);
      width: 500px;
    }

Die oben stehenden Anweisungen beschreiben eine Breite von 500 Pixeln, was der Seitenlänge unserer 3D-Szene entspricht, eine Höhe von 120 Pixeln und einen hellbraunen Hintergrund. Das Element wird dann um 90 Grad gedreht und auf der X-Achse nach hinten versetzt. Der Rand von 6 Pixel soll die Illusion von Tiefe erzeugen.

Für das *div* hinten rechts benutzen wir eine ähnliche Transformation:

    .stage .back-right {
      background-color: #9c7442;
      border-right: 6px solid #78552c;
      border-top: 6px solid #b5854a;
      height: 120px;
      transform: translateX(253px) translateZ(3px);
      width: 446px;
    }

Dieses Element ist ein bisschen kleiner, da es im originalen Video so aussieht, als wäre der Raum nicht vollkommen quadratisch.

Als nächstes fügen wir die Ebenen und die Seiten des Schachtes hinzu:

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

Das Endresultat sollte folgendermaßen aussehen:

<img src="/images/posts/portal/layout01.png" alt="Ausgangslayout der divs für die Bühne" />

Etwas fehlt noch. Um die gesamte Szene richtig zu sehen, müssen wir sie drehen. Wir fügen also eine Transformation zur *stage* Klasse hinzu:

    .stage {
      margin: 0 auto;
      transform-style: preserve-3d;
      transform: rotateY(-45deg);
      width: 460px;
    }

Das Ergebnis sollte nun so aussehen:

<img src="/images/posts/portal/layout02.png" alt="Rotiertes Ausgangslayout um die Bühne korrekt darzustellen" />

Ihr werdet vielleicht bemerkt haben, dass die Ränder (*border* Eigenschaft) einen netten Effekt von Tiefe erzeugen, und zwar besonders da, wo sich zwei Ränder unterschiedlicher Farben in einem Winkel von 45 Grad treffen. Da wir unser Werk aus einem Winkel von 45 Grad betrachten, wirkt dieser Effekt zumeist zu unserem Vorteil. Einige der Ecken sehen nicht ganz korrekt aus. Wenn wir allerdings berücksichtigen, wie einfach die *border* Eigenschaft einzusetzen ist und dass wir keine Bilder zu Verfügung haben, denke ich, dass dies ein akzeptabler Kompromiss ist.

### Im Schatten

Das Video zeigt einen schönen Schatten unter den beiden Ebenen, welchen wir mit Hilfe der CSS *box-shadow* Eigenschaft nachahmen wollen.

    .stage .shadow {
      background-color: transparent;
      box-shadow: -600px 0 50px #afa79f;
      height: 550px;
      transform: rotateX(90deg) translateZ(-166px) translateX(550px);
      width: 550px;
    }

Die oben stehenden Anweisungen erzeugen einen Schatten für *div.shadow*. Die *div* selbst ist transparent. Der Schatten ist um 600 Pixel versetzt, sodass die eigentliche *div* den Schatten nicht überlagert. Das ganze wird so gedreht und positioniert, dass von oben aus nur der Schatten zu sehen ist. Das Ergebnis sollte nun folgendermaßen aussehen:

<img src="/images/posts/portal/layout03.png" alt="Ausgangslayout mit Schatten" />


## Rot gegen Blau

Als nächstes müssen wir etwas Dekoration und die Portale hinzufügen.

<img src="/images/posts/portal/portal.png" alt="Rotes Portal" />

Das HTML für die beiden Portal könnte simpler nicht sein:

    <div class="portal red"></div>
    <div class="portal blue"></div>

Für das rote und das blaue Portal existiert jeweils ein *div*. Die beiden sehen einander ähnlich, wobei wir Gradienten benutzen, um den Leuchteffekt zu erzeugen. Da für jedes Portal nur ein HTML-Element existiert, benutzen wir ein CSS Pseudo-Element, um den Gesamteindruck zu vervollständigen.

Im ersten Schritt kümmern wir uns um die Form der Portale:

    .stage .portal {
      background-color: black;
      border-radius: 44px/62px;
      box-shadow: 0 0 15px 4px white;
      height: 72px;
      width: 48px;
    }

Mit Hilfe der *border-radius* Eigenschaft erstellen wir die ovale Form der Portale. *box-shadow* benutzen wir um ein weißes Leuchten zu erzeugen. Anschließend nutzen wir ein Pseudo-Element mit ähnlichen Ausmaßen, um den weißen Ring zu erzeugen:

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

Alle bisherigen Anweisungen betrafen beide Portale. Da eines jedoch rot und das andere blau ist, benutzen wir unterschiedliche Anweisungen, um die weiteren Eigenschaften zu spezifizieren.

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

Das rote Portal erhält als Hintergrung einen [radialen Gradienten](http://docs.webplatform.org/wiki/css/functions/radial-gradient) und dazu einen roten Rand. Mit Hilfe einer Transformation drehen und positionieren wir das Portal an der linken Wand. Das blaue Portal erhält dementsprechend einen blauen Gradienten und wird an der rechten Wand positioniert. Beide Portale sahen daraufhin etwas merkwürdig aus, sodass ich sie um 5 Grad verdreht (*skew* Eigenschaft) habe, um sie größer aussehen zu lassen.

### Portal-Leuchten

Im oben stehenden HTML haben wir zwei *span tags* innerhalb jeder Ebene eingefügt. Sie haben den Zweck, das Portal-Leuchten unterhalb der Portale darzustellen.

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

Die beiden *span tags* werden *absolute* positioniert und erhalten einen roten und blauen Gradienten, welcher jeweils unterhalb der Portale positioniert wird. Wir hätten dies auch mit einem Pseudo-Element erreichen können. Allerdings ist die Browser-Unterstützung für die Animation von Pseudo-Elementen nicht sehr gut (sogar zwischen verschiedenen Webkit-Versionen), sodass ich mich für die Lösung mit dem zusätzlichen *span* entschieden habe.

### Die Tür

Eine der unerwarteten und zudem positiven Überraschungen war der Einsatz von Rändern (*border* Eigenschaft), um in der rechten Wand eine Öffnung darzustellen, welche den Ausgang repräsentieren soll. Für die Tür habe ich ein einzelnes *div* und einige farbige Ränder benutzt, welche die Öffnung so aussehen lassen, als sei sie in die Wand eingelassen.

<img src="/images/posts/portal/door.png" alt="Tür" />

Das HTML für die Tür ist sehr einfach. Folgendes fügen wir zu *section.stage* hinzu.

    <div class="door"></div>

Wir benötigen für die Tür einige Rahmen. Anschließend können wir die Tür mit Hilfe einer Transformation an der rechten Wand positionieren:

    .stage .door {
      background: #efe8dd;
      border-bottom: 6px solid #bcb3a8;
      border-left: 7px solid #78552e;
      height: 85px;
      transform: translate3D(450px, 34px, 4px);
      width: 65px;
    }

Wir setzten zwei Kanten ein, um unseren Effekt zu erzielen. Die linke Kante ist auf die rechte Wand farblich abgestimmt. Die untere passt zur Ebene, wodurch ein Gefühl von Tiefe entsteht. Da kein oberer Rahmen angegeben wurde, schließt der linke Rahmen mit der Oberseite des *div* ab, was in diesem Fall gut aussieht.

## Figuren

Da nun die beiden Portale und die Tür in Position sind, brauchen wir jemanden, der auf der einen Seite durch das Portal springt und auf der anderen Seite wieder herauskommt. Der erste Schritt besteht also darin, die Person zu erstellen, die durch die Portale springt.

Ursprünglich hatte ich versucht, die Animation mit nur einer Person zu gestalten, sodass die Animation am ersten Portal stoppt und sich dann sofort am zweiten fortsetzt. Allerdings flimmerte die Figur, wenn sie sich zwischen den beiden Portalen bewegte, weshalb ich mich dazu entschied, zwei Figuren einzusetzen und sie getrennt voneinander zu animieren.

### Die Figuren erstellen

<img src="/images/posts/portal/dude1.png" alt="Die erste von zwei Figuren die in der Szene animiert werden" />

Die erste Figur besteht im Wesentlich aus zwei Teilen: dem Kopf und dem Körper. Die Beine werden später mit Hilfe von Pseudo-Elemente hinzugefügt. Ein ähnliche Struktur verwenden wir auch für den Schatten der Figur.

    <div class="dude one">
      <figure class="head"></figure>
      <figure class="body"></figure>
      <div class="dude-shadow one">
        <figure class="head"></figure>
        <figure class="body"></figure>
      </div>
    </div>

Da der Schatten Teil der gesamten Figur ist (*dude one*), können wir beides gleichzeitig animieren. Das CSS sieht folgendermaßen aus:

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

Die Anweisungen duplizieren sich jeweils durch die Beschreibung von sowohl Figur also auch Schatten. Jedes Element wir absolut positioniert, und wir benutzen *border-radius* um runde Formen zu erzeugen. Die Beine werden, wie gesagt, durch zwei Pseudo-Elemente beschrieben und dann positioniert.

### Figur 1

Die Figur ist also fertig und muss nun an ihre Startposition gebracht werden:

    .stage .dude.one {
      transform: translate3D(514px, 50px, 375px) rotateY(78deg);
    }
    .stage .dude-shadow.one {
      opacity: 0.1;
      transform: translateX(-12px) rotateX(90deg) translateY(8px);
    }

Die CSS Transformation bezieht sich sowohl auf die Figur wie auch den Schatten. Anstatt für den Schatten eine graue Farbe zu benutzen, setzen wir die Lichtdurchlässigkeit (*opacity* Eigenschaft) auf 0,1. Dadurch lassen sich Details der Szene durch den Schatten hindurch erkennen.

Die Figur ist nun also an ihrer Startposition und in einem dem Video entsprechenden Winkel gedreht. Um die Animation der Figuren durch die Portale kümmern wir uns später.

### Behände

<img src="/images/posts/portal/dude2.png" alt="Die zweite Figure, die in der Szene animiert wird" />

Die zweite Figur benötigt ein weiteres Detail: Arme. Die Idee besteht darin, dass die Figur nach dem Portal-Sprung die Arme in die Höhe reißt. Hier das dazugehörige HTML:

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

Die zweite Figur ist zunächst unsichtbar und springt dann bei etwa 50% der Animation durch das Portal (nachdem die erste Figur ihr Portal erreicht hat). Die zweite Figur wird dazu bei ihrem Portal positioniert.

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

Für die Arme verwenden wir eine zweite Animation, in welcher sie zunächst unsichtbar sind und erst erscheinen, wenn sie in die Höhe gehoben werden.

## Die Bühne ist bereit

Die Protagonisten und die Bühne sind fertig, und unsere Szene ist somit bereit für ihre Animation.

<img src="/images/posts/portal/stage_set.png" alt="Die Szene ist fertig, und die beiden Figuren bereit zur Animation." />

Jetzt wollen wir versuchen, dass die Figur scheinbar durch das erste Portal springt und durch das andere wieder herauskommt.

## Animation

In der [Demo](http://hop.ie/portal/) erkennt Ihr eine ganze Reihe von Animationen. Anstatt auf jede einzelne Animation in der Szene einzugehen, setze ich den Fokus hier auf die Animation der Figur wie sie durch die Portale springt.

### *keyframe* Animation

Animation und korrektes Timing der HTML-Elemente erreichen wir mit Hilfe der  [*keyframes*](http://docs.webplatform.org/wiki/css/atrules/@keyframes) Eigenschaft. Die *keyframes* werden dann durch die [*animation*](http://docs.webplatform.org/wiki/css/properties/animation) Eigenschaft den entsprechenden HTML-Elementen zugeordnet.

Als erstes animieren wir die Annäherung und den Sprung der Figur durch das linke Portal. Im folgenden seht ihr die *keyframes*, um dies zu erreichen:

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
    /* Anmerkung: Benutzt *prefixes* wie @-webkit-keyframes, @-moz-keyframes etc.! */

*Keyframes* beschreiben eine Reihe von Schritten in der Animation, wobei die Schritte in Prozent der Animationsdauer angegeben werden. Bei einer Dauer von 10 Sekunden entsprechen 10% also 1 Sekunde und 90% entsprechen 9 Sekunden.

Wir benutzen zwei Animationen von jeweils 10 Sekunden, damit unsere Figuren in einer nahtlosen Schleife durch die Portale springen. Für jeden Animationsschritt habe ich einen Kommentar in den Code geschrieben. Um die Figuren für jeden Animationsschritt in Position zu bringen und zu drehen, benutzen wir die *transform* Eigenschaft.

Bei 43% der Animationsdauer lassen wir die erste Figur verschwinden (*opacity* wird auf Null gesetzt). Zu diesen Zeitpunkt verschwindet die Figur durch das linke Portal. Die zweite Figur muss somit bei 43% sichtbar werden.

Bevor wir uns darum kümmern, wollen wir zunächst die Anweisungen für die Animation der ersten Figur festlegen:

    .dude.one {
      animation: move-dude-one 10s linear infinite;
      opacity: 0;
    }

Die *animation* Eigenschaft beschreibt die Anweisungen für die Animation der ersten Figur (*dude one*). Die Anweisungen werden einem Animationsnamen zugeordnet, die Animationsdauer wird auf 10 Sekunden gesetzt, und die Animation soll in einer Endlosschleife laufen.

Bevor unsere Animation startet, soll unsere erste Figur unsichtbar sein (*opacity: 0*).

Nachdem das erledigt ist, können wir die *keyframes* für die zweite Figur festlegen:

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

Wie erwähnt beginnt diese Animation bei etwa 42% der Animationsdauer. Die Figur springt aus dem Portal hervor, steht ein bisschen herum und entschwindet dann nach oben. Die Animation der Arme wird in einer zweiten Reihe von *keyframes* beschrieben. Die Arme sind zunächst unsichtbar und erscheinen dann bei etwa der Hälfte der Animationsdauer.

Die Anweisungen für die Animation der zweiten Figur (*dude two*) sehen folgendermaßen aus:

    .dude.two {
      animation: move-dude-two 10s linear infinite;
      opacity: 0;
    }

    .dude.two figure.arm {
      animation: arms 10s linear infinite;
      opacity: 0;
    }

Da sowohl die Animation der zweiten Figur wie auch die Animation der ersten Figur jeweils 10 Sekunden dauern und in einer Endlosschleife laufen, gehen sie elegant ineinander über.

Falls nicht schon geschehen, seht Euch das [Endresultat](http://hop.ie/portal/) in einem modernen Browser an (vorzugsweise nicht Internet Explorer).

## Vorbehalte & Browser-Launen

Da wir gerade über Browser reden, sollte ich anmerken, dass diese Animation derzeit nicht im Internet Explorer funktioniert. Firefox hat so seine Zicken, funktioniert aber ganz okay. In Safari sieht es schon sehr gut aus (warte darauf, dass Apple endlich webkit patched) und in Chrome läuft die Szene einwandfrei.

Die Leistung sieht ziemlich gut aus auf unterschiedlichen Geräten (Browser-Probleme außer Acht lassend). Auf einem iPhone mit Safari ist die Leistung besser als mit Chrome auf einem Laptop. Das liegt daran, dass für die CSS 3D Transformationen die Grafikkarte genutzt werden kann.

## Demo und Kontaktinformationen

Schaut Euch die [online Portal CSS demo](http://hop.ie/portal) an oder ladet Euch den [Quellcode von Github](https://github.com/donovanh/portal) herunter.
