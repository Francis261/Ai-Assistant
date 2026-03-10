# posix_getgrnam

Source: https://devdocs.io/php/function.posix-getgrnam

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgrnam — Return info about a group by name

### Description

```
posix_getgrnam(string $name): array|false
```

Gets information about a group provided its name.

### Parameters

The name of the group

### Return Values

Returns an array on success, or false on failure. The array elements returned are:

### Examples

Example #1 Example use of posix_getgrnam()

```
<?php

$groupinfo = posix_getgrnam("toons");

print_r($groupinfo);
?>
```

The above example will output something similar to:

```
Array
(
    [name]    => toons
    [passwd]  => x
    [members] => Array
        (
            [0] => tom
            [1] => jerry
        )
    [gid]     => 42
)
```

### See Also

- posix_getegid() - Return the effective group ID of the current process
- posix_getgrgid() - Return info about a group by group id
- filegroup() - Gets file group
- stat() - Gives information about a file
- POSIX man page GETGRNAM(3)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getgrnam.php
