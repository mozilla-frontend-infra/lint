<p align="center">
  <h3 align="center">Lint</h3>

  <p align="center">
    Airbnb's ESLint config, following the Airbnb styleguide with Mozilla additions
  </p>
</p>

<br>

[![Build Status][travis-image]][travis-url]

## Requirements

- Node.js `^8.10 || >=10`
- Yarn or npm client
- Neutrino v9

## Features

- `@mozilla-frontend-infra/react-lint`:
  - Extends from [`@neutrinojs/airbnb`](https://master.neutrinojs.org/packages/airbnb)
  - For linting React and React Component-based projects
  - Highly visible during development, fails compilation when building for production
- `@mozilla-frontend-infra/node-lint`:
  - Extends from [`@neutrinojs/airbnb-base`](https://master.neutrinojs.org/packages/airbnb-base)
  - For linting Node.js-based projects
  - Highly visible during development, fails compilation when building for production
  
## Installation

Yarn is highly preferred for Mozilla Frontend Infra projects.

_Example: Installing the `react-lint` middleware:_

#### Yarn

```bash
❯ yarn add --dev @mozilla-frontend-infra/react-lint eslint-plugin-prettier
```

#### npm

```bash
❯ npm install --save-dev @mozilla-frontend-infra/react-lint eslint-plugin-prettier
```

[travis-image]: https://travis-ci.org/mozilla-frontend-infra/lint.svg?branch=master
[travis-url]: https://travis-ci.com/mozilla-frontend-infra/lint
