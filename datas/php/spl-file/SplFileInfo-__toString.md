# SplFileInfo::__toString

Source: https://devdocs.io/php/splfileinfo.tostring

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::__toString — Returns the path to the file as a string

### Description

```
public SplFileInfo::__toString(): string
```

This method will return the file name of the referenced file.

### Parameters

This function has no parameters.

### Return Values

Returns the path to the file.

### Examples

Example #1 SplFileInfo::__toString() example

```
<?php
$info = new SplFileInfo('foo');
var_dump($info->__toString());
echo $info.PHP_EOL;

$info = new SplFileInfo('/usr/bin/php');
var_dump($info->__toString());
echo $info.PHP_EOL;
?>
```

The above example will output something similar to:

```
string(3) "foo"
foo
string(12) "/usr/bin/php"
/usr/bin/php
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.tostring.php
