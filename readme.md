## Azury's Widget

[![npm](https://img.shields.io/npm/v/@azury/widget)](https://www.npmjs.com/package/@azury/widget)
[![npm](https://img.shields.io/npm/dt/@azury/widget)](https://www.npmjs.com/package/@azury/widget)
![https://www.jsdelivr.com/package/npm/@azury/widget](https://data.jsdelivr.com/v1/package/npm/@azury/widget/badge/rank?style=rounded)
![https://www.jsdelivr.com/package/npm/@azury/widget](https://data.jsdelivr.com/v1/package/npm/@azury/widget/badge?style=rounded)
[![GitHub last commit](https://img.shields.io/github/last-commit/azurystudios/widget)](https://github.com/azurystudios/widget)
[![GitHub issues](https://img.shields.io/github/issues-raw/azurystudios/widget)](https://github.com/azurystudios/widget/issues)
[![snyk vulnerabilities](https://snyk.io/test/github/azurystudios/widget/badge.svg)](https://snyk.io/test/github/azurystudios/widget)

### Installation

#### NPM

Install our widget using your favorite package manager.

```sh-session
npm i @azury/widget
yarn add @azury/widget
```

Import the package.

```js
import widget from '@azury/widget'
```

#### CDN

Install our widget using [jsDelivr](https://www.jsdelivr.com/).

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@azury/widget@1"></script>
```

Import the package.

```html
<script type="module">
  import widget from "https://cdn.jsdelivr.net/npm/@azury/widget@1"
</script>
```

### Setup

```js
widget({
  theme: 'dark',
  placement: 'bottom right',
  uploadLimit: 50,
  zIndex: 9999
})
```

### Usage

Check out the [examples](https://github.com/azurystudios/widget/tree/main/examples) to get an idea of how to use our widget.
