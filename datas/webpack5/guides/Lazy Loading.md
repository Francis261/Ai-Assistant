# Lazy Loading

Source: https://devdocs.io/webpack~5/guides/lazy-loading

Lazy, or "on demand", loading is a great way to optimize your site or application. This practice essentially involves splitting your code at logical breakpoints, and then loading it once the user has done something that requires, or will require, a new block of code. This speeds up the initial load of the application and lightens its overall weight as some blocks may never even be loaded.

## Example

Let's take the example from Code Splitting and tweak it a bit to demonstrate this concept even more. The code there does cause a separate chunk, lodash.bundle.js, to be generated and technically "lazy-loads" it as soon as the script is run. The trouble is that no user interaction is required to load the bundle – meaning that every time the page is loaded, the request will fire. This doesn't help us too much and will impact performance negatively.

Let's try something different. We'll add an interaction to log some text to the console when the user clicks a button. However, we'll wait to load that code (print.js) until the interaction occurs for the first time. To do this we'll go back and rework the final Dynamic Imports example from Code Splitting and leave lodash in the main chunk.

project

```
webpack-demo
|- package.json
|- package-lock.json
|- webpack.config.js
|- /dist
|- /src
  |- index.js
+ |- print.js
|- /node_modules
```

src/print.js

```
console.log(
  'The print.js module has loaded! See the network tab in dev tools...'
);

export default () => {
  console.log('Button Clicked: Here\'s "some text"!');
};
```

src/index.js

```
+ import _ from 'lodash';
+
- async function getComponent() {
+ function component() {
    const element = document.createElement('div');
-   const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
+   const button = document.createElement('button');
+   const br = document.createElement('br');

+   button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
+   element.appendChild(br);
+   element.appendChild(button);
+
+   // Note that because a network request is involved, some indication
+   // of loading would need to be shown in a production-level site/app.
+   button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
+     const print = module.default;
+
+     print();
+   });

    return element;
  }

- getComponent().then(component => {
-   document.body.appendChild(component);
- });
+ document.body.appendChild(component());
```

Now let's run webpack and check out our new lazy-loading functionality:

```
...
          Asset       Size  Chunks                    Chunk Names
print.bundle.js  417 bytes       0  [emitted]         print
index.bundle.js     548 kB       1  [emitted]  [big]  index
     index.html  189 bytes          [emitted]
...
```

## Frameworks

Many frameworks and libraries have their own recommendations on how this should be accomplished within their methodologies. Here are a few examples:

- React: Code Splitting and Lazy Loading
- Vue: Dynamic Imports in Vue.js for better performance
- Angular: Lazy Loading route configuration and AngularJS + webpack = lazyLoad

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/lazy-loading
