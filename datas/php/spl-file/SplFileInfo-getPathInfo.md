# SplFileInfo::getPathInfo

Source: https://devdocs.io/php/splfileinfo.getpathinfo

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPathInfo — Gets an SplFileInfo object for the path

### Description

```
public SplFileInfo::getPathInfo(?string $class = null): ?SplFileInfo
```

Gets an SplFileInfo object for the parent of the current file.

### Parameters

Name of an SplFileInfo derived class to use, or itself if null.

### Return Values

Returns an SplFileInfo object for the parent path of the file on success, or null on failure.

### Changelog

### Examples

Example #1 SplFileInfo::getPathInfo() example

```
<?php
$info = new SplFileInfo('/usr/bin/php');
$parent_info = $info->getPathInfo();
var_dump($parent_info->getRealPath());
?>
```

The above example will output something similar to:

```
string(8) "/usr/bin"
```

### See Also

- SplFileInfo::setInfoClass() - Sets the class used with SplFileInfo::getFileInfo and SplFileInfo::getPathInfo

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getpathinfo.php
