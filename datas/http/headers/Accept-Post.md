# Accept-Post

Source: https://devdocs.io/http/headers/accept-post

# Accept-Post

The Accept-Post response HTTP header advertises which media types are accepted by the server for HTTP post requests.

Accept-Post in response to any method means that POST is allowed on the requested resource (any document/media format in the header further indicates that the document format is allowed).

For example, a server receiving a POST request with an unsupported media type could reply with 415 Unsupported Media Type and an Accept-Post header referencing one or more supported media types.

Note: An IANA registry maintains a complete list of official content encodings.

## Syntax

```
Accept-Post: <MIME_type>/<MIME_subtype>
Accept-Post: <MIME_type>/*
Accept-Post: */*
```

Note: The Accept-Post header specifies a media range in the same way as Accept, except that it has no notion of preference (i.e., no q arguments). This is because Accept-Post is a response header while Accept is a request header.

## Directives

None.

## Examples

```
Accept-Post: application/example, text/example
Accept-Post: image/webp
Accept-Post: */*
```

## Specifications

## Browser compatibility

## See also

- Http method POST
- HTTP Semantic and context RFC 7231, section 4.3.3: POST

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Post
