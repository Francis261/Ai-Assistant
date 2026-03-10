# SplFileInfo::getLinkTarget

Source: https://devdocs.io/php/splfileinfo.getlinktarget

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

SplFileInfo::getLinkTarget — Gets the target of a link

### Description

```
public SplFileInfo::getLinkTarget(): string|false
```

Gets the target of a filesystem link.

Note:

The target may not be the real path on the filesystem. Use SplFileInfo::getRealPath() to determine the true path on the filesystem.

### Parameters

This function has no parameters.

### Return Values

Returns the target of the filesystem link on success, or false on failure.

### Errors/Exceptions

Throws RuntimeException on error.

### Examples

Example #1 SplFileInfo::getLinkTarget() example

```
<?php
$info = new SplFileInfo('/Users/bbieber/workspace');
if ($info->isLink()) {
    var_dump($info->getLinkTarget());
    var_dump($info->getRealPath());
}
?>
```

The above example will output something similar to:

```
string(19) "Documents/workspace"
string(34) "/Users/bbieber/Documents/workspace"
```

### See Also

- SplFileInfo::isLink() - Tells if the file is a link
- SplFileInfo::getRealPath() - Gets absolute path to file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getlinktarget.php
