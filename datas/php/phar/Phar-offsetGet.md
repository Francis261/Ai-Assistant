# Phar::offsetGet

Source: https://devdocs.io/php/phar.offsetget

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::offsetGet — Gets a PharFileInfo object for a specific file

### Description

```
public Phar::offsetGet(string $localName): SplFileInfo
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets. Phar::offsetGet() is used for retrieving files from a Phar archive.

### Parameters

The filename (relative path) to look for in a Phar.

### Return Values

A PharFileInfo object is returned that can be used to iterate over a file's contents or to retrieve information about the current file.

### Errors/Exceptions

This method throws BadMethodCallException if the file does not exist in the Phar archive.

### Examples

Example #1 Phar::offsetGet() example

As with all classes that implement the ArrayAccess interface, Phar::offsetGet() is automatically called when using the [] angle bracket operator.

```
<?php
$p = new Phar(dirname(__FILE__) . '/myphar.phar', 0, 'myphar.phar');
$p['exists.txt'] = "file exists\n";
try {
    // automatically calls offsetGet()
    echo $p['exists.txt'];
    echo $p['doesnotexist.txt'];
} catch (BadMethodCallException $e) {
    echo $e;
}
?>
```

The above example will output:

```
file exists
Entry doesnotexist.txt does not exist
```

### See Also

- Phar::offsetExists() - Determines whether a file exists in the phar
- Phar::offsetSet() - Set the contents of an internal file to those of an external file
- Phar::offsetUnset() - Remove a file from a phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.offsetget.php
