# bzcompress

Source: https://devdocs.io/php/function.bzcompress

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzcompress — Compress a string into bzip2 encoded data

### Description

```
bzcompress(string $data, int $block_size = 4, int $work_factor = 0): string|int
```

bzcompress() compresses the given string and returns it as bzip2 encoded data.

### Parameters

The string to compress.

Specifies the blocksize used during compression and should be a number from 1 to 9 with 9 giving the best compression, but using more resources to do so.

Controls how the compression phase behaves when presented with worst case, highly repetitive, input data. The value can be between 0 and 250 with 0 being a special case.

Regardless of the work_factor, the generated output is the same.

### Return Values

The compressed string, or an error number if an error occurred.

### Examples

Example #1 Compressing data

```
<?php
$str = "sample data";
$bzstr = bzcompress($str, 9);
echo $bzstr;
?>
```

### See Also

- bzdecompress() - Decompresses bzip2 encoded data

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzcompress.php
