# posix_getgrgid

Source: https://devdocs.io/php/function.posix-getgrgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getgrgid — Return info about a group by group id

### Description

```
posix_getgrgid(int $group_id): array|false
```

Gets information about a group provided its id.

### Parameters

The group id.

### Return Values

The array elements returned are:

### Examples

Example #1 Example use of posix_getgrgid()

```
<?php

$groupid   = posix_getegid();
$groupinfo = posix_getgrgid($groupid);

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
- posix_getgrnam() - Return info about a group by name
- filegroup() - Gets file group
- stat() - Gives information about a file
- POSIX man page GETGRNAM(3)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getgrgid.php
