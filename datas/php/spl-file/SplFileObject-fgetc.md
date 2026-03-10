# SplFileObject::fgetc

Source: https://devdocs.io/php/splfileobject.fgetc

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fgetc — Gets character from file

### Description

```
public SplFileObject::fgetc(): string|false
```

Gets a character from the file.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing a single character read from the file or false on EOF.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 SplFileObject::fgetc() example

```
<?php
$file = new SplFileObject('file.txt');
while (false !== ($char = $file->fgetc())) {
    echo "$char\n";
}
?>
```

### See Also

- SplFileObject::fgets() - Gets line from file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fgetc.php
