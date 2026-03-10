# SplFileInfo::getSize

Source: https://devdocs.io/php/splfileinfo.getsize

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getSize — Gets file size

### Description

```
public SplFileInfo::getSize(): int|false
```

Returns the filesize in bytes for the file referenced.

### Parameters

This function has no parameters.

### Return Values

The filesize in bytes on success, or false on failure.

### Errors/Exceptions

A RuntimeException will be thrown if the file does not exist or an error occurs.

### Examples

Example #1 SplFileInfo::getSize() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo $fileinfo->getFilename() . " " . $fileinfo->getSize();
?>
```

The above example will output something similar to:

```
example.jpg 15385
```

### See Also

- filesize() - Gets file size

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getsize.php
