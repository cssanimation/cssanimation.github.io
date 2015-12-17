---
layout: page_wide
title: CSS Animation Translations
customCSS: translations.css
externalJS: [//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js]
extraJS: [custom/world.js, custom/world-map.js]
---

TODO:

* World map with hover showing each country's status (if translations, link to the country page)
* Instructions (and screenshots / animation) on how to add translations

<section id="world-container" class="wide-container world-container">
  <div id="world-map" class="world-map"></div>
  <div id="tooltip" class="tooltip">Testing</div>
</section>

<section class="container page-content">
  {% for language in site.data.languages %}
  <h3><a href="/{{language.iso}}/">{{language.name}} ({{language.english_name}})</a></h3>
  <ul>
  {% for post in site.posts %}
    {% for post_language in post.languages %}
      {% if post_language.iso == language.iso %}
        {% if post_language.postTitle %}
          <li><a href="{{post_language.url}}">{{ post_language.postTitle }}</a></li>
        {% else %}
          <li><a href="{{post_language.url}}">{{ post.title }}</a></li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
  </ul>
  {% endfor %}
</section>

<section class="wide-container how-to-help">

## How you can help

Want to help translate the articles to your language? Here's how.

Look for the "Translate this Article" link on the sidebar of any article. Press it, and you'll be taken to the <a href="http://getnative.me">Native</a> service.

This service manages translations, and delivers the finished result to me so that I can make it live.

Thanks for your support!

*Translations powered by <a href="https://getnative.me"><img src="/images/getnative.png" height="28" style="width:auto" alt="native - Community powered translations"></a>*

</section>
