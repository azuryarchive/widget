## Widget

### Setup

#### NPM

```sh-session
npm i @azury/widget
yarn add @azury/widget
```

```js
import widget from '@azury/widget'
```

#### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/@azury/widget@1"></script>
```

### Usage

```js
widget({
  theme: 'dark',
  placement: 'bottom right',
  uploadLimit: 20,
  zIndex: 9999
})
```

