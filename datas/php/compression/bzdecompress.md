# bzdecompress

Source: https://devdocs.io/php/function.bzdecompress

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzdecompress — Decompresses bzip2 encoded data

### Description

```
bzdecompress(string $data, bool $use_less_memory = false): string|int|false
```

bzdecompress() decompresses the given string containing bzip2 encoded data.

### Parameters

The string to decompress.

If true, an alternative decompression algorithm will be used which uses less memory (the maximum memory requirement drops to around 2300K) but works at roughly half the speed.

See the » bzip2 documentation for more information about this feature.

### Return Values

The decompressed string, or false or an error number if an error occurred.

### Changelog

### Examples

Example #1 Decompressing a String

```
<?php
$start_str = "This is not an honest face?";
$bzstr = bzcompress($start_str);

echo "Compressed String: ";
echo $bzstr;
echo "\n<br />\n";

$str = bzdecompress($bzstr);
echo "Decompressed String: ";
echo $str;
echo "\n<br />\n";
?>
```

### See Also

- bzcompress() - Compress a string into bzip2 encoded data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzdecompress.php
