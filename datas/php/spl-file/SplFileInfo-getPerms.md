# SplFileInfo::getPerms

Source: https://devdocs.io/php/splfileinfo.getperms

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPerms — Gets file permissions

### Description

```
public SplFileInfo::getPerms(): int|false
```

Gets the file permissions for the file.

### Parameters

This function has no parameters.

### Return Values

Returns the file permissions on success, or false on failure.

### Examples

Example #1 SplFileInfo::getPerms() example

```
<?php
$info = new SplFileInfo('/tmp');
echo substr(sprintf('%o', $info->getPerms()), -4);

$info = new SplFileInfo(__FILE__);
echo substr(sprintf('%o', $info->getPerms()), -4);
?>
```

The above example will output something similar to:

```
1777
0644
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getperms.php
