---
layout: post
type: tutorial
title: Mac プラス CSS
description: CSS でクラシック Mac プラスの 3 D モデルを作成
categories: [animation, tips, animations, transitions, mac plus]
customCSS: macplus.css
imageURL: /images/posts/macplus/macplus.png
home_image: /images/posts/macplus/macplus.png
tweet_text: アップル社のクラシックな Mac Plus を再作成します。
custom_header: posts/macplus.html
demo_url: http://codepen.io/donovanh/full/HGqjp/
translator: Muhammad Isnul
---

私はいつも Apple Mac Plus を使用するために着いた瞬間を思い出すでしょう。 この記事で私は CSS で作成することによってこの素敵なコンピューターに敬意を払うしようとします。

## レトロなスタイル

作ろう (事実上) コンピューター。 だけでなく、任意の古いコンピューターがコンピューターを Apple の世界への導入を私たちの多くのためだった。 Macintosh に加えて、コードネーム T 氏が、まず 1986 年に導入され、なんと 1 MB の RAM と 8 MHz プロセッサを満載します。 すべてが生の力は別として、真剣にキュートなデザインは、コンピューターを使用してもっと楽しく作られてだった。

![Credit: Vectronic's Apple World](/images/posts/macplus/mac.jpg)

このプロジェクトで私は Macintosh 向けの 3 D モデルの構築し、3 つの表示寸法設定。 CSS のキーフレーム アニメーションを作って画面上より良い 3 D 効果を誇示するために移動を使用しています。

## CSS を使用する理由

カスケード スタイル シートで、スタイルの web ページのコンテンツを標準的な方法です。 CSS を使って、フォント、色、配置、背景画像からすべての処理は、モダンな web ページを作るために不可欠なツールです。 二次元コンテンツのためだけじゃないです。 3 D 変換と位置決めの使っても深さを追加するのに CSS を使用できます。

CSS の画像よりも小さいファイル サイズで結果のシーンを作成します。 この例では、CSS は、1 KB 未満も、KB と、HTML だけ 4 に圧縮されます。 同等のイメージは 100 KB 以上になります。

## ライブ デモとソース コード

CSS のマック ・ プラス オンラインを参照してください。

ここでは、完全なソース コードをダウンロードできます、Github 上で完全な CSS ファイルを表示することができます。

例フォルダーのプロジェクト ファイルを参照しても、さまざまな段階をに沿ってできます。

## プレフィックスに

コードを読みやすくするためのコード例から任意の CSS プレフィックスは省略しました。 これで作業するときあなた自身を他のブラウザーは、webkit、moz、ms、o などのプレフィックスを含める確認します。

## ステージの設定

3 D を作成するときは、それを構築するためのシーンをしなければ HTML を使用しています。 コンテナーの HTML 要素に開始します。

    <div class="stage"></div>

単純な div クラスの段階で、それは、3 D オブジェクトのコンテナーとして機能します。

3 D コンテナーとしてそれを確立するには、は、いくつかの CSS プロパティ、視点と視点の原点を設定します。 視点プロパティは、シーンの消失点に似ています。 値が小さいほどより短い消失点、もっと極端な効果。 この画像は、シーンに形状が変化値を変更するを示しています。

![Different perspectives: 500px vs 2500px - examples/01-Perspective/index.html](/images/posts/macplus/01-perspective.png)

### 自分で試してみて

行っている場合は、プロジェクト ファイルの例/01-遠近法フォルダーに screen.css ファイルを探します。 ブラウザーで同じフォルダーの index.html ファイルを開く影響を参照してください視点の値を更新することができます。

視点 origin プロパティは、表示位置を設定します。 それを変更すると、上からのシーンにまで下からまたはから見下ろす側できます。

この例では、私は 1,600 ピクセルの視点値をやり遂げました。 CSS はこのようになります。

    .stage {
      perspective: 1600px;
      perspective-origin: 50% 100px;
    }

プロジェクトの ZIP ファイル内のスタイル シートのフォルダーには、ステージ、背景、幅と高さなどの他のさまざまなプロパティを設定するため、完全な CSS ルールが含まれています。

## 構造の計画

場所のステージでコンピューターを作成するのにいくつかの HTML の要素を使用します。 なく、すべての最後の詳細を含めるしようとすると、ほとんどの部分を詳述した前面に焦点を合わせます。

Mac 本体、ボックス、角度で若干後方傾斜し、フラット ベースの上に座っています。

2 つのボックス、1 つの傾斜のバックを少し作ってし、平坦なボックスに座っているを意味します。 この効果を作成する我々 は、CSS の使用を作ってあげるプロパティを変換します。

完全な HTML を表示する場合は、index.html ファイル内のプロジェクトのファイルで見つけることが。

## 変換

CSS の変換プロパティを回転、スキュー、位置、ページ要素の尺度もことができます。 私たちがすることができます位置決めと我々 のシーンを作成する回転の使用。

Transform プロパティは、次のように可能性があります。

    .example {
      transform: rotateY(45deg) translateZ(-100px);
    }

トランス フォームを構築するには、一連のステートメントをチェーンします。 この例では例の要素は、y 軸を中心に 45 度回転し、z 軸に沿って 100 px プッシュ バックし。

それはこのような何かを見てする必要があります。

![Front and back panels transformed into place - examples/02-Transforms/index.html](/images/posts/macplus/02-Transforms.png)

プロジェクト ファイル内の例/02-Transforms フォルダーに CSS 変換の例を見つけることが。 例では、2 つの要素が配置され、自分の位置を変更する編集、02-Transforms/css/screen.css ファイルが含まれています。

### 元の変換

場所の周りの要素を回転するとき変換設定できる起源がある心に留めておく価値があります。 変換の原点は、X、Y および Z の値の指定によって参照されるポイントです。 これは既定です。

    .default-origin {
      transform-origin: 50% 50% 0;
    }

私はデフォルトのままこの例をビルドするときがあるということを知ることの価値があります。

## 箱をつくる

いくつかの変換を使用して、コンピューターの本体を設定できます。 このような HTML になります。

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

ステージ内では、ページ上、コンピューターに配置を使用して div です。 その中では Mac 自体です。 2 つのボックスは、図形要素から成っている自分自身です。 これらの要素は、表と裏 2 つのボックスに側面、上を表します。

また、影を表す図です。

この例は、例/03-ボックス フォルダーで見つけることが。

つもりが結果はこのようになります。

![CSS Boxes - examples/03-Boxes/index.html](/images/posts/macplus/04-Boxes.png)

各ボックスは、CSS の変換プロパティを使用して場所に変換、CSS のグラデーションがシーンに奥行きを追加する使用されます。

CSS はこのようになります。

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

幅と高さの各図形が与えられている CSS 背景のグラデーションや色。 数字各 transform プロパティを使用して配置されます。 たとえば、左側に変換される 90 &deg; 回転は、コンピューターの半分の幅 (移動) します。

フロントの図は z 軸、コンピューターの半分の長さに沿って進む、翻訳、奥に戻って変換される 180 度回転。

一番上のボックスの作品のため x 軸回りに 5 度の各図形が回転します。 これは、Macintosh 向けの本体が後ろに傾きを意味します。

影図で CSS の使用は、最終的に box-shadow プロパティ ボックスは、平らな面に座っているように見えるそれは、シャドウを作成します。

## ベゼル

このコンピューターの機能は、フロント周りの傾斜エッジ。 私は、ベゼルとしてを参照してくださいよ、これらのエッジを助けるボックスのハードのコーナーを柔らかくし、それは小さい箱型に見えます。

フロントの図にいくつかの余分な要素を追加これを達成するために次のよう。

    <figure class="front">
      <span class="bezel-top"></span>
      <span class="bezel-left"></span>
      <span class="bezel-right"></span>
      <span class="bezel-bottom"></span>
    </figure>

フロントの各図内の span 要素を表すこれらのベゼルの一つ。 いくつかのスタイルを追加、彼らはこのようになります。

![Bezels added to front - examples/04-Bezels/index.html](/images/posts/macplus/04b-Bezels.png)

この例は、例/04-ベゼル フォルダーで見つけることが。

次の CSS の位置ごとに、および境界線の幅のトリックを使用して、傾斜エッジを作成します。

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

各ベゼルは 3 枠です。 上部のベゼル上に色付きの枠線を設定します。 左側と右側の 2 つの透明な罫線を設定します。 CSS で枠別の色の境界線に達するとき、彼らが交わる線が斜めです。 これは、透明の枠線が色付きの枠線を斜めエッジになることを意味します。

この手法は、各傾斜エッジの外観を作る、ベゼルのそれぞれに適用されます。

ベゼルが回転し、前面の図の横にそれらを配置に適用される変換もあります。

## 詳細については

場所にコンピューターの主要な箱を Macintosh プラス、スクリーン、アイコン、ディスク ドライブなどのように見えるように様々 な詳細を追加できます。

前の図には、次の HTML が含まれています。

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

例/05 完了フォルダーに作業例を見つけることが。

### 画面

画面は、コンテナー、画面自体と上の「光沢」レイヤーを含む、いくつかの要素で構成されます。

この CSS はコンピューターの前面にくぼみを見えるようにする CSS のグラデーションと光沢スパン使用画面にいくつかの光沢を与えるためほとんど透明グラデーション。

### ロゴ

ロゴは 2 つの部分、イメージ、テキストの構成されます。 昔のカラフルなアップルのロゴの背景イメージが含まれるイメージの範囲とテキストの位置は横にあります。 これらの CSS はソース ファイルで見つけることができます。

右の一見を作成するには、埋め込みフォントが追加されます。 これは、CSS フォント フェイス プロパティを使用します。 これを行うに多くの方法がありますが、おそらく最も簡単なフォント ・ リスの @font-face ジェネレーターなどのサービスを使用して、次の CSS を作成します。

    @font-face {
      font-family: "apple_garamondregular";
      src: url("../fonts/apple_garamond-webfont.eot");
      src: url("../fonts/apple_garamond-webfont.eot?#iefix") format("embedded-opentype"), url("../fonts/apple_garamond-webfont.woff") format("woff"), url("../fonts/apple_garamond-webfont.ttf") format("truetype"), url("../fonts/apple_garamond-webfont.svg#apple_garamondregular") format("svg");
      font-weight: normal;
      font-style: normal;
    }

フォント ・ リス、プロジェクトに配置して示すように、CSS 内と呼ばれることができるさまざまなファイル (eot、woff など) を生成することによってことができます。

結果は、元に密接に一致するフォントです。

### フロッピー ドライブ

フロッピー ドライブは、単一の要素で CSS 境界線を使用して前面に設定されているように見える。 以下のような効果を作成する CSS

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

フロッピー ドライブには、固体灰色の背景色、および 4 つの境界線があります。 上の罫線は上から点灯しているように見えるように明るくされて下の枠線と暗いです。 最後に、境界線の半径は、角を丸めます。

## 一緒に作品を置く

各作品は、一緒に、置くときのようになります。

![Completed Mac Plus - examples/05-Completed/index.html](/images/posts/macplus/05-Completed.png)

## アニメーションを追加します。

かなり見えますが私たちが持っている、我々 は適切に移動させる、3 D オブジェクトであるという事実を表示できます。 CSS の使用を作ってこれを行うキーフレーム アニメーション。

CSS アニメーションの 2 種類があります。 複雑な一連のアニメーションのステップを表す別の 1 つのスタイルまたは位置からアニメーションのページ上の要素とキーフレーム、遷移します。

一連のキーフレームは、CSS の各ステップを説明すると、割合のシリーズとして記述できます。 それはこのような何かを見ることができます。

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

この例ではアニメーションが戻って来たりと呼ばれる、3 つのステップから成っています。 40 度の角度に回転を開始します。 その後、40% マークが回転してマイナス 40 度。 それは 50% までこの回転での滞在し、90% は元の位置に戻ってきた。

ブラウザーは、自動的にプロパティをアニメートすることによってギャップで塗りつぶします。 この場合それは回転の角度がアニメートされます。

### アニメーションを適用します。

このアニメーションに適用するには、CSS アニメーション タグを使用できます。

以下のようなアニメーション タグ

animation: back-and-forth 14s ease-in-out infinite;

いくつかの事はここで 1 つの行に結合されます。 14 秒の期間を示す、アニメーションを無期限に繰り返すに指示 (「戻って行ったり来たり」) 名前によってアニメーションを参照します。 イーズアウトの値は、してアニメーションを開始し、徐々 に終了するようブラウザーに指示する、緩和を指します。

このアニメーションを「位置決め」div に適用する何かの結果このような。

<div class="codepen" data-height="680" data-type="result" data-href="HGqjp" data-user="donovanh" data-safe="true"> </div>

## 我々 は何を学んだ

作成、CSS で 3 D オブジェクトをアニメーション化するのには、かなりの数のテクニックをカバーしました。 我々 は、視点と視点の原点を設定します。 それから、要素の位置を回転、移動および変換の使用より現実的な 3 D 効果を与えるために勾配を追加、ベベルと深さを作成するいくつかの CSS 境界線のトリックを使用します。 やっと CSS アニメーションのキーフレームとの生活の一場面を与えるために使用します。

### ブラウザーの互換性

すべてのブラウザーはまだ CSS 変換を処理できます。 Internet Explorer が奮闘するが、IE 11 にサポートに到着されるという希望があります。 クロム、サファリ、Firefox のすべての最近のバージョンは [ok] を行います。

Modernizr は、JavaScript ブラウザー機能を検出するツールのセットを提供し、ブラウザーが特定の CSS プロパティをサポートできない場合に代替コンテンツを表示するために使用できます。 コード例では、modernizr を活用を使用して、3 D 変換の存在を検出することにしましたがわかります。 彼らが存在しない場合、イメージが代わりに表示されます。

## 今後

技術がすることができます例は平均の web サイトで使用するかのような思えるかもしれないが、すべてのシナリオに適用されます。

たとえば、ページ遷移、イメージカルーセル、ロゴ、ボタン、少数を示すために深さを追加する CSS 変換を使用できます。 CSS アニメーション、トランジションへのフィネスをより興味深い動きを追加して使用でき、CSS のグラデーションがイメージを使用する必要のないページに深さを追加できます。

<script src="//codepen.io/assets/embed/ei.js"></script>
