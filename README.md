# GTR API

Fully typed TypeScript API client for the [GTR API](https://api.zeepkist-gtr.com/swagger) and [Zworpshop API](https://api.zworpshop.com/swagger).

Up-to-date with `v0.30.0` of the GTR API.

Download the GTR mod for Zeepkist in [Modkist](https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)) (Zeepkist's Mod Loader) or on [mod.io](https://zeepkist.mod.io/zeepkist-gtr)

## Usage

### CDN

```html
<script type="module">
  import { getRecords } from 'https://esm.run/@zeepkist/api'

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
import { getRecords } from 'https://esm.run/@zeepkist/api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```


### Node / Bundlers

#### Install dependencies

```sh
yarn add @zeepkist/api

# or with npm:
npm install @zeepkist/api
```

#### Import and use

```ts
import { getRecords } from '@zeepkist/api'

const records = await getRecords({
  BestOnly: true
})

console.log(records) // { totalAmount: 700, records: [{ ... }] }
```

To see all available exports and options, see the [package documentation](https://zeepkist.github.io/gtr-client).

### How to get a token

1. Redirect your user to `https://auth.zeepkist-gtr.com/external/login?redirectUrl={redirectUrl}` where `{redirectUrl}` is the URL you want to redirect the user to after they have logged in.

2. After the user has logged in, they will be redirected to `{redirectUrl}?token={token}` where `{token}` is a base64 encoded JSON object containing the user's token and other information.

3. Decode the object and use the `AccessToken` property to authenticate your requests.

4. The token is valid for a short period. Once the `AccessExpiry` time has passed, you will need to obtain a new token by sending a request to `https://auth.zeepkist-gtr.com/external/refresh?token={token}` where `{token}` is the `RefreshToken` from the decoded object in Step 3. The response will be a base64 encoded object containing the new `AccessToken`. If the `RefreshExpiry` time has passed, you will need to start the process again from Step 1.

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
