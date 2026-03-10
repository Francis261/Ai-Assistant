# SplFileInfo::setInfoClass

Source: https://devdocs.io/php/splfileinfo.setinfoclass

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::setInfoClass — Sets the class used with SplFileInfo::getFileInfo() and SplFileInfo::getPathInfo()

### Description

```
public SplFileInfo::setInfoClass(string $class = SplFileInfo::class): void
```

Use this method to set a custom class which will be used when SplFileInfo::getFileInfo() and SplFileInfo::getPathInfo() are called. The class name passed to this method must be SplFileInfo or a class derived from SplFileInfo.

### Parameters

The class name to use when SplFileInfo::getFileInfo() and SplFileInfo::getPathInfo() are called.

### Return Values

No value is returned.

### Examples

Example #1 SplFileInfo::setFileClass() example

```
<?php
// Define a class which extends SplFileInfo
class MyFoo extends SplFileInfo {}

$info = new SplFileInfo('foo');
// Set the class name to use
$info->setInfoClass('MyFoo');
var_dump($info->getFileInfo());
?>
```

The above example will output something similar to:

```
object(MyFoo)#2 (0) { }
```

### See Also

- SplFileInfo::getFileInfo() - Gets an SplFileInfo object for the file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.setinfoclass.php
