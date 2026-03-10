# ftruncate

Source: https://devdocs.io/php/function.ftruncate

(PHP 4, PHP 5, PHP 7, PHP 8)

ftruncate — Truncates a file to a given length

### Description

```
ftruncate(resource $stream, int $size): bool
```

Takes the filepointer, stream, and truncates the file to length, size.

### Parameters

The file pointer.

Note:

The stream must be open for writing.

The size to truncate to.

Note:

If size is larger than the file then the file is extended with null bytes.

If size is smaller than the file then the file is truncated to that size.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 File truncation example

```
<?php
$filename = 'lorem_ipsum.txt';

$handle = fopen($filename, 'r+');
ftruncate($handle, rand(1, filesize($filename)));
rewind($handle);
echo fread($handle, filesize($filename));
fclose($handle);
?>
```

### Notes

Note:

The file pointer is not changed.

### See Also

- fopen() - Opens file or URL
- fseek() - Seeks on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ftruncate.php
