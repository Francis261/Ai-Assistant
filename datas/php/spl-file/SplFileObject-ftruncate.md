# SplFileObject::ftruncate

Source: https://devdocs.io/php/splfileobject.ftruncate

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::ftruncate — Truncates the file to a given length

### Description

```
public SplFileObject::ftruncate(int $size): bool
```

Truncates the file to size bytes.

### Parameters

The size to truncate to.

Note:

If size is larger than the file it is extended with null bytes.

If size is smaller than the file, the extra data will be lost.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SplFileObject::ftruncate() example

```
<?php
// Create file containing "Hello World!"
$file = new SplFileObject("/tmp/ftruncate", "w+");
$file->fwrite("Hello World!");

// Truncate to 5 bytes
$file->ftruncate(5);

// Rewind and read data
$file->rewind();
echo $file->fgets();
?>
```

The above example will output something similar to:

```
Hello
```

### See Also

- ftruncate() - Truncates a file to a given length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.ftruncate.php
