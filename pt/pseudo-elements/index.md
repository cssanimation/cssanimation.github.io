---
layout: post
bodyClass: shorter
title: Animando pseudoelementos
description: Com os pseudoelementos, voc&ecirc; ganha dois elementos HTML extras. Veja a seguir como anim&aacute;-los quando se passa o mouse (&quot;hover&quot;). Use-os com sabedoria.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Bot&otilde;es brilhantes com CSS
translator: "Sérgio Jardim"
translator_link: https://twitter.com/sjardim
---

Os pseudoelementos funcionam como se ganh&aacute;ssemos novos elmentos do DOM. Eles nos permitem adicionar&nbsp;em nossas p&aacute;ginas&nbsp;conte&uacute;do extra, decora&ccedil;&atilde;o, e muito&nbsp;mais, sem adicionar nada ao HTML. E eles podem ser animados. Neste post, n&oacute;s usaremos um pseudoelemento para adicionar um pouco do estilo visual para um bot&atilde;o.

<section class="shiny demo-container tap-to-activate"><button>Efeito brilhante</button></section>

## Pseudoelementos

No CSS, podemos especificar um pseudoelemento&nbsp;usando&nbsp;`::before` ou `::after`. O pseudoelemento &eacute; inserido dentro de um elemento, entre este e qualquer outro conte&uacute;do. Uma vez que ele atua como se fosse um pr&oacute;prio elemento, pode ser estilizado, posicionado, etc. O c&oacute;digo &eacute; um pouco parecido com este:

    .pebble::before {
      ...
    }
    .pebble::after {
      ...
    }

Neste ponto, nosso elemento `.pebble` tem dois elementos virtuais anexados, e n&oacute;s podemos estiliz&aacute;-los conforme necess&aacute;rio.

### Nota sobre &quot;::&quot; versus &quot;:&quot;

&Eacute; geralmente aceito que usemos dois-pontos duplos `::` para denotar pseudoelementos (ao contr&aacute;rio das pseudoclasses como :hover, :first-child). Mas se voc&ecirc; estiver adicionando suporte ao IE8, &eacute; melhor usar um &uacute;nico dois-pontos `:`. Todos os outros navegadores e vers&otilde;es mais recentes do IE suportam os dois-pontos duplos.

### N&atilde;o se esque&ccedil;a do &quot;conte&uacute;do&quot;

Ao adicionar pseudoelementos, uma coisa a manter em mente &eacute; a necessidade de especificar a propriedade `content`&nbsp;para que eles possam ser vis&iacute;veis na p&aacute;gina. Como o pseudoelemento &eacute; criado sem conte&uacute;do, n&oacute;s podemos criar um truque para faz&ecirc;-lo aparecer usando um `content` vazio, desse jeito:

    .pebble::before {
      content: ""
      ... more styling goes here...
    }

Isto deve gaantir que o elemento seja vis&iacute;vel na tela.

## Exemplo: Bot&atilde;o brilhante

Para este exemplo, usaremos um pseudoelemento para criar um efeito brilhante ao passar o mouse sobre um bot&atilde;o. Aqui est&aacute; um exemplo em a&ccedil;&atilde;o (Passe o mouse ou toque para ver o efeito).

<section class="shiny demo-container tap-to-activate"><button>Efeito brilhante</button></section>

Para come&ccedil;ar, um pouco de HTML:

    <button>Oooh SHINY</button>

J&aacute; que estamos usando pseudoelementos, n&atilde;o precisaremos de mais HTML do que isso para come&ccedil;ar. Voc&ecirc; pode querer adicionar uma classe para o bot&atilde;o se quiser diferentes estilos numa mesma p&aacute;gina, mas, por enquanto, vamos usar o elemento gen&eacute;rico por simplicidade.

### Adicionando o efeito de brilho

O efeito de brilho &eacute; um gradiente linear que passa atrav&eacute;s do bot&atilde;o. Para criar isto, n&oacute;s usaremos o pseudoelemento `after` e vamos posicion&aacute;-lo inicialmente do lado de fora do bot&atilde;o:

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

O efeito de brilho &eacute; composto por um gradiente da cor&nbsp;do bot&atilde;o&nbsp;para&nbsp;branco, numa dire&ccedil;&atilde;o, e o inverso na volta. Neste momento, ele est&aacute; aparecendo do lado de fora o bot&atilde;o.

N&oacute;s precisamos ocultar a camada de brilho, para que ela s&oacute; apare&ccedil;a ao passarmos o mouse. Para fazer isso n&oacute;s definiremos a propriedade `overflow` do bot&atilde;o para `hidden`. Como o pseudoelemento est&aacute; dentro do bot&atilde;o, isto significa que seu posicionamento do lado de fora o bot&atilde;o n&atilde;o ser&aacute; vis&iacute;vel.

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

Eu adicionei outros estilos tamb&eacute;m para dar ao bot&atilde;o uma cara pr&oacute;pria. Uma coisa a salientar &eacute; o uso de `position: relative`. Adicionei essa propriedade para que o pseudoelemento posicionado&nbsp;absolutamente&nbsp;fique dentro do bot&atilde;o. Sem especificar a posi&ccedil;&atilde;o, um item absolutamente posicionado ir&aacute; se basear na posi&ccedil;&atilde;o do elemento pai (geralmente, o body).

## Adicionando a anima&ccedil;&atilde;o

Uma vez que estaremos usando uma anima&ccedil;&atilde;o neste exemplo, h&aacute; duas etapas envolvidas. A primeira &eacute; dizer ao browser para usar uma anima&ccedil;&atilde;o no evento do passar do mouse. Em seguida, n&oacute;s definiremos exatamente o que &eacute; a anima&ccedil;&atilde;o, usando `keyframes` (quadros-chave).

Adicionar o estado &quot;hover&quot; pode ser feito empilhando o `after` sobre o `hover`, desta forma:

    button:hover::after, button:focus::after {
      animation: sheen 1s forwards;
    }

Aqui estamos dizendo ao navegador que ao passar do mouse, o pseudoelemento `after` deve ganhar uma `anima&ccedil;&atilde;o`. A anima&ccedil;&atilde;o, chamada brilho, dura um segundo e para ao final sem se repetir.

A ordem &eacute; importante aqui. Usar `::after:hover` n&atilde;o funcionar&aacute;, pois estaremos dizendo ao navegador para reagir ao estado &quot;hover&quot; do pr&oacute;prio pseudoelemento.

Tamb&eacute;m adicionei o estado de foco. Isto significa que os usu&aacute;rios usando a tecla tab para navegar na p&aacute;gina v&atilde;o ver o efeito de brilho, sem a necessidade de passarem o mouse. (Obrigado, [&Scaron;ime Vidas](https://twitter.com/simevidas), pela dica)

Vamos especificar `keyframes` para esta anima&ccedil;&atilde;o:

    @keyframes sheen {
      100% {
        transform: rotateZ(60deg) translate(1em, -9em);
      }
    }

S&oacute; precisamos de um quadro-chave neste caso. Como a posi&ccedil;&atilde;o inicial (0%) est&aacute; impl&iacute;cita pela posi&ccedil;&atilde;o inicial do pseudoelemento, apenas precisamos descrever a posi&ccedil;&atilde;o final. Neste caso, a posi&ccedil;&atilde;o final &eacute; do outro lado, no canto superior direito do bot&atilde;o. O navegador ent&atilde;o animar&aacute; o efeito de brilho em toda a extens&atilde;o.

<section class="shiny demo-container tap-to-activate"><button>Efeito brilhante</button></section>

## Considera&ccedil;&otilde;es sobre navegadores

A [propriedade de anima&ccedil;&atilde;o &eacute; bem suportada](http://caniuse.com/#feat=css-animation), como s&atilde;o os [pseudoelementos](http://caniuse.com/#feat=css-gencontent). &Eacute; sempre bom, para ter certeza, incluir prefixos `-webkit` e `-moz` para os `keyframes` e quaisquer transforma&ccedil;&otilde;es.
