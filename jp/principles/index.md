---
layout: post
title: ディズニー社に学ぶ！HTML/CSSで12個のアニメーション基本原則を完全再現！
description: How Disney's 12 Principles of Animation can be applied to web designs
categories: [animation, tips, animations, transitions, apple watch]
customCSS: principles.css
imageURL: /images/posts/principles/principles.png
home_image: /images/posts/principles/principles.png
tweet_text: "ディズニー社に学ぶ！HTML/CSSで12個のアニメーション基本原則を完全再現！"
custom_header: posts/principles.html
demo_url: http://codepen.io/collection/AxKOdY/
published: true
translator: Shohei Yamazaki
translator_link: https://twitter.com/photoshopvip
---

フロントエンド・デザイナーやデベロッパーは、スタイリングや配置、またデザイン性の良いサイトを作成するためにCSS（Cascading Style Sheets、カスケーディング・スタイル・シート）を利用します。しばしばページに変化（英: Transition）やアニメーション（英: Animation）を加えるためにCSSを利用しますが、まだまだ開発する余地がありそうです。

アニメーションは、訪問ユーザーにとってデザインをよリ理解しやすく、ためになる情報を伝える強力なツールとなるでしょう。ウェブサイト制作で活用でき、よりパワフルな使い方ができる基本原則を今回はご紹介します。

ディズニー社の現場で長年培われた、[アニメーションの基本原則12個（英: 12 Principles of Animation）](http://en.wikipedia.org/wiki/12_basic_principles_of_animation)は、「生命を吹き込むイリュージョン: ディズニーアニメーション（英: The Illusion of Life: Disney Animation）」として1981年に出版されました。


この記事ではこれら12個の基本原則を、どのようにそれぞれウェブページに適用できるのか解説します。[すべてのHTML/CSSソースはCodePenコレクションよりダウンロード](http://codepen.io/collection/AxKOdY/)することができます。


## 押し潰しと伸縮 (Squash and stretch)

<section class="demo-container principle principle-one">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>


物質的質量のある物体が動くとき、その質量は同じという概念です。ボールが地面に跳ねるとき伸びるだけでなく、元に戻る時間も短くなります。


これは人や時計、跳ねるボールなど物質を考慮したデザインを作成するときに、もっとも役立つテクニックです。


ウェブページの要素に適用するときは、このルールを無視することも可能です。DOM（英: Document Object Model）要素は、物質的ものと関連付ける必要はなく、スクリーン上で必要に応じて光ったり、縮んだりすることができます。たとえば、ボタンをクリックすると光ったり、インフォメーションボックスがモーフィングしながら表示されたり、エラーメッセージが表示/非表示になるなどです。


それでも押し潰しと伸縮（英: the Squash and Stretch）テクニックは、重力や落下の衝撃を表現したいときに使うことができます。たとえシェイプがほんの少し変化するだけでも、ユーザーの注目をめることができるエフェクトとなります。


## 予備動作 (Anticipation)

<section class="demo-container principle principle-two">
  <div class="wrapper">
  <div class="shape"></div>
  <div class="surface"></div>
  </div>
</section>

動作はいきなりはじまらないものです。実際の生活でも動きはなにかしらのことが起こることで、連鎖的に引き起こされます。たとえば、ボールがテーブルから落ちる前に転がりはじめ、人がジャンプするためにひざを曲げます。


このテクニックは、変化（英: Transition）やアニメーション（英: Animation）をより日常生活のような動きに魅せるときに利用できます。予備動作（英: Anticipation）は少しだけ跳ねるだけでも、ユーザーが何が変化し、スクリーン上でどの要素を追うのか理解させることができます。


たとえばデザイン要素にマウスホバーしたとき、光って大きくなる前に、ちょっとだけ縮めてみましょう。リストに新しいアイテムを追加するときに、まず他のアイテムを移動している様子を表現することができます。

## 演出 (Staging)

<section class="demo-container principle principle-three">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>


演出（英: Staging）は、さまざまなデザイン要素のなかでメイン動作が起こるとき、他の要素を動かすことで、伝えたいアイデアにユーザーの注目がきちんと集まっているのか確認します。もっとも目立つ場所にメイン動作を追加するか、ユーザーが本当に必要な要素に着目できるように、他の要素をマスキングすることを意味します。


ウェブページにおける活用アプローチのひとつが、オーバーレイによるモーダルコンテンツ表示です。現在閲覧しているページの上に、暗い半透明レイヤーを配置し、着目してほしいメインポイントを表示してみましょう。


もうひとつのアプローチは、動き（英: Movement）を利用する方法です。たくさんの要素が動いているとき、どれに注意したらよいかわかりづらくなります。もしすべて他の動作が停止している状態で、ひとつだけほんのすこし動うことで、より着目しやすくなります。


ひとつのテクニックとして、ユーザーにドキュメントの保存を促すため、保存ボタンにアニメーションを加えてみましょう。スクリーン上の他の要素には動きがないので、より動きを強調することができます。


## 逐次描きと原画による設計 (Straight-Ahead Action and Pose-to-Pose)

<section class="demo-container principle principle-four">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

逐次描き（英: Straight-ahead）は、アニメーションのカットを逐次描いていくテクニックで、パラパラ漫画を連想するとよいでしょう。原画による設計（Pose-to-Pose）はポイントとなるキーフレームをいくつか決めておき、その間をあとから補完していくテクニック。


ウェブアニメーションのほとんどは、原画による設計（Pose-to-Pose）が利用されており、キーフレームの間の動きはブラウザー毎に設定でき、フレーム数を多くすればするほどアニメーションが滑らかになります。


ひとつの例外が、stepsタイミング機能です。この機能を利用することで、独立したフレームをステップ数で定義することができるので、ブラウザー上で逐次描き（英: Straight-ahead）を実現することができます。


## 継続する動きと後追いの動き (Follow Through and Overlapping Action)

<section class="demo-container principle principle-five">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape"></div>
  </div>
  </div>
</section>

動きは同じタイミングではじまることはありません。車が突然止まったとき、タイヤから煙が出しながら、運転手は車が止まるまで前に進む動作が、継続して行われます。これらの詳しい描写は、継続する動きと後追いの動き（英: Follow Through and Overlapping Action）の具体例です。


ウェブページ上では、なにかデザイン要素が止まるのを強調する手助けをしてくれ、アニメーションを忘れることはできません。たとえば、リストにアイテムを追加するとき、スライドイン・エフェクトをほんの少し長めに加え、正常のポジションに移動させましょう。


後追いの動き（英: Overlapping Action）を表現するには、すこしずつ変化するスピードを変えてみましょう。これはiOSシステムなどでも、表示を変更するときに良く利用されているテクニックです。いくつかのボタンやデザイン要素は異なる速度で移動することで、よりリアルなアニメーションを実現します。もしすべての要素が同じ速さで動いたら、よりフラットで単純になりがちです。動きを組み合わせることで、ユーザーにきちんと変化しているのを理解する時間を与えます。


ウェブページでは動きやアニメーション、エフェクトの作成を異なるスピードで行いましょう。


## スローインとスローアウト (Slow In and Slow Out)

<section class="demo-container principle principle-six">
  <div class="wrapper">
  <div class="shape a"></div>
  </div>
</section>

物が止まった状態から最高速度まですぐに到達することはあまりありません。加速しはじめはゆっくり、速度がついてからはすばやく、減速するときは再びゆっくりな動きとなるように調整しましょう。加速と減速を加えないと、機会的な動きとなってしまいます。


CSSではスローインとスローアウト（英: Slow in and Slow Out）は、easingとして知られています。easingはタイミング機能として活用され、アニメーション速度の変化を表現します。


タイミング機能を利用し、アニメーションをゆっくりから加速（Ease-in）するか、速い速度から減速（Ease-out）する、またはより複雑なエフェクトにはcubic-bezier機能を利用してみましょう。

## 運動曲線 (Arc)

<section class="demo-container principle principle-sevena">
  <div class="wrapper">
  <div class="shape-container">
    <div class="shape a"></div>
  </div>
  </div>
</section>

物体が動くときに「スローインとスローアウト（英: Slow in and Slow Out）」テクニックを加えるたとき、直線ではなく曲線を動くように移動します。

曲線運動（英: Arc）は、CSSを使っていくつか方法で再現することができます。まず複数のアニメーションを組み合わせる方法です。たとえばボールが跳ねるようなアニメーションは、ボールが上下運動しながら、右方向に移動していきます。こうすることで、ボールが曲線を描きながら、スクリーン上を横切ります。

<section class="demo-container principle principle-sevenb">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

もう一つのオプションは、デザイン要素を回転させる方法です。外側の要素の変化をベースに、回転の中心を調整することができます。物体が回転するときに、曲線を描いて回転します。


## 副次アクション (Secondary Action)

<section class="demo-container principle principle-eight">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  <div class="shape c"></div>
  </div>
</section>

副次アクション（英: Secondary Action）は、メイン動作が起こるときに分かりやすく強調する手助けをします。これは人が手を振りながら歩いたり、首をかしげたりする動作と同じです。またはボールを蹴りあげたときに舞い上がるホコリも同様です。


ウェブサイトでは、副次アクション（英: Secondary Action）はアイテムをドラッグしたり、リストの真ん中に配置するときなどに、もっとも注目して欲しい要素以外を移動させることができます。

## タイミング (Timing)

<section class="demo-container principle principle-nine">
  <div class="wrapper">
  <div class="shape a"></div>
  <div class="shape b"></div>
  </div>
</section>

アニメーションのタイミングは、動作が完了するまでの時間を表します。タイミング（英: Timing）は、動きを付けることで重そうに見せたり、動きに独自性を持たせたいときに便利なテクニックです。

ウェブページではanimation-durationまたはtransition-durationを利用することで、シンプルに調整することができます。タイミングを調整することで、コンテンツの表示アニメーションを合わせる手助けをしてくれます。

## 誇張 (Exaggeration)

<section class="demo-container principle principle-ten">
  <div class="wrapper">
  <div class="shape"></div>
  </div>
</section>

アニメ漫画などでよく使われるテクニッく誇張（英: Exaggeration）は注目をあつめるだけでなく、ドラマチックや動きを演出します。たとえばオオカミが噛み付こうとするときに、いつもより大きく口をあけることでより怖そうで、滑稽にみえるでしょう。


ウェブページでは、デザイン要素を拡大、縮小することで強調でき、注目を集めることができます。たとえばフォームを入力するときに、記入している要素が光り、不要な部分を縮ませたり、フェードアウトで非表示にしたりしてみましょう。

## 立体感のある描画 (Solid drawing)

<section class="demo-container principle principle-eleven">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="front"></span>
      <span class="back"></span>
      <span class="left"></span>
      <span class="right"></span>
      <span class="top"></span>
      <span class="bottom"></span>
    </div>
  </div>
  </div>
</section>

アニメーション要素が3Dの場合、遠近法を使っているか確認しましょう。人々は3次元の世界に住んでいる私たちは、デザイン要素にも同じ動きが求められます。


モダンブラウザは3D変形にもばっちり対応しています。回転させたり、自由に配置したりできるのはもちろん、ブラウザーは自動的にアニメーション変化を扱うことができます。

## アピール力 (Appeal)

<section class="demo-container principle principle-twelve">
  <div class="wrapper">
  <div class="shape">
    <div class="container">
      <span class="item one"></span>
      <span class="item two"></span>
      <span class="item three"></span>
      <span class="item four"></span>
    </div>
  </div>
  </div>
</section>

アピール力（英: Appeal）は、アートワークの性質で、アーティストの意図とユーザーを結びつけることができます。カリスマ性のある俳優は、細部まで気を配り、動きを組み合わせることでアピール力を作り出しています。


ウェブページにおいて注意深く作成されたアニメーションは、アピール力たっぷりです。Stripeなどのアプリでは、チェックアウトプロセスに、優れたアニメーションを利用しています。

## 最後に、、。

今回ご紹介した12個の基本原則テクニックを利用することで、アニメーションを改善することができます。アニメーションに物質的な重さを表現し、予備動作を加え、副次アクションや絶妙なタイミングを加えることで、コンテンツをより価値のある、役立つものに仕上げてくれるでしょう。


ウェブサイトにアニメーションを加えるときは、複数のアニメーションテクニックを組み合わせることで、より効果的でアピール力の高いデザインをきっと演出してくれるでしょう。

[Adding Appeal to Your Animations on the Web](http://webdesign.tutsplus.com/tutorials/adding-appeal-to-your-animations-on-the-web--cms-23649)

「アピール力（Appeal）」を利用したボタンエフェクトの作り方が紹介されていました。今後のプロジェクトへ採用してみてはいかがでしょう。



