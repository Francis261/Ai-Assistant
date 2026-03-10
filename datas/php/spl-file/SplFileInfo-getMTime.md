# SplFileInfo::getMTime

Source: https://devdocs.io/php/splfileinfo.getmtime

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getMTime — Gets the last modified time

### Description

```
public SplFileInfo::getMTime(): int|false
```

Returns the time when the contents of the file were changed. The time returned is a Unix timestamp.

### Parameters

This function has no parameters.

### Return Values

Returns the last modified time for the file, in a Unix timestamp on success, or false on failure.

### Examples

Example #1 SplFileInfo::getMTime() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo 'Last modified at ' . date('g:i a', $info->getMTime());
?>
```

The above example will output something similar to:

```
Last modified at 1:49 pm
```

### See Also

- filemtime() - Gets file modification time
- SplFileInfo::getATime() - Gets last access time of the file
- SplFileInfo::getCTime() - Gets the inode change time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getmtime.php
