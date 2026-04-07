# Local Development

This site is a plain static website. Local preview only needs VS Code plus the `Live Server` extension.

## Recommended Setup

1. Install the `Live Server` extension in VS Code.
2. Open this repository in VS Code.
3. Open [`index.html`](../index.html).
4. Click `Go Live` in the VS Code status bar.
5. Visit [http://127.0.0.1:5500/](http://127.0.0.1:5500/).

The workspace already includes:

- [`extensions.json`](../.vscode/extensions.json): recommends `Live Server`
- [`settings.json`](../.vscode/settings.json): pins the preview port to `5500`
- [`launch.json`](../.vscode/launch.json): opens the local preview URL in Chrome

## Route Guide

- Home: [http://127.0.0.1:5500/](http://127.0.0.1:5500/)
- Publications: [http://127.0.0.1:5500/publications/](http://127.0.0.1:5500/publications/)
- Setups: [http://127.0.0.1:5500/setups/](http://127.0.0.1:5500/setups/)
- Awards: [http://127.0.0.1:5500/awards/](http://127.0.0.1:5500/awards/)

## Troubleshooting

- If `Go Live` does not appear, make sure the `Live Server` extension is installed and enabled.
- If another app is already using port `5500`, change the value in [`settings.json`](../.vscode/settings.json).
- This repo no longer depends on Jekyll, Ruby, Docker, or any build tool for preview.
