# inflate_init

Source: https://devdocs.io/php/function.inflate-init

(PHP 7, PHP 8)

inflate_init — Initialize an incremental inflate context

### Description

```
inflate_init(int $encoding, array $options = []): InflateContext|false
```

Initialize an incremental inflate context with the specified encoding.

### Parameters

One of the ZLIB_ENCODING_* constants.

An associative array which may contain the following elements:

The compression level in range -1..9; defaults to -1.

The compression memory level in range 1..9; defaults to 8.

The zlib window size (logarithmic) in range 8..15; defaults to 15.

One of ZLIB_FILTERED, ZLIB_HUFFMAN_ONLY, ZLIB_RLE, ZLIB_FIXED or ZLIB_DEFAULT_STRATEGY (the default).

A string or an array of strings of the preset dictionary (default: no preset dictionary).

### Return Values

Returns an inflate context resource (zlib.inflate) on success, or false on failure.

### Errors/Exceptions

If an invalid encoding or option is passed to options, or the context couldn't be created, an error of level E_WARNING is generated.

### Changelog

### Notes

Unlike gzinflate(), incremental inflate contexts do not constrain the length of the decoded data, so provide no automatic protection against Zip bombs.

### See Also

- inflate_add() - Incrementally inflate encoded data
- deflate_init() - Initialize an incremental deflate context

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.inflate-init.php
