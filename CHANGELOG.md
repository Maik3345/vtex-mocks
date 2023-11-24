# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.0] - 2023-11-23

### Added

- ✅ implement typescript on the project
- ✅ move the mocks to the `__mocks__/app` folder
- ✅ create the `vtex-mocks` command to generate the mocks in base of the package.json devDependencies, to use run `yarn vtex-mocks setup` or `npm run vtex-mocks setup` on the root of the project, this command will create the `__mocks__` folder if not exist.
- pending -- add the `vtex-mocks utils` command to copy the mocks from the `__mocks__/utils` folder to the `__mocks__` folder on the root of the project

## [1.1.0] - 2023-11-23

### Added

- ✅ add the initial mocks from the app `vtex.store-components` on github [link](https://github.com/vtex-apps/store-components/tree/master)
