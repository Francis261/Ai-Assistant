# Web Workers

Source: https://devdocs.io/webpack~5/guides/web-workers

As of webpack 5, you can use Web Workers without worker-loader.

## Syntax

```
new Worker(new URL('./worker.js', import.meta.url));
```

```
// or customize the chunk name with magic comments
// see https://webpack.js.org/api/module-methods/#magic-comments
new Worker(
  /* webpackChunkName: "foo-worker" */ new URL('./worker.js', import.meta.url)
);
```

The syntax was chosen to allow running code without bundler, it is also available in native ECMAScript modules in the browser.

Note that while the Worker API suggests that Worker constructor would accept a string representing the URL of the script, in webpack 5 you can only use URL instead.

## Example

src/index.js

```
const worker = new Worker(new URL('./deep-thought.js', import.meta.url));
worker.postMessage({
  question:
    'The Answer to the Ultimate Question of Life, The Universe, and Everything.',
});
worker.onmessage = ({ data: { answer } }) => {
  console.log(answer);
};
```

src/deep-thought.js

```
self.onmessage = ({ data: { question } }) => {
  self.postMessage({
    answer: 42,
  });
};
```

## Node.js

Similar syntax is supported in Node.js (>= 12.17.0):

```
import { Worker } from 'worker_threads';

new Worker(new URL('./worker.js', import.meta.url));
```

Note that this is only available in ESM. Worker in CommonJS syntax is not supported by either webpack or Node.js.

© JS Foundation and other contributorsLicensed under the Creative Commons Attribution License 4.0.
 https://webpack.js.org/guides/web-workers
