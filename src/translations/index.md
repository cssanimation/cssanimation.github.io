---
layout: page.njk
title: Article translations
permalink: /translations/
---

{% if languages and translations %}
  {% for language in languages %}
    {% set hasTranslations = false %}
    {% for article in translations %}
      {% for article_language in article.translations %}
        {% if article_language.iso == language.iso %}
          {% set hasTranslations = true %}
        {% endif %}
      {% endfor %}
    {% endfor %}
    
    {% if hasTranslations %}
      <h3><a href="/{{ language.iso }}/">{{ language.name }} ({{ language.english_name }})</a></h3>
      <ul>
      {% for article in translations %}
        {% for article_language in article.translations %}
          {% if article_language.iso == language.iso %}
            {% if article_language.postTitle %}
              <li><a href="/{{ language.iso }}{{ article.url }}">{{ article_language.postTitle }}</a></li>
            {% else %}
              <li><a href="/{{ language.iso }}{{ article.url }}">{{ article.url }}</a></li>
            {% endif %}
          {% endif %}
        {% endfor %}
      {% endfor %}
      </ul>
    {% endif %}
  {% endfor %}
{% else %}
  <p>Translation data is currently being loaded...</p>
{% endif %}
