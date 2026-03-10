# SplFileInfo::getExtension

Source: https://devdocs.io/php/splfileinfo.getextension

(PHP 5 >= 5.3.6, PHP 7, PHP 8)

SplFileInfo::getExtension — Gets the file extension

### Description

```
public SplFileInfo::getExtension(): string
```

Retrieves the file extension.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the file extension, or an empty string if the file has no extension.

### Examples

Example #1 SplFileInfo::getExtension() example

```
<?php

$info = new SplFileInfo('foo.txt');
var_dump($info->getExtension());

$info = new SplFileInfo('photo.jpg');
var_dump($info->getExtension());

$info = new SplFileInfo('something.tar.gz');
var_dump($info->getExtension());

?>
```

The above example will output:

```
string(3) "txt"
string(3) "jpg"
string(2) "gz"
```

### Notes

Note:

Another way of getting the extension is to use the pathinfo() function.

```
<?php
$extension = pathinfo($info->getFilename(), PATHINFO_EXTENSION);
?>
```

### See Also

- SplFileInfo::getFilename() - Gets the filename
- SplFileInfo::getBasename() - Gets the base name of the file
- pathinfo() - Returns information about a file path

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getextension.php
