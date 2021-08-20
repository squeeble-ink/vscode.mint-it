<p align="center">
  <img src="./assets/logo.png" width="100px"><br>
</p>

<h1 align="center">Mint it</h1>

<p align="center">
  <a href="https://github.com/squeeble-ink/vscode.mint-it/issues">
    <img alt="GitHub issues" src="https://img.shields.io/github/issues/squeeble-ink/vscode.mint-it?color=253550&logo=github&style=flat-square">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=squeeble.mint-it">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/squeeble.mint-it.svg?label=%20&style=flat-square&color=253550">
  </a>
  <a href="https://marketplace.visualstudio.com/items?itemName=squeeble.mint-it">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/squeeble.mint-it.svg?label=%20&style=flat-square&color=253550">
  </a>
  <br>
  <a href="https://code.visualstudio.com/" >vscode</a> comment highlighter : just comment it 
</p>

<h1></h1>
<h1></h1>

<p align="center">
  previous known as
</p>

<h1 align="center">Trepid ink</h1>

<p align="center">
    <img src="https://vsmarketplacebadge.apphb.com/version-short/squeeble.trepid-ink.svg?label=%20&style=flat-square&color=253550">
    <img src="https://vsmarketplacebadge.apphb.com/installs-short/squeeble.trepid-ink.svg?style=flat-square&color=253550"><br>
    <a href="https://github.com/squeeble-ink/vscode.trepid-ink/edit/master/README.md"><code>trepid-ink</code></a> is the predecessor of this comment highlighter <code>mint-it</code><br>
    <code>trepid-ink</code> is <b>deprecated</b>
</p>

## Features

### Custom comment highlights:

This extension contributes the following settings:

- `mint-it.delay`:  
  Delay it takes to style the comments  
  **NOTE:** Do not set it on 0!
- `mint-it.comments`:  
  `All` / `Block` / `Single` / `JSDocs` / `None`  
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
      "tags": [
        "NOTE",
        "INFO"
      ]
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

- C
- CPP / INO / C++
- C Sharp / C#
- CSHTML / ASP .NET Core Razor
- CSS
- Dockerfile
- Go
- GraphQL
- Java
- JavaScript / JS
- JavaScriptReact / JSX
- Jsonc
- Kotlin
- Less
- PHP
- Python
- Sass
- Scss
- TypeScript / TS
- TypeScriptReact / TSX
- Vue
- YAML

### Examples

![mint-it-ts](./assets/mint-it-ts-100.png)  
![mint-it-js](./assets/mint-it-js-100.png)  
![mint-it-css](./assets/mint-it-css-100.png)  
![mint-it-cpp](./assets/mint-it-cpp-100.png)  
![mint-it-css](./assets/mint-it-html-100.png)
