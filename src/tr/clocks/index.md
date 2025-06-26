---
layout: post.njk
title: Saatler
description: Biraz JavaScript'in de yardimiyla, CSS kullanarak saatler tasarlayip hareketlendirecegiz.
categories: [animations, transitions, javascript]
customCSS: clocks.css
extraJS:
  [
    vendor/moment.min.js,
    vendor/moment-timezone.min.js,
    vendor/moment-timezone-with-data-2010-2020.min.js,
  ]
customJS: clocks.js
imageURL: /images/posts/clocks/twelve.gif
home_image: /images/posts/clocks/home.png
tweet_text: CSS ile saat animasyonu
custom_header: posts/clocks.html
demo_url: http://codepen.io/donovanh/full/vEjywy/
translator: Can Göktaş
---

Vakit tamam! Bu yazida,&nbsp;bir saat olusturup basit CSS animasyonlari (ve tabii onlari tetiklemek icin&nbsp;JavaScript) kullanarak onu hareketlendirmeye calisacagiz.

Iste HTML, CSS, bir SVG arkaplan ve biraz da JavaScript kullanarak olusturacagimiz saat. CSS'teki animation ve transition ozelliklerini kullanacagiz. Beraberinde zamanlama ve CSS transform ozelliklerini vermek icin de JavaScript'ten faydalanacagiz.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### HTML

Biraz HTML ile ise koyuluyoruz.

```html
<article class="clock">
  <div class="hours-container">
    <div class="hours"></div>
  </div>
  <div class="minutes-container">
    <div class="minutes"></div>
  </div>
  <div class="seconds-container">
    <div class="seconds"></div>
  </div>
</article>
```

Her bir bolum icin (toplamda 3: saat, dakika, saniye) birer element yaratiyoruz.&nbsp; Bunlari bir de kapsayici (&quot;container&quot;) element icine aliyoruz. Kapsayici element olmadan da temel CSS animasyonlari uygulayabiliriz ancak kapsayici elementler bize konumlama ve hareketlendirme konusunda epey yardimci olacak.

## Saat arkaplani

Basit bir dairesel arkaplan, akrep, yelkovan ve saniye cubugu ile basliyoruz.

```css
.clock {
  border-radius: 50%;
  background: #fff url(/images/posts/clocks/ios_clock.svg) no-repeat center;
  background-size: 88%;
  height: 20em;
  padding-bottom: 31%;
  position: relative;
  width: 20em;
}
```

```css
.clock.simple:after {
  background: #000;
  border-radius: 50%;
  content: "";
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 5%;
  height: 5%;
  z-index: 10;
}
```

Kullandigim SVG arkaplani [buradan indirebilirsiniz.](/images/posts/clocks/ios_clock.svg) Ayrica ekledigim bir pseudo-element ile de saatin ortasina duz siyah bir daire ekledim. Saatin cubuklarini da sonrasinda bu merkezdeki elemente gore hizalayabiliriz.

Islemler sonunda boyle bir sonuc elde etmis olacagiz.

<div class="demo-container clocks single"> <article class="clock simple"></article></div>

Cubuklari eklemeden once kapsayici elementleri yerlestirmeliyiz.

```css
.minutes-container,
.hours-container,
.seconds-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
```

Bu kod sayesinde her bir cubuk kapsayicisi, saatin en ust noktasinda gorunecektir. Ardindan cubuklari CSS'te yaratmaya geciyoruz.

### Akrep (saat gostergesi)

Su anda her bir cubuk `absolute` position degeri almis halde ve saat 12'yi yani yukariyi gosterecek sekilde. Akrep cubugunu duzenlemeye basliyoruz.

```css
.hours {
  background: #000;
  height: 20%;
  left: 48.75%;
  position: absolute;
  top: 30%;
  transform-origin: 50% 100%;
  width: 2.5%;
}
```

Saati ilerde farkli boyutlara kucultmek/buyutmek daha kolay olsun diye pixel degil, yuzelik hesap kullaniyorum. Yapmasi pixel hesabindan biraz daha uzun surse de, kucuk/buyuk saat gorunumunde (ornegin mobil icin) bu bize avantaj saglayacak. `Transform-origin` degerini de cubugun alt tarafi olarak belirtiyoruz; boylelikle Akrep'i cevirme islemini kolayca yapabilecegiz.

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours"></div> </div> </article></div>

### Yelkovan (dakika gostergesi)

Yelkovan Akrep'le benzerlik gosteriyor; ancak biraz daha dar ve uzun bir gorunume sahip.

```css
.minutes {
  background: #000;
  height: 40%;
  left: 49%;
  position: absolute;
  top: 10%;
  transform-origin: 50% 100%;
  width: 2%;
}
```

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> </article></div>

### Saniye gostergesi

Bu gosterge de ayni sekilde uzun, ancak biraz daha asagiya cekilmis halde. Boylelikle tam merkezden degil, biraz daha asagidan baslamis olacak. Bunun icin `transform-origin` degerini 80%'e ayarliyoruz. Boylelikle bu gostergenin %20'si merkezin disinda olmus oluyor.

```css
.seconds {
  background: #000;
  height: 45%;
  left: 49.5%;
  position: absolute;
  top: 14%;
  transform-origin: 50% 80%;
  width: 1%;
  z-index: 8;
}
```

<div class="demo-container clocks single"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Animasyon

Saatimiz bu haliyle gunde sadece 2 kere dogruyu gosteriyor. :) Gercek bir saat gorunumu elde etmek icin biraz animasyon ekleyelim.

Bazi saatler her saniye calisarak &quot;tik-tak&quot; sesini cikarir. Bazi saatlerse bunu daha &quot;smooth&quot; sekilde yapar; saniye cubugu keskin hareketlerle degil yavasca ilerler. Biz her ikisini de olusturacagiz. Oncelikle gosterge cubuklarinin yavasca hareket ettigi gorunumu yapalim.

Bir CSS `keyframe` olusturarak gostergelerin 360 derece donmesini saglayabiliriz. (0% baslangic noktasi olacaktir)

```css
@keyframes rotate {
  100% {
    transform: rotateZ(360deg);
  }
}
```

Olusturdugumuz keyframe, eger belirtilen `animation` degeri elemente atandigi takdirde elementi 360 derece dondurecektir. Animasyonun akici bir sekilde ilerlemesi icin `linear` zamanlama fonksiyonunu kullanacagiz.

```css
.hours-container {
  animation: rotate 43200s infinite linear;
}
.minutes-container {
  animation: rotate 3600s infinite linear;
}
.seconds-container {
  animation: rotate 60s infinite linear;
}
```

Hours (akrep) gostergemizin her 12 saatte bir (45,200 saniye) donmesini ayarladik. Yelkovan ise dakikada bir, saniye gostergesi ise saniyede bir hareket ediyor.

Hepsini birlestirdigimizde, dupeduz bir saat elde etmis oluyoruz!

<div class="demo-container clocks single linear"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Keskin gozleriniz varsa, Yelkovan'in yavasca donusunu bile fark edebilirsiniz. Yelkovan'in tam donusu 1 saat alacaktir, Akrep'inki ise 12 saat.

Saniye gostergesinin donusu de tabii 60 saniye; boylelikle onun donusunu kolayca gorebilirsiniz.

### &quot;Tik-tak&quot; efekti

Bu kez de standart bir saat gorunumu elde edecegiz; yani saniye gostergemiz saatin icinde 60 saniye icinde her biri sert donusler yapacak. `Steps` zamanlama fonksiyonu kullanarak bunun kolayca ustesinden gelebiliriz. Her bir gosterge icin `animation` degerini su sekilde degistiriyoruz:

```css
.minutes-container {
  animation: rotate 3600s infinite steps(60);
}
.seconds-container {
  animation: rotate 60s infinite steps(60);
}
```

Boylece, hem saniye hem de dakika gostergemiz 60 keskin donus yapiyor. Web tarayicimiz otomatik olarak bu 60 hareketin uzakligini hesapliyor.

<div class="demo-container clocks single steps"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Saat kac?

Saat gorunumunu elde etmek kolay; peki ya bu saatin dogru saat ve dakikayi gostermesini nasil saglayacagiz? Biraz JavaScript ile saati ziyaretcilerimizin bulundugu bolgenin saatiyle eslestirebiliriz. Kod asagida gordugunuz gibi.

```
/*
 * Starts any clocks using the user's local time
 * From: cssanimation.rocks/clocks
 */
function initLocalClocks() {
  // Get the local time using JS
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
```

```
  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}
```

Bu fonksiyon, ziyaretcinin saat, dakika ve saniye degerlerini alarak her bir gostergenin donme degerini hesapliyor. Ardindan her bir gostergeyi &quot;loop&quot; dongusuyle dolasarak hesaplanan aciyi `rotateZ`'nin&nbsp;`style.transform`&nbsp;degerine veriyor.

Bu kod tum modern web tarayicilarinda calisacaktir; ancak Safari ve diger birkac tarayici icin &quot;prefix&quot; eklememiz gerekli. Bunun icin ayrica&nbsp;`style.webkitTransform` ozelligini kullanacagiz.

Ve bu sekilde saatimizi kullanicinin sistem saatine ayarlamis olduk.

<div class="demo-container clocks single steps local no-bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### Saniye ve dakika gostergelerini hizalamak

Saniye gostergemiz saatin tepesine, yani saat 12 pozisyonuna geldiginde dakika gostergemizin de ilerlediginden emin olmaliyiz.

<img src="/images/posts/clocks/twelve.gif" alt="Minute hand moving when second hand hits 12" style="max-width: 180px" />

Saatimiz ekrana geldiginde, dakika gostergemizin hareket etmesi icin 1 dakikadan az sure gerekmeli. Bunun icin, dakikanin bitmesine kac saniye kaldigini hesaplayip dakika gostergemizi hareket ettirmemiz gerekli. Saatin hareket baslangicini JavaScript ile yaptigimiz icin, devaminda dakika gostergemizi de her dakika 6 derece ilerletmesi icin&nbsp;`setInterval` kullanabiliriz.

Dakika gostergesini hareket ettirmeden once, icinde bulundugumuz dakikanin ne kadarlik bolumunde oldugumuzu hesaplamaliyiz. Koddaki bu satirlar dikkatinizi cekmistir.

```css
if (degrees[j].hand === 'minutes') {
  elements[k].parentNode.setAttribute('data-second-angle', degrees[j + 1].degree);
}
```

Buradaki kod, oncelikle gostergenin &quot;minutes (dakika)&quot; gostergesi olup olmadigini kontrol ediyor. Eger oyleyse, saniye gostergesinin o anki acisini bir data-attribute olarak elemente veriyor.

Bu data-attribute yerlesimi sayesinde, dakika gostergesini ne zaman ilerletmemiz gerektigini hesaplayabilecegiz.

```
/*
 * Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that
 */
function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}
```

```
/*
 * Do the first minute's rotation
 */
function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}
```

### Hoplama efekti

Dakika gostergesini ilerletmek icin artik JavaScript kullandigimiza gore, animation ozelligini kaldirabiliriz. Direkt silmek yerine, onu bir gecis animasyonuyla degistirebiliriz. Boylelikle animasyonumuza biraz daha karakteristik bir gorunum katabiliriz.

JavaScript ile gostergeye yeni bir aci verildiginde (yani hareket ettirildiginde), elementteki CSS transition'u sayesinde web tarayicimiz bu acida bir hareket gosterecek. Boylelikle JavaScript sadece bize dogru aciyi ayarlamakta yardimci olacak, web tarayicimiz ise onun animasyon tarafi ile ilgilenmis olacak.

Oncesinde, saniye gostergesini oynatmasi icin JavaScript kodumuzu guncellemeliyiz. Bu kod sayesinde saniye gostergemizi dakikada 60 kez oynatiyoruz.

```
/*
 * Move the second containers
 */
function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}
```

Hem saniye hem dakika gostergemizin hareketlerini JavaScript'e emanet ettigimize gore, CSS'teki `animation` ozelliklerini de `transition` ile degistirebiliriz.

```css
.minutes-container {
  transition: transform 0.3s cubic-bezier(0.4, 2.08, 0.55, 0.44);
}
.seconds-container {
  transition: transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44);
}
```

Bu transition'lara `transform` ozelligi ve `cubic-bezier` zamanlama fonksiyonu atayacagiz. Bu zamanlama fonksiyonu sayesinde gostergelerimize hafif bir hoplama efekti vermis oluyoruz.

<div class="demo-container clocks single local bounce"> <article class="clock simple"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

### iOS 7 Stili

Apple'in iOS7'de kullandigi cok sade saat gorunumunun hastasiyim! Sonradan gostergelerin boyunu uzatmis olsalar da ben kisa halini tercih ederim.

Gostergelere stil ekleyip numaralar seklinde arkaplan gorselleri tanimlayarak kolayca bu gorunumu elde edebiliriz.

<div class="demo-container clocks single local bounce"> <article class="clock ios7"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Bu tasarim, aslen Hans Hilfiker'in [Swiss Railway Clock](https://www.youtube.com/watch?v=IvIvKiDWDks) tasariminin gelismis bir hali. Biraz stil, biraz da arkaplan gorseli ekleyerek saatimizi kolayca bu tasarima uyarlayabiliriz.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Siz de baska tasarimlar yaparsaniz lutfen [bana iletin.](mailto:hello@cssanimation.rocks)

## Moment.js Kullanimi

Bu egitimi hazirlarken aklimdaki ilk fikirlerden biri, otellerdeki saat gorunumunu olusturmakti; yani birbirinden farkli zaman dilimlerini gosteren 3 ayri saat.

Farkli zaman dilimleri icin ayarlama yapmanin en kolay yollarindan biri, muhtesem [Moment.js Timezone](http://momentjs.com/timezone/) kutuphanesini kullanmak.

<div class="demo-container clocks multiple active bounce"> <article class="clock station js-new-york"><div class="label">New York</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-london"><div class="label">Londra</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article><article class="clock station js-tokyo"><div class="label">Tokyo</div> <div class="hours-container"> <div class="hours"></div> </div> <div class="minutes-container"> <div class="minutes"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Calisir haldeki ornek kodu [bu Codepen linkinden](http://codepen.io/donovanh/full/vEjywy/) goruntuleyebilirsiniz.

## Browser uyumlulugu

Modern tarayicilar CSS transition ve animation ozelliklerini desteklemekte. Internet Explorer 10 uzeri versiyonlar, son Chrome versiyonlari ve Firefox icin prefix kullanmaniza gerek yok, Safari icinse `-webkit` prefix'ini kullanmaniz gerekir.

Prefix'li ozellikleri JavaScript icinde olusturdugumuz kodlara da eklemeyi unutmayin.
