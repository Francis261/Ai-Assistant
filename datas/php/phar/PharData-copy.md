# PharData::copy

Source: https://devdocs.io/php/phardata.copy

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::copy — Copy a file internal to the tar/zip archive to another new file within the same archive

### Description

```
public PharData::copy(string $from, string $to): true
```

Copy a file internal to the tar/zip archive to another new file within the same archive. This is an object-oriented alternative to using copy() with the phar stream wrapper.

### Parameters

### Return Values

Always returns true.

### Errors/Exceptions

Throws UnexpectedValueException if the source file does not exist, the destination file already exists, write access is disabled, opening either file fails, reading the source file fails, or a PharException if writing the changes to the phar fails.

### Examples

Example #1 A PharData::copy() example

This example shows using PharData::copy() and the equivalent stream wrapper performance of the same thing. The primary difference between the two approaches is error handling. All PharData methods throw exceptions, whereas the stream wrapper uses trigger_error().

```
<?php

try {
    $phar = new PharData('myphar.tar');

    $phar['a'] = 'hi';
    $phar->copy('a', 'b');

    echo $phar['b']; // Outputs "phar://myphar.tar/b"
} catch (Exception $e) {
    // Handle error
}

// The stream wrapper equivalent of the above code.
// E_WARNING are triggered on error rather than exceptions
copy('phar://myphar.tar/a', 'phar//myphar.tar/c');
echo file_get_contents('phar://myphar.tar/c'); // Outputs "hi"

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.copy.php
