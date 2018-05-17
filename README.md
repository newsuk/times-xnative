# The Times Component Library

TODO - Add badges back when we have a CI environment up

### Purpose

Home of The Times' `react native` pages shared between the iOS and Android app that doesn't belong to [Times Components](https://www.github.com/newsuk/times-components)

### Dev Environment

We require MacOS with [Node.js](https://nodejs.org) (version >=8 with npm v5), and [yarn](https://yarnpkg.com) (latest) installed.
You can try without these requirements, but you'd be on your own.

## Getting Started

1. Run `yarn` to install dependencies

### Android

1. Run `yarn android` to start development server
2. Run `yarn android:bundle` to prepare a release bundle

### iOS

1. Run `yarn ios` to start development server
2. Run `yarn ios:bundle` to prepare a release bundle

## Contributing

See the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for an extensive breakdown of
the project.

`yarn commit` will commit files (same as `git commit`), and will aid the
contributor with adding a suitable commit message inline with
[conventional changelog](https://github.com/commitizen/cz-cli)
