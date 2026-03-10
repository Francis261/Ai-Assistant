# PharData::__construct

Source: https://devdocs.io/php/phardata.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

PharData::__construct — Construct a non-executable tar or zip archive object

### Description

### Parameters

Path to an existing tar/zip archive or to-be-created archive

Flags to pass to Phar parent class RecursiveDirectoryIterator.

Alias with which this Phar archive should be referred to in calls to stream functionality.

One of the file format constants available within the Phar class.

### Errors/Exceptions

Throws BadMethodCallException if called twice; UnexpectedValueException if the Phar archive can't be opened.

### Examples

Example #1 A PharData::__construct() example

```
<?php
try {
    $p = new PharData('/path/to/my.tar', Phar::CURRENT_AS_FILEINFO | Phar::KEY_AS_FILENAME);
} catch (UnexpectedValueException $e) {
    die('Could not open my.tar');
} catch (BadMethodCallException $e) {
    echo 'technically, this cannot happen';
}
echo file_get_contents('phar:///path/to/my.tar/example.txt');
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phardata.construct.php
