# Trailer

Source: https://devdocs.io/http/headers/trailer

# Trailer

The Trailer response header allows the sender to include additional fields at the end of chunked messages in order to supply metadata that might be dynamically generated while the message body is sent, such as a message integrity check, digital signature, or post-processing status.

Note: The TE request header needs to be set to "trailers" to allow trailer fields.

## Syntax

```
Trailer: header-names
```

## Directives

HTTP header fields which will be present in the trailer part of chunked messages. These header fields are disallowed:

- message framing headers (e.g., Transfer-Encoding and Content-Length),
- routing headers (e.g., Host),
- request modifiers (e.g., controls and conditionals, like Cache-Control, Max-Forwards, or TE),
- authentication headers (e.g., Authorization or Set-Cookie),
- or Content-Encoding, Content-Type, Content-Range, and Trailer itself.

## Examples

### Chunked transfer encoding using a trailing header

In this example, the Expires header is used at the end of the chunked message and serves as a trailing header.

```
HTTP/1.1 200 OK
Content-Type: text/plain
Transfer-Encoding: chunked
Trailer: Expires

7\r\n
Mozilla\r\n
9\r\n
Developer\r\n
7\r\n
Network\r\n
0\r\n
Expires: Wed, 21 Oct 2015 07:28:00 GMT\r\n
\r\n
```

## Specifications

## Browser compatibility

## See also

- Transfer-Encoding
- TE
- Chunked transfer encoding

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer
