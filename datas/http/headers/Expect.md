# Expect

Source: https://devdocs.io/http/headers/expect

# Expect

The Expect HTTP request header indicates expectations that need to be met by the server to handle the request successfully.

Upon Expect: 100-continue, the server responds with:

- 100 (Continue) if the information from the request header is insufficient to resolve the response and the client should proceed with sending the body.
- 417 (Expectation Failed) if the server cannot meet the expectation

or any other status otherwise (e.g. a 4xx status for a client error, or a 2xx status if the request can be resolved successfully without further processing).

For example, the server may reject a request if its Content-Length is too large.

No common browsers send the Expect header, but some other clients such as cURL do so by default.

## Syntax

```
Expect: 100-continue
```

## Directives

There is only one defined expectation:

Informs recipients that the client is about to send a (presumably large) message body in this request and wishes to receive a 100 (Continue) interim response.

## Examples

### Large message body

A client sends a request with Expect header and waits for the server to respond before sending the message body.

```
PUT /somewhere/fun HTTP/1.1
Host: origin.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

The server checks the headers and generates the response. The server sends 100 (Continue), which instructs the client to send the message body.

## Specifications

## Browser compatibility

## See also

- 417 Expectation Failed
- 100 Continue

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect
