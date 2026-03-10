# SplFileObject::fgets

Source: https://devdocs.io/php/splfileobject.fgets

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fgets — Gets line from file

### Description

```
public SplFileObject::fgets(): string
```

Gets a line from the file.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the next line from the file.

### Errors/Exceptions

Throws a RuntimeException if the file cannot be read.

### Examples

Example #1 SplFileObject::fgets() example

This example simply outputs the contents of file.txt line-by-line.

```
<?php
$file = new SplFileObject("file.txt");
while (!$file->eof()) {
    echo $file->fgets();
}
?>
```

### See Also

- fgets() - Gets line from file pointer
- SplFileObject::fgetss() - Gets line from file and strip HTML tags
- SplFileObject::fgetc() - Gets character from file
- SplFileObject::current() - Retrieve current line of file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fgets.php
