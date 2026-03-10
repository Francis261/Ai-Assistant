# SplFileObject::fpassthru

Source: https://devdocs.io/php/splfileobject.fpassthru

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::fpassthru — Output all remaining data on a file pointer

### Description

```
public SplFileObject::fpassthru(): int
```

Reads to EOF on the given file pointer from the current position and writes the results to the output buffer.

You may need to call SplFileObject::rewind() to reset the file pointer to the beginning of the file if you have already written data to the file.

### Parameters

This function has no parameters.

### Return Values

Returns the number of characters read from handle and passed through to the output.

### Examples

Example #1 SplFileObject::fpassthru() example

```
<?php

// Open the file in binary mode
$file = new SplFileObject("./img/ok.png", "rb");

// Send the right headers
header("Content-Type: image/png");
header("Content-Length: " . $file->getSize());

// Dump the picture and end script
$file->fpassthru();
exit;

?>
```

### See Also

- fpassthru() - Output all remaining data on a file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.fpassthru.php
