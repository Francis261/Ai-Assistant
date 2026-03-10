# SplFileInfo::setFileClass

Source: https://devdocs.io/php/splfileinfo.setfileclass

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::setFileClass — Sets the class used with SplFileInfo::openFile()

### Description

```
public SplFileInfo::setFileClass(string $class = SplFileObject::class): void
```

Use this method to set a custom class which will be used when SplFileInfo::openFile() is called. The class name passed to this method must be SplFileObject or a class derived from SplFileObject.

### Parameters

The class name to use when SplFileInfo::openFile() is called.

### Return Values

No value is returned.

### Examples

Example #1 SplFileInfo::setFileClass() example

```
<?php
// Create a class extending SplFileObject
class MyFoo extends SplFileObject {}

$info = new SplFileInfo(__FILE__);
// Set the class to use
$info->setFileClass('MyFoo');
var_dump($info->openFile());
?>
```

The above example will output something similar to:

```
object(MyFoo)#2 (0) { }
```

### See Also

- SplFileInfo::openFile() - Gets an SplFileObject object for the file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.setfileclass.php
