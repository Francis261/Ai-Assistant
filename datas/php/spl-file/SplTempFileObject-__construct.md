# SplTempFileObject::__construct

Source: https://devdocs.io/php/spltempfileobject.construct

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplTempFileObject::__construct — Construct a new temporary file object

### Description

Construct a new temporary file object.

### Parameters

The maximum amount of memory (in bytes, default is 2 MB) for the temporary file to use. If the temporary file exceeds this size, it will be moved to a file in the system's temp directory.

If maxMemory is negative, only memory will be used. If maxMemory is zero, no memory will be used.

### Errors/Exceptions

Throws a RuntimeException if an error occurs.

### Examples

Example #1 SplTempFileObject() example

This example writes a temporary file in memory which can be written to and read from.

```
<?php
$temp = new SplTempFileObject();
$temp->fwrite("This is the first line\n");
$temp->fwrite("And this is the second.\n");
echo "Written " . $temp->ftell() . " bytes to temporary file.\n\n";

// Rewind and read what was written
$temp->rewind();
foreach ($temp as $line) {
    echo $line;
}
?>
```

The above example will output something similar to:

```
Written 47 bytes to temporary file.

This is the first line
And this is the second.
```

### See Also

- SplFileObject
- PHP input/output streams (for php://temp and php://memory)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/spltempfileobject.construct.php
