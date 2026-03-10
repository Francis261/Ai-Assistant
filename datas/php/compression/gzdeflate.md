# gzdeflate

Source: https://devdocs.io/php/function.gzdeflate

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

gzdeflate — Deflate a string

### Description

```
gzdeflate(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_RAW): string|false
```

This function compresses the given string using the DEFLATE data format.

For details on the DEFLATE compression algorithm see the document "» DEFLATE Compressed Data Format Specification version 1.3" (RFC 1951).

### Parameters

The data to deflate.

The level of compression. Can be given as 0 for no compression up to 9 for maximum compression. If not given, the default compression level will be the default compression level of the zlib library.

One of ZLIB_ENCODING_* constants.

### Return Values

The deflated string or false if an error occurred.

### Examples

Example #1 gzdeflate() example

```
<?php
$compressed = gzdeflate('Compress me', 9);
echo $compressed;
?>
```

### See Also

- gzinflate() - Inflate a deflated string
- gzcompress() - Compress a string
- gzuncompress() - Uncompress a compressed string
- gzencode() - Create a gzip compressed string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzdeflate.php
