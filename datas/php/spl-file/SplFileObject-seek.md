# SplFileObject::seek

Source: https://devdocs.io/php/splfileobject.seek

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::seek — Seek to specified line

### Description

```
public SplFileObject::seek(int $line): void
```

Seek to specified line in the file.

### Parameters

The zero-based line number to seek to.

### Return Values

No value is returned.

### Errors/Exceptions

Throws a LogicException if the line is negative.

### Examples

Example #1 SplFileObject::seek() example

This example outputs the third line of the script which is found at position 2.

```
<?php
$file = new SplFileObject(__FILE__);
$file->seek(2);
echo $file->current();
?>
```

The above example will output something similar to:

```
$file->seek(2);
```

### See Also

- SplFileObject::current() - Retrieve current line of file
- SplFileObject::key() - Get line number
- SplFileObject::next() - Read next line
- SplFileObject::rewind() - Rewind the file to the first line
- SplFileObject::valid() - Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.seek.php
