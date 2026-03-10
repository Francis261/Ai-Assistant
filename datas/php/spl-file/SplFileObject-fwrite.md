# SplFileObject::fwrite

Source: https://devdocs.io/php/splfileobject.fwrite

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fwrite — Write to file

### Description

```
public SplFileObject::fwrite(string $data, int $length = 0): int|false
```

Writes the contents of data to the file

### Parameters

The string to be written to the file.

If the length argument is given, writing will stop after length bytes have been written or the end of data is reached, whichever comes first.

### Return Values

Returns the number of bytes written, or false on error.

### Changelog

### Examples

Example #1 SplFileObject::fwrite() example

```
<?php
$file = new SplFileObject("fwrite.txt", "w");
$written = $file->fwrite("12345");
echo "Wrote $written bytes to file";
?>
```

The above example will output something similar to:

```
Wrote 5 bytes to file
```

### See Also

- fwrite() - Binary-safe file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fwrite.php
