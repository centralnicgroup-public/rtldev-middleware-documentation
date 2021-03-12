---
layout: home
title: Home
nav_order: 1
permalink: /
---

# CentralNic Group PLC

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

<!-- markdownlint-disable -->
<div class="brands">
  {% for brand in site.data.brands %}
  <div class="card">
    <div class="card-logo-container">
      <img class="card-logo" src="{{ site.baseurl }}/assets/images/brands/{{ brand.name | downcase }}.png" alt="{{ brand.name }}" />
    </div>
    <div class="card-body">
      {% for feat in brand.features %}
        <span class="brand-feature">{{ feat.name }}</span>
        {% if feat.items %}
        <ul class="brand-feature-list">
          {% for item in feat.items %}
          <li>{{ item }}</li>
          {% endfor %}
        </ul>
        {% endif %}
      {% endfor %}
    </div>
    <div class="card-footer">
      <a href="{{ site.baseurl }}/docs/{{ brand.name | downcase }}" class="btn btn-primary">Read More</a>
      <a href="{{ brand.github }}" class="btn btn-primary" target="_blank">@GitHub</a>
    </div>
  </div>
  {% endfor %}
  <div class="cb"></div>
</div>
<!-- markdownlint-enable -->