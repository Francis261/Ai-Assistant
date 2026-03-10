# SplFileInfo::isFile

Source: https://devdocs.io/php/splfileinfo.isfile

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isFile — Tells if the object references a regular file

### Description

```
public SplFileInfo::isFile(): bool
```

Checks if the file referenced by this SplFileInfo object exists and is a regular file.

### Parameters

This function has no parameters.

### Return Values

Returns true if the file exists and is a regular file (not a link), false otherwise.

### Examples

Example #1 SplFileInfo::isFile() example

```
<?php
$info = new SplFileInfo(__FILE__);
var_dump($info->isFile());

$info = new SplFileInfo(dirname(__FILE__));
var_dump($info->isFile());
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.isfile.php
