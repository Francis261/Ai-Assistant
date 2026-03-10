# SplFileInfo::getRealPath

Source: https://devdocs.io/php/splfileinfo.getrealpath

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

SplFileInfo::getRealPath — Gets absolute path to file

### Description

```
public SplFileInfo::getRealPath(): string|false
```

This method expands all symbolic links, resolves relative references and returns the real path to the file.

### Parameters

This function has no parameters.

### Return Values

Returns the path to the file, or false if the file does not exist.

### Examples

Example #1 SplFileInfo::getRealPath() example

```
<?php
$info = new SplFileInfo('/..//./../../'.__FILE__);
var_dump($info->getRealPath());

$info = new SplFileInfo('/tmp');
var_dump($info->getRealPath());

$info = new SplFileInfo('/I/Do/Not/Exist');
var_dump($info->getRealPath());

$info = new SplFileInfo('php://output');
var_dump($info->getRealPath());

$info = new SplFileInfo("");
var_dump($info->getRealPath());
?>
```

The above example will output something similar to:

```
string(28) "/private/tmp/phptempfile.php" 
string(12) "/private/tmp"
bool(false)
bool(false)
string(12) "/private/tmp"
```

### See Also

- SplFileInfo::isLink() - Tells if the file is a link
- realpath() - Returns canonicalized absolute pathname

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getrealpath.php
