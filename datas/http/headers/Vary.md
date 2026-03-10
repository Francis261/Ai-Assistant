# Vary

Source: https://devdocs.io/http/headers/vary

# Vary

The Vary HTTP response header describes the parts of the request message aside from the method and URL that influenced the content of the response it occurs in. Most often, this is used to create a cache key when content negotiation is in use.

The same Vary header value should be used on all responses for a given URL, including 304 Not Modified responses and the "default" response.

## Syntax

```
Vary: *
Vary: <header-name>, <header-name>, ...
```

## Directives

Indicates that factors other than request headers influenced the generation of this response. Implies that the response is uncacheable.

A comma-separated list of request header names that could have influenced the generation of this response.

## Specifications

## Browser compatibility

### Compatibility notes

- Vary with care – Vary header problems in IE6-9

## See also

- Understanding The Vary Header - Smashing Magazine
- Best Practices for Using the Vary Header – fastly.com
- Content negotiation

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Vary
