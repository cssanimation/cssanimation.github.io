---
layout: post
bodyClass: shorter
title: Animation von Pseudo-Elementen
description: Pseudo-Elemente geben Ihnen zwei extra HTML Elemente umsonst! Hier wird erklärt wie man sie animiert wenn die Maus über ihnen positioniert ist. Verwenden Sie sie weise.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Leuchtende Knöpfe mit CSS
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-02-03-pseudo-elements.md
translator: Serena Fritsch
translator_link: https://twitter.com/serifritsch
english_version: /pseudo-elements/
---

Pseudo-Elemente sind wie zusätzliche, freie DOM Elemente. Sie erlauben uns extra Inhalt, Dekoration und mehr zu unseren Seiten hinzuzufügen ohne extra HTML zu schreiben und sie können animiert werden. In diesem Beitrag werden wir ein Pseudo-Element verwenden um ein bisschen visuelles flair zu einem Knopf hinzuzufügen.

/pl/

<section class="shiny demo-container tap-to-activate">
  <button>Leuchtender Effekt</button>
</section>

## Pseudo-Elemente

Innerhalbs CSS können wir ein Pseudo-Element mit `::before` or `::after` spezifizieren. Das Pseudo-Element wird dann innerhalb Ihres Elementes eingefügt, zwischen dem Element und jeglichem Inhalt. Da es als eigenständiges Element agiert, kann es gestylt und positioniert werden. Der Code schaut ein bisschen so aus wie hier:

```
.pebble::before {
  ...
}
.pebble::after {
  ...
}
```

Zu diesem Zeitpunkt hat unser `.pebble` Element zwei virtuelle Elemente angehaengt, und wir koennen diese bei Bedarf stylen.


### Anmerkung zu "::" versus ":"

Es ist allgemein akzeptiert, dass wir den zweifachen Doppelpunkt `::` verwenden um Pseudo-Elemente zu bezeichnen (im Gegenteil zu Pseudo-Klassen wie :hover, :first-child). Wenn Sie IE8 Unterstützung hinzufügen, dann ist es am Besten den einfachen  `:` stattdessen zu verwenden. Alle anderen Browser und neuere Versionen des IE unterstützen den zweifachen Doppelpunkt.

### Vergessen Sie nicht "content"
Beim Hinzufügen von Pseudo-Elementen muss beachtet werden dass die `content`Eigenschaft spezifiziert wird bevor sie sichtbar auf der Seite wird. Weil das Pseudo-Element in einem inhaltslosen Zustand erschaffen wird, können wir es durch die Verwendung eines leeren `content` als sichtbar täuschen, siehe hier:
```
.pebble::before {
  content: ""
  ... more styling goes here...
}
```

Dies sollte sicherstellen, dass das Element sichtbar auf dem Bildschirm ist.

## Beispiel: Leuchtender Knopf

Fuer dieses Beispiel werden wir ein Pseudo-Element verwenden um einen leuchtenden Effekt zu erzeugen wenn die Maus ueber den Knopf schwebt (i.e., hovert). Hier sehen Sie ein Beispiel (Fahren Sie mit der Maus ueber den Knopf oder klicken sie auf den Knopf um den Effekt zu sehen).

<section class="shiny demo-container tap-to-activate">
  <button>Leuchtender Effekt</button>
</section>

Am Anfang, ein wenig HTML:

    <button>Oooh Leuchtend</button>

Da wir Pseudo-Elemente verwenden, brauchen wir nicht mehr HTML als hier um zu beginnen. Vielleicht möchten Sie eine Klasse zum Knopf hinzufügen, wenn Sie mehr als einen Typ auf der Seite entwerfen, aber fürs Erste werden wir der Einfachheit halber ein generisches Element verwenden.

### Hinzufügen des leuchtenden Effekts

Der leuchtende Schimmereffekt ist ein linearer Gradient der über den Knopf wandert. Um ihn zu erzeugen werden wir das `after` Pseudo-Element verwenden, und es in einer Anfangsposition ausserhalb des Knopfes positionieren:
```
button::after {
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-5em, 7.5em);
}
```

Der Schimmereffekt besteht aus einem Gradient aus der Knopffarbe zu weiss und zurück.
An dieser Stelle ist er nun ausserhalb des Knopfes.

We werden die Schimmerschicht verstecken müssen, so dass sie nur beim Hinueberfahren mit der Maus gezeigt wird. Um dies zu tun, werden wir die `overflow` Eigenschaft des Knopfes zu `hidden` setzen. Da das Pseudo-Element innerhalb des Knopfes ist, bedeutet es das die Positionierung ausserhalb des Knopfes nicht sichtbar wird.

```
button {
  background: #e5ac8e;
  color: #fff;
  font-size: 14px;
  border-radius: 0.5em;
  padding: 0 1em;
  position: relative;
  overflow: hidden;
  line-height: 32px;
}
```

Ich habe einige andere Stile zum Knopf hinzugefügt so dass er sein eigenes Aussehen hat. Ein Hinweis ist die Verwendung von `position: relative`. Ich habe diese Eigenschaft hinzugefügt damit das absolut positionierte Pesudo-Element innerhalb des Knopfes existiert. Ohne diese Positionsangabe wird ein absolut positioniertes Element innerhalb seines Eltern-Elementes positioniert.

## Hinzufügen der Animation

Da wir in diesem Beispiel eine Animation verwenden werden, sind zwei Schritte notwendig. Der erste befiehlt dem Browser eine Animation auf hover. Dann werden wir die Animation genau spezifizieren durch Verwendung von `keyframes`.
Das Hinzufügen des Hover Zustands kann durch die Stapelung von `after` auf  `hover` geschehen, wie hier:

```
button:hover::after, button:focus::after {
  animation: sheen 1s forwards;
}
```

Hier befehlen wir dem Browser dass on Hover, das `after` Pseudo-Element eine `animation` hat Die Animation, 'sheen' genannnt, dauert eine Sekunde und stoppt am Ende ohne Wiederholung.

Die Reihenfolge ist wichtig hier. Die Verwendung von `::after:hover` würde nicht funktionieren, das es dem Browser befehlen wuerde auf einen Hover Zustand des Pseudo-Elementes zu reagieren.

Ich habe auch einen focus Zustand hinzugefuegt. Dies bedeutet dass Betrachter
die durch die Seite tabben auch den Schimmereffekt sehen, ohne die Notwendigkeit eines Hovers. (Danke, [Šime Vidas](https://twitter.com/simevidas), fuer den Tip)

Nun geben wir die `keyframes` fuer diese Animation an:
```
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}
```

Wir brauchen nur ein keyframe in diesem Fall. Da die Startposition (0%) durch die Startposition des Pseudo-Elementes implizit angegeben ist, beschreiben wir nur die Endposition. In diesem Fall ist die Endposition gegenüber am oberen-rechten Ende des Knopfes. Der Browser wird dann den Bildschirmeffekt fuer uns animieren.

<section class="shiny demo-container tap-to-activate">
  <button>Shiny effect</button>
</section>

## Browserueberlegungen
Die [animation Eigenschaft ist gut unterstützt](http://caniuse.com/#feat=css-animation), so sind [Pseudo-Elemente](http://caniuse.com/#feat=css-gencontent). Es ist immer ratsam auf Nummer sicher zu gehen und die  `-webkit` und `-moz` Praefixe fuer die `keyframes` und jegliche Transformationen zu laden.




