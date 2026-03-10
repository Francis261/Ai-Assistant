# CSP: worker-src

Source: https://devdocs.io/http/headers/content-security-policy/worker-src

# CSP: worker-src

The HTTP Content-Security-Policy (CSP) worker-src directive specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.

If this directive is absent, the user agent will first look for the child-src directive, then the script-src directive, then finally for the default-src directive, when governing worker execution.

## Syntax

One or more sources can be allowed for the worker-src policy:

```
Content-Security-Policy: worker-src <source>;
Content-Security-Policy: worker-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: worker-src https://example.com/
```

Worker, SharedWorker, ServiceWorker are blocked and won't load:

```
<script>
  let blockedWorker = new Worker("data:application/javascript,…");
  blockedWorker = new SharedWorker("https://not-example.com/");
  navigator.serviceWorker.register("https://not-example.com/sw.js");
</script>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- CSP for Web Workers
- Worker, SharedWorker, ServiceWorker

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/worker-src
