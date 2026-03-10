# FilesystemIterator::current

Source: https://devdocs.io/php/filesystemiterator.current

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

FilesystemIterator::current — The current file

### Description

```
public FilesystemIterator::current(): string|SplFileInfo|FilesystemIterator
```

Get file information of the current element.

### Parameters

This function has no parameters.

### Return Values

The filename, file information, or $this depending on the set flags. See the FilesystemIterator constants.

### Examples

Example #1 FilesystemIterator::current() example

This example will list the contents of the directory containing the script.

```
<?php
$iterator = new FilesystemIterator(__DIR__, FilesystemIterator::CURRENT_AS_PATHNAME);
foreach ($iterator as $fileinfo) {
    echo $iterator->current() . "\n";
}
?>
```

Output of the above example in PHP 8.2 is similar to:

```
/www/examples/.
/www/examples/..
/www/examples/apple.jpg
/www/examples/banana.jpg
/www/examples/example.php
```

### See Also

- FilesystemIterator constants
- DirectoryIterator::current() - Return the current DirectoryIterator item
- DirectoryIterator::getFileName() - Return file name of current DirectoryIterator item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filesystemiterator.current.php
