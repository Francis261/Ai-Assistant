# SplFileInfo::isDir

Source: https://devdocs.io/php/splfileinfo.isdir

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isDir — Tells if the file is a directory

### Description

```
public SplFileInfo::isDir(): bool
```

This method can be used to determine if the file is a directory.

### Parameters

This function has no parameters.

### Return Values

Returns true if a directory, false otherwise.

### Examples

Example #1 SplFileInfo::isDir() example

```
<?php
$d = new SplFileInfo(dirname(__FILE__));
var_dump($d->isDir());

$d = new SplFileInfo(__FILE__);
var_dump($d->isDir());
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.isdir.php
