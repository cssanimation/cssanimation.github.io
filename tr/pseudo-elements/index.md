---
layout: post
bodyClass: shorter
title: Pseudo-element'ler ile animasyon
description: Pseudo-elements give you two extra HTML elements for free! Here's how to animate them on hover. Use them wisely.
categories: [animation, tips, animations, pseudo-elements]
customCSS: shiny_button.css
imageURL: /images/posts/sheen/sheen.gif
home_image: /images/posts/sheen/home.png
tweet_text: Shiny buttons with CSS
translator: Can Göktaş
translator_link: https://twitter.com/cangokt
english_version: /pseudo-elements/
---


Pseudo-element'ler bize pek &ccedil;aba harcamadan fazladan DOM elementleri elde etme imkanı verir.&nbsp; Sayfalarımıza ilave HTML eklemeden fazladan i&ccedil;erik, dekor vb. eklememizi sağlarlar ve bu pseudo-elementlere animasyon ekleyebiliriz.&nbsp; Bu yazıda bir pseudo-element'i bir butona biraz g&ouml;rsellik eklemek i&ccedil;in kullanacağız.

<section class="shiny demo-container tap-to-activate"><button>G&Ouml;Z KAMAŞTIRAN EFEKT</button></section>

## Pseudo-elementler

CSS'te&nbsp;`::before`&nbsp;ya da&nbsp;`::after`&nbsp;kullanarak bir pseudo-element oluşturabiliriz. Bu pseudo-element daha sonra eklendiği element ile herhangi bir i&ccedil;eriğin arasına yerleştirilir. Pseudo-element kendi başına bir elementmiş gibi davrandığı i&ccedil;in stil verilebilir, konumlandırılabilir ve daha fazlası yapılabilir.&nbsp; Kod şuna benzer:

    .pebble::before {
      ...
    }
    .pebble::after {
      ...
    }

Bu aşamada&nbsp;`.pebble`&nbsp;elementimize iki adet sanal (HTML'de belirtmeden elde ettiğimiz) element ekledik ve bu elementleri ihtiyacımıza g&ouml;re şekillendirebiliyoruz.

### &ldquo;::&rdquo; ve &ldquo;:&rdquo; arasındaki fark hakkında

Pseudo elementleri belirtirken genel olarak kabul edilen belirtme şekli (:hover, :first-child gibi pseudo-class'ları aksine) iki adet &lsquo;iki nokta &uuml;st &uuml;ste&rsquo; imi&nbsp;`::`&nbsp;kullanmaktır.&nbsp; Eğer IE8'i desteklemeniz gerekiyorsa, tek 'iki nokta &uuml;st &uuml;ste&rsquo; imi&nbsp;`:`&nbsp;kullanmak en iyisidir. Diğer t&uuml;m tarayıcılar ve IE'nin yeni versiyonları iki adet 'iki nokta &uuml;st &uuml;ste&rsquo; imini (::) desteklemektedir.

### &ldquo;content&quot;i unutma!

Pseudo-elementler eklerken akılda tutulması gereken şeylerden biri, pseudo-elementlerin sayfada g&ouml;r&uuml;nebilir olması i&ccedil;in&nbsp;`content`&nbsp;&ouml;zelliğinin eklenmesi gerektiğidir.&nbsp; Pseudo-elementler&nbsp;i&ccedil;eriksiz&nbsp;bir halde oluşturuldukları i&ccedil;in onlara aşağıdaki şekilde boş bir&nbsp;`content`&nbsp;&ouml;zelliği ekleyerek sayfada g&ouml;r&uuml;nmelerini sağlayabiliriz:

    .pebble::before {
      content: ""
      ... more styling goes here...
    }

Bu kod elementin sayfada g&ouml;r&uuml;nmesini sağlayacaktır.

## &Ouml;rnek: G&ouml;z kamaştırıcı buton

Bu &ouml;rnekte bir pseudo-element kullanarak mouse butonun &uuml;zerinde olduğunda (burdan b&ouml;yle kısaca &rsquo;hover&rsquo; diyeceğiz) tetiklenen g&ouml;z kamaştırıcı bir efekt yaratacağız. Ornegin sonunda boyle bir goruntu elde edecegiz (animasyonu gormek icin butona hover yapabilirsiniz)

<section class="shiny demo-container tap-to-activate"><button>G&Ouml;Z KAMAŞTIRAN EFEKT</button></section>

Biraz HTML ile başlayalım:

    <button>Oooh SHINY</button>

Pseudo-elementler kullandıgımız i&ccedil;in daha fazla HTML'e ihtiyacımız olmayacak.&nbsp; Eğer bir sayfada birden fazla butona stil verecekseniz class kullanmak isteyebilirsiniz ama şimdilik basitlik adına genel bir element kullanacağız.

### Parıltıyı (sheen) ekleme

G&ouml;z kamaştıran parıltı efektimiz butonumuzun bir ucundan diğer ucuna giden bir linear gradient. Bunu oluşturmak i&ccedil;in&nbsp;`after`&nbsp;pseudo-elementini kullanacağız ve bunu butonun dışında bir başlama noktasına yerleştireceğiz.

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

Parıltı (sheen) efekti, butonun renginden beyaza ve tekrar butonun rengine d&ouml;nen bir gradient'ten meydana gelmekte.&nbsp; Bu aşamada gradient butonun dışında duruyor.

Parıltı (sheen) efekti olan katmanı sadece hover'da iken g&ouml;r&uuml;necek şekilde saklamamız gerekecek.&nbsp; Bunu yapmak i&ccedil;in &ouml;ncelikle butonun `overflow` &ouml;zelliğini `hidden` olarak belirleyeceğiz. Pseudo-elementimiz butonun i&ccedil;inde olduğundan butonun dışında kalan b&ouml;l&uuml;m&uuml; g&ouml;r&uuml;n&uuml;r olmayacaktır.

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

Butona kendine has bir g&ouml;r&uuml;nt&uuml; vermek i&ccedil;in başka stiller de verdim.&nbsp; Dikkatinizi &ccedil;ekmek istediğim bir nokta&nbsp;`position: relative`'in kullanımı. Bu &ouml;zelliği butona eklememin sebebi&nbsp;position: absolute&nbsp;ile sabitlenmiş olan pseudo-element'in butonun i&ccedil;inde yer almasını istemem. Pozisyonu belirtilmediği s&uuml;rece position: absolute&nbsp;kullanılan element, bir katman &uuml;st&uuml;nde yer alan (parent) elementin i&ccedil;inde yer alacaktır.

## Animasyonu ekleme

Bu &ouml;rnekte animasyon kullanacağımız i&ccedil;in &ouml;n&uuml;m&uuml;zde iki adet aşama var. Birincisi tarayıcıya buton hover'da iken animasyon kullanmasını s&ouml;ylemek. Daha sonra ise `keyframes`&nbsp;kullanarak bu animasyonun tam olarak ne olduğunu belirteceğiz.

Butonun hover halini&nbsp;`hover`&nbsp;pseudo-class'ına&nbsp;`after`&nbsp;pseudo-class'ını şu şekilde ekleyerek oluşturabiliriz:

    button:hover::after, button:focus::after {
      animation: sheen 1s forwards;
    }

Burada tarayıcıya butonumuz hover'da olduğunda&nbsp;`after`&nbsp;pseudo-elementinin bir `animation` degeri almasi gerektiğini s&ouml;yl&uuml;yoruz. Sheen (parıltı) olarak adlandırdığımız animasyonumuz 1 saniye s&uuml;r&uuml;yor ve bunun sonunda tekrar etmeden sonlanıyor.

Burada pseudo-class'ları kullanma sırası &ouml;nemlidir.&nbsp; Pseudo-class'ları&nbsp;`::after:hover` şeklinde kullanmak işe yaramayacaktır &ccedil;&uuml;nk&uuml; bu kullanım tarayıcıya&nbsp;butonun hover haline&nbsp;tepki vermesi yerine&nbsp;::after&nbsp;pseudo-elementinin hover haline&nbsp;tepki vermesini s&ouml;yleyecektir.

Butona aynı zamanda bir focus hali ekledim. Bunun sayesinde sayfayı tab tuşu ile dolaşan kullanıcılar da butona hover etmelerine gerek kalmaksızın parıltı efektini g&ouml;rebilecekler. ([&Scaron;ime Vidas](https://twitter.com/simevidas)'a tavsiye i&ccedil;in teşekk&uuml;rler.)

Şimdi animasyonumuzun&nbsp;`keyframes`&nbsp;ozelliklerini belirtelim:

    @keyframes sheen {
      100% {
        transform: rotateZ(60deg) translate(1em, -9em);
      }
    }

Bu animasyonda tek bir keyframe'e ihtiyacımız var. Başlama noktası (0%) halihazırda pseudo-elementimizin başlama noktasında belirtildiği i&ccedil;in sadece bitiş noktasını belirtmemiz gerekiyor. Bu durumda bitiş noktası butonun (başlama noktasına g&ouml;re) diğer ucunun sağ &uuml;st&uuml;. Bunu tanımladıktan sonra tarayıcı parıltı efektinin animasyonunu butonun bir ucundan diğer ucana uygulayacak.

<section class="shiny demo-container tap-to-activate"><button>G&Ouml;Z KAMAŞTIRAN EFEKT</button></section>

## Tarayıcı değerlendirmeleri

[Animasyon &ouml;zelliği](http://caniuse.com/#feat=css-animation) de,&nbsp;[pseudo-elementler](http://caniuse.com/#feat=css-gencontent) de&nbsp;tarayıcılar tarafından iyi bir şekilde desteklenmektedir. İşi garantiye almak i&ccedil;in&nbsp;`keyframes` ve diğer t&uuml;m&nbsp;transform&nbsp;&ouml;zellikleri i&ccedil;in&nbsp;`-webkit`&nbsp;ve `-moz`&nbsp;&ouml;n eklerini eklemek her zaman iyi bir fikirdir.
