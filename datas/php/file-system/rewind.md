# rewind

Source: https://devdocs.io/php/function.rewind

(PHP 4, PHP 5, PHP 7, PHP 8)

rewind — Rewind the position of a file pointer

### Description

```
rewind(resource $stream): bool
```

Sets the file position indicator for stream to the beginning of the file stream.

Note:

If you have opened the file in append ("a" or "a+") mode, any data you write to the file will always be appended, regardless of the file pointer position.

### Parameters

The file pointer must be valid, and must point to a file successfully opened by fopen().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 rewind() overwriting example

```
<?php
$handle = fopen('output.txt', 'r+');

fwrite($handle, 'Really long sentence.');
rewind($handle);
fwrite($handle, 'Foo');
rewind($handle);

echo fread($handle, filesize('output.txt'));

fclose($handle);
?>
```

The above example will output something similar to:

```
Foolly long sentence.
```

### See Also

- fread() - Binary-safe file read
- fseek() - Seeks on a file pointer
- ftell() - Returns the current position of the file read/write pointer
- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.rewind.php
