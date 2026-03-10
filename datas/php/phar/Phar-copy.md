# Phar::copy

Source: https://devdocs.io/php/phar.copy

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::copy — Copy a file internal to the phar archive to another new file within the phar

### Description

```
public Phar::copy(string $from, string $to): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

Copy a file internal to the phar archive to another new file within the phar. This is an object-oriented alternative to using copy() with the phar stream wrapper.

### Parameters

### Return Values

Always returns true.

### Errors/Exceptions

Throws UnexpectedValueException if the source file does not exist, the destination file already exists, write access is disabled, opening either file fails, reading the source file fails, or a PharException if writing the changes to the phar fails.

### Examples

Example #1 A Phar::copy() example

This example shows using Phar::copy() and the equivalent stream wrapper performance of the same thing. The primary difference between the two approaches is error handling. All Phar methods throw exceptions, whereas the stream wrapper uses trigger_error().

```
<?php

try {
    $phar = new Phar('myphar.phar');

    $phar['a'] = 'hi';
    $phar->copy('a', 'b');

    echo $phar['b']; // Outputs "phar://myphar.phar/b"
} catch (Exception $e) {
    // Handle error
}

// The stream wrapper equivalent of the above code.
// E_WARNING are triggered on error rather than exceptions
copy('phar://myphar.phar/a', 'phar//myphar.phar/c');
echo file_get_contents('phar://myphar.phar/c'); // Outputs "hi"

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.copy.php
