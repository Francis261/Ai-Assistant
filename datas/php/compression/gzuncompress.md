# gzuncompress

Source: https://devdocs.io/php/function.gzuncompress

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

gzuncompress — Uncompress a compressed string

### Description

```
gzuncompress(string $data, int $max_length = 0): string|false
```

This function uncompress a compressed string.

### Parameters

The data compressed by gzcompress().

The maximum length of data to decode.

### Return Values

The original uncompressed data or false on error.

The function will return an error if the uncompressed data is more than 32768 times the length of the compressed input data or more than the optional parameter max_length.

### Examples

Example #1 gzuncompress() example

```
<?php
$compressed   = gzcompress('Compress me', 9);
$uncompressed = gzuncompress($compressed);
echo $uncompressed;
?>
```

### See Also

- gzcompress() - Compress a string
- gzinflate() - Inflate a deflated string
- gzdeflate() - Deflate a string
- gzencode() - Create a gzip compressed string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzuncompress.php
