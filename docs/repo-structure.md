# Repository Structure

The repo is organized around the four navigation sections plus shared static assets:

- [`index.html`](../index.html): homepage route
- [`awards/index.html`](../awards/index.html): awards page
- [`publications/index.html`](../publications/index.html): publications page
- [`demos/index.html`](../demos/index.html): demos page
- [`assets/css/site.css`](../assets/css/site.css): shared styling
- [`assets/js/site-data.js`](../assets/js/site-data.js): site content and page data
- [`assets/js/site.js`](../assets/js/site.js): shared rendering, navigation, and carousel logic
- [`assets/files/`](../assets/files): linked PDFs and downloadable files
- [`assets/images/`](../assets/images): portraits, covers, badges, and demo photos
- [`.vscode/`](../.vscode): Live Server recommendation and preview settings

GitHub Pages deployment is handled by [`jekyll.yml`](../.github/workflows/jekyll.yml), which now publishes the static files directly.
