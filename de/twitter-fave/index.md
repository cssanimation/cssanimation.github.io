---
layout: post
bodyClass: shorter
title: Twitter's "fave" Animation
description: Erfahren Sie wie Twitters schicke, neue 'fav' Animation funktioniert, mit Hilfe der CSS steps() Zeitfunktion.
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/cssanimation.github.io/master/_posts/2015-01-17-twitter-fave.md
home_image: /images/posts/steps/home.png
translator: Serena Fritsch
translator_link: https://twitter.com/serifritsch
---

Twitter hat vor kurzem das Design des "fave" (auch als "fav" bekannt) Knopfes mit der Einfuehrung einer neuen Animation aktualisiert. Anstelle sich auf CSS Transitionen zu verlassen, benutzt die Animation eine Reihe von Bildern. Hier wird erklärt wie man die Animation mit Hilfe der CSS 'steps' Zeitfunktion nachbilden kann.
/pl/

## Illusion von Bewegung

Der Effekt ähnelt alten [Zoetrop](https://de.wikipedia.org/wiki/Zoetrop) Geraeten, die eine Reihe von Abbildungen nacheinander um einen Zylinder darstellten. Anstelle eines Zylinders zeigen wir eine flache Reihe von Bildern in einem Element.

## Demo

Hover über dem Stern um die Animation zu sehen.

<section class="fave demo-container tap-to-activate"></section>

In diesem Beispiel beginnen wir mit der Erzeugung einer Reihe von Bildern, aus denen sich die Animation zusammensetzt. In diesem Fall verwenden wir einen Teil der Bildmenge von Twitters fave icon Animation:

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames von Twitter's fave icon Animation" style="max-width:256px">

Um diese Frames zu animieren, müssen wir sie in eine einzige Zeile setzen.
[Diese Datei](/images/posts/steps/twitter_fave.png) hat sie in einer einzigen Zeile, d.h., wir können vom ersten Frame zum letzten Frame durch die Positionierung des Hintergrunds wechseln:

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px">

### Steps() Zeitfunktion

Bei den meisten Zeitfunktionen, wie ease oder cubic-bezier, ist der animierte Wechsel zwischen Start und Endzustand reibungslos. Die `steps` Zeitfunktion ist anders. Anstelle eines glatten Wechsels, unterteilt sie die Transition in eine Anzahl von Schritten und bewegt sich kantig zwischen den Schritten.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px">

Wir beginnen mit der HTML Konfiguration:


    <section class="fave"></section>

### Hintergrundbild

Jetzt können wir ein bisschen Styling hinzufuegen und das Hintergrundbild positionieren:

![Bild sprite fuer die Animation](/images/posts/steps/twitter_fave.png)


    .fave {
      width: 70px;
      height: 50px;
      background: url(images/twitter_fave.png) no-repeat;
      background-position: 0 0;
    }

Der `hover` Zustand wird hinzugefügt. An diesem Punkt spezifizieren wir das die Hintergrundposition an das Ende der Bilderreihe gesetzt wird:

    .fave:hover {
      background-position: -3519px 0;
      transition: background 1s steps(55);
    }

Beachten Sie die zweite Regel, welche die `Transition` definiert. In diesem Fall wollen wir die Hintergrundseigenschaft wechseln, die Transition fuer eine Zeitdauer von 2 Sekunden laufen lassen, und die `steps` Zeitfunktion nutzen. Der `steps` Teil beinhaltet den Wert `55`, da 55 frames in der Animation sind.

Das hat den Effekt, dass wenn wir mit der Maus ueber das Element fahren, der Wechsel in 55 gleichen Schritten passiert.

### Warum nicht ein Gif?

Animierte Gifs könnten potentiell verwendet weren, würden aber in diesem Fall nicht gut passen. Die Dateigröße ist generell schlechter und die Bildfrequenz ist schwer kontrollierbar. Mit dieser Methode koennen wir pausieren, rueckspulen, oder allerhand andere Einstellungen der Animation mit Hilfe von CSS machen.

## Andere Verwendungen von "steps()""

Animieren von Hintergrund-Sprites ist nur eine Nutzung der `steps` Zeitfunktion. Alles was in einer Reihe von diskreten Schritten animiert werden muss, ist ein guter Verwendungszweck fuer die Funktion. Zum Beispiel kann man sie verwenden um eine tickende Uhr zu erstellen.

## Spickzettel

Wenn Ihnen dieser Artikel gefallen hat, dann können Sie ihn auf [Twitter teilen](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) oder diesen handlichen Spickzettel speichern:

<img src="/tips/twitter-fave.png" alt="Teile diese Zusammenfassung auf Twitter" style="max-width:375px">





