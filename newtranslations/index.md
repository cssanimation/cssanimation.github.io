---
layout: page_wide
title: CSS Animation Translations
customCSS: translations.css
externalJS: [//cdnjs.cloudflare.com/ajax/libs/raphael/2.1.4/raphael-min.js]
extraJS: [custom/world.js, custom/world-map.js]
---

<section class="container">

TODO:

- World map with hover showing each country's status (if translations, link to the country page)
- Instructions (and screenshots / animation) on how to add translations

<h3>Counting the articles</h3>

- Create a script template for each language containing the language identified by ISO, link to intl homepage and show how many are translated of the total

{% assign total_count = 0 %}
{% for post in site.posts %}
{% assign total_count = total_count | plus: 1 %}
{% endfor %}

Total articles: {{ total_count }}

{% for language in site.data.languages %}
{% assign count = 0 %}
{% for post in site.posts %}
{% for post_language in post.languages %}
{% if post_language.iso == language.iso %}
{% assign count = count | plus: 1 %}
{% endif %}
{% endfor %}
{% endfor %}
{{language.english_name}}: {{ count }}<br>
{% endfor %}

</section>

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
