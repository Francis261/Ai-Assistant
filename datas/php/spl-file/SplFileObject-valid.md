# SplFileObject::valid

Source: https://devdocs.io/php/splfileobject.valid

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::valid — Not at EOF

### Description

```
public SplFileObject::valid(): bool
```

Check whether EOF has been reached.

### Parameters

This function has no parameters.

### Return Values

Returns true if not reached EOF, false otherwise.

### Examples

Example #1 SplFileObject::valid() example

```
<?php
// Loop over a file, line by line
$file = new SplFileObject("file.txt");
while ($file->valid()) {
    echo $file->fgets();
}
?>
```

### See Also

- SplFileObject::current() - Retrieve current line of file
- SplFileObject::key() - Get line number
- SplFileObject::seek() - Seek to specified line
- SplFileObject::next() - Read next line
- SplFileObject::rewind() - Rewind the file to the first line

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.valid.php
