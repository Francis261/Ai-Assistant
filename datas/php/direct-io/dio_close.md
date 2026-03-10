# dio_close

Source: https://devdocs.io/php/function.dio-close

(PHP 4 >= 4.2.0, PHP 5 < 5.1.0)

dio_close — Closes the file descriptor given by fd

### Description

```
dio_close(resource $fd): void
```

The function dio_close() closes the file descriptor fd.

### Parameters

The file descriptor returned by dio_open().

### Return Values

No value is returned.

### Examples

Example #1 Closing an open file descriptor

```
<?php
$fd = dio_open('/dev/ttyS0', O_RDWR);

dio_close($fd);
?>
```

### See Also

- dio_open() - Opens a file (creating it if necessary) at a lower level than the C library input/ouput stream functions allow

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.dio-close.php
