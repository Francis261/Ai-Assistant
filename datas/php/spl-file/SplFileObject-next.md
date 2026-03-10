# SplFileObject::next

Source: https://devdocs.io/php/splfileobject.next

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::next — Read next line

### Description

```
public SplFileObject::next(): void
```

Moves ahead to the next line in the file.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 SplFileObject::next() example

```
<?php
// Read through file line by line
$file = new SplFileObject("misc.txt");
while (!$file->eof()) {
    echo $file->current();
    $file->next();
}
?>
```

### See Also

- SplFileObject::current() - Retrieve current line of file
- SplFileObject::key() - Get line number
- SplFileObject::seek() - Seek to specified line
- SplFileObject::rewind() - Rewind the file to the first line
- SplFileObject::valid() - Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.next.php
