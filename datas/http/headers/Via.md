# Via

Source: https://devdocs.io/http/headers/via

# Via

The Via general header is added by proxies, both forward and reverse, and can appear in the request or response headers. It is used for tracking message forwards, avoiding request loops, and identifying the protocol capabilities of senders along the request/response chain.

## Syntax

```
Via: [ <protocol-name> "/" ] <protocol-version> <host> [ ":" <port> ]
Via: [ <protocol-name> "/" ] <protocol-version> <pseudonym>
```

## Directives

Optional. The name of the protocol used, such as "HTTP".

The version of the protocol used, such as "1.1".

Public proxy URL and port.

Name/alias of an internal proxy.

## Examples

```
Via: 1.1 vegur
Via: HTTP/1.1 GWA
Via: 1.0 fred, 1.1 p.example.net
```

## Specifications

## Browser compatibility

## See also

- X-Forwarded-For
- Heroku's proxy library Vegur

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via
