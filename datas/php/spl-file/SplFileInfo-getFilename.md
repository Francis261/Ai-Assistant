# SplFileInfo::getFilename

Source: https://devdocs.io/php/splfileinfo.getfilename

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getFilename — Gets the filename

### Description

```
public SplFileInfo::getFilename(): string
```

Gets the filename without any path information.

### Parameters

This function has no parameters.

### Return Values

The filename.

### Examples

Example #1 SplFileInfo::getFilename() example

```
<?php
$info = new SplFileInfo('foo.txt');
var_dump($info->getFilename());

$info = new SplFileInfo('/path/to/foo.txt');
var_dump($info->getFilename());

$info = new SplFileInfo('http://www.php.net/');
var_dump($info->getFilename());

$info = new SplFileInfo('http://www.php.net/svn.php');
var_dump($info->getFilename());
?>
```

The above example will output something similar to:

```
string(7) "foo.txt"
string(7) "foo.txt"
string(0) ""
string(7) "svn.php"
```

### See Also

- SplFileInfo::getBasename() - Gets the base name of the file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getfilename.php
