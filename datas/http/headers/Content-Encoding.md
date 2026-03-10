# Content-Encoding

Source: https://devdocs.io/http/headers/content-encoding

# Content-Encoding

The Content-Encoding representation header lists any encodings that have been applied to the representation (message payload), and in what order. This lets the recipient know how to decode the representation in order to obtain the original payload format. Content encoding is mainly used to compress the message data without losing information about the origin media type.

Note that the original media/content type is specified in the Content-Type header, and that the Content-Encoding applies to the representation, or "coded form", of the data. If the original media is encoded in some way (e.g. a zip file) then this information would not be included in the Content-Encoding header.

Servers are encouraged to compress data as much as possible, and should use content encoding where appropriate. Compressing a compressed media type such as a zip or jpeg may not be appropriate, as this can make the payload larger.

## Syntax

```
Content-Encoding: gzip
Content-Encoding: compress
Content-Encoding: deflate
Content-Encoding: br

// Multiple, in the order in which they were applied
Content-Encoding: deflate, gzip
```

## Directives

A format using the Lempel-Ziv coding (LZ77), with a 32-bit CRC. This is the original format of the UNIX gzip program. The HTTP/1.1 standard also recommends that the servers supporting this content-encoding should recognize x-gzip as an alias, for compatibility purposes.

A format using the Lempel-Ziv-Welch (LZW) algorithm. The value name was taken from the UNIX compress program, which implemented this algorithm. Like the compress program, which has disappeared from most UNIX distributions, this content-encoding is not used by many browsers today, partly because of a patent issue (it expired in 2003).

Using the zlib structure (defined in RFC 1950) with the deflate compression algorithm (defined in RFC 1951).

A format using the Brotli algorithm.

## Examples

### Compressing with gzip

On the client side, you can advertise a list of compression schemes that will be sent along in an HTTP request. The Accept-Encoding header is used for negotiating content encoding.

```
Accept-Encoding: gzip, deflate
```

The server responds with the scheme used, indicated by the Content-Encoding response header.

```
Content-Encoding: gzip
```

Note that the server is not obligated to use any compression method. Compression highly depends on server settings and used server modules.

## Specifications

## Browser compatibility

## See also

- Accept-Encoding
- Transfer-Encoding

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
