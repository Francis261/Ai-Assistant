# SplFileInfo::getBasename

Source: https://devdocs.io/php/splfileinfo.getbasename

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

SplFileInfo::getBasename — Gets the base name of the file

### Description

```
public SplFileInfo::getBasename(string $suffix = ""): string
```

This method returns the base name of the file, directory, or link without path info.

SplFileInfo::getBasename() is locale aware, so for it to see the correct basename with multibyte character paths, the matching locale must be set using the setlocale() function.

### Parameters

Optional suffix to omit from the base name returned.

### Return Values

Returns the base name without path information.

### Examples

Example #1 SplFileInfo::getBasename() example

```
<?php
$info = new SplFileInfo('file.txt');
var_dump($info->getBasename());

$info = new SplFileInfo('/path/to/file.txt');
var_dump($info->getBasename());

$info = new SplFileInfo('/path/to/file.txt');
var_dump($info->getBasename('.txt'));
?>
```

The above example will output something similar to:

```
string(8) "file.txt"
string(8) "file.txt"
string(4) "file"
```

### See Also

- SplFileInfo::getFilename() - Gets the filename

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getbasename.php
