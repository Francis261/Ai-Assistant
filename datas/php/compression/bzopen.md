# bzopen

Source: https://devdocs.io/php/function.bzopen

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

bzopen — Opens a bzip2 compressed file

### Description

```
bzopen(string|resource $file, string $mode): resource|false
```

bzopen() opens a bzip2 (.bz2) file for reading or writing.

### Parameters

The name of the file to open, or an existing stream resource.

The modes 'r' (read), and 'w' (write) are supported. Everything else will cause bzopen() to return false.

### Return Values

If the open fails, bzopen() returns false, otherwise it returns a pointer to the newly opened file.

### Examples

Example #1 bzopen() example

```
<?php

$file = "/tmp/foo.bz2";
$bz = bzopen($file, "r") or die("Couldn't open $file for reading");

bzclose($bz);

?>
```

### See Also

- bzclose() - Close a bzip2 file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.bzopen.php
