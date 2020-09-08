<p>
  <h1 align="center">mint-it</h1>
</p>

<p align="center">
  <a href="https://github.com/squeeble-ink/vscode.deco-it/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/squeeble-ink/vscode.mint-it?color=253550&logo=github&style=flat-square">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=squeeble.deco-it">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/squeeble.mint-it.svg?label=%20&style=flat-square&color=253550">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=squeeble.deco-it">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/squeeble.mint-it.svg?label=%20&style=flat-square&color=253550">
  </a>
  <br>
  <a href="https://code.visualstudio.com/" >vscode</a> comment highlighter : just comment it 
</p>

<h1></h1>

The comment higlighter `mint-it` came from our [`trepid-ink`](https://github.com/squeeble-ink/vscode.trepid-ink/edit/master/README.md)

## Features

### Custom comment highlights:

This extension contributes the following settings:

- `mint-it.delay`:  
  Delay it takes to style the comments  
  **NOTE:** Do not set it on 0!
- `mint-it.comments`:  
  `All` / `Block` / `Single` / `No`  
  Sets which comments you want to highlight
- `mint-it.tags`:  
  The ["style" can have all vscode theming](https://code.visualstudio.com/api/references/vscode-api#ThemableDecorationRenderOptions)  
  **NOTE:** tags are not case sensitive
  ```json
  "mint-it.tags": [
    {
      "style": {
        "color": "#6bf7f7"
      },
      "tag": "NOTE"
    },
    {
      "style": {
        "color": "#ff893a"
      },
      "tag": "TODO"
    },
    {
      "style": {
        "color": "#ff3333"
      },
      "tag": "FixMe"
    }
  ]
  ```

### Supported languages

- JavaScript
- JavaScriptReact
- TypeScript
- TypeScriptReact
- CSS
- CPP

### Examples

![mint-it-ts](./assets/deco-it-ts-100.png)  
![mint-it-js](./assets/deco-it-js-100.png)  
![mint-it-json](./assets/deco-it-css-100.png)  
![mint-it-json](./assets/deco-it-cpp-100.png)
