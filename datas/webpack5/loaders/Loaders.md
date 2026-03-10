# Loaders

Source: https://devdocs.io/webpack~5/loaders/index

Webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript. You can easily write your own loaders using Node.js.

Loaders are activated by using loadername! prefixes in require() statements, or are automatically applied via regex from your webpack configuration – see configuration.

## Files

- val-loader Executes code as module and consider exports as JS code
- ref-loader Create dependencies between any files manually

## JSON

- cson-loader Loads and transpiles a CSON file

## Transpiling

- babel-loader Loads ES2015+ code and transpiles to ES5 using Babel
- esbuild-loader Loads ES2015+ code and transpiles to ES6+ using esbuild
- buble-loader Loads ES2015+ code and transpiles to ES5 using Bublé
- traceur-loader Loads ES2015+ code and transpiles to ES5 using Traceur
- ts-loader Loads TypeScript 2.0+ like JavaScript
- coffee-loader Loads CoffeeScript like JavaScript
- fengari-loader Loads Lua code using fengari
- elm-webpack-loader Loads Elm like JavaScript

## Templating

- html-loader Exports HTML as string, require references to static resources
- pug-loader Loads Pug and Jade templates and returns a function
- markdown-loader Compiles Markdown to HTML
- react-markdown-loader Compiles Markdown to a React Component using the markdown-parse parser
- posthtml-loader Loads and transforms a HTML file using PostHTML
- handlebars-loader Compiles Handlebars to HTML
- markup-inline-loader Inline SVG/MathML files to HTML. It’s useful when applying icon font or applying CSS animation to SVG.
- twig-loader Compiles Twig templates and returns a function
- remark-loader Load markdown through remark with built-in image resolution

## Styling

- style-loader Add exports of a module as style to DOM
- css-loader Loads CSS file with resolved imports and returns CSS code
- less-loader Loads and compiles a LESS file
- sass-loader Loads and compiles a SASS/SCSS file
- postcss-loader Loads and transforms a CSS/SSS file using PostCSS
- stylus-loader Loads and compiles a Stylus file

## Frameworks

- vue-loader Loads and compiles Vue Components
- angular2-template-loader Loads and compiles Angular Components

## Awesome

For more third-party loaders, see the list from awesome-webpack.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/loaders/
