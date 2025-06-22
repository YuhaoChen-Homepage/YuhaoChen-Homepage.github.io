---
show: true
width: 4
date: 2025-09-11 00:01:00 +0800
height: 295px
group: Demos
---

<div>
  <h5 class="card-title">Image Lazyload</h5>
  <p class="card-text">
    It is highly recommended to use lazyload for images to improve page loading speed, especially for pages with many images.
    Example code snippet:
  </p>
  <p class="card-text">
    {% raw %}
    <code>&lt;img data-src=&quot;[Image URL]&quot; class=&quot;lazy w-100 rounded-sm&quot; src=&quot;{{ '/assets/images/empty_300x200.png' | relative_url }}&quot;&gt;</code>
    {% endraw %}
  </p>
</div>



