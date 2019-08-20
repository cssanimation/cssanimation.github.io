---
layout: post
title: Transition mu, Animation mu?
description: Web animasyonlarında kullanılan &quot;transition&quot; ve &quot;animation&quot; &ouml;zelliklerinin farklılıkları.
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
tweet_text: Ne zaman transition, ne zaman animation kullanmali?
custom_header: posts/transitions-animations.html
translator: Can Göktaş
---

Web icin animasyon yaparken bu iki yontemden birini kullaniyor musunuz? Bazen biri yerine diğerini se&ccedil;memiz gereken zamanlar vardır. Haydi farklılıkları tartışalım.

## &quot;Transition&quot; nedir?

&quot;Transition&quot;, bir elementin bir durumdan diger bir duruma gecisi sirasinda gerceklesir ve web tarayicisi bu iki durum arasindaki gecis durumlarini kendisi yaratir, bir nevi &quot;resmeder&quot;. Birer baslangic ve bitis durumu mevcuttur.

Transition'lari genelde hover animasyonlari veya sayfaya eklenen/cikarilan elementlerin animasyonlarinda acik bir sekilde goruruz. Ornegin hover halinde minik bir font rengi degisikligi veya sayfadaki bir bilginin yavasca belirmesi (&quot;fade in&quot;) animasyonu.

Transition bazli animasyon uygulamalari 2 durumdan ibaret olmak zorunda oldugu icin bazi ince nuanslari ayarlamakta sikinti cekebiliyoruz ama ayni zamanda gayet de pratikler.

### Nerede kullanmali

Bir elementi bir durumdan digerine yavasca gecis yaptirmak istiyorsak, transition yontemi iyi bir secim olabilir. Basit degisiklikler transition ile halledilebilir, ayrica zamanlama fonksiyonlari sayesinde bu islemi biraz daha kisisellestirebilirsiniz.

Transition uygulamali animasyon, butona hover edildiginde veya tiklandiginda gayet iyi calisacaktir:

<section class="shiny demo-container tap-to-activate"><button>Parlama efekti</button></section>

Veya sayfaya yeni bir element eklendiginde:

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Bir liste ogesi</li><li class="show" style="background-color: #3cd19e;">Bir liste ogesi</li>
</ul>
<button>Bir liste ogesi ekle</button></section>

## Peki ya &quot;Animation&quot;?

&quot;Animation&quot; teknigi, gayet kuvvetli bur &quot;Transition&quot; alternatifidir. Sadece 1 baslangic ve 1 bitis durumuna bagli kalmak yerine, &quot;animation&quot; teknigiyle yapilan animasyonlarda bircok ara durum yaratilabilir ve animasyon uzerinde cok daha fazla hakimiyet saglanabilir.

Transition'da animasyon sadece A'dan B'ye dogru degisiklik gosterirken, Animation'da ihtiyaciniz dahilinde A, B, C, D, (...) istediginiz kadar durum yaratabilirsiniz.

Animation'lar bunu `keyframe`'ler kullanarak yapar. Transition kullanimi icin CSS class'imizda tek bir satir belirtmemiz yeterli olurken, Animation icin CSS'te ayri olarak farkli keyframe'ler belirtmek gerekir.

### Nerede kullanmalı

Bir animasyon tam sayfa yuklendiginde calismaliysa veya basit bir A durumundan B durumuna gecis animasyonundan daha kompleks bir ihtiyaciniz varsa, Animation teknigini kullanmak cok daha uygun olur.&nbsp;

Ornegin bir animasyonu sayfa yuklendikten belirli bir zaman sonra calistirmak istiyorsaniz da kullanisli olacaktir; ornegin Baymax karakterimizin goz kirpma animasyonu gibi:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Animation teknigi, eger sayfamizdaki bir elementi sayfa uzerinde birden fazla noktaya dogru hareket ettireceksek de kullanisli olabilir. Ornegin sitemize yeni uye olan kisiye site fonksiyonlarini tanitan bir animasyonda mouse imleci gorselini sayfanin farkli yerlerine hareket ettirebiliriz.

## &quot;Karar verebilen, acıyı yener.&quot; -Goethe

Gecenlerde hazirladigim bir ornekte aslinda Animation kullanacaktim, ancak sonradan Transition kullanimi icin gayet iyi bir ornek haline geldi.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Bu saati tasarlamaya basladigimda akrep ve yelkovan hareketlerini sayfa yuklendiginde hemen baslatarak devamli hareket etmelerini saglamistim. `Animation` ozelligini kullanmak icin gayet ideal bir durumdu. Sayfa yuklendiginde animasyon baslaycakti ve sonsuza dek devam edecekti. Saat daha karmasik hale geldikce, akrep ve yelkovanin acilarini JavaScript ile hareket ettirme fikri cok daha mantikli geldi.

Gostergeler JavaScript ile hareket ettirilince haliyle `transition` kullanmak farz oldu. JavaScript ile gostergenin acisi her degistiginde, CSS transition ozelligi sayesinde gecis animasyonunu&nbsp;(A durumundan B durumuna, yani eski acidan yeni aciya)&nbsp;yaratmis&nbsp;oldum - animation teknigine nazaran cok daha kullanisli ve zarif bir sekilde.

Ornek hakkinda daha fazla bilgi icin [CSS ile Saatler](/clocks/) makalesine goz atabilirsiniz.

## Ozetle

Bir durumdan digerine zarif bir gecis icin Transition, daha kompleks ve bir seri halinde gerceklesecek animasyonlar icinse Animation kullanmalisiniz.

Transition teknigi kullanmak nispeten cok daha kolaydir ve bircok animasyon icin idealdir. Eger animasyonunuz uzerinde daha fazla kontrolunuz olmasi gerekiyorsa, animasyonunuz bircok asamadan olusuyorsa veya animasyonunuzun sayfa yuklendiginde baslamasi gerekiyorsa Animation teknigi ideal olacaktir.
