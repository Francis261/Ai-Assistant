# Cross-Origin-Resource-Policy

Source: https://devdocs.io/http/headers/cross-origin-resource-policy

# Cross-Origin-Resource-Policy

The HTTP Cross-Origin-Resource-Policy response header conveys a desire that the browser blocks no-cors cross-origin/cross-site requests to the given resource.

## Syntax

```
Cross-Origin-Resource-Policy: same-site | same-origin | cross-origin
```

## Examples

The response header below will cause compatible user agents to disallow cross-origin no-cors requests:

```
Cross-Origin-Resource-Policy: same-origin
```

For more examples, see https://resourcepolicy.fyi/.

## Specifications

## Browser compatibility

## See also

- Cross-Origin Resource Policy (CORP) explainer
- Consider deploying Cross-Origin Resource Policy
- Access-Control-Allow-Origin

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cross-Origin-Resource-Policy
