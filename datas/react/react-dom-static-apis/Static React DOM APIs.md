# Static React DOM APIs

Source: https://devdocs.io/react/reference/react-dom/static

The react-dom/static APIs let you generate static HTML for React components. They have limited functionality compared to the streaming APIs. A framework may call them for you. Most of your components don’t need to import or use them.

## Static APIs for Web Streams

These methods are only available in the environments with Web Streams, which includes browsers, Deno, and some modern edge runtimes:

- prerender renders a React tree to static HTML with a Readable Web Stream.
- Experimental only resumeAndPrerender continues a prerendered React tree to static HTML with a Readable Web Stream.

Node.js also includes these methods for compatibility, but they are not recommended due to worse performance. Use the dedicated Node.js APIs instead.

## Static APIs for Node.js Streams

These methods are only available in the environments with Node.js Streams:

- prerenderToNodeStream renders a React tree to static HTML with a Node.js Stream.
- Experimental only resumeAndPrerenderToNodeStream continues a prerendered React tree to static HTML with a Node.js Stream.

© 2013–present Facebook Inc.Licensed under the Creative Commons Attribution 4.0 International Public License.
 https://react.dev/reference/react-dom/static
