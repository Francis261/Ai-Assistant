# DirectoryIterator::getBasename

Source: https://devdocs.io/php/directoryiterator.getbasename

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

DirectoryIterator::getBasename — Get base name of current DirectoryIterator item

### Description

```
public DirectoryIterator::getBasename(string $suffix = ""): string
```

Get the base name of the current DirectoryIterator item.

### Parameters

If the base name ends in suffix, this will be cut.

### Return Values

The base name of the current DirectoryIterator item.

### Examples

Example #1 A DirectoryIterator::getBasename() example

This example will list the full base name and the base name with suffix .jpg removed for the files in the directory containing the script.

```
<?php
$dir = new DirectoryIterator(dirname(__FILE__));
foreach ($dir as $fileinfo) {
    if ($fileinfo->isFile()) {
        echo $fileinfo->getBasename() . "\n";
        echo $fileinfo->getBasename('.jpg') . "\n";
    }
}
?>
```

The above example will output something similar to:

```
apple.jpg
apple
banana.jpg
banana
index.php
index.php
pear.jpg
pear
```

### See Also

- DirectoryIterator::getFilename() - Return file name of current DirectoryIterator item
- DirectoryIterator::getPath()
- DirectoryIterator::getPathname()
- basename() - Returns trailing name component of path
- pathinfo() - Returns information about a file path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.getbasename.php
