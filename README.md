# mint-it

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
