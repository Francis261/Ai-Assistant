# fflush

Source: https://devdocs.io/php/function.fflush

(PHP 4 >= 4.0.1, PHP 5, PHP 7, PHP 8)

fflush — Flushes the output to a file

### Description

```
fflush(resource $stream): bool
```

This function forces a write of all buffered output to the resource pointed to by the file stream.

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen() or fsockopen() (and not yet closed by fclose()).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 File write example using fflush()

```
<?php
$filename = 'bar.txt';

$file = fopen($filename, 'r+');
rewind($file);
fwrite($file, 'Foo');
fflush($file);
ftruncate($file, ftell($file));
fclose($file);
?>
```

### See Also

- clearstatcache() - Clears file status cache
- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fflush.php
