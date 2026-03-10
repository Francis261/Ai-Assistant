# zlib_encode

Source: https://devdocs.io/php/function.zlib-encode

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

zlib_encode — Compress data with the specified encoding

### Description

```
zlib_encode(string $data, int $encoding, int $level = -1): string|false
```

Compress data with the specified encoding.

This function is currently not documented; only its argument list is available.

### Parameters

The data to compress.

The compression algorithm. Either ZLIB_ENCODING_RAW, ZLIB_ENCODING_DEFLATE or ZLIB_ENCODING_GZIP.

### Return Values

### Examples

Example #1 zlib_encode() example

```
<?php
$str = 'hello world';
$enc = zlib_encode($str, ZLIB_ENCODING_DEFLATE);
echo bin2hex($enc);
?>
```

The above example will output:

```
789ccb48cdc9c95728cf2fca4901001a0b045d
```

### See Also

- zlib_decode() - Uncompress any raw/gzip/zlib encoded data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.zlib-encode.php
