---
layout: page
title: Article translations
---

{% for language in site.data.languages %}

  <h3><a href="/{{language.iso}}/">{{language.name}} ({{language.english_name}})</a></h3>
  <ul>
  {% for article in site.data.translations %}
    {% for article_language in article.translations %}
      {% if article_language.iso == language.iso %}
        {% if article_language.postTitle %}
          <li><a href="/{{language.iso}}{{article.url}}">{{ article_language.postTitle }}</a></li>
        {% else %}
          <li><a href="/{{language.iso}}{{article.url}}">{{ post.language }}</a></li>
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endfor %}
  </ul>
{% endfor %}
