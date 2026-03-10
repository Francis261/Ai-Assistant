# SplFileInfo::getCTime

Source: https://devdocs.io/php/splfileinfo.getctime

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getCTime — Gets the inode change time

### Description

```
public SplFileInfo::getCTime(): int|false
```

Returns the inode change time for the file. The time returned is a Unix timestamp.

### Parameters

This function has no parameters.

### Return Values

The last change time, in a Unix timestamp on success, or false on failure.

### Errors/Exceptions

Throws RuntimeException on error.

### Examples

Example #1 SplFileInfo::getCTime() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo 'Last changed at ' . date('g:i a', $info->getCTime());
?>
```

The above example will output something similar to:

```
Last changed at 1:49 pm
```

### See Also

- filectime() - Gets inode change time of file
- SplFileInfo::getATime() - Gets last access time of the file
- SplFileInfo::getMTime() - Gets the last modified time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getctime.php
