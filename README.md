# Yuhao Chen Homepage

Source for [yuhaochen-homepage.github.io](https://yuhaochen-homepage.github.io/).

## Main Sections

- [`index.html`](index.html): home
- [`publications/index.html`](publications/index.html): publications
- [`demos/index.html`](demos/index.html): demos
- [`awards/index.html`](awards/index.html): awards

This repo is now a plain static site built with HTML, CSS, and JavaScript only. There is no Ruby, Jekyll, Node, or Docker requirement for local preview.

## Local Preview In VS Code

1. Install the `Live Server` VS Code extension.
2. Open this repository in VS Code.
3. Open [`index.html`](index.html).
4. Click `Go Live` in the VS Code status bar.
5. Open [http://127.0.0.1:5500/](http://127.0.0.1:5500/).

The workspace includes:

- [`extensions.json`](.vscode/extensions.json): recommends `Live Server`
- [`settings.json`](.vscode/settings.json): pins the preview port to `5500`
- [`launch.json`](.vscode/launch.json): opens the local preview URL in Chrome

More details:

- [`docs/local-development.md`](docs/local-development.md)
- [`docs/repo-structure.md`](docs/repo-structure.md)
