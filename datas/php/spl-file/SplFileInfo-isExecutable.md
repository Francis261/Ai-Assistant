# SplFileInfo::isExecutable

Source: https://devdocs.io/php/splfileinfo.isexecutable

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isExecutable — Tells if the file is executable

### Description

```
public SplFileInfo::isExecutable(): bool
```

Checks if the file is executable.

### Parameters

This function has no parameters.

### Return Values

Returns true if executable, false otherwise.

### Examples

Example #1 SplFileInfo::isExecutable() example

```
<?php
$info = new SplFileInfo('/usr/bin/php');
var_dump($info->isExecutable()); 

$info = new SplFileInfo('/usr/bin');
var_dump($info->isExecutable());

$info = new SplFileInfo('foo');
var_dump($info->isExecutable());
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.isexecutable.php
