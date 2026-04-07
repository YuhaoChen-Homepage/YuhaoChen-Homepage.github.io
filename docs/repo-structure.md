# Repository Structure

The repo is organized around the four navigation sections plus shared static assets:

- [`index.html`](../index.html): homepage route
- [`awards/index.html`](../awards/index.html): awards page
- [`awards/awards-data.js`](../awards/awards-data.js): awards content
- [`publications/index.html`](../publications/index.html): publications page
- [`publications/publications-data.js`](../publications/publications-data.js): publications content
- [`setups/index.html`](../setups/index.html): setups page
- [`setups/setups-data.js`](../setups/setups-data.js): setups registry
- individual files in [`setups/`](../setups): one file per setup
- [`assets/css/site.css`](../assets/css/site.css): shared styling
- [`assets/js/site-data.js`](../assets/js/site-data.js): shared site metadata plus imports from section data files
- [`assets/js/site.js`](../assets/js/site.js): shared rendering, navigation, and carousel logic
- [`assets/files/`](../assets/files): linked PDFs and downloadable files
- [`assets/images/`](../assets/images): portraits, covers, badges, and demo photos
- [`.vscode/`](../.vscode): Live Server recommendation and preview settings

GitHub Pages deployment is handled by [`jekyll.yml`](../.github/workflows/jekyll.yml), which now publishes the static files directly.
