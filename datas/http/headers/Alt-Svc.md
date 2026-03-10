# Alt-Svc

Source: https://devdocs.io/http/headers/alt-svc

# Alt-Svc

The Alt-Svc HTTP header allows a server to indicate that another network location (the "alternative service") can be treated as authoritative for that origin when making future requests.

Doing so allows new protocol versions to be advertised without affecting in-flight requests, and can also help servers manage traffic. Using an alternative service is not visible to the end user; it does not change the URL or the origin of the request, and does not introduce extra round trips.

## Syntax

```
Alt-Svc: clear
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>
Alt-Svc: <protocol-id>=<alt-authority>; ma=<max-age>; persist=1
```

The special value clear indicates that the origin requests all alternative services for that origin to be invalidated.

The ALPN protocol identifier. Examples include h2 for HTTP/2 and h3-25 for draft 25 of the HTTP/3 protocol.

The quoted string specifying the alternative authority which consists of an optional host override, a colon, and a mandatory port number.

The number of seconds for which the alternative service is considered fresh. If omitted, it defaults to 24 hours. Alternative service entries can be cached for up to <max-age> seconds, minus the age of the response (from the Age header). Once the cached entry expires, the client can no longer use this alternative service for new connections.

Usually cached alternative service entries are cleared on network configuration changes. Use of the persist=1 parameter requests that the entry not be deleted by such changes.

Multiple entries can be specified in a single Alt-Svc header using comma as separator. In that case, early entries are considered more preferable.

## Example

```
Alt-Svc: h2=":443"; ma=2592000;
Alt-Svc: h2=":443"; ma=2592000; persist=1
Alt-Svc: h2="alt.example.com:443", h2=":443"
Alt-Svc: h3-25=":443"; ma=3600, h2=":443"; ma=3600
```

## Specifications

## Browser compatibility

## See also

- Alternative Services (article about Alt-Svc by HTTP Working Group chair Mark Nottingham)

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Alt-Svc
