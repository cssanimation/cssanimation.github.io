---
layout: post
title: Animationsprincipper for nettet
description: Hvordan Disneys 12 animationsprincipper kan blive anvendt i web-design
categories: [animation, tips, animations, transitions]
customCSS: principles.css
imageURL: /images/posts/principles/principles.png
home_image: /images/posts/principles/principles.png
tweet_text: Anvendelse af Disneys 12 principper i web-animation
custom_header: posts/principles.html
demo_url: http://codepen.io/collection/AxKOdY/
translator: Asbjørn Faurholt
translator_link: https://twitter.com/K0mB47W0mB47
---

Som &quot;front-end&quot;-designere og udviklere bruger vi CSS til udseende, position og skabelsen af flotte sites. Vi bruger ofte CSS til at skabe bev&aelig;gelse i sider i form af overgange eller s&aring;gar animationer, men vi g&aring;r for det meste ikke l&aelig;ngere end det.

Animation kan v&aelig;re et kraftfuldt v&aelig;rkt&oslash;j til at hj&aelig;lpe vores bes&oslash;gende og vores kunder med at forst&aring; og f&aring; fordel af vores designs. Der er principper, som vi kan anvende i vores arbejde, for at f&aring; mest ud af denne kraft.

Veletableret som fundamentale arbejdspraksis ved Disney var de [12 animationsprincipper](http://en.wikipedia.org/wiki/12_basic_principles_of_animation) udgivet som &quot;The Illusion of Life: Disney Animation&quot; i 1981. Disse principper beskriver hvordan animation kan blive brugt til at drage beskueren ind i en trov&aelig;rdig verden.

I denne artikel vil jeg gennemg&aring; hver af de 12 principper og diskutere hvordan de kan blive anvendt n&aring;r man laver web-sider. Du kan finde [HTML- og CSS-kilden p&aring; Codepen for dem alle her.](http://codepen.io/collection/AxKOdY/)

## Mase og str&aelig;kke

<section class="demo-container principle principle-one"><div class="wrapper"> <div class="shape"></div> <div class="surface"></div> </div></section>

Det er denne angivelse at et objekt har en fysisk masse og n&aring;r det bev&aelig;ger sig forbliver denne masse den samme. En bold vil blive bredere n&aring;r den rammer jorden mens den hopper, men vil ogs&aring; blive kortere n&aring;r dens masse bliver omdelt igen.

Dette er mest brugbart n&aring;r man skaber objekter, som vi vil have anset for fysiske, s&aring;som mennesker, ure eller hoppende bolde.

Det er muligt at ignorere denne regel med elementer fra en web-side. DOM-elementer er ikke n&oslash;dvendigvis associeret med fysiske objekter og kan gro og skrumpe p&aring; sk&aelig;rmen efter n&oslash;dvendighed. For eksempel: En knap kan gro og gradvist forvandle til en informationskasse eller fejlmeddelser kan vises og skjules.

Stadigt, denne mase- og str&aelig;kketeknik kan blive anvendt til at give et objekt f&oslash;lelsen af fysisk masse. Selv sm&aring; skift i form kan skabe diskrete men i&oslash;jefaldende effekter.

## Forventning

<section class="demo-container principle principle-two"><div class="wrapper"> <div class="shape"></div> <div class="surface"></div> </div></section>

Bev&aelig;gelser forekommer ikke pludseligt. I virkeligheden forekommer der for det meste en form for opbygning til en bev&aelig;gelse. Om det s&aring; er en bold der begynder at rulle f&oslash;r den falder af et bord, eller om det er en person, som bukker deres kn&aelig; som forberedelse til et hop.

Vi kan bruge dette til at lave vores overgange og animation mere livstro. Forventningen kan v&aelig;re i form af diskrete &aelig;ndringer, som hj&aelig;lper personer med at forst&aring; hvad der skifter og holde styr p&aring; objekter p&aring; sk&aelig;rmen.

For eksempel: Et element kan skrumpe en smule f&oslash;r det gror sig st&oslash;rre ved et &quot;hover&quot;. Tilf&oslash;jelsen af ekstra ting til en liste kan blive introduceret ved at andre objekter flytter sig ud af vejen f&oslash;rst.

## Ops&aelig;tning

<section class="demo-container principle principle-three"><div class="wrapper"> <div class="shape a"></div> <div class="shape b"></div> <div class="shape c"></div> </div></section>

Ops&aelig;tningen er at blive sikker p&aring; et objekt har focus i scenen n&aring;r andre objekter eller aspekter af scenen g&oslash;r plads for hvor den hovedsagelige begivelse tager sted. Dette betyder at enten placere den hovedsagelige begivelse i en prominent position eller at maskere andre elementer, for at fokusere p&aring; hvad brugeren har brug for at se.

I web-termer kunne en tilgang v&aelig;re at bruge en &quot;modal&quot;-overtr&aelig;kning for bestemt indhold. Tilf&oslash;jelsen af en m&oslash;rk overl&aelig;gning p&aring; en eksisterende side, og derefter placere indholdet foran, ops&aelig;tter det og viser det som det prim&aelig;re fokuspunkt.

En anden tilgang er bev&aelig;gelse. N&aring;r mange objekter er i bev&aelig;gelse er det sv&aelig;rt at forst&aring; hvilke, som kr&aelig;ver opm&aelig;rksomhed. Hvis alle andre objekter er stillest&aring;ende og kun &eacute;t objekt bev&aelig;ges, selv en smule, kan det blive meget nemmere at f&aring; &oslash;je p&aring;.

En teknik er at give en &quot;Save&quot;-knap en slyngende eller blinkende effekt i et kort &oslash;jeblik for at hentyde for brugeren at de m&aring;ske burde gemme et dokument. Med resten af sidens indhold holdt statisk og stillest&aring;ende vil selv sm&aring; bev&aelig;gelser st&aring; ud.

## &quot;Ret-fremad&quot;-aktion og &quot;posering-til-posering&quot;

<section class="demo-container principle principle-four"><div class="wrapper"> <div class="shape a"></div> <div class="shape b"></div> </div></section>

&quot;Ret-fremad&quot;-aktion er n&aring;r hver del af en animation er tegnet. &quot;Posering-til-posering&quot; er n&aring;r en serie af n&oslash;glepunkter er defineret og resten af intervallerne fyldes ind senere - for det meste af en assistent.

Med web-animation bruges &quot;posering-til-posering&quot;-animation. Overgangen mellem n&oslash;glepunkter kan blive h&aring;ndtereret af browseren, som interpolere forskellen mellem hvert n&oslash;glepunkt og tegner s&aring; mange dele, som den kan, for at g&oslash;re animationen flydende.

En undtagelse til dette er `steps` timingfunktionen. Med denne funktion tr&aelig;der browseren igennem s&aring; mange individuelle dele, som er defineret. P&aring; denne m&aring;de kan man tegne en serie af billeder og f&aring; browseren til at fremvise dem i en sekvens, hvilket skaber en &quot;ret-fremad&quot;-aktionsstil.

## &quot;F&oslash;lg igennem&quot; og &quot;overlappende aktion&quot;

<section class="demo-container principle principle-five"><div class="wrapper"> <div class="shape-container"> <div class="shape"></div> </div> </div></section>

Ting sker ikke n&oslash;dvendigvis p&aring; samme tidspunkt. N&aring;r en bil pludseligt stopper tilter den fremad med r&oslash;g fra hjulene og chauff&oslash;ren indeni, som forts&aelig;tter fremad until de bliver stoppet eller forsvinder.

Disse detaljer er nemlig eksempler p&aring; &quot;f&oslash;lg igennem&quot; og &quot;overlappende aktion&quot;. De kan blive brugt p&aring; nettet til at fastsl&aring; at noget stopper og har ikke bare glemt at animere. For eksempel: En ting tilf&oslash;jet til en liste glider m&aring;ske ind, forts&aelig;tter lidt for langt, og korregerer sig selv til den rigtige position.

For at skabe f&oslash;lelsen af overlappende aktion kan vi bev&aelig;ge elementer i hver deres forskellige tempo. Det er en teknik der bliver anvendt godt i iOS-operativsystemer med overgange mellem brugergr&aelig;nseflader. Nogle knapper og elementer bev&aelig;ger sig i forskellige hastigheder og den kombinerede effekt er derfor mere livstro og mindre flad end hvis alting bev&aelig;gede sig samtidigt. Den kombinerede bev&aelig;gelse giver tilskueren tid til ordenligt at forst&aring; &aelig;ndringen.

I web-termer kan dette indeb&aelig;re at stable overgange og animationer hvilket skaber effekter som arbejder i forskellige hastigheder.

## Langsomt-ind og langsomt-ud

<section class="demo-container principle principle-six"><div class="wrapper"> <div class="shape a"></div> </div></section>

Objekter g&aring;r sj&aelig;ldent fra stillest&aring;ende til maksimal hastighed &oslash;jeblikkeligt. De har det med at gradvist f&aring; fart og s&aelig;tte farten ned f&oslash;r de stopper. Uden acceleration og aftagning f&oslash;les bev&aelig;gelser robot-agtige.

I CSS-termer er langsomt-ind og langsomt-ud kendt som `easing`. Easing er kendt som timingfunktioner og er en m&aring;de at beskrive intervallet gennem forl&oslash;bet af en animation.

Ved at bruge timingfunktioner kan animationer starte langsomt og tage fart (ease-in), starte hurtigt og aftage (ease-out) eller mere komplekse effekter ved brug af `cubic-bezier` timingfunktionen.

## Kurver

<section class="demo-container principle principle-sevena"><div class="wrapper"> <div class="shape-container"> <div class="shape a"></div> </div> </div></section>

Mens objekter er mere livstro n&aring;r de f&oslash;lger &quot;langsomt-ind og langsomt-ud&quot;, bev&aelig;ger objekter sig sj&aelig;ldent i en lige linje. De har det med at bev&aelig;ge sig i kurver.

Vi kan opn&aring; kurvede bev&aelig;gelser med CSS p&aring; en r&aelig;kke forskellige m&aring;der. En er kombinationen af forskellige animationer. For eksempel kan en animation af en hoppende bold blive lavet udfra en animationen, som bev&aelig;ger bolden op og ned, og en anden, som bev&aelig;ger den fra side til side, samtidigt. Bolden ville derefter bev&aelig;ge sig i en kurve henover sk&aelig;rmen.

<section class="demo-container principle principle-sevenb"><div class="wrapper"> <div class="shape a"></div> <div class="shape b"></div> </div></section>

En anden mulighed er at rotere et element. Vi kan justere et elements rotationscenter ved at s&aelig;tte dets transformationsoprindelse udenfor elementet. Objektet vil derefter rotere i en kurve, hvis det bliver roteret.

## Sekund&aelig;r aktion

<section class="demo-container principle principle-eight"><div class="wrapper"> <div class="shape a"></div> <div class="shape b"></div> <div class="shape c"></div> </div></section>

N&aring;r en prim&aelig;r aktion finder sted, kan en sekund&aelig;r animation hj&aelig;lpe med at l&aelig;gge v&aelig;gt p&aring; aktionen. Dette kunne v&aelig;re de svingende arme af &eacute;n, som g&aring;r, eller deres tiltende hoved. Eller en hoppende bold, som skyder en smule st&oslash;v op.

P&aring; web-sider kunne sekund&aelig;re aktioner v&aelig;re elementer, som bev&aelig;ger sig ud af vejen, n&aring;r det prim&aelig;re fokuspunkt introduceres, s&aring;som at tr&aelig;kke en ting og placere den i midten af en liste.

## Timing

<section class="demo-container principle principle-nine"><div class="wrapper"> <div class="shape a"></div> <div class="shape b"></div> </div></section>

En animationstiming er hvor lang tid den er om at blive f&aelig;rdig. Timing kan blive brugt til at f&aring; objekter med v&aelig;gt til at se tunge ud i bev&aelig;gelse, eller tilf&oslash;je personlighed til en bev&aelig;gelse.

P&aring; nettet kunne dette v&aelig;re s&aring; simpelt som justeringen af `animation-duration` eller `transition-duration` v&aelig;rdierne.

Det er nemt at lade animationer tage l&aelig;ngere tid end de beh&oslash;ver. Justeringen af timingen kan hj&aelig;lpe med at f&aring; animationen v&aelig;k fra indholdet eller interaktionen.

## Overdrivelse

<section class="demo-container principle principle-ten"><div class="wrapper"> <div class="shape"></div> </div></section>

Mest almindeligt brugt i tegnefilm, overdrivelse kan drage opm&aelig;rksomhed til bestemte aktioner eller g&oslash;re dem mere dramatiske. En ulv, som fors&oslash;ger at bide, kunne have sine k&aelig;ber mere &aring;bne end normalt for at g&oslash;re effekten mere uhyggelig eller humoristisk.

P&aring; en web-side kan objekter blive skaleret op eller ned for at l&aelig;gge v&aelig;gt p&aring; dem og drage opm&aelig;rksomhed. For eksempel ved udfyldelsen af en form kan den aktive sektion gro, mens de andre skrumper og falmer.

## Solide tegninger

<section class="demo-container principle principle-eleven"><div class="wrapper"> <div class="shape"> <div class="container"> <span class="front"></span> <span class="back"></span> <span class="left"></span> <span class="right"></span> <span class="top"></span> <span class="bottom"></span> </div> </div> </div></section>

Ved animeringen af tre-dimensionelle objekter b&oslash;r der v&aelig;re p&aring;passelighed for at sikre de f&oslash;lger perspektivreglerne. Folk er vandt til at leve i en tre-dimensionel verden, s&aring; n&aring;r objekter ikke opf&oslash;rer sig, som forventet, ser det forkert ud.

Moderne browsere har udem&aelig;rket underst&oslash;ttelse til tre-dimensionelle transformationer. Dette betyder at vi kan rotere og placere objekter i en scene og browseren kan h&aring;ndtere overgangene automatisk.

## Appellering

<section class="demo-container principle principle-twelve"><div class="wrapper"> <div class="shape"> <div class="container"> <span class="item one"></span> <span class="item two"></span> <span class="item three"></span> <span class="item four"></span> </div> </div> </div></section>

Appelleringen er kuntsv&aelig;rkets personlighed og hvordan det f&aring;r os til at forst&aring; kunstnerens intention. Ligesom en skuespillers charisma er det kombinationen af detaljer og bev&aelig;gelser, som kreerer et appellerende resultat.

Animationer skabt med megen omhu p&aring; nettet kan skabe appellering. Firmaer, s&aring;som Stripe, har haft god brug af animationer for at skabe trov&aelig;rdighed til deres checkout-proces.

## Pr&oslash;v det selv!

Brugen af de forskellige principper er en god m&aring;de at forbedre animationer. Animationer som bevarer den fysiske v&aelig;gt, forbereder forandringer, g&oslash;r brug af sekund&aelig;re aktioner og har god timing er kostbare og hj&aelig;lpsomme tilf&oslash;jelser til dit indhold.

N&aring;r du har chancen for at tilf&oslash;je animationer til dine sider vil brugen af et eller flere af principperne g&oslash;re dem mere effektive og appellerende.
