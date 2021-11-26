# Azury's Widget

## Installation

### NPM

Install the widget using your favorite package manager.

```sh-session
npm i @azury/widget
yarn add @azury/widget
```

```js
import widget from '@azury/widget'
```

### CDN

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@azury/widget@1"></script>
```

```html
<script type="module">
  import widget from "https://cdn.jsdelivr.net/npm/@azury/widget@1"
</script>
```

## Setup

```js
widget({
  theme: 'dark',
  placement: 'bottom right',
  uploadLimit: 50,
  zIndex: 9999
})
```

## Usage

Check out the [examples](https://github.com/azurystudios/widget/tree/main/examples) to get an idea of how to use our widget.
