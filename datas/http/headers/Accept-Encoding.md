# Accept-Encoding

Source: https://devdocs.io/http/headers/accept-encoding

# Accept-Encoding

The Accept-Encoding request HTTP header indicates the content encoding (usually a compression algorithm) that the client can understand. The server uses content negotiation to select one of the proposals and informs the client of that choice with the Content-Encoding response header.

Even if both the client and the server support the same compression algorithms, the server may choose not to compress the body of a response if the identity value is also acceptable. Two common cases lead to this:

- The data to be sent is already compressed, therefore a second compression will not reduce the transmitted data size. This is true for pre-compressed image formats (JPEG, for instance);
- The server is overloaded and cannot allocate computing resources to perform the compression. For example, Microsoft recommends not to compress if a server uses more than 80% of its computational power.

As long as the identity;q=0 or *;q=0 directives do not explicitly forbid the identity value that means no encoding, the server must never return a 406 Not Acceptable error.

Note:

- An IANA registry maintains a complete list of official content encodings.
- Two other content encodings, namely bzip and bzip2, are sometimes used, These non-standard encodings implement the algorithm that these two UNIX programs use. Note that bzip was discontinued due to patent licensing issues.

## Syntax

```
Accept-Encoding: gzip
Accept-Encoding: compress
Accept-Encoding: deflate
Accept-Encoding: br
Accept-Encoding: identity
Accept-Encoding: *

// Multiple algorithms, weighted with the quality value syntax:
Accept-Encoding: deflate, gzip;q=1.0, *;q=0.5
```

## Directives

A compression format that uses the Lempel-Ziv coding (LZ77) with a 32-bit CRC.

A compression format that uses the Lempel-Ziv-Welch (LZW) algorithm.

A compression format that uses the zlib structure with the deflate compression algorithm.

A compression format that uses the Brotli algorithm.

Indicates the identity function (that is, without modification or compression). This value is always considered as acceptable, even if omitted.

Matches any content encoding not already listed in the header. This is the default value if the header is not present. This directive does not suggest that any algorithm is supported but indicates that no preference is expressed.

Any value is placed in an order of preference expressed using a relative quality value called weight.

## Examples

```
Accept-Encoding: gzip

Accept-Encoding: gzip, compress, br

Accept-Encoding: br;q=1.0, gzip;q=0.8, *;q=0.1
```

## Specifications

## Browser compatibility

## See also

- HTTP content negotiation
- A header with the result of the content negotiation: Content-Encoding
- Other similar headers: TE, Accept, Accept-Language

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding
