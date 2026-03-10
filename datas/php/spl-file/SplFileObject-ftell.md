# SplFileObject::ftell

Source: https://devdocs.io/php/splfileobject.ftell

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::ftell — Return current file position

### Description

```
public SplFileObject::ftell(): int|false
```

Returns the position of the file pointer which represents the current offset in the file stream.

### Parameters

This function has no parameters.

### Return Values

Returns the position of the file pointer as an integer, or false on error.

### Examples

Example #1 SplFileObject::ftell() example

```
<?php
$file = new SplFileObject("/etc/passwd");

// Read first line
$data = $file->fgets();

// Where are we?
echo $file->ftell();
?>
```

### See Also

- ftell() - Returns the current position of the file read/write pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.ftell.php
