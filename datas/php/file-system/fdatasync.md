# fdatasync

Source: https://devdocs.io/php/function.fdatasync

(PHP 8 >= 8.1.0)

fdatasync — Synchronizes data (but not meta-data) to the file

### Description

```
fdatasync(resource $stream): bool
```

This function synchronizes stream contents to storage media, just like fsync() does, but it does not synchronize file meta-data. Note that this function is only effectively different in POSIX systems. In Windows, this function is aliased to fsync().

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen() or fsockopen() (and not yet closed by fclose()).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 fdatasync() example

```
<?php

$file = 'test.txt';

$stream = fopen($file, 'w');
fwrite($stream, 'test data');
fwrite($stream, "\r\n");
fwrite($stream, 'additional data');

fdatasync($stream);
fclose($stream);
?>
```

### See Also

- fflush() - Flushes the output to a file
- fsync() - Synchronizes changes to the file (including meta-data)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fdatasync.php
