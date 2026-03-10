# SplFileInfo::getATime

Source: https://devdocs.io/php/splfileinfo.getatime

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getATime — Gets last access time of the file

### Description

```
public SplFileInfo::getATime(): int|false
```

Gets the last access time for the file.

### Parameters

This function has no parameters.

### Return Values

Returns the time the file was last accessed on success, or false on failure.

### Errors/Exceptions

Throws RuntimeException on error.

### Examples

Example #1 SplFileInfo::getATime() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo 'Last accessed at ' . date('g:i a', $info->getATime());
?>
```

The above example will output something similar to:

```
Last accessed at 1:49 pm
```

### See Also

- fileatime() - Gets last access time of file
- SplFileInfo::getCTime() - Gets the inode change time
- SplFileInfo::getMTime() - Gets the last modified time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getatime.php
