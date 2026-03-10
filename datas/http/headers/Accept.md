# Accept

Source: https://devdocs.io/http/headers/accept

# Accept

The Accept request HTTP header indicates which content types, expressed as MIME types, the client is able to understand. The server uses content negotiation to select one of the proposals and informs the client of the choice with the Content-Type response header. Browsers set required values for this header based on the context of the request. For example, a browser uses different values in a request when fetching a CSS stylesheet, image, video, or a script.

## Syntax

```
Accept: <MIME_type>/<MIME_subtype>
Accept: <MIME_type>/*
Accept: */*

// Multiple types, weighted with the quality value syntax:
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8
```

## Directives

A single, precise MIME type, like text/html.

A MIME type, but without a subtype. image/* corresponds to image/png, image/svg, image/gif, and other image types.

Any MIME type

A value used is placed in an order of preference expressed using a relative quality value called the weight.

## Examples

```
Accept: text/html

Accept: image/*

// General default
Accept: */*

// Default for navigation requests
Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8
```

## Specifications

## Browser compatibility

## See also

- HTTP content negotiation
- List of default Accept values
- A header with the result of the content negotiation: Content-Type
- Other similar headers: TE, Accept-Encoding, Accept-Language

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept
