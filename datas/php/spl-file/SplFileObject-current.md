# SplFileObject::current

Source: https://devdocs.io/php/splfileobject.current

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::current — Retrieve current line of file

### Description

```
public SplFileObject::current(): string|array|false
```

Retrieves the current line of the file.

### Parameters

This function has no parameters.

### Return Values

Retrieves the current line of the file. If the SplFileObject::READ_CSV flag is set, this method returns an array containing the current line parsed as CSV data. If the end of the file is reached, false is returned.

### Examples

Example #1 SplFileObject::current() example

```
<?php
$file = new SplFileObject(__FILE__);
foreach ($file as $k => $line) {
   echo ($file->key() + 1) . ': ' . $file->current();
}
?>
```

The above example will output something similar to:

```
1: <?php
2: $file = new SplFileObject(__FILE__);
3: foreach ($file as $line) {
4:     echo ($file->key() + 1) . ': ' . $file->current();
5: }
6: ?>
```

### See Also

- SplFileObject::key() - Get line number
- SplFileObject::seek() - Seek to specified line
- SplFileObject::next() - Read next line
- SplFileObject::rewind() - Rewind the file to the first line
- SplFileObject::valid() - Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.current.php
