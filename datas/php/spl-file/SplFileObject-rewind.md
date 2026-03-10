# SplFileObject::rewind

Source: https://devdocs.io/php/splfileobject.rewind

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::rewind — Rewind the file to the first line

### Description

```
public SplFileObject::rewind(): void
```

Rewinds the file back to the first line.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

Throws a RuntimeException if cannot be rewound.

### Examples

Example #1 SplFileObject::rewind() example

```
<?php
$file = new SplFileObject("misc.txt");

// Loop over whole file
foreach ($file as $line) { }

// Rewind to first line
$file->rewind();

// Output first line
echo $file->current();
?>
```

### See Also

- SplFileObject::current() - Retrieve current line of file
- SplFileObject::key() - Get line number
- SplFileObject::seek() - Seek to specified line
- SplFileObject::next() - Read next line
- SplFileObject::valid() - Not at EOF

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.rewind.php
