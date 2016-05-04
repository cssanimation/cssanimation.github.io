---
layout: post
title: Transition mu, Animation mu?
description: Web animasyonlarında kullanılan &quot;transition&quot; ve &quot;animation&quot; &ouml;zelliklerinin farklılıkları.
categories: [animation, tips, animations, transitions]
customCSS: animations_transitions.css
extraJS: [vendor/moment.min.js,vendor/moment-timezone.min.js, vendor/moment-timezone-with-data-2010-2020.min.js, custom/list_items.js, custom/clocks.js]
imageURL: /assets/images/posts/transitions-animations/transitions-animations.gif
home_image: /assets/images/posts/transitions-animations/transitions-animations.png
tweet_text: Ne zaman &quot;transition&quot;, ne zaman &quot;animation&quot; &ouml;zelliğini kullanmalıyız?
custom_header: posts/transitions-animations.html
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-03-04-transition-vs-animation.md
translator: Burak Erman
translator_link: https://twitter.com/mburakerman
---

Web'de animasyon yaparken bu iki &ouml;zelliklerden birini kullanıyor musunuz? Bazen biri yerine diğerini se&ccedil;memiz gereken zamanlar vardır. Haydi farklılıkları tartışalım.

## &quot;Transition&quot; nedir?

&quot;Transition&quot;, bir elementin bir durumdan diğer bir duruma ge&ccedil;işi sırasında gercekleşir ve web tarayıcısı bu iki durum arasındaki ge&ccedil;iş durumlarını kendisi yaratır, bir nevi resmeder. O bir başlangı&ccedil; ve son durumlarına sahiptir.

Transition'ları &ccedil;oğunlukla hover durumlarında ya da sayfaya bir bilgi girilince ya da sayfadan bir bilgi kaldırılınca kullanırız.&nbsp; &Ouml;rneğin; hover halinde minik bir font rengi değişikligi veya sayfadaki bir bilginin yavas&ccedil;a belirmesi (&quot;fade in&quot;) animasyonu.

Transition &ouml;zelliği bu iki durumla sınırlı olduğundan &nbsp;onlar animasyonlardaki ayrıntılardan eksik olabilirler ancak aynı zamanda kullanımları daha kolaydır.

### Peki ne zaman transition'ları kullanmalıyız?

Eğer bir elementi bir durumdan başka bir duruma p&uuml;r&uuml;zs&uuml;z bir şekilde değiştirmek istiyorsak , &quot;transition&quot; &ouml;zelliği iyi bir se&ccedil;imdir. Basit değişiklikler &quot;transition&quot; &ouml;zelliği ile halledilebilir ve zamanlama fonksiyonları değişimin oluşumunu kişiselleştirmede kullanılabilir.

Transition, birisi bir butona hover yaptığında ya da tıkladığında &ccedil;alışacaktır.

<section class="shiny demo-container tap-to-activate"><button>Parlama Efekti</button></section>

Ya da bir sayfaya bir item eklendiğinde:

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Bir liste itemi</li><li class="show" style="background-color: #3cd19e;">Bir liste itemi</li>
</ul>
<button>Bir liste itemi ekle</button></section>

## &quot;Animation&quot; nedir?

&quot;Animation&quot; &nbsp;&ouml;zelliği transition'ların g&uuml;&ccedil;l&uuml; bir alternatifidir. Bir başlangı&ccedil; durumundan bir son duruma olan değişime g&uuml;venmektense , &quot;animation&quot; istediğin kadar aracı durumlarla yapılabilir, ve bize durumların nasıl animasyon yapılacağı konusunda daha fazla kontrol sağlar.

Bir &quot;transition&quot; sadece A'dan B'ye giderken , bir &quot;animation&quot; A, B, C'den D'ye gidebilir. Ya da ne kadar duruma ihtiya&ccedil; varsa o kadar olabilir.

Animation &ouml;zelliği bunu bir takım&nbsp;`keyframe`'leri kullanarak yapar. Transition kullanımı i&ccedil;in CSS class'ımızda tek bir satır belirtmemiz yeterli olur iken, animation i&ccedil;in CSS'te ayrı olarak farklı keyframe'ler belirtmek gerekir.

### Peki animation'ları ne zaman kullanmalıyız?

Eğer bir animasyon sayfa tam olarak y&uuml;klendikten sonra &ccedil;alışacaksa , ya da A durumundan B durumuna ge&ccedil;mekten&nbsp;daha karışıksa , bir &quot;animation&quot; &ouml;zelliğini kullanmak daha uygun olur.

Buna &ouml;rnek ; eğer siz sayfanızda belirli bir zamandan sonra &ccedil;alışacak bir animasyon olacaksa animation &ouml;zelliği kullanılabilir. Mesela Baymax karakterindeki g&ouml;z kırpma efekti gibi:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

Ayrıca&nbsp;eğer bir item sayfada birka&ccedil; yer boyunca hareket edecekce &nbsp;animation &ouml;zelliğini kullanmak &nbsp;daha iyi bir se&ccedil;im olur.Mesela sitemize yeni &uuml;ye olan kişiye site fonksiyonlarını tanıtan bir animasyonda mouse imleci g&ouml;rselini sayfanın farklı yerlerine hareket ettirebiliriz.

## Bazen bu durum &ccedil;ok a&ccedil;ık değildir.

Ge&ccedil;enlerde hazırladığım bir &nbsp;&ouml;rneğe &quot;animation&quot; &ouml;zelliği ile başladım ama &nbsp;sonra &quot;transition&quot; &ouml;zelliği daha uygun olmaya başladı.

<div class="demo-container clocks single local bounce"> <article class="clock station"><div class="hours-container"> <div class="hours angled"></div> </div> <div class="minutes-container"> <div class="minutes angled"></div> </div> <div class="seconds-container"> <div class="seconds"></div> </div> </article></div>

Ben bu saati tasarlamaya &nbsp;başladığımda , akrep ve yelkovanı sayfa y&uuml;klendiğinde s&uuml;rekli olarak hareket ettirdim. Bu &quot;animation&quot; &ouml;zelliğini kullanmak i&ccedil;in iyi bir durumdu. Sayfa y&uuml;klendiğinde animasyon başyacaktı ve s&uuml;rekli devam edecekti. Saat daha karmaşık hale geldik&ccedil;e ,&nbsp;Javascirpt kullanarak&nbsp;akrep ve yelkovanın a&ccedil;ılarını &nbsp;değiştirmeyi daha akıllıca buldum.&nbsp;

Akrep ve yelkovan JavaScript ile hareket edildiğinden , `transition`'lar&nbsp;daha iyi bir se&ccedil;enek olmaya başladı. JavaScript &nbsp;akrep ve yelkovanın a&ccedil;ısını değiştirdiğinde transition &ouml;zelliği &quot;animation&quot; &ouml;zelliğinin yapacağından&nbsp;daha g&uuml;zel bir şekilde değişimi&nbsp;(A durumundan B durumuna) işlemektedir .&nbsp;

Daha fazla ayrıntı i&ccedil;in &nbsp;şu [CSS saat &ouml;rneği'](/clocks/)ne g&ouml;z atabilirsiniz.

## Kısaca

&quot;Transition&quot; &ouml;zelliği &nbsp;bir durumdan diğerine p&uuml;r&uuml;zs&uuml;z değişim yaratmak i&ccedil;in , ve &quot;animation&quot; &ouml;zelliği de daha karışık hareket serileri yaratmak i&ccedil;in kullanılır.

Transition'u yaratmak ve y&ouml;netmek &nbsp;genel olarak daha kolaydır &nbsp;ve &nbsp;bir&ccedil;ok durumlarda&nbsp;uygulanır. Eğer animasyonunuz &uuml;zerinde daha fazla kontrolunuz olması gerekiyorsa, animasyonunuz bir&ccedil;ok aşamadan oluşuyorsa veya animasyonunuzun sayfa y&uuml;klendiğinde başlaması gerekiyorsa &quot;animation&quot; &ouml;zelliği daha uygun olacaktır.
