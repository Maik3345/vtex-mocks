# VTEX Mocks

[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE: END -->

[npm-link](https://www.npmjs.com/package/vtex-mocks)

## Usage

1. Install the package as a dev dependency:

```sh

yarn add vtex-mocks --dev

```

2. Add the command to setup the mocks:

```json
{
  "scripts": {
    "vtex-mocks": "vtex-mocks setup"
  }
}
```

3. Run the command:

```sh

yarn vtex-mocks

```

4. Add the command before the test command:

```json
{
  "scripts": {
    "test": "npm run vtex-mocks && jest"
  }
}
```

> The command will create the `__mocks__` folder if not exist and read the `package.json` devDependencies to generate the mocks in base of the used apps
