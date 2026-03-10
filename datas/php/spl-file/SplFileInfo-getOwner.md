# SplFileInfo::getOwner

Source: https://devdocs.io/php/splfileinfo.getowner

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getOwner — Gets the owner of the file

### Description

```
public SplFileInfo::getOwner(): int|false
```

Gets the file owner. The owner ID is returned in numerical format.

### Parameters

This function has no parameters.

### Return Values

The owner id in numerical format on success, or false on failure.

### Errors/Exceptions

Throws RuntimeException on error.

### Examples

Example #1 SplFileInfo::getOwner() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo info->getFilename() . ' belongs to owner id ' . $info->getOwner() . "\n";
print_r(posix_getpwuid($info->getOwner()));
?>
```

The above example will output something similar to:

```
example.jpg belongs to user id 501
Array
(
    [name] => tom
    [passwd] => x
    [uid] => 501
    [gid] => 42
    [gecos] => Tom Cat
    [dir] => /home/tom
    [shell] => /bin/bash
)
```

### See Also

- posix_getpwuid() - Return info about a user by user id
- SplFileInfo::getGroup() - Gets the file group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getowner.php
