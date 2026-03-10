# bzwrite

Source: https://devdocs.io/php/function.bzwrite

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzwrite — Binary safe bzip2 file write

### Description

```
bzwrite(resource $bz, string $data, ?int $length = null): int|false
```

bzwrite() writes a string into the given bzip2 file stream.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

The written data.

If supplied, writing will stop after length (uncompressed) bytes have been written or the end of data is reached, whichever comes first.

### Return Values

Returns the number of bytes written, or false on error.

### Changelog

### Examples

Example #1 bzwrite() example

```
<?php
$str = "uncompressed data";
$bz = bzopen("/tmp/foo.bz2", "w");
bzwrite($bz, $str, strlen($str));
bzclose($bz);
?>
```

### See Also

- bzread() - Binary safe bzip2 file read
- bzopen() - Opens a bzip2 compressed file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzwrite.php
