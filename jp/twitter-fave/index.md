---
layout: post
bodyClass: shorter
title: Twitter の「お気に入り」アニメーション
description: どのようにして Twitter の派手な新しい「お気に入り」アニメーションが CSS の steps() timing function を用いて動いているのか、考えてみましょう。
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-01-17-twitter-fave.md
home_image: /images/posts/steps/home.png
translator: sei0o
translator_link: https://getnative.me/user/3625
english_version: /twitter-fave/
---

最近 Twitter は「お気に入り」(「ふぁぼ」としても有名) のデザインを変更、新しいアニメーションを取り入れました。 CSS transitions よりも、アニメーションは画像の羅列を活用できます。 そこで、 アニメーションを CSS animation の steps timing function を用いて作り直す方法を示します。

## 動きの錯覚

その効果は、円筒の周りに順番に絵が出てくる、昔の[回転覗き絵](http://en.wikipedia.org/wiki/Zoetrope)と似ています。 円筒の代わりに、私たちは要素の中に平らな画像の羅列を表示します。

## デモ

星をホバーしてアニメーションを見られます:

<section class="fave demo-container tap-to-activate"></section>

この例ではアニメーションを構成する画像の羅列を作ることから始めます。 今回は、 Twitter のお気に入りアニメーションの画像のセットを使います。

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

このフレームをアニメーションするために、私たちはフレームを一行にまとめる必要があります。 [このファイル[にまとめてあります。こうすることで、背景の位置を調整して最初から最後のフレームまで移動できるようになります。

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### Steps() timing function

ease や cubic-bezier などの大半の timing function は、初めから終わりの状態までなめらかにアニメーションします。 しかし、 `steps` timing function は違います。 なめらかな変化の代わりに、アニメーションを各ステップに分割し、変化を急にします。

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

はじめに、 HTML を用意します。

```html
<section class="fave"></section>
```

### 背景画像

少しのスタイリングと背景画像の位置の調整を加えることができます。

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)

```css
.fave {
  width: 70px;
  height: 50px;
  background: url(images/twitter_fave.png) no-repeat;
  background-position: 0 0;
}
```

`hover` ステートが追加されると、画像の羅列の最後に背景の位置が移動されるよう指定します。

```css
.fave:hover {
  background-position: -3519px 0;
  transition: background 1s steps(55);
}
```

`transition` を指定する二つ目の規則に注意してください。 この場合、背景のプロパティを1秒で、`steps` timing function を用いて変化させます。 `steps` は `55` という値を含んでいるので、アニメーションは55のフレームを持つことになります。

要素をホバーすると、55の等しいステップで変化します。

### どうして GIF を使わないの?

アニメーション GIF は利用できるかもしれませんが、この場合にはあまり適さないでしょう。 ファイルサイズは大きく、かつフレームレートの操作は難しいからです。 しかし、CSS のアニメーションを使えば、アニメーションを一時停止したり巻き戻したり、様々な調整ができます。

## steps() の他の使い道

背景スプライトのアニメーションは `steps` timing function の使い道の一つに過ぎません。 個々の段階でアニメーションする必要のあるすべてのものに適しています。 例えば、アナログ時計の作成に用いることができます。

## チートシート

この記事を楽しんでいただけたなら、 [Twitter でシェア](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks)やチートシートの保存ができます:

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />

