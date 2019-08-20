---
layout: post
title: Star Wars
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Judul Star Wars dari animasi 'The Force Awakens' dengan CSS
categories: [3d, css]
imageURL: /images/posts/starwars/home.jpg
home_image: /images/posts/starwars/home.jpg
tweet_text: Judul-judul Star Wars dianimasikan dengan CSS
translator: PanduAri
---

Keluarkan popcorn! Hari ini kami sedang membangun judul film Star Wars dari &quot;The Force Awakens&quot; trailer.

<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen"></p>

Contoh ini menggabungkan animasi CSS dengan beberapa properti CSS lainnya yang mungkin membantu Anda, khususnya transformasi`&nbsp;scale`,&nbsp;`translate`&nbsp;and&nbsp;`rotate`.

## Transformasi

Meskipun mungkin terdengar seperti itu menciptakan animasi, properti transformasi sebenarnya digunakan pengaturan posisi statis, miring atau skala elemen. Kita dapat menggunakannya untuk menciptakan efek yang hebat tetapi untuk melakukannya kita harus memiliki transformasi yang berbeda untuk setiap bingkai utama atau negara yang kita animasikan.

## Transform: scale(), translateZ() and rotateY()

Kita dapat membuat elemen yang lebih besar atau lebih kecil menggunakan `scale` . Menggunakan&nbsp;`translateZ`&nbsp;kita dapat memindahkan elemen dalam sumbu-Z. Sumbu ini akan menjadi yang diwakili dengan menggambar garis dari Anda, melalui monitor.

Dalam hal ini kita akan menggunakan kombinasi skala dan menerjemahkanZ untuk membuatnya terlihat seperti beberapa kata terbang melintasi angkasa.

Terakhir kami akan gunakan&nbsp;`rotateY`&nbsp;untuk memutar huruf dari tagline. Berputar di sekitar sumbu Y akan membutuhkan sedikit kerja 3D di browser.

## SVG, HTML and CSS

Sebagai persiapan untuk contoh ini saya membuat dua file SVG untuk bagian [Star](/demo/starwars/images/star.svg) and [Wars](/demo/starwars/images/wars.svg) pada logo. Jangan ragu untuk mengambilnya untuk digunakan jika Anda ingin bermain bersama.

HTML untuk demo adalah sebagai berikut:

```
<div class="starwars-demo">
  <img src="/images/star.svg" alt="Star" class="star">
  <img src="/images/wars.svg" alt="Wars" class="wars">
  <h2 class="byline" id="byline">The Force Awakens</h2>
</div>
```

Gambar statis dari [beberapa bintang ](/demo/starwars/images/bg.jpg)digunakan untuk latar belakang. Font di byline sangat sulit ditemukan, jadi saya telah mereferensikan font web &quot;Lato&quot; dalam contoh ini.

Dengan beberapa posisi absolut untuk memusatkan konten di tengah layar, kita mulai dengan ini:

<img src="/images/posts/starwars/starwars.jpg" />

## Mengaktifkan&nbsp;Star and Wars

Kami ingin teks yang lebih besar memudar, sementara juga mulai lebih besar dan semakin kecil dari waktu ke waktu. Ini adalah kasus yang bagus untuk&nbsp;`scale()`&nbsp;trannsformasi. Mari kita gunakan pada kata&nbsp;&quot;Star&quot;&nbsp;dengan bingkai utama ini:

```
@keyframes star {
  0% {
    opacity: 0;
    transform: scale(1.5) translateY(-0.75em);
  }
  20% {
    opacity: 1;
  }
  89% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateZ(-1000em);
  }
}
```

Ada dua properti yang berubah selama animasi ini. pada `opacity`&nbsp;dan&nbsp;`transform`. Perubahan opasitas membuatnya mulai transparan, dan memudar pada bagian akhir sehingga kita dapat mengulang animasi.

Transformasi dimulai dengan menetapkan skala pada `1.5`. Ini berarti ukuran awal teks 150% lebih besar dari biasanya. Pada 89%, kami mengatur properti transformasi ke skala 1. Ini berarti bahwa antara 0% dan 89%, skala ini meningkat dari 150% menjadi 100%.

pada akhir&nbsp;`transformZ&nbsp;`menyebabkan kata untuk memperbesar dengan cepat.

Kita dapat menerapkan bingkai utama ini ke kata&nbsp;&quot;Star&quot;&nbsp;seperti ini:

```
.star {
  animation: star 10s ease-out infinite;
}
.wars {
  animation: wars 10s ease-out infinite;
}
```

Properti `animasi` di sini menentukan animasi yang disebut `bintang`, dan durasi sepuluh detik. Ini berlaku fungsi pengaturan waktu&nbsp;`ease-out`, dan memberitahukannya untuk mengulang tanpa batas. Kami menerapkan aturan serupa untuk kata &quot;Wars&quot;.

## Membuat 3D

Menggunakan transformasi 3D dalam CSS, baik menerjemahkan sepanjang sumbu Z, atau memutar di sekitar sumbu Y dan Z mengharuskan kita menetapkan panggung untuk 3D. Dalam istilah HTML ini berarti kita membuat wadah, dan memberi tahu browser bahwa beberapa hal 3D akan terjadi.

Kami melakukan ini dengan menambahkan yang berikut ke `.starwars-demo` div:

```
.starwars-demo {
  perspective: 800px;
  transform-style: preserve3d;
}
```

Kedua properti ini memberi tahu browser bahwa anak-anak penampung harus diposisikan dalam 3D, bukan datar. [CSS Tricks[&nbsp;masuk ke lebih detail tentang properti.

Kedua, properti&nbsp;`persective`&nbsp;memberitahu browser bagaimana &quot;deep&quot; adegan itu perlu. Seandainya kami membuatnya&nbsp;`800px`. Nilai yang lebih kecil menciptakan lebih banyak efek perspektif &quot;ekstrim&quot; karena adegannya lebih pendek.

Dengan itu, kami akan memperkenalkan tagline.

## Awaken the Force

Tagline &quot;The Force Awakens&quot; muncul di trailer dengan setiap huruf berputar pada tempatnya. Kita dapat membuat efek ini menggunakan `rotateY` transform. Dalam hal ini kami telah membungkus masing-masing huruf dalam elemen&nbsp;`span`, sehingga kami dapat menerapkan animasi untuk setiap huruf.

Masalah yang saya temukan dengan cepat adalah bahwa tidak ada cara langsung untuk menghidupkan masing-masing huruf di garis. Pendekatan pertama saya adalah membungkus setiap huruf secara manual dalam tag `span`. Ini berhasil tetapi membuat HTML sedikit berantakan. Demo saat ini termasuk beberapa JavaScript&nbsp;(thanks to&nbsp;[Tady&nbsp;](https://twitter.com/tadywankenobi)for the assist) yang membungkus setiap huruf secara otomatis dalam `span`.

Kami akan menerapkan animasi untuk setiap huruf.

Pertama, bingkai utama:

```
@keyframes spin-letters {
  0%, 10% {
    opacity: 0;
    transform: rotateY(90deg);
  }
  30% {
    opacity: 1;
  }
  70%, 86% {
    transform: rotateY(0);
    opacity: 1;
  }
  95%, 100% {
    opacity: 0;
  }
}
```

Untuk mulai dengan, surat-surat diputar 90 derajat, kemudian dengan 70% melalui animasi, mereka telah animasi untuk menghadapi pemirsa.

Kita dapat menerapkan kumpulan bingkai utama ini ke setiap rentang seperti:

```
.byline span {
  animation: spin-letters 10s linear infinite;
}
.byline {
  animation: move-byline 10s linear infinite;
}
```

Hasilnya adalah setiap kontainer `span`yang menahan setiap huruf akan memudar dan berputar perlahan ke tempatnya, sebelum memudar pada akhir animasi.

Menyusunnya bersama kita memiliki&nbsp;[finished demo](http://codepen.io/donovanh/pen/pJzwEw?editors=110).

<p data-height="468" data-theme-id="12592" data-slug-hash="pJzwEw" data-default-tab="result" data-user="donovanh" class="codepen">

<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
