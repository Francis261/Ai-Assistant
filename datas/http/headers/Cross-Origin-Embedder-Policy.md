# Cross-Origin-Embedder-Policy

Source: https://devdocs.io/http/headers/cross-origin-embedder-policy

# Cross-Origin-Embedder-Policy

The HTTP Cross-Origin-Embedder-Policy (COEP) response header prevents a document from loading any cross-origin resources that don't explicitly grant the document permission (using CORP or CORS).

## Syntax

```
Cross-Origin-Embedder-Policy: unsafe-none | require-corp
```

### Directives

This is the default value. Allows the document to fetch cross-origin resources without giving explicit permission through the CORS protocol or the Cross-Origin-Resource-Policy header.

A document can only load resources from the same origin, or resources explicitly marked as loadable from another origin. If a cross origin resource supports CORS, the crossorigin attribute or the Cross-Origin-Resource-Policy header must be used to load it without being blocked by COEP.

## Examples

### Certain features depend on cross-origin isolation

You can only access certain features like SharedArrayBuffer objects or Performance.now() with unthrottled timers, if your document has a COEP header with the value require-corp value set.

```
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

See also the Cross-Origin-Opener-Policy header which you'll need to set as well.

To check if cross origin isolation has been successful, you can test against the crossOriginIsolated property available to window and worker contexts:

```
if (crossOriginIsolated) {
  // Post SharedArrayBuffer
} else {
  // Do something else
}
```

### Avoiding COEP blockage with CORS

If you enable COEP using require-corp and have a cross origin resource that needs to be loaded, it needs to support CORS and you need to explicitly mark the resource as loadable from another origin to avoid blockage from COEP. For example, you can use the crossorigin attribute for this image from a third-party site:

```
<img src="https://thirdparty.com/img.png" crossorigin />
```

## Specifications

## Browser compatibility

## See also

- Cross-Origin-Opener-Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Embedder-Policy
