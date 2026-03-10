# Integrating with Build Tools

Source: https://devdocs.io/typescript/docs/handbook/integrating-with-build-tools

Was this page helpful?

# Integrating with Build Tools

## Babel

### Install

```
npm install @babel/cli @babel/core @babel/preset-typescript --save-dev
```

### .babelrc

```
{
  "presets": ["@babel/preset-typescript"]
}
```

### Using Command Line Interface

```
./node_modules/.bin/babel --out-file bundle.js src/index.ts
```

### package.json

```
{
  "scripts": {
    "build": "babel --out-file bundle.js main.ts"
  },
}
```

### Execute Babel from the command line

```
npm run build
```

## Browserify

### Install

```
npm install tsify
```

### Using Command Line Interface

```
browserify main.ts -p [ tsify --noImplicitAny ] > bundle.js
```

### Using API

```
var browserify = require("browserify");
var tsify = require("tsify");

browserify()
  .add("main.ts")
  .plugin("tsify", { noImplicitAny: true })
  .bundle()
  .pipe(process.stdout);
```

More details: smrq/tsify

## Grunt

### Using grunt-ts (no longer maintained)

#### Install

```
npm install grunt-ts --save-dev
```

#### Basic Gruntfile.js

```
module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      default: {
        src: ["**/*.ts", "!node_modules/**/*.ts"],
      },
    },
  });
  grunt.loadNpmTasks("grunt-ts");
  grunt.registerTask("default", ["ts"]);
};
```

More details: TypeStrong/grunt-ts

### Using grunt-browserify combined with tsify

#### Install

```
npm install grunt-browserify tsify --save-dev
```

#### Basic Gruntfile.js

```
module.exports = function (grunt) {
  grunt.initConfig({
    browserify: {
      all: {
        src: "src/main.ts",
        dest: "dist/main.js",
        options: {
          plugin: ["tsify"],
        },
      },
    },
  });
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", ["browserify"]);
};
```

More details: jmreidy/grunt-browserify, TypeStrong/tsify

## Gulp

### Install

```
npm install gulp-typescript
```

### Basic gulpfile.js

```
var gulp = require("gulp");
var ts = require("gulp-typescript");

gulp.task("default", function () {
  var tsResult = gulp.src("src/*.ts").pipe(
    ts({
      noImplicitAny: true,
      out: "output.js",
    })
  );
  return tsResult.js.pipe(gulp.dest("built/local"));
});
```

More details: ivogabe/gulp-typescript

## Jspm

### Install

```
npm install -g jspm@beta
```

Note: Currently TypeScript support in jspm is in 0.16beta

More details: TypeScriptSamples/jspm

## MSBuild

Update project file to include locally installed Microsoft.TypeScript.Default.props (at the top) and Microsoft.TypeScript.targets (at the bottom) files:

```
<?xml version="1.0" encoding="utf-8"?>
<Project ToolsVersion="4.0" DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
  <!-- Include default props at the top -->
  <Import
      Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props"
      Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.Default.props')" />

  <!-- TypeScript configurations go here -->
  <PropertyGroup Condition="'$(Configuration)' == 'Debug'">
    <TypeScriptRemoveComments>false</TypeScriptRemoveComments>
    <TypeScriptSourceMap>true</TypeScriptSourceMap>
  </PropertyGroup>
  <PropertyGroup Condition="'$(Configuration)' == 'Release'">
    <TypeScriptRemoveComments>true</TypeScriptRemoveComments>
    <TypeScriptSourceMap>false</TypeScriptSourceMap>
  </PropertyGroup>

  <!-- Include default targets at the bottom -->
  <Import
      Project="$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets"
      Condition="Exists('$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)\TypeScript\Microsoft.TypeScript.targets')" />
</Project>
```

More details about defining MSBuild compiler options: Setting Compiler Options in MSBuild projects

## NuGet

- Right-Click -> Manage NuGet Packages
- Search for Microsoft.TypeScript.MSBuild
- Hit Install
- When install is complete, rebuild!

More details can be found at Package Manager Dialog and using nightly builds with NuGet

## Rollup

### Install

```
npm install @rollup/plugin-typescript --save-dev
```

Note that both typescript and tslib are peer dependencies of this plugin that need to be installed separately.

### Usage

Create a rollup.config.js configuration file and import the plugin:

```
// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [typescript()]
};
```

## Svelte Compiler

### Install

```
npm install --save-dev svelte-preprocess
```

Note that typescript is an optional peer dependencies of this plugin and needs to be installed separately. tslib is not provided either.

You may also consider svelte-check for CLI type checking.

### Usage

Create a svelte.config.js configuration file and import the plugin:

```
// svelte.config.js
import preprocess from 'svelte-preprocess';

const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess()
};

export default config;
```

You can now specify that script blocks are written in TypeScript:

```
<script lang="ts">
```

## Vite

Vite supports importing .ts files out-of-the-box. It only performs transpilation and not type checking. It also requires that some compilerOptions have certain values. See the Vite docs for more details.

## Webpack

### Install

```
npm install ts-loader --save-dev
```

### Basic webpack.config.js when using Webpack 5 or 4

```
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```

See more details on ts-loader here.

Alternatives:

- awesome-typescript-loader

The TypeScript docs are an open source project. Help us improve these pages by sending a Pull Request ❤

Last updated: Sep 15, 2025

© 2012-2025 MicrosoftLicensed under the Apache License, Version 2.0.
 https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html
