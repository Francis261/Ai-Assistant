# SplFileObject::fflush

Source: https://devdocs.io/php/splfileobject.fflush

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fflush — Flushes the output to the file

### Description

```
public SplFileObject::fflush(): bool
```

Forces a write of all buffered output to the file.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SplFileObject::fflush() example

```
<?php
$file = new SplFileObject('misc.txt', 'r+');
$file->rewind();
$file->fwrite("Foo");
$file->fflush();
$file->ftruncate($file->ftell());
?>
```

### See Also

- SplFileObject::fwrite() - Write to file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fflush.php
