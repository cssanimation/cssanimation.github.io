---
layout: post.njk
type: tutorial
title: Mac ditambah CSS
description: Membuat model 3D dari klasik Mac ditambah dengan CSS
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: Menciptakan Apple klasik Mac Plus
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Muhammad Azzam
---

Aku akan selalu ingat saat aku harus menggunakan Apple Mac Plus. Aku akan selalu ingat saat aku harus menggunakan Apple Mac Plus.

## Gaya retro

Mari kita membangun (hampir) komputer. Mari kita membangun (hampir) komputer. Macintosh Plus, codename Tn. T, pertama kali diperkenalkan di 1986 dan makan kekalahan 1MB RAM dan sebuah 8 MHz prosesor. Selain dari kekuatan yang mentah, itu desain yang serius lucu, yang membuat komputer lebih menyenangkan untuk digunakan.

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

In this project I will build a 3D model of the Macintosh Plus and display it in a three dimensional setting. Menggunakan CSS Keyframe animasi kami akan membuatnya bergerak pada layar untuk menunjukkan efek 3D yang lebih baik.

## Mengapa menggunakan CSS?

Mengapa menggunakan CSS? Segala sesuatu dari font, warna, posisi dan latar belakang gambar ditangani oleh CSS, dan itu adalah alat penting untuk membuat halaman web modern. Hal ini tidak hanya untuk konten dua dimensi. Hal ini tidak hanya untuk konten dua dimensi.

Membuat adegan di CSS hasil dalam ukuran file yang lebih kecil daripada gambar. Dalam contoh ini, CSS kompres ke hanya 4 KB dan HTML kurang dari 1KB. Dalam contoh ini, CSS kompres ke hanya 4 KB dan HTML kurang dari 1KB.

## Live demo dan kode sumber

See the [CSS Mac Plus online](https://cssanimation.rocks/mac/).

Kode sumber lengkap dapat didownload di sini, dan Anda dapat melihat file CSS penuh pada Github.

Anda juga dapat mengikuti bersama berbagai tahap dengan mencari folder contoh dalam file proyek.

## Pada awalan

Saya telah menghilangkan awalan CSS apapun dari contoh kode untuk membuat kode lebih mudah dibaca. Ketika bekerja pada ini sendiri pastikan untuk memasukkan awalan untuk browser lainnya, seperti webkit, moz, ms, dan o.

## Mengatur panggung

Ketika membuat 3D menggunakan HTML kita membutuhkan sebuah adegan di mana untuk membangun. Mulailah dengan sebuah wadah elemen HTML:

```html
<div class="stage"></div>
```

Ini adalah sederhana div dengan kelas panggung, dan bertindak sebagai wadah untuk objek 3D.

Untuk membuat ini sebagai wadah 3D, kami menetapkan beberapa properti CSS, perspektif, dan perspektif-asal. Properti perspektif ini mirip dengan sebuah adegan vanishing point. Semakin kecil nilai, semakin pendek titik lenyap dan lebih ekstrim efek. Gambar ini menunjukkan bagaimana mengubah nilai perubahan bentuk pada adegan:

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### Mencobanya sendiri

Jika Anda ingin memiliki pergi, mencari file screen.css dalam folder file-file proyek contoh/01-perspektif. Anda akan dapat untuk memperbarui nilai perspektif dan melihat efek dengan membuka index.html file dari folder yang sama di peramban.

Properti perspektif-asal menetapkan posisi tampilan. Perubahan itu memungkinkan Anda untuk melihat ke bawah ke adegan dari atas, naik dari bawah atau di dari sisi.

Perubahan itu memungkinkan Anda untuk melihat ke bawah ke adegan dari atas, naik dari bawah atau di dari sisi. CSS seperti ini:

```css
.stage {
  perspective: 1600px;
  perspective-origin: 50% 100px;
}
```

Folder stylesheet dalam file ZIP proyek berisi aturan-aturan CSS yang penuh untuk menetapkan berbagai properti lainnya di panggung, termasuk latar belakang, lebar dan tinggi.

## Perencanaan struktur

Panggung di tempat kita akan menggunakan beberapa elemen HTML untuk membuat komputer. Rather than try to include every last detail, we'll focus on the front detailing for the most part.

Bagian utama dari Mac adalah sebuah kotak, miring sedikit kembali pada sudut dan duduk di dasar yang datar.

Ini akan berarti membuat dua kotak, satu miring kembali sedikit dan duduk di sebuah kotak yang menyanjung. Untuk membuat efek ini, kami akan membuat menggunakan CSS transform properti.

Jika Anda ingin melihat HTML lengkap, dapat ditemukan dalam file proyek dalam index.html file.

## Transformasi

The CSS `transform` property allows us to rotate, skew, position and even scale elements on the page. Kita dapat membuat penggunaan posisi dan rotasi untuk membuat kami adegan.

Transform-properti mungkin terlihat seperti ini:

```css
.example {
  transform: rotateY(45deg) translateZ(-100px);
}
```

Anda membangun mengubah oleh chaining serangkaian pernyataan. Dalam contoh ini, contoh elemen berputar 45 derajat di sekitar sumbu y, dan kemudian mendorong kembali 100px sepanjang z-sumbu.

Seharusnya terlihat seperti ini:

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

Contoh mengubah CSS dapat ditemukan dalam folder contoh/02-transformasi dalam file-file proyek. Dua elemen diposisikan dalam contoh, dan posisi mereka dapat berubah dengan mengedit termasuk 02-Transforms/css/screen.css file.

### Asal mengubah

Ketika berputar elemen di sekitar tempat itu, adalah senilai mengingat bahwa transformasi mempunyai asal yang dapat diatur. Asal mengubah adalah titik yang dirujuk oleh menentukan nilai X, Y dan Z. Ini adalah default:

```css
.default-origin {
  transform-origin: 50% 50% 0;
}
```

Ketika membangun contoh ini aku tetap default tapi it's worth mengetahui bahwa itu ada.

## Membuat kotak

Kita dapat menggunakan beberapa transformasi untuk mengatur tubuh utama komputer. HTML terlihat seperti ini:

```html
<div class="stage">
  <div class="positioning animated">
    <div class="mac">
      <figure class="back"></figure>
      <figure class="left"></figure>
      <figure class="right"></figure>
      <figure class="top"></figure>
      <figure class="base-front"></figure>
      <figure class="base-left"></figure>
      <figure class="base-right"></figure>
      <figure class="base-back"></figure>
      <figure class="front"></figure>
      <figure class="shadow"></figure>
    </div>
  </div>
</div>
```

Dalam tahap, ada div saya akan menggunakan posisi komputer pada halaman. Dalam itu adalah Mac itu sendiri. Dua kotak yang sendiri terdiri dari unsur-unsur gambar. Elemen-elemen ini mewakili sisi, atas, depan dan belakang dua kotak.

Ada juga seorang tokoh untuk mewakili bayangan.

Contoh ini dapat ditemukan dalam folder contoh/03-kotak.

Hasil kami akan pergi untuk terlihat seperti ini:

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

Each of the boxes are transformed into place using the CSS `transform` property, and CSS `gradients` are used to add depth to the scene.

The CSS looks like this:

```css
.front {
  height: 11.5em;
  width: 9.6em;
  background: #e0e0e0;
  transform: rotateX(5deg) translateZ(5.43em);
}
.back {
  height: 11.5em;
  width: 9.6em;
  background: linear-gradient(top, #f2f2f2, #e6e6e6 0.25em, #c2c2c2);
  transform: rotateX(5deg) translateZ(-5.45em) rotateY(180deg);
}
.top {
  height: 10.95em;
  width: 9.6em;
  background-color: #ebf0dc;
  background: linear-gradient(left, #fafafa, #d9d9d9 0.25em, #d9d9d9 9.35em, #fafafa);
  transform: rotateX(5deg) rotateX(90deg) translateZ(5.45em);
}
.left {
  height: 11.5em;
  width: 10.9em;
  background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
  transform: rotateX(5deg) rotateY(-90deg) translateZ(5.45em);
}
.right {
  height: 11.5em;
  width: 10.9em;
  background: linear-gradient(top, #ffffff, #e0e0e0 0.25em, #b3b3b3);
  transform: rotateX(5deg) rotateY(90deg) translateZ(4.14em);
}
.base-front {
  height: 2.1em;
  width: 9.6em;
  background: #c2c2c2;
  transform: translateY(10.7em) translateZ(5em);
}
.base-back {
  height: 2.1em;
  width: 9.6em;
  background: #b3b3b3;
  transform: translateY(10.7em) translateZ(-5em) rotateY(180deg);
}
.base-left {
  height: 2.1em;
  width: 10em;
  background: #b3b3b3;
  transform: translateY(10.7em) rotateY(-90deg) translateZ(4.99em);
}
.base-right {
  height: 2.1em;
  width: 10em;
  background: #b3b3b3;
  transform: translateY(10.7em) rotateY(90deg) translateZ(4.58em);
}
.shadow {
  width: 10em;
  height: 11em;
  background: transparent;
  transform: rotateX(90deg) translateZ(-7.4em) translateX(20em);
  box-shadow: -20.2em 0 1.8em rgba(100, 90, 100, 0.4);
}
```

Masing-masing angka-angka telah diberikan lebar dan tinggi, dan CSS latar belakang gradien atau warna. Angka-angka yang kemudian masing-masing diposisikan menggunakan transform-properti. Sebagai contoh, sisi kiri adalah diputar 90 derajat sebelum diterjemahkan (pindah) kembali setengah lebar komputer.

Gambar depan diterjemahkan ke depan, sepanjang sumbu z, setengah panjang komputer dan belakang diputar 180 derajat sebelum diterjemahkan kembali.

Untuk potongan-potongan kotak, masing-masing angka-angka yang diputar 5 derajat kembali di sekitar sumbu-x. Ini berarti bahwa tubuh utama Macintosh Plus dimiringkan kembali.

Akhirnya angka bayangan membuat penggunaan CSS properti kotak-bayangan untuk menciptakan bayangan yang membuatnya terlihat seperti kotak duduk di permukaan datar.

## Bezels

Sebuah fitur dari komputer ini adalah mempunyai kemiringan tepi di sekitar depan. These edges, which I'll refer to as bezels, help soften the hard corners of the box and make it look less boxy.

Untuk mencapai hal ini saya menambahkan beberapa unsur-unsur tambahan ke angka tamu, seperti:

```html
<figure class="front">
  <span class="bezel-top"></span>
  <span class="bezel-left"></span>
  <span class="bezel-right"></span>
  <span class="bezel-bottom"></span>
</figure>
```

The `span` elements within the front figure each represent one of these bezels. Dengan beberapa gaya yang ditambahkan, mereka akan terlihat seperti ini:

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

Contoh ini dapat ditemukan dalam folder contoh/04-Bezels.

CSS berikut posisi masing-masing, dan membuat penggunaan perbatasan-lebar trik untuk membuat mempunyai kemiringan tepi.

```css
.front .bezel-top {
  border-top: 0.75em solid #f2f2f2;
  border-right: 0.5em solid transparent;
  border-left: 0.5em solid transparent;
  width: 8.6em;
}
.front .bezel-left {
  border-top: 0.5em solid #d9d9d9;
  border-right: 0.75em solid transparent;
  border-left: 0.75em solid transparent;
  width: 10em;
  transform: rotateZ(-90deg) translateX(-5.5em) translateY(-5.5em);
}
.front .bezel-right {
  border-top: 0.5em solid #d4d4d4;
  border-right: 0.75em solid transparent;
  border-left: 0.75em solid transparent;
  width: 10em;
  transform: rotateZ(90deg) translateX(5.5em) translateY(-3.62em);
}
.front .bezel-bottom {
  border-top: 0.75em solid #cccccc;
  border-right: 0.5em solid transparent;
  border-left: 0.5em solid transparent;
  width: 8.65em;
  transform: rotateZ(180deg) translateY(-10.76em);
}
```

Masing-masing panel mempunyai batas-batas 3. Untuk panel atas, kami menetapkan batas berwarna di atas. Kami kemudian menetapkan dua perbatasan transparan pada sisi kiri dan kanan. Dalam CSS, ketika perbatasan bertemu perbatasan warna lain, baris mana mereka bertemu diagonal. Ini berarti bahwa perbatasan transparan mengakibatkan diagonal tepi perbatasan berwarna.

Teknik ini diterapkan untuk masing-masing bezels, menciptakan penampilan mempunyai kemiringan tepi pada masing-masing.

Bezels juga memiliki mengubah diterapkan untuk memutar dan posisi mereka di sisi depan gambar.

## Rincian lebih lanjut

Dengan kotak utama komputer di tempat kita dapat menambahkan berbagai rincian yang membuatnya terlihat seperti Macintosh Plus, seperti layar, ikon, dan disk drive.

Gambar depan berisi HTML berikut:

```html
<figure class="front">
  <span class="bezel-top"></span>
  <span class="bezel-left"></span>
  <span class="bezel-right"></span>
  <span class="bezel-bottom"></span>
  <figure class="screen-container">
    <span class="screen">
      <p>hello, Dave</p>
      <span class="sheen"></span>
    </span>
  </figure>
  <figure class="logo">
    <span class="image"></span>
    <span class="text">Macintosh Plus</span>
  </figure>
  <figure class="floppy"></figure>
</figure>
```

Contoh kerja dapat ditemukan di folder contoh/05-selesai.

### Layar

Layar terdiri dari beberapa elemen, termasuk sebuah wadah, layar itu sendiri, dan lapisan &quot;kemilau&quot; di atas.

CSS untuk ini membuat penggunaan gradien CSS untuk membuatnya tampak inset ke depan komputer dan menggunakan span kemilau gradien hampir transparan untuk memberikan layar tampilan beberapa shininess.

### Logo

Logo terdiri dari dua bagian, gambar dan beberapa teks. Rentang gambar berisi gambar latar belakang berwarna-warni tua logo Apple, dan teks diposisikan di sebelah. CSS ini dapat ditemukan dalam file source.

Untuk membuat tampilan yang tepat, tertanam font ditambahkan. This uses the CSS `font-face` property. Ada banyak cara untuk melakukan ini, tapi mungkin yang termudah adalah menggunakan layanan seperti Font tupai @font-face generator untuk membuat CSS berikut:

```
@font-face {
  font-family: "apple_garamondregular";
  src: url("../fonts/apple_garamond-webfont.eot");
  src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
```

Font tupai membantu dengan menghasilkan file berbagai (eot, woff, dll) yang kemudian dapat ditempatkan dalam proyek dan disebut dalam CSS seperti yang ditunjukkan.

Hasilnya adalah font yang cocok yang asli.

### Drive disket

Drive disket adalah satu elemen, dan menggunakan CSS perbatasan untuk membuatnya terlihat seperti diatur ke depan. CSS yang menciptakan efek terlihat seperti ini:

```css
.floppy {
  height: 0.2em;
  width: 2.8em;
  transform: translate3d(4.8em, 8.9em, 0);
  background: #555555;
  border-top: 0.1em solid #cccccc;
  border-right: 0.3em solid #e6e6e6;
  border-bottom: 0.1em solid #f2f2f2;
  border-left: 0.3em solid #e6e6e6;
  border-radius: 0.25em;
}
```

Drive disket memiliki warna latar belakang abu-abu yang solid, dan empat perbatasan. Perbatasan atas adalah yang paling gelap, dengan perbatasan bawah yang menjadi terang untuk membuatnya tampak terang dari atas. Akhirnya, border-radius putaran sudut-sudut.

## Menempatkan potongan

Each of the pieces, when put together, look like this:

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## Menambahkan animasi

Sementara apa yang kita miliki terlihat cukup bagus, kita dapat benar pamer fakta bahwa itu adalah sebuah objek 3D dengan membuatnya bergerak. Untuk melakukan ini kita akan memanfaatkan CSS keyframe animasi.

Dalam CSS, ada dua jenis animasi. Transisi, di mana elemen pada halaman bernyawa dari satu gaya atau posisi yang lain, dan keyframes, yang mewakili serangkaian langkah animasi yang lebih kompleks.

Serangkaian keyframes dapat digambarkan sebagai serangkaian persentase, dengan CSS yang menjelaskan setiap langkah. Itu bisa terlihat seperti ini:

```css
@keyframes back-and-forth {
  0% {
    transform: rotateY(40deg);
  }
  40%, 50% {
    transform: rotateY(-40deg);
  }
  90%, 100% {
    transform: rotateY(40deg);
  }
}
```

Dalam contoh ini animasi disebut kembali-dan-sebagainya, dan terdiri dari 3 langkah. It begins rotated to an angle of 40 degrees. Kemudian oleh mark 40%, diputar ke minus 40 derajat. Tetap ini rotasi sampai 50%, maka pada 90% telah kembali ke posisi semula.

Browser secara otomatis mengisi kekosongan dengan cara menghidupkan properti. Dalam hal ini ia akan menghidupkan sudut rotasi.

### Menerapkan animasi

Untuk menerapkan animasi ini kita dapat menggunakan CSS animasi tag.

Tag animasi terlihat seperti ini:

```
animation: back-and-forth 14s ease-in-out infinite;
```

Beberapa hal yang digabungkan menjadi satu baris di sini. Referensi animasi dengan nama (&quot;kembali-dan-sebagainya&quot;), set durasi 14 detik, dan memberitahu animasi untuk mengulangi tanpa batas. Nilai kemudahan-in-out mengacu mengurangi, yang akan memberitahukan browser untuk memiliki animasi memulai dan mengakhiri secara bertahap.

Menerapkan animasi ini &quot;posisi&quot; div hasil dalam sesuatu seperti ini:

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## Apa yang kita pelajari

Dalam menciptakan dan menghidupkan objek 3D dalam CSS, kita membahas beberapa teknik. Kami mengatur sudut pandang dan perspektif-asal. Kami kemudian membuat penggunaan transformasi untuk memutar, bergerak dan posisi elemen, ditambahkan gradien untuk memberikan efek 3D yang lebih realistis, dan menggunakan beberapa CSS perbatasan trik untuk membuat bevels dan kedalaman. Akhirnya kita membuat penggunaan keyframes dan animasi CSS untuk memberikan hidup adegan.

### Kompatibilitas browser

Tidak semua browser belum dapat menangani mengubah CSS. Internet Explorer akan berjuang, tapi ada harapan bahwa dukungan akan tiba di IE 11. Semua versi terbaru Chrome, Safari dan Firefox akan lakukan ok.

Modernizr menyediakan seperangkat alat JavaScript untuk mendeteksi kemampuan browser dan dapat digunakan untuk menampilkan konten alternatif dalam kasus-kasus yang mana browser tidak mendukung CSS properti tertentu. Dalam kode contoh, Anda akan menemukan saya telah membuat penggunaan Modernizr untuk mendeteksi keberadaan 3D transformasi. Dalam kasus-kasus di mana mereka tidak ada, gambar ditampilkan sebagai gantinya.

## Maju

Sementara contoh mungkin tidak tampak seperti sesuatu yang akan Anda gunakan di situs web rata-rata, teknik dapat berlaku untuk segala macam skenario.

Misalnya, mengubah CSS dapat digunakan untuk menambahkan kedalaman transisi halaman, gambar komidi putar, logo dan tombol, untuk beberapa nama. Animasi CSS dapat digunakan untuk menambahkan lebih menarik gerakan dan kemahiran untuk transisi Anda, dan CSS gradien dapat menambahkan kedalaman ke halaman tanpa harus menggunakan gambar.

<script src="//codepen.io/assets/embed/ei.js"></script>
