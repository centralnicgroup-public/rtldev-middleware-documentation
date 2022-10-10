---
layout: home
title: Home
nav_order: 1
permalink: /
---

# CentralNic Group PLC

Find below CNIC Brands listed offering 3rd-party Software Integrations and Tools.

<!-- markdownlint-disable -->
<div class="brands">
  {% for brand in site.data.brands %}
  <div class="card">
    <div class="card-logo-container">
      {% capture logo %}assets/images/brands/{{ brand.name | downcase | remove:" " }}.png{% endcapture %}
      <img class="card-logo" src="{{ logo | relative_url }}" alt="{{ brand.name }}" />
    </div>
    <div class="card-body">
      {% if brand.subtitle %}
      <div class="card-subtitle text-center"><small>
      {{ brand.subtitle }}
      </small></div>
      {% endif %}
      {% for feat in brand.features %}
        {% if feat.items %}
        <span class="brand-feature">{{ feat.name }}</span>
        <ul class="brand-feature-list">
          {% for item in feat.items %}
            {% capture fc %}{{ item.url | slice: 0 }}{% endcapture %}
            {% if fc == "/" %}
              {% capture item_url %}docs{{ item.url }}{% endcapture %}
            {% else %}
              {% capture item_url %}docs/{{ brand.name | downcase | replace: " ", "" }}/{{ feat.url }}{{ item.url }}{% endcapture %}
            {% endif %}
            <li><a href="{{ item_url | relative_url }}">{{ item.name }}</a></li>
          {% endfor %}
        </ul>
        {% else %}
          {% capture fc %}{{ feat.url | slice: 0 }}{% endcapture %}
          {% if fc == "/" %}
            {% capture feat_url %}docs{{ feat.url }}{% endcapture %}
          {% else %}
            {% capture feat_url %}docs/{{ brand.name | downcase }}/{{ feat.url }}{% endcapture %}
          {% endif %}        
        <span class="brand-feature"><a href="{{ feat_url }}">{{ feat.name }}</a></span>
        {% endif %}
      {% endfor %}
    </div>
    <div class="card-footer">
      {% capture isprotocol %}{{ brand.url | slice: 0, 8 }}{% endcapture %}
      {% if isprotocol == "https://" %}
        {% capture brandlink %}{{ brand.url }}{% endcapture %}
      {% elsif brand.url %}
        {% capture brandlink %}docs/{{ brand.url }}/{% endcapture %}
      {% else %}
        {% capture brandlink %}docs/{{ brand.name | downcase | replace: " ", "" }}/{% endcapture %}
      {% endif %}      
      <a href="{{ brandlink | relative_url }}" class="btn btn-primary">Read More</a>
      {% if brand.github %}
      <a href="{{ brand.github }}" class="btn btn-primary" target="_blank">@GitHub</a>
      {% else %}
      <button type="button" class="btn btn-primary" disabled>@GitHub</button>
      {% endif %}
    </div>
  </div>
  {% endfor %}
  <div class="cb"></div>
</div>
<!-- markdownlint-enable -->