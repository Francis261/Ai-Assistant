# fsync

Source: https://devdocs.io/php/function.fsync

(PHP 8 >= 8.1.0)

fsync — Synchronizes changes to the file (including meta-data)

### Description

```
fsync(resource $stream): bool
```

This function synchronizes changes to the file, including its meta-data. This is similar to fflush(), but it also instructs the operating system to write to the storage media.

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen() or fsockopen() (and not yet closed by fclose()).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 fsync() example

```
<?php

$file = 'test.txt';

$stream = fopen($file, 'w');
fwrite($stream, 'test data');
fwrite($stream, "\r\n");
fwrite($stream, 'additional data');

fsync($stream);
fclose($stream);
?>
```

### See Also

- fdatasync() - Synchronizes data (but not meta-data) to the file
- fflush() - Flushes the output to a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.fsync.php
