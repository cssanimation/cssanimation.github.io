---
layout: post
title: Kenapa dengan Animasi?
bodyClass: shorter
demo_url: https://cssanimation.rocks/demo/starwars
description: Mengapa animasi berfungsi dengan sangat baik, dan bagaimana Anda dapat menggunakannya untuk meningkatkan desain web Anda.
categories: [css, theory]
imageURL: /images/posts/why-animate/home.png
home_image: /images/posts/why-animate/home.png
tweet_text: Mengapa animasi dapat meningkatkan desain web Anda
translator: Muhammad Azzam
translator_link: /id/
---

Menatap nyala api yang berkelap-kelip, menyaksikan ombak laut melayang di pantai, menangkap sekilas tajam harimau yang hendak menerkam, dunia adalah gerakan.

Kami benar-benar Bagus dalam memperhatikan dan bereaksi terhadap gerakan. hal ini tertanam dalam otak kita dan merupakan bagian penting dari bagaimana kita memahami dunia di sekitar kita.

Ketika kami duduk untuk merancang situs web, kami menciptakan sesuatu yang akan berkomunikasi dengan pengunjung kami Animasi adalah salah satu cara kita dapat melakukan ini.

## Komunikasi

Seringkali ketika mendesain situs web, kami berpikir tentang konten, tata letak, style, font dan warna. Tetapi kita juga bisa berkomunikasi melalui gerakan. Daripada mempertimbangkan animasi adalah sesuatu yang terpisah dalam proses desain, cara hal-hal yang bergerak adalah aspek lain dalam desain kami yang berfungsi dan berkomunikasi bersama segala sesuatu yang lain.

Semua hal ini ditambahkan untuk membuat merek kami dan pengalaman yang kami harapkan agar bermanfaat.

Kami berharap bahwa desain kami mengomunikasikan konten kami secara efektif, menyampaikan perhatian besar kami terhadap detail, dan membuat para pengunjung senang. Karena pengunjung kami hebat dalam memperhatikan dan memahami gerakan, animasi adalah tools yang penting dan powerfull.

## Permulaan yang sederhana

Contoh animasi sederhana yang kita lihat di mana-mana adalah efek mengambang. Rasanya aneh untuk mengagumi konsep sederhana ini sekarang tetapi ketika pertama kali diperkenalkan, itu adalah masalah besar.

Kembali ketika web pertama mengambil bentuk, kami memiliki dokumen-dokumen yang terhubung melalui hyperlink. Tautan-tautan ini, untuk mengkomunikasikan perbedaan mereka dari teks di sekitar mereka, diberi warna biru dan digarisbawahi. Kursor akan juga mengubah gaya pointer.

Ketika diklik mereka akan berubah ungu untuk menunjukkan bahwa link aktif, atau kemudian itu telah dikunjungi. Warna-warna digunakan sebagai cara untuk mengkomunikasikan status tautan. Hal-hal yang cukup baik.

Kemudian datanglah CSS. Pada awal tahun 1998,: hover pemilih tiba. Tiba-tiba kita bisa melakukan lebih banyak lagi. Daripada bergantung pada perubahan kursor tiba-tiba, kita bisa menerapkan gaya ke tautan itu sendiri saat kursor berdiri di depannya.

```
a:hover {
  color: red;
}
```

Dengan perubahan kecil ini, kami dapat berkomunikasi lebih banyak. Daftar tautan menjadi tempat bermain interaktif saat kami dengan gembira menari-nari di kursor kami, mendapatkan umpan balik langsung dari warna tautan.

Itu bukan hanya untuk bersenang-senang. Perubahan warna menambahkan lebih banyak informasi tentang apa yang terjadi pada layar. Kita manusia, adalah besar di memperhatikan gerakan atau ketika hal-hal berubah, manfaat ketika informasi tambahan ini. Tetapi kita bisa berbuat lebih banyak.

## Menyampaikan informasi lebih lanjut

Daripada berhenti mengubah warna, kita bisa menambahkan animasi juga. Membuat perubahan warna memberi mata kita lebih banyak kesempatan untuk memperhatikan perubahan, karena menariknya keluar dalam jangka waktu yang lebih lama. Perubahan animasi lebih mudah dilihat daripada perubahan mendadak.

```
a {
  transition: color 0.2s;
}
a:hover {
  color: red;
}
```

Dengan ini kami menambahkan transisi ke jangkar CSS. Ketika sebuah tautan berada di atas, browser akan menganimasikan warna teks dari biru (atau ungu) menjadi merah selama 0,2 detik.

## Mengambil lebih jauh

Mungkin tidak tampak seperti banyak tapi alat-alat sederhana bahkan membuka dunia komunikasi yang dapat kita gunakan untuk menambah hidup desain kami.

Dengan kemampuan untuk menyampaikan informasi melalui gerakan, kita dapat menarik perhatian ke bagian dari halaman kami yang telah berubah, menandakan kedatangan atau penghapusan konten, menunjukkan kepada pengunjung kami apa yang harus dilihat selanjutnya dan banyak lagi.

Beberapa cara animasi dapat menambahkan nilai ke desain:

- Menyoroti konten interaktif
- Menambah atau menghapus konten
- Menceritakan sebuah cerita
- Menarik perhatian
- Kredibilitas
- Branding dan menyenangkan

### Menyoroti konten interaktif

Hovering links adalah salah satu cara animasi dapat menambah nilai, tetapi kita bisa melangkah lebih jauh. Tooltips, mengubah gaya desain dan perubahan visual lainnya dapat membuat halaman Anda merasa lebih hidup dan mendorong pengunjung untuk memilih, menekan atau berinteraksi dengan konten Anda Draggable daerah dapat memperluas atau sorot pada sentuhan, gambar hitam dan putih bisa berubah warna dan lebih.

### Menambah atau menghapus konten

Jika konten pada suatu halaman tiba-tiba menghilang atau muncul, kita mungkin memperhatikan. Tapi hanya itu yang kami tahu. Kami tidak tahu kemana perginya, dan mungkin mengapa. Ini adalah kesempatan untuk menambahkan sedikit animasi.

Menambahkan baris tambahan ke daftar agenda, menggeser panel kontrol atau meminimalkan konten ke sudut halaman, semua manfaat dari animasi. Dengan menunjukkan dari mana barang-barang itu berasal dan ke mana mereka pergi, pengunjung kami mempertahankan hubungan dengan halaman dan lebih memahami cara kerjanya.

### Menceritakan sebuah cerita

Kami tidak terbatas pada teks atau bahkan gambar statis di halaman web kami. Dengan memindahkan elemen di sekitar, menambahkan elemen baru atau menghapusnya, Anda dapat membawa pengunjung Anda dalam perjalanan dan memberi mereka informasi yang lebih baik.

Homepage di Mailchimp adalah contoh yang bagus untuk ini. Di tengah layar mereka menggunakan beberapa elemen HTML dan beberapa animasi CSS untuk menjelaskan cara membuat email.

Sedangkan kami mungkin telah membuat sesuatu seperti ini dengan Flash tidak lama yang lalu, kita sekarang dapat melakukannya tanpa bergantung pada plugin dan sekaligus mempertahankan situs kami cepat, dapat diakses dan responsif.

### Memanggil Perhatian

Kami hebat dalam memperhatikan ketika hal-hal berubah secara visual. Ciri ini adalah sesuatu yang dapat kita gunakan untuk menarik perhatian ke area tertentu. Penggunaan yang umum untuk hal ini adalah ketika beberapa konten diperbarui di halaman dan kami membuatnya berkedip atau berubah warna.

Kami dapat mengambil ini lebih lanjut dan tombol daftar naik sedikit ketika halaman pertama memuat seolah-olah mengatakan &quot;hei, saya penting&quot;, atau kita bisa memiliki artikel yang disarankan melayang dari sisi layar ketika pengunjung mencapai akhir dari yang sebelumnya.

Selesai dengan ketelitian, animasi adalah cara yang sangat ampuh untuk menarik perhatian pada apa yang kita ingin orang perhatikan

### Kredibilitas

Sesuatu yang kurang sering dianggap adalah efek animasi yang baik dapat memiliki kepercayaan pengunjung di situs kami. Jika Anda memperhatikan interaksi dengan sistem operasi Anda, ada banyak animasi yang halus. Hal-hal memudar atau keluar, pindah ke dan dari task bar dan membawa polesan yang membantu Anda memahami komputer.

Ketika kami mendesain situs web, kami sering melupakan ini, dan sebagai gantinya membuat pengalaman yang terasa datar. Animasi dapat membuat interaksi situs Anda terasa lebih baik.

Dalam posting di Medium.com, Michaël Villar menjelaskan bagaimana proses checkout Stripe menggunakan animasi untuk membantu pengguna baik dalam interaksi mereka dengan aliran checkout tetapi juga untuk menanamkan kepercayaan diri.

> &quot;Sensasi nuansa animasi ini yang over-the-top menambah pengalaman pengguna secara keseluruhan, dengan menyampaikan tingkat kesempurnaan dan perhatian terhadap detail yang Anda tidak bisa bantu tetapi percayai&quot;

Dengan gaya yang tepat, animasi dapat membuat pengguna merasa seperti mereka menggunakan UI modern yang dipoles.

### Branding dan menyenangkan

Ketika Yahoo! melalui rebranding besar pada tahun 2013, mereka menambahkan animasi halus ke setiap logo situs web mereka. Bertujuan untuk menyampaikan perasaan senang, mereka dibuat menarik perhatian pada perubahan dan membuat orang membicarakannya

Situs ini tampaknya tidak memiliki mereka lagi, tetapi Anda dapat menemukan contoh-contoh animasi di situs web Astronaut Love.

Ketika Stripe menggunakan animasi, mereka melakukannya dengan tingkat pemolesan yang orang (dan pengembang mempertimbangkan menggunakan layanan mereka) mengasosiasikan dengan nama mereka. Dalam kedua kasus, animasi membantu menarik perhatian dan meningkatkan merek mereka.

Animasi juga bisa menyenangkan. Pada Hop.ie, saya membuat karakter &quot;bouncer&quot; yang akan memantul dari kiri menjadi logo. Sambil menjaga desain situs sangat sederhana, bouncer ini bertindak sebagai jangkar yang menghubungkan kembali ke halaman beranda. Tidak perlu animasi, tetapi saya menemukan menambahkan sedikit mengangkat nada. Tidak ada salahnya bersenang-senang.

## Kekuatan besar, tanggung jawab besar

Animasi adalah alat yang ampuh. Banyak seperti bagaimana kita merasa mudah untuk menatap ke dalam api yang menyala, berkedip-kedip kita menemukan animasi sulit untuk mengabaikan. Beberapa orang bahkan merasa mustahil untuk mengabaikannya.

Ketika mempertimbangkan bagaimana Anda menggunakan animasi dalam desain Anda, perlu diingat bahwa itu adalah alat komunikasi. Itu harus digunakan dengan hemat dan tidak pernah menghalangi konten atau interaksi.

Tidak menyenangkan untuk mencoba mendengarkan banyak orang berbicara sekaligus, atau mencoba untuk fokus dalam lingkungan yang sibuk. Terlalu banyak animasi menciptakan gangguan visual yang mengalihkan perhatian dan membuat hidup lebih sulit bagi pengunjung Anda. Dengan itu dalam pikiran, selalu mencoba untuk mengurangi penggunaan animasi dan membuatnya tetap halus.

## Kenapa animasi sekarang?

Tidak pernah ada waktu yang lebih baik untuk menghadirkan animasi ke dalam proses desain web Anda. Browser menjadi lebih baik, perangkat menjadi lebih kuat, dan kita mendapatkan lebih baik alat untuk membantu membuat animasi.

Menggunakan animasi membawa penghakiman. Jika Anda ingin hebat dalam menggunakan animasi untuk membantu konten Anda menonjol, meningkatkan konversi, atau secara umum meningkatkan merek Anda, inilah saatnya untuk memulai.
