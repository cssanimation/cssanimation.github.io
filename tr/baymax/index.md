---
layout: post
bodyClass: shorter
title: CSS ile Baymax
description: Big Hero 6 filminden Baymax karakterinin yuzunu tek bir element icinde ve hareketli bicimde yapiyoruz.
categories: [animation, tips, animations, transitions, pseudo-elements]
customCSS: baymax.css
imageURL: /images/posts/baymax/baymax.gif
home_image: /images/posts/baymax/home.png
tweet_text: Baymax'in yuzunu CSS ile hareketlendirme
translator: Can Göktaş
translator_link: https://twitter.com/cangokt
---

Big Hero 6 filmindeki Baymax karakterini CSS'te yapmaya baslayalim.

Bu yazida tek bir HTML elementine hafif bir background image animasyonu uygulayacagiz.

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Yapacagimiz ornegi [buradan](http://codepen.io/donovanh/full/ZYaMjw/) goruntuleyebilirsiniz.

## HTML

Pseudo-elementler sayesinde, sadece tek bir HTML elementi kullanarak Baymax'in yuzunun farkli parcalarini olusturacagiz.

    <div class="baymax"></div>

## CSS

Kivrimli, beyaz bir yuz gorunumu elde etmek icin hafif bir gradient ekliyoruz. Bunun icin `body` elementine radial gradient ekliyoruz.

    body {
      background: radial-gradient(center, #fff, #fff 50%, #aaa);
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100vh;
    }

Ardindan yuz kismini sayfanin ortasina konumlandiriyoruz. Agiz kismi basit, sade bir siyah cizgiden olusuyor. Bunu olusturmak icin border kullanacagiz.

    .baymax {
      border-bottom: 1.5em solid #000;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -40%);
    }

Ilk property'miz `1.5em` genisliginde bir siyah border olusturuyor. Ardindan bu cizgiyi absolute positioning ile %50 soldan %50 de yukardan hizalandiriyoruz.&nbsp; Bu %50 gibi degerler, elementi kapsayan elementi (`body`) baz alarak calisiyor.

Ancak bir sorun var: %50 ile ortaladigimiz element, sayfanin yatay ve dikey olarak ortasindan basliyor. Yani element tam olarak sayfanin ortasinda degil, elementin baslangic noktasi sayfanin ortasi olmus oldu.

Bunu dengelemek icin transform yontemini kullanarak element'i kendi genisliginin %40'i kadar yukari ve %50'si kadar sola cekiyoruz. Boylece elementin merkez noktasini sayfanin ortasina cekmis oluyoruz.(Normalde transform ile %50 yukari %50 de sola cekmemiz gerekirdi, bu sekilde elementi tam olarak sayfanin merkezine ortalamis oluruz. Ancak agiz kismini biraz daha sayfanin ust tarafina biraz yakin tutmak istedigim icin %50 yerine %40 degeri verdim.)

Bu asamada agiz kismi bu sekilde ortalanmis oluyor:

<section class="demo-container baymax-container"><span class="baymax no-pseudo-elements"></span></section>

## Gozler

Gozleri yuze eklemek icin `before` ve `after` pseudo-element'lerini kullanacagiz. Bunun icin ekstra herhangi bir HTML kodu yazmaniza gerek olmayacak, bunu tamamen CSS ile halledecegiz.

    .baymax::before {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      left: -9em;
      top: -6em;
      transform: skewX(-4deg);
    }

    .baymax::after {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      right: -9em;
      top: -6em;
      transform: skewX(4deg);
    }

Her iki pseudo-element'in de siyah background rengi ve dairesel gorunmeleri icin %50 border-radius degeri mevcut. Her ikisini de dudaklarin bitimine konumlandiriyoruz ve arkaya dogru hafifce egik gorunmeleri icin `skew` transform degerini kullaniyoruz. Neticede soyle bir goruntu elde etmis olmalisiniz:

<section class="demo-container baymax-container"><span class="baymax no-animation"></span></section>

## Şarjım bitiyor!

Filmde Baymax'in sarjinin azaldigi komik bir sahne var. Sersemlemis sekilde ortalikta dolasiyor ve goz kapaklari hafifce kapaniyor. Background gradient ve animation kullanarak bu efekti yaratabiliriz.

Oncelikle iki background color veriyoruz. Goz icin siyah, goz kapaklari icinse beyaz renk kullaniyoruz. Beyaz kisim oncelikle gozlerine disinda konumlandirilmali, ardindan onu goz kapaklari dusermiscesine hareketlendirecegiz.

    .baymax::before {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }

    .baymax::after {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }

Bunun icin background'a linear gradient ekliyoruz, kapsayan elementin 2 kati kadar da height verip konumlandiriyoruz ki kapsayan element ile ust uste binmesinler.

Iki background gradient'i bir arada kullanarak, `keyframes` ile goz kapagi animasyonunu yaratabiliriz.

    @keyframes blink {
      0%, 50% {
        background-position: 0 100%;
      }
      85%, 95% {
        background-position: 0 75%;
      }
      100% {
        background-position: 0 100%;
      }
    }

`Keyframes` sayesinde, yuzdelik dilimler icinde CSS tanimlari yaparak animasyon hazirlayabiliyoruz. Yuzdelik dilim, animasyonun ne kadar uzunlukta calisacagini belirtir. Yani %50'lik dilim, animasyonun yarisina tekabul eder.

Bu yontemle background'i animasyon uzunlugunun yarisina kadar yukarda tutacagiz, %50 ile %85 arasinda asagiya indirip animasyonun sonunda tekrar yukari cekecegiz.

Bir sonraki asamada pseudo-element'lere bu animasyonu kullanmalarini tanimliyoruz. Varolan stillere `animation` degerini ekliyoruz.

    .baymax::before {
      animation: blink 6s infinite;
      ...
    }

    .baymax::after {
      animation: blink 6s 0.1s infinite;
      ...
    }

Burada browser'a elementlere `blink` animasyonunu uygulamasini soylemis olduk. Animasyon uzunlugunu 6 saniyeye ayarladik ve dongu (&quot;loop&quot;) seklinde, bittiginde yeniden baslamasini soyledik.

Ikinci ornekte ekstra bir deger goruyorsunuz. `6s`'ten sonraki `0.1s`, animasyonun 0.1 saniye gecikmeli baslayacagini belirtiyor. Boylece ikinci goz, birinciden birazcik daha gec kapanmis gibi gorunecek. Bu sekilde tatlis Baymax'imiza daha insansi ve yorgun bir gorunum vermis oluyoruz. Son olarak boyle bir sonuc elde etmemiz gerek:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Tam ekran gormek icin [tiklayabilirsiniz](http://codepen.io/donovanh/full/ZYaMjw/).

## Tarayicilar

Kod orneklerinde `-webkit` ve `-moz` &ouml;n eklerini kullanmadik. `Transform` ve `animation` degerleri, browser destegi icin &ouml;n eklerle desteklenmeli. Bunun icin Autoprefixer gibi yardimci uygulamalari kullanabilirsiniz.

## Gif hali

Bu poncik Baymax animasyonunu arkadaslarinizla paylasmak isterseniz, buyrun; gif hali:

[<img src="/images/posts/baymax/baymax.gif" style="max-width:225px" />](/images/posts/baymax/baymax.gif)

