# SplFileObject::getMaxLineLen

Source: https://devdocs.io/php/splfileobject.getmaxlinelen

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplFileObject::getMaxLineLen — Get maximum line length

### Description

```
public SplFileObject::getMaxLineLen(): int
```

Gets the maximum line length as set by SplFileObject::setMaxLineLen().

### Parameters

This function has no parameters.

### Return Values

Returns the maximum line length if one has been set with SplFileObject::setMaxLineLen(), default is 0.

### Examples

Example #1 SplFileObject::getMaxLineLen() example

```
<?php
$file = new SplFileObject("file.txt");
var_dump($file->getMaxLineLen());

$file->setMaxLineLen(20);
var_dump($file->getMaxLineLen());
?>
```

The above example will output something similar to:

```
int(0)
int(20)
```

### See Also

- SplFileObject::setMaxLineLen() - Set maximum line length

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileobject.getmaxlinelen.php
