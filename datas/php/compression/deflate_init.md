# deflate_init

Source: https://devdocs.io/php/function.deflate-init

(PHP 7, PHP 8)

deflate_init — Initialize an incremental deflate context

### Description

```
deflate_init(int $encoding, array $options = []): DeflateContext|false
```

Initializes an incremental deflate context using the specified encoding.

Note that the window option here only sets the window size of the algorithm, differently from the zlib filters where the same parameter also sets the encoding to use; the encoding must be set with the encoding parameter.

Limitation: there is currently no way to set the header information on a GZIP compressed stream, which are set as follows: GZIP signature (\x1f\x8B); compression method (\x08 == DEFLATE); 6 zero bytes; the operating system set to the current system (\x00 = Windows, \x03 = Unix, etc.)

### Parameters

One of the ZLIB_ENCODING_* constants.

An associative array which may contain the following elements:

The compression level in range -1..9; defaults to -1.

The compression memory level in range 1..9; defaults to 8.

The zlib window size (logarithmic) in range 8..15; defaults to 15. zlib changes a window size of 8 to 9, and as of zlib 1.2.8 fails with a warning, if a window size of 8 is requested for ZLIB_ENCODING_RAW or ZLIB_ENCODING_GZIP.

One of ZLIB_FILTERED, ZLIB_HUFFMAN_ONLY, ZLIB_RLE, ZLIB_FIXED or ZLIB_DEFAULT_STRATEGY (the default).

A string or an array of strings of the preset dictionary (default: no preset dictionary).

### Return Values

Returns a deflate context resource (zlib.deflate) on success, or false on failure.

### Errors/Exceptions

If an invalid option is passed to options or the context couldn't be created, an error of level E_WARNING is generated.

### Changelog

### See Also

- deflate_add() - Incrementally deflate data
- inflate_init() - Initialize an incremental inflate context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.deflate-init.php
