# DirectoryIterator::getExtension

Source: https://devdocs.io/php/directoryiterator.getextension

(PHP 5 >= 5.3.6, PHP 7, PHP 8)

DirectoryIterator::getExtension — Gets the file extension

### Description

```
public DirectoryIterator::getExtension(): string
```

Retrieves the file extension.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the file extension, or an empty string if the file has no extension.

### Examples

Example #1 DirectoryIterator::getExtension() example

```
<?php

$directory = new DirectoryIterator(__DIR__);
foreach ($directory as $fileinfo) {
    if ($fileinfo->isFile()) {
        echo $fileinfo->getExtension() . "\n";
    }
}

?>
```

The above example will output something similar to:

```
php
txt
jpg
gz
```

### Notes

Note:

Another way of getting the extension is to use the pathinfo() function.

```
<?php
$extension = pathinfo($fileinfo->getFilename(), PATHINFO_EXTENSION);
?>
```

### See Also

- DirectoryIterator::getFilename() - Return file name of current DirectoryIterator item
- DirectoryIterator::getBasename() - Get base name of current DirectoryIterator item
- pathinfo() - Returns information about a file path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.getextension.php
