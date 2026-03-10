# SplFileInfo::getPath

Source: https://devdocs.io/php/splfileinfo.getpath

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPath — Gets the path without filename

### Description

```
public SplFileInfo::getPath(): string
```

Returns the path to the file, omitting the filename and any trailing slash.

### Parameters

This function has no parameters.

### Return Values

Returns the path to the file.

### Examples

Example #1 SplFileInfo::getPath() example

```
<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->getPath());

$info = new SplFileInfo('/usr/');
var_dump($info->getPath());?>
```

The above example will output something similar to:

```
string(8) "/usr/bin"
string(4) "/usr"
```

### See Also

- SplFileInfo::getRealPath() - Gets absolute path to file
- SplFileInfo::getFilename() - Gets the filename
- SplFileInfo::getPathInfo() - Gets an SplFileInfo object for the path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getpath.php
