# bzread

Source: https://devdocs.io/php/function.bzread

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzread — Binary safe bzip2 file read

### Description

```
bzread(resource $bz, int $length = 1024): string|false
```

bzread() reads from the given bzip2 file pointer.

Reading stops when length (uncompressed) bytes have been read or EOF is reached, whichever comes first.

### Parameters

The file pointer. It must be valid and must point to a file successfully opened by bzopen().

If not specified, bzread() will read 1024 (uncompressed) bytes at a time. A maximum of 8192 uncompressed bytes will be read at a time.

### Return Values

Returns the uncompressed data, or false on error.

### Examples

Example #1 bzread() example

```
<?php

$file = "/tmp/foo.bz2";
$bz = bzopen($file, "r") or die("Couldn't open $file");

$decompressed_file = '';
while (!feof($bz)) {
  $decompressed_file .= bzread($bz, 4096);
}
bzclose($bz);

echo "The contents of $file are: <br />\n";
echo $decompressed_file;

?>
```

### See Also

- bzwrite() - Binary safe bzip2 file write
- feof() - Tests for end-of-file on a file pointer
- bzopen() - Opens a bzip2 compressed file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzread.php
