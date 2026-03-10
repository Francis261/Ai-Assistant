# Feature-Policy: unsized-media

Source: https://devdocs.io/http/headers/feature-policy/unsized-media

# Feature-Policy: unsized-media

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The HTTP Feature-Policy header unsized-media directive controls whether the current document is allowed to change the size of media elements after the initial layout is complete.

This restriction solves "layout instability" problem caused by providing default dimensions for images whose size is not specified in advance so that image doesn't change size after loading.

## Syntax

```
Feature-Policy: unsized-media <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default value

The default value for unsized-media is '*', that is unsized media elements are allowed for all origins by default. The page will re-flow every time an image with unknown dimensions is loaded.

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy
- Proposal

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/unsized-media
