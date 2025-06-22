---
show: true
width: 6
date: 2025-09-11 00:01:00 +0800
height: 295px
group: Demos
---

<div class="p-4">
    <h2>Welcome to Showcase!</h2>
    <hr />
    <p>
        <code>Showcase</code> is a page where you can show off almost anything you want. It can be the photo of your pets, your favorite books, your favorite projects, or anything else you want to show to the world.
    </p>
    <p>
        You can create a new showcase item by creating a new file in the <code>_showcase</code> folder. It gives you the highest flexibility to customize the item using any HTML code.
    </p>
    <p>
        Cards are ordered by the <code>date</code> field in the front matter in descending order. The <code>width</code> field is used to determine the width of the card, ranging from 1 to 12.
        Layout is done by the <a href="https://masonry.desandro.com/" target="_blank">Masonry</a> library.
    </p>
    <p>
        For a tidy layout, it is recommended to set the width of the cards to be either multiple of 3 or multiple of 4 for all cards, except for small badges that do not take up much space (width=1).
    </p>
    <div class="card-text overflow-auto" style="max-height: 100%; flex: 1;">
      <p>This part can scroll if there's a lot of content.</p>
      <p>Line 2</p>
      <p>Line 3</p>
      <p>Line 4</p>
      <p>Line 5</p>
      <p>Line 6</p>
      <p>Line 7</p>
      <p>Line 8</p>
      <p>Line 9</p>
      <p>Line 10</p>
    </div>
</div>



