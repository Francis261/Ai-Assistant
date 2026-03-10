# Installation

Source: https://devdocs.io/webpack~5/guides/installation

This guide goes through the various methods used to install webpack.

## Prerequisites

Before we begin, make sure you have a fresh version of Node.js installed. The current Long Term Support (LTS) release is an ideal starting point. You may run into a variety of issues with the older versions as they may be missing functionality webpack and/or its related packages require.

## Local Installation

The latest webpack release is:

To install the latest release or a specific version, run one of the following commands:

```
npm install --save-dev webpack
# or specific version
npm install --save-dev webpack@<version>
```

If you're using webpack v4 or later and want to call webpack from the command line, you'll also need to install the CLI.

```
npm install --save-dev webpack-cli
```

Installing locally is what we recommend for most projects. This makes it easier to upgrade projects individually when breaking changes are introduced. Typically webpack is run via one or more npm scripts which will look for a webpack installation in your local node_modules directory:

```
"scripts": {
  "build": "webpack --config webpack.config.js"
}
```

## Global Installation

The following NPM installation will make webpack available globally:

```
npm install --global webpack
```

## Bleeding Edge

If you are enthusiastic about using the latest that webpack has to offer, you can install beta versions or even directly from the webpack repository using the following commands:

```
npm install --save-dev webpack@next
# or a specific tag/branch
npm install --save-dev webpack/webpack#<tagname/branchname>
```

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/installation
