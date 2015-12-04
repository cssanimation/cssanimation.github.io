---
layout: post
bodyClass: shorter
title: Twitter'daki &quot;fav&quot; animasyonu
description: Twitter'da bir tweet'i 'fav'ladiginizda cikan animasyonu CSS'teki steps() yontemiyle nasil olusturabilecegimize bir goz atalim.
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-01-17-twitter-fave.md
home_image: /images/posts/steps/home.png
tweet_text: Twitter'daki &quot;fav&quot; animasyonu
translator: Can Göktaş
translator_link: https://twitter.com/cangokt
english_version: /twitter-fave/
---

Twitter gectigimiz gunlerde &quot;fav&quot; butonunun tasarimini degistirdi ve butona bir animasyon ekledi. Bu animasyon CSS transition kullanmiyor, bunun yerine sadece bir dizi goruntu arasinda gecis yapiyor. Bu animasyonu CSS'teki `steps` zamanlama fonksiyonu ile yeniden yaratmaya basliyoruz.


## Hareket yanılsaması

Benzer bir teknik aslinda yuzyillardir [Zoetrop](http://en.wikipedia.org/wiki/Zoetrope) denen aygitlarda kullaniliyor. Birbirine benzer goruntuler hizlica arka arkaya yansitildiginda, tek bir goruntu hareket ediyormus gibi gorunur. Tabii biz Zoetroptaki gibi gorselleri bir cember icinde degil, HTML &amp; CSS icinde kullanacagiz.

## Demo

Mouse ile yildizin ustune gelerek animasyonu gorebilirsiniz.

<section class="fave demo-container tap-to-activate"></section>

Oncelikle animasyonu olusturacak olan bir seri halindeki gorselleri hazirlayacagiz. Twitter'in kullandigi bu ikon animasyonunun bir kismini alalim:

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

Bu kareleri hareket ettirmek icin hepsini tek bir sira uzerine hizalamamiz gerek. Buradan, tek bir satir haline getirilmis gorsel setimizi gorebilirsiniz. Ilk kareden son kareye dogru background'i hareket ettirerek animasyonumuzu olusturacagiz.

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Steps() zamanlama fonksiyonu

Daha onceden muhtemelen asina oldugunuz &quot;ease&quot; veya &quot;cubic-bezier&quot; gibi zamanlama fonksiyonlarinda, animasyon baslangic ve bitis durumlarina gayet &quot;nazik&quot; bir bicimde, yumusakca gecer. Bu bizim isimizi cozmez. `Steps` bu noktada diger fonksiyonlardan ayriliyor, onun calisma mantigi daha farkli. Istedigimiz hafif, yumusak bir gecis degil; aksine asamalari birer birer atlayan, keskin bir gecis.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

Animasyonun HTML kismiyla basliyoruz:

```html
<section class="fave"></section>
```

### Background image

Ardindan bazi temel CSS ozelliklerini yaziyoruz. Animasyon karelerini iceren dosyayi background image olarak verdik.

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)

```css
.fave {
  width: 70px;
  height: 50px;
  background: url(images/twitter_fave.png) no-repeat;
  background-position: 0 0;
}
```

Animasyonun baslangicini `hover` durumuna gore ayarladik.

```css
.fave:hover {
  background-position: -3519px 0;
  transition: background 1s steps(55);
}
```

Ikinci tanimlamamiz olan `transition`'a dikkatinizi cekmek istiyorum. Bu satirda diyoruz ki, `steps` zamanlama fonksiyonu kullanilarak background ozelligimizdeki degisiklik 1 saniye icinde goruntulensin/hareketlensin. `steps` kismina `55` degeri verdik - tahmin edersiniz ki bu, animasyon icin 55 adet karemiz oldugu anlamina geliyor.

Yani elemente hover edildigi takdirde, olculeri esit 55 parca arasinda gecis yapilacak.&nbsp;

### Neden bunun yerine gif kullanmiyoruz?

Hareketli gif'ler kullanabilirdik aslinda ama acikcasi bu durumda pek kullanisli olmazlardi. Gif'lerin dosya boyutu cok daha fazladir ve kare sayisini &amp; hizini kontrol etmek daha zordur. Az once yaptigimiz yontemde CSS ile animasyonu durdurabilir, basa sarabilir veya diger her turlu ayarlamayi yapabiliriz.

## &quot;steps()&quot; in diger kullanimlari

&quot;Sprite (tek bir buyuk gorsel icinde birden fazla gorsel - bizim ornegimizde yildizin baslangictan bitise kadar olan tum halleri tek dosyada idi)&quot; seklinde hazirlanmis background gorsellerini hareketlendirmek, `steps` zamanlama fonksiyonunun kullanim alanlarindan sadece biri. Kesintili sekilde hareketlendirilmesi gereken her sey icin steps fonksiyonu ideal bir kullanim olacaktir. Ornegin bir saat yapabilirsiniz - yelkovanin hareketleri keskindir; her saniye belirli bir aciyla keskin bir sekilde doner, yavasca degil. Tik, tak.

## Yardimci dokuman

Makaleyi begendiyseniz [Twitter'da paylasip](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) &quot;fav&quot;'lari toplayabilir ya da bu yardimci dokumani bilgisayariniza kaydedebilirsiniz:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
