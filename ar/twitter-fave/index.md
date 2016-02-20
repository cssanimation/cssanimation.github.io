---
layout: post
bodyClass: shorter
rtl: true
title: "حركة ايقونة التفضيل على تويتر"
description: إكتشف كيفية عمل حركه جميله لزر التفضيل فى تويتر بإستخدام خاصية التوقيت CSS steps().
categories: [animation, tips, transition, steps]
customCSS: twitter_fave.css
imageURL: /images/posts/steps/twitter_fave_rectangle.png
home_image: /images/posts/steps/home.png
translators:
  - name: Shehab Eltawel
    url: https://twitter.com/@shehab_eltawel
  - name: Mac Alnakari
    url: https://getnative.me
---

حدثت تويتر مؤخراً تصميم زر التفضيل الخاص بها وقدمت حركة جديدة لهذا الزر. بدلاً من الإعتماد على خاصية CSS transition، الحركة تستخدم سلسله من الصور. اليكم كيفية انشاء الحركة بأستخدام خاصية التوقيت `steps` في&nbsp;CSS

## وهم الحركة

هذا التأثير مشابه لأجهزة [Zoetrope](http://en.wikipedia.org/wiki/Zoetrope) القديمة، والتى قدمت أعداد من الرسوم بشكل سلسلة حول إسطوانة. بدلاً من إسطوانة، في هذا الدرس سوف نظهر عدد من الصور المسطحة بداخل عنصر.

## عرض توضيحي

قِف على النجمه لترى الحركة.

<section class="fave demo-container tap-to-activate"></section>

فى هذا المثال سوف نبدأ بإنشاء عدد من الصور التى سنصنع منها الحركة. هنا سنقوم بإستخدام جزء من مجموعة الصور من حركة رمز التفضيل الخاص بتويتر:

<img src="/images/posts/steps/twitter_fave_rectangle.png" alt="Frames from Twitter's fave icon animation" style="max-width:256px" />

لتحريك هذه الإطارات، يجب علينا صفها على سطر واحد. [هذا الملف[ يحتوى على هذه الإطارات موضوعة على سطر واحد، مما يتيح لنا الإمكانية بالإنتقال من الإطار الأول إلى الإطار الأخير عن طريق تحديد موضع الخلفية.

<img src="/images/posts/steps/frames.png" alt="How the background images are positioned within an element" style="max-width:514px" />

### دالة التوقيت&nbsp;()Steps

كما هو الحال مع معظم دوال التوقيت مثل ease أو cubic-bezier،&nbsp;الانتقال يتم بسلاسة بين البداية والنهاية. ولكن دالة التوقيت `steps` مختلفة. بدلاً من الإنتقال بسلاسة، تقوم هذه الدالة بتقسيم الإنتقال الى عدد من الخطوات والتحرك بشدة بين كل خطوة.

<img src="/images/posts/steps/steps.png" alt="How the steps function is illustrated on a graph, as a series of discrete steps" style="max-width:362px" />

بدايةً، سنقوم بإنشاء الـ HTML


    <section class="fave"></section>

### الصورة الخلفية

والأن يمكننا تعديل التصميم بعض الشيء ووضع الصورة الخلفية:

![Image sprite for the animation](/images/posts/steps/twitter_fave.png)


    .fave {
      width: 70px;
      height: 50px;
      background: url(images/twitter_fave.png) no-repeat;
      background-position: 0 0;
    }

سنضيف صيغة الـ&nbsp;`hover`، وذلك يكون عندما نقرر إن على موضع الخلفيه أن يتحرك الى نهاية سلسلة الصور:


    .fave:hover {
      background-position: -3519px 0;
      transition: background 1s steps(55);
    }

لاحظ القاعده الثانيه، تحدد الـ&nbsp;`transition` . فى هذه الحاله نحن نريد نقل خاصية الخلفيه، وتفعيل الإنتقال لمدة ثانيتين، بإستخدام خاصية التوقيت `steps`. جزء ال `steps` يشمل على القيمه `55`، كأن هناك 55 إطار فى هذه الحركه.

التأثير هو انه عندما نقف على العنصر، يقفز خلال الإنتقال فى 55 خطوه متساويه.

### لماذا لا نستخدم gif&nbsp;؟

صور ال gifs المتحركه ممكن ان تحتمل استخدامها ولكن فى هذه الحاله لن تكون خياراً مثالياً. حجم الملف بشكل عام سيصبح اسوأ ومعدل الإطار سيصبح من الصعب التحكم به. بهذه الطريقه نحن نستطيع ان نوقف, نعيد أو نصنع كل أنواع التعديلات الخاصه بالحركه بإستخدام CSS.

## إستخدامات أخرى لـ &quot;()steps&quot;

تحريك مجموعة من الرسومات فى صورة واحدة هو&nbsp;واحد من استخدامات دالة التوقيت&nbsp;`steps`. أى شىء يتطلب تحريكه فى عدد من الخطوات المنفصله هو خيار جيد جداً لهذه الدالة. فمن الممكن&nbsp;على سبيل المثال&nbsp;أستخدامها لإنشاء ساعه تدق.

## لوحة المساعدة

إذا استمتعت بهذا المقال، بإمكانك [مشاركته على تويتر](https://twitter.com/intent/tweet?text=Recreate%20the%20Twitter%20fave%20icon%20animation&url=https://cssanimation.rocks/post/twitter-fave/&original_referer=https://cssanimation.rocks) أو حفظ هذا الموجز المفيد.

<img src="/tips/twitter-fave.png" alt="Share this summary on Twitter" style="max-width:375px" />
