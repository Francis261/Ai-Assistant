# Phar::__construct

Source: https://devdocs.io/php/phar.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::__construct — Construct a Phar archive object

### Description

### Parameters

Path to an existing Phar archive or to-be-created archive. The file name's extension must contain .phar.

Flags to pass to parent class RecursiveDirectoryIterator.

Alias with which this Phar archive should be referred to in calls to stream functionality.

### Errors/Exceptions

Throws BadMethodCallException if called twice, UnexpectedValueException if the phar archive can't be opened.

### Examples

Example #1 A Phar::__construct() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::KEY_AS_FILENAME,
                  'my.phar');
} catch (UnexpectedValueException $e) {
    die('Could not open my.phar');
} catch (BadMethodCallException $e) {
    echo 'technically, this cannot happen';
}
// this works now
echo file_get_contents('phar://my.phar/example.txt');
// and works as if we had typed
echo file_get_contents('phar:///path/to/my.phar/example.txt');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.construct.php
