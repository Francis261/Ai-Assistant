# PharFileInfo::__construct

Source: https://devdocs.io/php/pharfileinfo.construct

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

PharFileInfo::__construct — Construct a Phar entry object

### Description

This should not be called directly. Instead, a PharFileInfo object is initialized by calling Phar::offsetGet() through array access.

### Parameters

The full url to retrieve a file. If you wish to retrieve the information for the file my/file.php from the phar boo.phar, the entry should be phar://boo.phar/my/file.php.

### Errors/Exceptions

Throws BadMethodCallException if __construct() is called twice. Throws UnexpectedValueException if the phar URL requested is malformed, the requested phar cannot be opened, or the file can't be found within the phar.

### Examples

Example #1 A PharFileInfo::__construct() example

```
<?php
try {
    $p = new Phar('/path/to/my.phar', 0, 'my.phar');
    $p['testfile.txt'] = "hi\nthere\ndude";
    $file = $p['testfile.txt'];
    foreach ($file as $line => $text) {
        echo "line number $line: $text";
    }
    // this also works
    $file = new PharFileInfo('phar:///path/to/my.phar/testfile.txt');
    foreach ($file as $line => $text) {
        echo "line number $line: $text";
    }
} catch (Exception $e) {
    echo 'Phar operations failed: ', $e;
}
?>
```

The above example will output:

```
line number 1: hi
line number 2: there
line number 3: dude
line number 1: hi
line number 2: there
line number 3: dude
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pharfileinfo.construct.php
