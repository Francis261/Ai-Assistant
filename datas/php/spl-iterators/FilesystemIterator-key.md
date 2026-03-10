# FilesystemIterator::key

Source: https://devdocs.io/php/filesystemiterator.key

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::key — Retrieve the key for the current file

### Description

```
public FilesystemIterator::key(): string
```

### Parameters

This function has no parameters.

### Return Values

Returns the pathname or filename depending on the set flags. See the FilesystemIterator constants.

### Examples

Example #1 FilesystemIterator::key() example

This example will list the contents of the directory containing the script.

```
<?php
$iterator = new FilesystemIterator(dirname(__FILE__), FilesystemIterator::KEY_AS_FILENAME);
foreach ($iterator as $fileinfo) {
    echo $iterator->key() . "\n";
}
?>
```

Output of the above example in PHP 8.2 is similar to:

```
.
..
apple.jpg
banana.jpg
example.php
```

### See Also

- FilesystemIterator constants
- DirectoryIterator::key() - Return the key for the current DirectoryIterator item
- DirectoryIterator::getFilename() - Return file name of current DirectoryIterator item
- DirectoryIterator::getPathname()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.key.php
