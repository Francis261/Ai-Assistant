# CSP: connect-src

Source: https://devdocs.io/http/headers/content-security-policy/connect-src

# CSP: connect-src

The HTTP Content-Security-Policy (CSP) connect-src directive restricts the URLs which can be loaded using script interfaces. The APIs that are restricted are:

- <a> ping,
- fetch(),
- XMLHttpRequest,
- WebSocket,
- EventSource, and
- Navigator.sendBeacon().

Note: connect-src 'self' does not resolve to websocket schemes in all browsers, more info in this issue.

## Syntax

One or more sources can be allowed for the connect-src policy:

```
Content-Security-Policy: connect-src <source>;
Content-Security-Policy: connect-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: connect-src https://example.com/
```

The following connections are blocked and won't load:

```
<a ping="https://not-example.com">
  <script>
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://not-example.com/");
    xhr.send();

    const ws = new WebSocket("https://not-example.com/");

    const es = new EventSource("https://not-example.com/");

    navigator.sendBeacon("https://not-example.com/", {
      /* … */
    });
  </script></a>
```

## Specifications

## Browser compatibility

### Compatibility notes

- Prior to Firefox 23, xhr-src was used in place of the connect-src directive and only restricted the use of XMLHttpRequest.

## See also

- Content-Security-Policy
- <a> ping
- fetch()
- XMLHttpRequest
- WebSocket
- EventSource

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/connect-src
