---
layout: post
bodyClass: shorter
rtl: true
title: بايماكس ب CSS
description: نسخة محركة ذات عنصر واحد لوجه شخصية بايماكس (Baymax) من بيج هيرو 6 (Big Hero 6).
categories: [animation, tips, animations, transitions, pseudo-elements]
customCSS: baymax.css
imageURL: /assets/images/posts/baymax/baymax.gif
home_image: /assets/images/posts/baymax/home.png
tweet_text: تحريك وجه بايماكس بواسطة CSS
source: https://raw.githubusercontent.com/cssanimation/posts/master/2015-02-18-baymax.md
translator: Mohammed Alozaibi
translator_link: https://twitter.com/malozaibi_coder
---

لنستخدم CSS لعمل شخصية بايماكس من فلم بيج هيرو 6.

في هذه المقالة سوف أقوم بتحريك صورة الخلفية (background image) وبالإضافة الى مؤثر توقيت لعمل حركة رقيقة و عمل نموذج ل CSS من عنصر HTML واحد.

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

يمكنك مشاهدة [العمل بشاشة كاملة هنا](http://codepen.io/donovanh/full/ZYaMjw/).

## عنصر واحد

باستخدام أشباه العناصر (pseudo-elements) سوف نتمكن من عمل أجزاء الوجه باستخدام عنصر HTML واحد فقط. 
 

    <div class="baymax"></div>


## التنسيقات

لتعيين الخلفية سنضيف تدرج (gradient) خفيف إلى الشاشة لجعلها تبدو مثل رأس منحني ابيض. لذلك سوف نستخدم تدرج دائري (radial-gradient) على عنصر `body`.
 

    body {
      background: radial-gradient(center, #fff, #fff 50%, #aaa);
      background-size: 100%;
      background-repeat: no-repeat;
      height: 100vh;
    }


التالي سوف نقوم بوضع الوجه في وسط الصفحة (توسيط). الفم عبارة عن خط اسود بسيط وسنقوم بعمله بواسطة حد (border).
 

    .baymax {
      border-bottom: 1.5em solid #000;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 50%;
      transform: translate(-50%, -40%);
    }


الخاصية الأولى تعين حد أسود بعرض حجمة `1.5em`. بقية الخواص تقوم بتوسيط الخط (الفم) بأستخدام التموضع المطلق (absolute positioning)، دافعة العنصر&nbsp;50%&nbsp;نحو الاسفل و50% من اليسار الى اليمين. هذه القيمة 50% مرتبطة بمساحة&nbsp;الحاوية وفي هذه الحالة هي العنصر الأب&nbsp;(`body`).

المشكلة التي لدينا الآن هي أن العنصر يبدأ من منتصف الشاشة من الأعلى ومن المنتصف أيضاً من جهة اليسار عرضاً. أي أنه ليس متوسط الشاشة بل يبدأ من المنتصف.

للتعويض عن هذا، سوف نستخدم خاصية التحويل (transform) لسحب العنصر 50% من عرضه إلى جهة اليسار و 40% من طوله إلى الأعلى.

وفي هذه المرحلة يتم توسيط الفم كالتالي:

<section class="demo-container baymax-container"><span class="baymax no-pseudo-elements"></span></section>

## إضافة العينين

سوف نستفيد من أشباه العناصر `before` و `after` لإضافة العينين إلى الوجه. ولن نحتاج إلى عناصر HTML أخرى لان CSS تتحكم بذلك كاملاً.
 

    .baymax::before {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      left: -9em;
      top: -6em;
      transform: skewX(-4deg);
    }

    .baymax::after {
      background: #000;
      border-radius: 50%;
      content: "";
      position: absolute;
      width: 12em;
      height: 12em;
      right: -9em;
      top: -6em;
      transform: skewX(4deg);
    }


كل عنصر من أشباه العناصر يحتوي على خلفية سوداء وأنحناء لحدوده (border-radius) قطرة 50% لجعله دائرياً. نقوم بوضع كل منهم عند نهاية الفم، وأخيراً تحويل الإمالة `skew` لجعل العين تبدو وكأنها مائلة إلى الوراء قليلاً. يجب أن تبدو النتيجة هكذا:

<section class="demo-container baymax-container"><span class="baymax no-animation"></span></section>

## البطارية منخفضة

هناك مشهد مضحك في الفيلم حيث بطارية بايماكس تبدأ بالانخفاض. بحيث يترنح وجفنيه تتدلى. يمكننا أستخدام تركيبه من خلفيات متدرجة (background-gradient) وبعض التحريك (animation) لصنع التأثير.

أولاً سنعطي الخلفية لونين. أسود لجزء العين المفتوح وأبيض للجفن. الجزء الأبيض يحتاج إلى وضعه خارج العين في البداية، ثم سوف نحركه لجعل الجفن يتدلى نعساً.
 

    .baymax::before {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }

    .baymax::after {
      background: linear-gradient(to bottom, #efefef, #efefef 50%, #000 50%, #000);
      background-position: 0 -100%;
      background-size: 200%;
      ...
    }


نقوم بإضافة خلفية خطية متدرجة (linear-gradient) وجعلها ضعف ارتفاع الحاوية، ثم تحديد موضعه (position) بحيث يكون النصف العلوي خارج الحاوية.

مع الخلفيات المتدرجة جاهزة، يمكننا أضافة `keyframes` للحركة (animation) للتحكم بتحرك الجفون.
 

    @keyframes blink {
      0%, 50% {
        background-position: 0 100%;
      }
      85%, 95% {
        background-position: 0 75%;
      }
      100% {
        background-position: 0 100%;
      }
    }


إطارات الحركة `keyframes` عبارة عن شرح سلسلة من الإطارات باستخدام نسبة مئوية. النسبة المئوية مرتبطة بالمدة الزمنية للحركة وكم بالمئة انقضى منها. لهذا نسبة مئوية تقدر ب 50% تعني أن الحركة قد أنقضى نصفها أي منتصف الحركة.

وبهذه الطريقة يمكننا ضبط الخلفية للبقاء حتى منتصف المدة، ثم بين 50% و 85% تتحرك إلى الأسفل، ثم تعود بسرعة ألى مكانها في نهاية الحركة.

الخطوة التالية هي أن نخبر أشباه العناصر أن تستخدم هذه الحركة من خلال أسم ال keyframes. وذلك بإضافة خاصية `animation` إلى التنسيقات الموجودة.
 

    .baymax::before {
      animation: blink 6s infinite;
      ...
    }

    .baymax::after {
      animation: blink 6s 0.1s infinite;
      ...
    }


هنا نخبر المتصفح بأن يستخدم حركة `blink` على كل عنصر. نحدد زمن الحركة ليكون ستة ثوان وجعل الحركة تعيد نفسها لانهائياً.

خاصية أخرى مضافة في المثال الثاني. قيمة `0.1s` بعد قيمة&nbsp;`6s` تخبر المتصفح ليتأخر عن الحركة لمدة 0.1 ثانية. هذا يخلق تأثيراً بأن تغلق العين الثانية بعد العين الأولى بمدة طفيفة. هذا يضيف إلى الحركة تأثير العين المرهقة النعسة وجعلها تبدو أكثر آنسانية. النتيجة النهائية يجب أن تبدو مثل هكذا:

<section class="demo-container baymax-container"><a href="http://codepen.io/donovanh/full/ZYaMjw/" class="baymax"></a></section>

يمكنك [رؤية التأثير على شاشة كاملة](http://codepen.io/donovanh/full/ZYaMjw/).

## المتصفحات

في أمثلة التعليمات البرمجية (الأكواد)، لم أكتب أي من البادئات المعروفة (prefixes) مثل `-webkit-` و `-moz-`. خاصيتي `transform` و `animation` يجب أن يكتبوا مع البادئات، وأنا أقترح أستخدام شيئ مثل Autoprefixer لعمل هذا تلقائياً. 

## صيغة gif قابلة للمشاركة

هنا نسخة gif متحركة يمكنك بسهولة مشاركتها على الإنترنت.

[<img src="/assets/images/posts/baymax/baymax.gif" style="max-width:225px" />](/assets/images/posts/baymax/baymax.gif)

