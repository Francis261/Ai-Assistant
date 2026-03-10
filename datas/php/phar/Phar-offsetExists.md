# Phar::offsetExists

Source: https://devdocs.io/php/phar.offsetexists

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::offsetExists — Determines whether a file exists in the phar

### Description

```
public Phar::offsetExists(string $localName): bool
```

This is an implementation of the ArrayAccess interface allowing direct manipulation of the contents of a Phar archive using array access brackets.

offsetExists() is called whenever isset() is called.

### Parameters

The filename (relative path) to look for in a Phar.

### Return Values

Returns true if the file exists within the phar, or false if not.

### Examples

Example #1 A Phar::offsetExists() example

```
<?php
$p = new Phar(dirname(__FILE__) . '/my.phar', 0, 'my.phar');
$p['firstfile.txt'] = 'first file';
$p['secondfile.txt'] = 'second file';
// the next set of lines call offsetExists() indirectly
var_dump(isset($p['firstfile.txt']));
var_dump(isset($p['nothere.txt']));
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- Phar::offsetGet() - Gets a PharFileInfo object for a specific file
- Phar::offsetSet() - Set the contents of an internal file to those of an external file
- Phar::offsetUnset() - Remove a file from a phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.offsetexists.php
