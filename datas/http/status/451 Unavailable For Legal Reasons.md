# 451 Unavailable For Legal Reasons

Source: https://devdocs.io/http/status/451

# 451 Unavailable For Legal Reasons

The HyperText Transfer Protocol (HTTP) 451 Unavailable For Legal Reasons client error response code indicates that the user requested a resource that is not available due to legal reasons, such as a web page for which a legal action has been issued.

## Status

```
451 Unavailable For Legal Reasons
```

## Example

This example response is taken from the IETF RFC (see below) and contains a reference to Monty Python's Life of Brian.

Note: the Link header might also contain a rel="blocked-by" relation identifying the entity and implementing blockage, not any other entity mandating it.

Any attempt to identify the entity ultimately responsible for the resource being unavailable belongs in the response body, not in the rel="blocked-by" link. This includes the name of the person or organization that made a legal demand resulting in the content's removal.

```
HTTP/1.1 451 Unavailable For Legal Reasons
Link: <https://spqr.example.org/legislatione>; rel="blocked-by"
Content-Type: text/html

<html>
      <head><title>Unavailable For Legal Reasons</title></head>
      <body>
            <h1>Unavailable For Legal Reasons</h1>
            <p>This request may not be serviced in the Roman Province
            of Judea due to the Lex Julia Majestatis, which disallows
            access to resources hosted on servers deemed to be
            operated by the People's Front of Judea.</p>
      </body>
</html>
```

## Specifications

## Browser compatibility

## See also

- Wikipedia: HTTP 451
- Wikipedia: Fahrenheit 451 (which gave this status code its number)

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
