# CSP: child-src

Source: https://devdocs.io/http/headers/content-security-policy/child-src

# CSP: child-src

The HTTP Content-Security-Policy (CSP) child-src directive defines the valid sources for web workers and nested browsing contexts loaded using elements such as <frame> and <iframe>. For workers, non-compliant requests are treated as fatal network errors by the user agent.

## Syntax

One or more sources can be allowed for the child-src policy:

```
Content-Security-Policy: child-src <source>;
Content-Security-Policy: child-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: child-src https://example.com/
```

This <iframe> and worker are blocked and won't load:

```
<iframe src="https://not-example.com"></iframe>

<script>
  const blockedWorker = new Worker("data:application/javascript,…");
</script>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <frame> and <iframe>
- Worker, SharedWorker, ServiceWorker

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/child-src
