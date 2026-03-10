# SplFileInfo::getPathname

Source: https://devdocs.io/php/splfileinfo.getpathname

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPathname — Gets the path to the file

### Description

```
public SplFileInfo::getPathname(): string
```

Returns the path to the file.

### Parameters

This function has no parameters.

### Return Values

The path to the file.

### Examples

Example #1 SplFileInfo::getPathname() example

```
<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->getPathname());
?>
```

The above example will output something similar to:

```
string(12) "/usr/bin/php"
```

### See Also

- SplFileInfo::getRealPath() - Gets absolute path to file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getpathname.php
