# 100 Continue

Source: https://devdocs.io/http/status/100

# 100 Continue

The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.

To have a server check the request's headers, a client must send Expect: 100-continue as a header in its initial request and receive a 100 Continue status code in response before sending the body.

## Status

```
100 Continue
```

## Specifications

## Browser compatibility

## See also

- Expect
- 417

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100
