# SplFileObject::fseek

Source: https://devdocs.io/php/splfileobject.fseek

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fseek — Seek to a position

### Description

```
public SplFileObject::fseek(int $offset, int $whence = SEEK_SET): int
```

Seek to a position in the file measured in bytes from the beginning of the file, obtained by adding offset to the position specified by whence.

### Parameters

The offset. A negative value can be used to move backwards through the file which is useful when SEEK_END is used as the whence value.

whence values are:

- SEEK_SET - Set position equal to offset bytes.
- SEEK_CUR - Set position to current location plus offset.
- SEEK_END - Set position to end-of-file plus offset.

If whence is not specified, it is assumed to be SEEK_SET.

### Return Values

Returns 0 if the seek was successful, -1 otherwise. Note that seeking past EOF is not considered an error.

### Examples

Example #1 SplFileObject::fseek() example

```
<?php
$file = new SplFileObject("somefile.txt");

// Read first line
$data = $file->fgets();

// Move back to the beginning of the file
// Same as $file->rewind();
$file->fseek(0);
?>
```

### See Also

- fseek() - Seeks on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fseek.php
