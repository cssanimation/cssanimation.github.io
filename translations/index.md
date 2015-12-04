---
layout: page
title: Article translations
---

*Translations powered by <a href="https://getnative.me"><img src="/images/getnative.png" height="28" style="width:auto" alt="native - Community powered translations"></a>*


<h3><a href="/cn/">العربية (Arabic)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'ar' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/cn/">中国 (Chinese)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'cn' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/de/">Deutsch (German)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'de' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/fr/">Français (French)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'fr' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/jp/">日本語 (Japanese)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'jp' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/pl/">Nederlands (Dutch)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'nl' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/pl/">Português (Portuguese)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'pt' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/pl/">Polski (Polish)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'pl' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>

<h3><a href="/tr/">Türkçe (Turkish)</a></h3>
<ul>
{% for post in site.posts %}
{% for language in post.languages %}
  {% if language.iso == 'tr' %}
    {% if language.postTitle %}
      <li><a href="{{site.url}}{{language.url}}">{{ language.postTitle }}</a></li>
    {% else %}
      <li><a href="{{site.url}}{{language.url}}">{{ post.title }}</a></li>
    {% endif %}
  {% endif %}
{% endfor %}
{% endfor %}
</ul>


## How you can help

Want to help translate the articles to your language? Here's how.

Look for the "Translate this Article" link on the sidebar of any article. Press it, and you'll be taken to the <a href="http://getnative.me">Native</a> service.

This service manages translations, and delivers the finished result to me so that I can make it live.

Thanks for your support!
