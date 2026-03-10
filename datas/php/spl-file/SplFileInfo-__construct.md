# SplFileInfo::__construct

Source: https://devdocs.io/php/splfileinfo.construct

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::__construct — Construct a new SplFileInfo object

### Description

Creates a new SplFileInfo object for the file_name specified. The file does not need to exist, or be readable.

### Parameters

Path to the file.

### Examples

Example #1 SplFileInfo::__construct() example

```
<?php
$info = new SplFileInfo('example.php');
if ($info->isFile()) {
    echo $info->getRealPath();
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.construct.php
