# gzcompress

Source: https://devdocs.io/php/function.gzcompress

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

gzcompress — Compress a string

### Description

```
gzcompress(string $data, int $level = -1, int $encoding = ZLIB_ENCODING_DEFLATE): string|false
```

This function compresses the given string using the ZLIB data format.

For details on the ZLIB compression algorithm see the document "» ZLIB Compressed Data Format Specification version 3.3" (RFC 1950).

Note:

This is not the same as gzip compression, which includes some header data. See gzencode() for gzip compression.

### Parameters

The data to compress.

The level of compression. Can be given as 0 for no compression up to 9 for maximum compression.

If -1 is used, the default compression of the zlib library is used which is 6.

One of ZLIB_ENCODING_* constants.

### Return Values

The compressed string or false if an error occurred.

### Examples

Example #1 gzcompress() example

```
<?php
$compressed = gzcompress('Compress me', 9);
echo $compressed;
?>
```

### See Also

- gzdeflate() - Deflate a string
- gzinflate() - Inflate a deflated string
- gzuncompress() - Uncompress a compressed string
- gzencode() - Create a gzip compressed string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzcompress.php
