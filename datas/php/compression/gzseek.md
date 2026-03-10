# gzseek

Source: https://devdocs.io/php/function.gzseek

(PHP 4, PHP 5, PHP 7, PHP 8)

gzseek — Seek on a gz-file pointer

### Description

```
gzseek(resource $stream, int $offset, int $whence = SEEK_SET): int
```

Sets the file position indicator for the given file pointer to the given offset byte into the file stream. Equivalent to calling (in C) gzseek(zp, offset, SEEK_SET).

If the file is opened for reading, this function is emulated but can be extremely slow. If the file is opened for writing, only forward seeks are supported; gzseek() then compresses a sequence of zeroes up to the new starting position.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

The seeked offset.

whence values are:

- SEEK_SET - Set position equal to offset bytes.
- SEEK_CUR - Set position to current location plus offset.

If whence is not specified, it is assumed to be SEEK_SET.

### Return Values

Upon success, returns 0; otherwise, returns -1. Note that seeking past EOF is not considered an error.

### Examples

Example #1 gzseek() example

```
<?php
$gz = gzopen('somefile.gz', 'r');
gzseek($gz,2);
echo gzgetc($gz);
gzclose($gz);
?>
```

### See Also

- gztell() - Tell gz-file pointer read/write position
- gzrewind() - Rewind the position of a gz-file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzseek.php
