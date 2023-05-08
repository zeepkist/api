# GTR API

Fully typed TypeScript API client for the [GTR API](https://api.zeepkist-gtr.com).

Up-to-date with `v0.17.10` of the GTR API.

Download the GTR mod for Zeepkist in [Modkist](https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)) (Zeepkist's Mod Loader) or on [mod.io](https://zeepkist.mod.io/zeepkist-gtr)

## Usage

### CDN

```html
<script type="module">
  import { getRecords } from 'https://esm.run/@zeepkist/gtr-api'

  async function displayRecords() {
    const records = await getRecords({
      BestOnly: true
    })

    console.log(records) // { totalAmount: 700, records: [{ ... }] }
  }

  displayRecords()
</script>
```

### Deno

```js
import { getRecords } from 'https://esm.run/@zeepkist/gtr-api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```


### Node / Bundlers

#### Install dependencies

```sh
yarn add @zeepkist/gtr-api

# or with npm:
npm install @zeepkist/gtr-api
```

#### Import and use

```ts
import { getRecords } from '@zeepkist/gtr-api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```

To see all available exports and options, see the [package documentation](https://zeepkist.github.io/gtr-api).

## Contributing

### First-time Project Setup

```sh
yarn
yarn dlx @yarnpkg/sdks vscode
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run tests

```sh
yarn test
```

### Run tests with code coverage

```sh
yarn coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
