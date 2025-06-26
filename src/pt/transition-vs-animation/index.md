---
layout: post.njk
title: Transi&ccedil;&otilde;es vs Anima&ccedil;&otilde;es
description: Uma descri&ccedil;&atilde;o das diferen&ccedil;as entre o uso de transi&ccedil;&otilde;es e&nbsp;anima&ccedil;&otilde;es na hora de criar suas anima&ccedil;&otilde;es.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS:
  [
    vendor/moment.min.js,
    vendor/moment-timezone.min.js,
    vendor/moment-timezone-with-data-2010-2020.min.js,
    custom/list_items.js,
    custom/clocks.js,
  ]
imageURL: /images/posts/transitions-animations/transitions-animations.gif
home_image: /images/posts/transitions-animations/transitions-animations.png
tweet_text: Quando voc&ecirc; deve usar transi&ccedil;&atilde;o, e quando usar anima&ccedil;&atilde;o?
custom_header: posts/transitions-animations.html
translator: "Sérgio Jardim"
---

Enquanto desenvolve uma anima&ccedil;&atilde;o na web, voc&ecirc; usa transi&ccedil;&atilde;o ou uma anima&ccedil;&atilde;o? Em alguns casos, voc&ecirc; vai preferir optar por uma, ao inv&eacute;s da outra. Vamos ver as diferen&ccedil;as.

## O que s&atilde;o Transi&ccedil;&otilde;es?

Uma transi&ccedil;&atilde;o ocorre quando um elemento muda de um estado para outro e o navegador preenche essa mudan&ccedil;a de estado com uma sequ&ecirc;ncia de quadros intermedi&aacute;rios. Possui um come&ccedil;o e um estado final.

&Eacute; comum vermos transi&ccedil;&otilde;es sendo usadas para cria&ccedil;&atilde;o de efeitos com hover, ou quando algo &eacute; adicionado e/ou removido na p&aacute;gina. O efeito do hover pode ser uma mudan&ccedil;a sutil na cor da font e a informa&ccedil;&atilde;o na p&aacute;gina pode surgir na tela.

Como as transi&ccedil;&otilde;es s&atilde;o limitadas a esses dois est&aacute;gios, estas podem pecar na suavidade das anima&ccedil;&otilde;es e ao mesmo tempo se tornarem mais f&aacute;ceis de serem implementadas.

### Quando usar

Se voc&ecirc; quer fazer com que uma anima&ccedil;&atilde;o aconte&ccedil;a suavemente, usar uma transi&ccedil;&atilde;o &eacute; uma boa escolha. Mudan&ccedil;as simples podem ser com transi&ccedil;&otilde;es, utilizando-se da propriedade timing-function para controlar a curva de velocidade da transi&ccedil;&atilde;o.

Uma transi&ccedil;&atilde;o se aplicaria bem quando algu&eacute;m movesse o cursor sobre um bot&atilde;o, ou ainda clicasse em um bot&atilde;o:

<section class="shiny demo-container tap-to-activate"><button>Efeito de brilho.</button></section>

Ou quando algo &eacute; adicionado &agrave; p&aacute;gina.

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Um item da lista</li><li class="show" style="background-color: #3cd19e;">Um item da lista</li>
</ul>
<button>Adiciona um item a lista.</button></section>

## O que s&atilde;o anima&ccedil;&otilde;es?

Anima&ccedil;&otilde;es no CSS s&atilde;o uma alternativa poderosa as transi&ccedil;&otilde;es. Ao inv&eacute;s de contar apenas com uma mudan&ccedil;a do estado inicial para o estado final, anima&ccedil;&otilde;es podem conter tantos novos estados entre come&ccedil;o e o final, quanto voc&ecirc; desejar e oferecem mais controle no que diz a respeito a como eles ser&atilde;o animados.

Enquanto uma transi&ccedil;&atilde;o alterna somente entre A e B, uma anima&ccedil;&atilde;o pode conter A,B, C e s&oacute; ent&atilde;o D, ou ainda quantos mais forem necess&aacute;rios.

Isso &eacute; poss&iacute;vel porque as anima&ccedil;&otilde;es usaa propriedades keyframe. Enquanto uma transi&ccedil;&atilde;o pode ser especificada com apenas uma linha na classe, uma anima&ccedil;&atilde;o funciona fazendo refer&ecirc;ncia a um conjunto de keyframes que s&atilde;o descritos separadamento no CSS.

### Quando usar

Se uma anima&ccedil;&atilde;o precisa ser executada enquanto a p&aacute;gina carrega ou &eacute; mais complexa que uma simples mudan&ccedil;a de A para B, um anima&ccedil;&atilde;o com CSS poder&aacute; ser mais apropriada.

Um exemplo disso &eacute; quando voc&ecirc; tem na p&aacute;gina uma anima&ccedil;&atilde;o que &eacute; executada depois de um certo per&iacute;odo de tempo, como um efeito de piscar no personagem Baymax:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Uma anima&ccedil;&atilde;o tamb&eacute;m pode ser uma boa escolha quando um determinado item precisa se mover entre v&aacute;rios lugares de uma p&aacute;gina, como janelas com informa&ccedil;&otilde;es que surgem ao passar o cursor sobre determinada &aacute;rea.

## Algumas vezes n&atilde;o &eacute; &oacute;bvio

Um post recente come&ccedil;ou como uma anima&ccedil;&atilde;o, mas depois fez-se necess&aacute;rio o uso de transi&ccedil;&otilde;es.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Quando comecei a projetar esse rel&oacute;gio, o movimento dos ponteiros era constantemente carregado. Uma situa&ccedil;&atilde;o para conveniente para o uso da propriedade animation. Era pra anima&ccedil;&atilde;o ser carregada e continuar se repetindo infinitamente. A medida em que foi ficando mais complexo, eu percebi que que fazia mais sentido definir os &acirc;ngulos dos ponteiros usando JavaScript.

Como os ponteiros estavam sendo movidos por JavaScript, transi&ccedil;&otilde;es se tornaram uma escolha mais vi&aacute;vel. Quando o JavaScript muda o &acirc;ngulo de um ponteiro, a propriedade transition do CSS manipula a mudan&ccedil;a(do estado A para o estado B) de uma maneira mais elegante do que uma anima&ccedil;&atilde;o faria.

D&ecirc; uma olhada nesse tutorial de como criar um [rel&oacute;gio com CSS](/clocks/) para mais detalhes

## Em resumo

Transi&ccedil;&otilde;es para criar uma suave transi&ccedil;&atilde;o de um estado para outro e anima&ccedil;&otilde;es para anima&ccedil;&otilde;es mais complexas com uma s&eacute;rie de movimentos.

Transi&ccedil;&otilde;es s&atilde;o geralmente mais f&aacute;ceis de criar e administrar, al&eacute;m de se aplicarem a grande maioria das situa&ccedil;&otilde;es. Se voc&ecirc; precisa de maior controle sobre os passos da anima&ccedil;&atilde;o de um elemento ou se a anima&ccedil;&atilde;o precisa ser carregada, ent&atilde;o, uma anima&ccedil;&atilde;o com keyframes &nbsp;deve ser a melhor escolha.
