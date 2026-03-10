# SplFileObject::fread

Source: https://devdocs.io/php/splfileobject.fread

(PHP 5 >= 5.5.11, PHP 7, PHP 8)

SplFileObject::fread — Read from file

### Description

```
public SplFileObject::fread(int $length): string|false
```

Reads the given number of bytes from the file.

### Parameters

The number of bytes to read.

### Return Values

Returns the string read from the file or false on failure.

### Examples

Example #1 SplFileObject::fread() example

```
<?php
// Get contents of a file into a string
$filename = "/usr/local/something.txt";
$file = new SplFileObject($filename, "r");
$contents = $file->fread($file->getSize());
?>
```

### Notes

Note:

Note that SplFileObject::fread() reads from the current position of the file pointer. Use SplFileObject::ftell() to find the current position of the pointer and SplFileObject::rewind() (or SplFileObject::fseek()) to rewind the pointer position.

### See Also

- fread() - Binary-safe file read

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fread.php
