---
layout: post
bodyClass: shorter
title: Hareketli Liste Elemanlari
description: Liste elemanlarinizi animasyon yoluyla on plana cikarmak icin birkac yontem.Hareketli Liste Elemanlari
categories: [animation, tips, animations, transitions]
customCSS: list_items.css
customJS: list_items.js
imageURL: /images/posts/list_items/list_items.png
home_image: /images/posts/list_items/home.png
tweet_text: Hareketli Liste Elemanlari
translator: Can Göktaş
---

Web sayfanizin bir bolumu degisecegi zaman, bu degisimi bir animasyon ile yapmak ziyaretcilerinizin sitede neler olup bittigini anlamasini saglamak icin guzel bir yoldur. Animasyonlar yeni gelen i&ccedil;eriği bildirebilir ya da kaldırılmakta olan i&ccedil;eriğe dikkat &ccedil;ekebilir. Bu yazıda, bir liste i&ccedil;indeki &ouml;geleri g&ouml;stererek ve gizleyerek bunun i&ccedil;eriğin tanıtılmasında nasıl kullanilabileceğine bakacağız.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

## İ&ccedil;eriği tanıtmak

Animasyonlar, ziyaret&ccedil;ilerin sitenizdeki şeylerin ne zaman değiştiğini anlamasına yardımcı olabilir. İ&ccedil;erikler animasyon kullanılmadan eklendiğinde ya da kaldırıldığında, ziyaret&ccedil;iler bu ani değişiklikleri g&ouml;zden ka&ccedil;ırabilir ve akılları karışabilir. Hafif animasyonlar eklemek bu sorunun &uuml;stesinden gelebilir ve sayfadan bir şeyin kaldırılacağını ya da ekleneceğini &ldquo;haber vererek&rdquo; yardımcı olabilir.

Icerik ekleme veya cikarmayi bir liste ornegi uzerinde gosterebiliriz. Bu animasyonların &ccedil;oğu başka t&uuml;rl&uuml; i&ccedil;erikler i&ccedil;in de kullanılabilir. Eğer bu animasyonları yararlı bulduysanız ya da ekleyecek başka fikirleriniz varsa l&uuml;tfen [bizimle&nbsp;iletişime ge&ccedil;in](mailto:hello@cssanimation.rocks), fikirlerinizi duymaktan mutluluk duyarız.

## HTML

Başlarken &ouml;nceden doldurulmuş olan bir liste, ve listeye yeni &ouml;geler eklemek i&ccedil;in de bir buton olusturacagiz.

    <ul id="list">
      <li class="show">List item</li>
      <li class="show">List item</li>
    </ul>
    <button id="add-to-list">Add a list item</button>

Dikkatinizi &ccedil;ekmek istediğim birka&ccedil; şey var. İlki, HTML'de iki adet ID kullandık.&nbsp; Normalde stil işlemlerinde &ldquo;fazla spesifik&rdquo; oldukları ve problem &ccedil;ıkardıkları i&ccedil;in ID kullanmayız.&nbsp; Fakat JavaScript kullanırken işimize yarayacaklar.

İkincisi ise kullandığımız &ldquo;show&rdquo; class'ı. Bu class'ı daha sonra animasyon eklerken kullanacağız.

## Biraz JavaScript

Bu demo'da listeye yeni &ouml;geler eklemek ve daha sonra animasyonun ger&ccedil;ekleşebilmesi amacıyla &ldquo;show&rdquo; class'ını eklemek i&ccedil;in biraz JavaScript kullanacağız.&nbsp; Bunun iki aşamalı olmasının bir sebebi var.&nbsp; Eğer liste &ouml;geleri g&ouml;r&uuml;n&uuml;r halde eklenselerdi, animasyon ge&ccedil;işinin ger&ccedil;ekleşmesi i&ccedil;in yeterli zaman olmazdı.

Animasyonları&nbsp;`li`&nbsp;&ouml;geleri &uuml;zerinde ger&ccedil;ekleştirerek bunun &uuml;stesinden gelebilirdik fakat bu daha sonra elementleri başka bir animasyonla kaldırmak istediğimizde zorluk &ccedil;ıkarırdı.

    /*
     * Add items to a list - from cssanimation.rocks/list-items/
     */
    document.getElementById('add-to-list').onclick = function() {
      var list = document.getElementById('list');
      var newLI = document.createElement('li');
      newLI.innerHTML = 'A new item';
      list.appendChild(newLI);
      setTimeout(function() {
        newLI.className = newLI.className + " show";
      }, 10);
    }

## Animasyonsuz Hal

Biraz CSS yazarak liste &ouml;gelerini g&ouml;r&uuml;n&uuml;r hale getirebiliriz.&nbsp; `show`&nbsp;class'ını kullanarak liste &ouml;gelerini g&ouml;r&uuml;n&uuml;r yapıyoruz ve aynı mantıkla&nbsp;`show`&nbsp;class'ını silmemiz liste &ouml;gelerinin kaybolmasına neden oluyor.

    li {
      list-style: none;
      background: #d1703c;
      color: #fff;
      height: 0;
      line-height: 2em;
      margin: 0;
      padding: 0 0.5em;
      overflow: hidden;
      width: 10em;
    }

    li.show {
      height: 2em;
      margin: 2px 0;
    }

Verdiğimiz bu stiller ile&nbsp;`li`&nbsp;elementlerinin, &ouml;nlerinde madde işareti olmadan dikd&ouml;rtgen bir şekilde g&ouml;r&uuml;nmesini sağlıyoruz,&nbsp;`height`&nbsp;ve&nbsp;`margin`&nbsp;&ouml;zelliğine 0 veriyoruz ve&nbsp;`overflow`&nbsp;&ouml;zelliğini hidden'a ayarlıyoruz. &nbsp;Bu sayede&nbsp;`show` class'ı vermediğimiz s&uuml;rece gizli kalacaklar.

`show`&nbsp;class'ı elementlere height ve margin verecek. Hen&uuml;z animasyon kullanmadığımız i&ccedil;in &ouml;geler sayfada bir anda belirecekler. Liste &ouml;gelerine tıklayıp yokolmalarını izlemeyi de unutmayın.

<section class="add-to-list demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

### Fade (Soluklaşma)

Ekleyeceğimiz ilk animasyon basit bir &quot;fade&quot; efekti olacak. Liste &ouml;geleri eskisine g&ouml;re daha aşamalı olarak belirecekler. G&ouml;rsel olarak bu hala biraz kullanışsız ama artık kullanıcılar sayfada bir şey olduğunun farkına varmak i&ccedil;in daha fazla zamana sahip.

<section class="add-to-list fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

Efekti eklemek i&ccedil;in bir CSS par&ccedil;ası daha oluşturdum. Bunu listeye uygulamak i&ccedil;in, listeyi saran elemente&nbsp;`fade`&nbsp;class'ı verin.

    .fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
      height: 2em;
    }
    .fade li.show {
      opacity: 1;
    }

### Slide down (Aşağıya kayma) &amp; Fade

Her yeni &ouml;ge eklendiğinde oluşan ani zıplama biraz rahatsız edici. Şimdi akıcı bir kayma efekti oluşturmak i&ccedil;in height &ouml;zelliğini de ayarlayalım.

<section class="add-to-list slide-fade demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

`slide-fade`&nbsp;class'ı ile&nbsp;`fade`&nbsp;class'ı arasındaki tek fark&nbsp;height: 2em&nbsp;&ouml;zelliğinin kaldırılmış olması.&nbsp; `show`&nbsp;class'ı (ilk CSS par&ccedil;asından aldığı) belirlenmiş bir height &ouml;zelliğine sahip olduğu i&ccedil;in height'ı animasyon ge&ccedil;işinde otomatik olarak ayarlayacaktır.

    .slide-fade li {
      transition: all 0.4s ease-out;
      opacity: 0;
    }
    .slide-fade li.show {
      opacity: 1;
    }

### Swinging in (Sallanma)

Fade ve slide efektlerinin yanı sıra, 3 boyutlu bir efekt ekleyerek biraz daha ileriye gidebiliriz. Tarayıcıların elementleri değiştirmeleri sadece X ve Y y&ouml;nleriyle sınırlı değildir, ve boylece derinlik efekti verebiliriz.

<section class="add-to-list swing demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

Bunu ayarlamak i&ccedil;in ul elementini i&ccedil;ine alan&nbsp;`section`'ı 3 boyutlu değişimler i&ccedil;in bir sahne olarak belirlemeliyiz. Bunu, section'a bir&nbsp;`perspective`&nbsp;değeri vererek yapıyoruz.

Perspective CSS'te animasyon değişimlerinin ger&ccedil;ekleşeceği yerdeki derinliktir.&nbsp; D&uuml;ş&uuml;k bir değer, daha sığ bir derinlik ve daha keskin a&ccedil;ılar demektir. Bu değerlerle oynayıp sizin i&ccedil;in uygun olanını bulabilirsiniz.

    .swing {
      perspective: 100px;
    }

Bir sonraki aşama&nbsp;`li`&nbsp;elementlerinin yerlerine &quot;d&ouml;n&uuml;şerek&quot; gelmelerini ayarlamak.&nbsp; Daha &ouml;nceki gibi fade efekti vermek i&ccedil;in&nbsp;`opacity`&nbsp;&ouml;zelliğini kullanacağız fakat&nbsp;`li` elementlerinin yerlerine &quot;d&ouml;nerek&quot; gelmeleri i&ccedil;in&nbsp;`transform`&nbsp;&ouml;zelliği ekleyeceğiz.

    .swing li {
      opacity: 0;
      transform: rotateX(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

    .swing li.show {
      opacity: 1;
      transform: none;
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

Bu &ouml;rnekte&nbsp;`li`&nbsp;90 derece arkaya d&ouml;n&uuml;k halde başlıyoruz. `show`&nbsp;class'ı eklendiğinde `transform`&nbsp;&ouml;zelliği&nbsp;`none`'a ayarlanıyor ve bu da&nbsp;li&nbsp;elementinin bir ge&ccedil;işle yerine gelmesini sağlıyor. Sallanma efektini vermek i&ccedil;in&nbsp;`cubic-bezier`&nbsp;zamanlama fonksiyonunu kullandım.

### Swinging from side (Yandan sallanma)

Yarattigimiz efekti kolayca yeni şekiller elde etmek i&ccedil;in duzenleyebiliriz. Aşağıda &ouml;gelerin yanlardan sallanarak geldiği bir &ouml;rnek g&ouml;rebilirsiniz.

<section class="add-to-list swing-side demo-container">
<ul><li class="show" style="background-color: #d13c9e;">Liste ogesi</li><li class="show" style="background-color: #3cd19e;">Liste ogesi</li>
</ul>
<button>Yeni oge ekle</button></section>

Bu efekti sağlamak i&ccedil;in sadece d&ouml;n&uuml;ş&uuml;n eksenini değiştirmemiz gerekiyor.

    .swing li {
      opacity: 0;
      transform: rotateY(-90deg);
      transition: all 0.5s cubic-bezier(.36,-0.64,.34,1.76);
    }

Yaptığımız tek değişiklik&nbsp;`rotateX`&nbsp;yerine&nbsp;`rotateY`&nbsp;kullanmak oldu.

## &Ouml;n ekler ve tarayıcı testleri

Yukarıdaki kod anlaşılabilirlik ve okunabilirlik nedeniyle herhangi bir &ouml;n ek i&ccedil;ermiyor. `-webkit`&nbsp;&ouml;n eki ve başka &ouml;n eklere ihtiyacı olan tarayıcıları desteklemek i&ccedil;in bu &ouml;n ekleri eklemenizi kesinlikle tavsiye ederim. Ben bu gibi şeyler hakkında endişelenmemek i&ccedil;in&nbsp;[Autoprefixer](https://github.com/postcss/autoprefixer)&nbsp;kullanıyorum.

Bu animasyonlar g&ouml;ster/sakla gibi basit bir mekanizma kullandıkları i&ccedil;in animasyonları desteklemeyen tarayıcılarda bir sorun &ccedil;ıkarmayacaktır.&nbsp; Bir&ccedil;ok cihazda ve tarayıcıda bu animasyonların test edilmesi &ouml;nemli fakat modern tarayıcıların &ccedil;oğu bu animasyonları destekleyecektir.
