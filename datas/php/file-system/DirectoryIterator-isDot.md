# DirectoryIterator::isDot

Source: https://devdocs.io/php/directoryiterator.isdot

(PHP 5, PHP 7, PHP 8)

DirectoryIterator::isDot — Determine if current DirectoryIterator item is '.' or '..'

### Description

```
public DirectoryIterator::isDot(): bool
```

Determines if the current DirectoryIterator item is a directory and either . or ..

### Parameters

This function has no parameters.

### Return Values

true if the entry is . or .., otherwise false

### Examples

Example #1 A DirectoryIterator::isDot() example

This example will list all files, omitting the . and .. entries.

```
<?php
$iterator = new DirectoryIterator(dirname(__FILE__));
foreach ($iterator as $fileinfo) {
    if (!$fileinfo->isDot()) {
        echo $fileinfo->getFilename() . "\n";
    }
}
?>
```

The above example will output something similar to:

```
apple.jpg
banana.jpg
example.php
pears.jpg
```

### See Also

- DirectoryIterator::getType()
- DirectoryIterator::isDir()
- DirectoryIterator::isFile()
- DirectoryIterator::isLink()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/directoryiterator.isdot.php
