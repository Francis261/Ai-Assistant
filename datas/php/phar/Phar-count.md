# Phar::count

Source: https://devdocs.io/php/phar.count

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::count — Returns the number of entries (files) in the Phar archive

### Description

```
public Phar::count(int $mode = COUNT_NORMAL): int
```

### Parameters

mode is an integer value specifying the counting mode to be used. By default, it is set to COUNT_NORMAL, which counts only the number of items in the archive that have not been deleted or hidden. When set to COUNT_RECURSIVE, it counts all items in the archive, including those that have been deleted or hidden.

### Return Values

The number of files contained within this phar, or 0 (the number zero) if none.

### Examples

Example #1 A Phar::count() example

```
<?php
// make sure it doesn't exist
@unlink('brandnewphar.phar');
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
} catch (Exception $e) {
    echo 'Could not create phar:', $e;
}
echo 'The new phar has ' . $p->count() . " entries\n";
$p['file.txt'] = 'hi';
echo 'The new phar has ' . $p->count() . " entries\n";
?>
```

The above example will output:

```
The new phar has 0 entries
The new phar has 1 entries
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.count.php
