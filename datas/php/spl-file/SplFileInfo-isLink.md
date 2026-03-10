# SplFileInfo::isLink

Source: https://devdocs.io/php/splfileinfo.islink

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::isLink — Tells if the file is a link

### Description

```
public SplFileInfo::isLink(): bool
```

Use this method to check if the file referenced by the SplFileInfo object is a link.

### Parameters

This function has no parameters.

### Return Values

Returns true if the file is a link, false otherwise.

### Examples

Example #1 SplFileInfo::isLink() example

```
<?php
$info = new SplFileInfo('/path/to/symlink');
if ($info->isLink()) {
    echo 'The real path is '.$info->getRealPath();
}
?>
```

### See Also

- SplFileInfo::getRealPath() - Gets absolute path to file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.islink.php
