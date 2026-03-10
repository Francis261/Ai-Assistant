# SplFileInfo::getGroup

Source: https://devdocs.io/php/splfileinfo.getgroup

(PHP 5 >= 5.1.2, PHP 7, PHP 8)

SplFileInfo::getGroup — Gets the file group

### Description

```
public SplFileInfo::getGroup(): int|false
```

Gets the file group. The group ID is returned in numerical format.

### Parameters

This function has no parameters.

### Return Values

The group id in numerical format on success, or false on failure.

### Errors/Exceptions

Throws RuntimeException on error.

### Examples

Example #1 SplFileInfo::getGroup() example

```
<?php
$info = new SplFileInfo('example.jpg');
echo info->getFilename() . ' belongs to group id ' . $info->getGroup() . "\n";
print_r(posix_getgrgid($info->getGroup()));
?>
```

The above example will output something similar to:

```
example.jpg belongs to group id 42
Array
(
    [name] => toons
    [passwd] => x
    [members] => Array
        (
            [0] => tom
            [1] => jerry
        )
    [gid] => 42
)
```

### See Also

- filegroup() - Gets file group
- posix_getgrgid() - Return info about a group by group id

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splfileinfo.getgroup.php
