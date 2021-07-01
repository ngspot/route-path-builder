<p align="center">
 <img width="20%" height="20%" src="./logo.svg">
</p>

<br />

[![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg?style=flat-square)]()
[![commitizen](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)]()
[![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)]()
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
[![ngneat-lib](https://img.shields.io/badge/made%20with-%40ngneat%2Flib-ad1fe3?logo=angular)](https://github.com/ngneat/lib)
[![spectator](https://img.shields.io/badge/tested%20with-spectator-2196F3.svg?style=flat-square)]()
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Declarative Route Path Management in Angular Apps

This library consists of a single abstract class: `RoutePathBuilder`. See [this article](#) to learn how to use it!

## Features

- ✅ < 3kb bundle size
- ✅ A single source of truth for each path in the application
- ✅ Strong typings
- ✅ Access to Angular's dependency injection
- ✅ Use of absolute links (meaning, the generated links are absolute)
- ✅ Modularity
- ✅ Use of property chaining to reflect the nested nature of the routes
- ✅ Use of relative URL parts for the assembly of the URLs.
- ✅ Flexible return type

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [FAQ](#faq)

## Installation

### NPM

`npm install @ngspot/route-path-builder --save`

### Yarn

`yarn add @ngspot/route-path-builder`

## Usage

```ts
// app-routes.ts
import { RoutePathBuilder } from '@ngspot/route-path-builder';

@Injectable({ providedIn: 'any' })
export class AppRoutes extends RoutePathBuilder {
  products = this.childRoutes('products', RoutesForProducts);

  about() {
    return this.url('about');
  }

  contact() {
    return this.url('contact');
  }
}

// routes-for-products.ts
@Injectable({ providedIn: 'any' })
export class RoutesForProducts extends RoutePathBuilder {
  orders() {
    return this.url('orders');
  }
}
```

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

<div>Icons made by <a href="http://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
