# SplFileInfo::getType

Source: https://devdocs.io/php/splfileinfo.gettype

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getType — Gets file type

### Description

```
public SplFileInfo::getType(): string|false
```

Returns the type of the file referenced.

### Parameters

This function has no parameters.

### Return Values

A string representing the type of the entry. May be one of file, link, dir, block, fifo, char, socket, or unknown, or false on failure.

### Errors/Exceptions

Throws a RuntimeException on error.

### Examples

Example #1 SplFileInfo::getType() example

```
<?php

$info = new SplFileInfo(__FILE__);
echo $info->getType().PHP_EOL;

$info = new SplFileInfo(dirname(__FILE__));
echo $info->getType();

?>
```

The above example will output something similar to:

```
file
dir
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.gettype.php
