## Azury's Widget

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
  zIndex: 9999
})
```

### Usage

Check out the [examples](https://github.com/azurystudios/widget/tree/main/examples) to get an idea of how to use our widget.
