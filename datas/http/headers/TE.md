# TE

Source: https://devdocs.io/http/headers/te

# TE

The TE request header specifies the transfer encodings the user agent is willing to accept. (you could informally call it Accept-Transfer-Encoding, which would be more intuitive).

Note: In HTTP/2 and HTTP/3, the TE header field is only accepted if the trailers value is set.

See also the Transfer-Encoding response header for more details on transfer encodings. Note that chunked is always acceptable for HTTP/1.1 recipients and you don't have to specify "chunked" using the TE header. However, it is useful for setting if the client is accepting trailer fields in a chunked transfer coding using the "trailers" value.

## Syntax

```
TE: compress
TE: deflate
TE: gzip
TE: trailers

// Multiple directives, weighted with the quality value syntax:
TE: trailers, deflate;q=0.5
```

## Directives

A format using the Lempel-Ziv-Welch (LZW) algorithm is accepted as a transfer coding name.

Using the zlib structure is accepted as a transfer coding name.

A format using the Lempel-Ziv coding (LZ77), with a 32-bit CRC is accepted as a transfer coding name.

Indicates that the client is willing to accept trailer fields in a chunked transfer coding.

When multiple transfer codings are acceptable, the q parameter of the quality value syntax can rank codings by preference.

## Specifications

## Browser compatibility

## See also

- Transfer-Encoding
- Trailer
- Chunked transfer encoding

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE
