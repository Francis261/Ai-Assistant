# posix_getpwuid

Source: https://devdocs.io/php/function.posix-getpwuid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpwuid — Return info about a user by user id

### Description

```
posix_getpwuid(int $user_id): array|false
```

Returns an array of information about the user referenced by the given user ID.

### Parameters

The user identifier.

### Return Values

Returns an associative array with the following elements:

### Examples

Example #1 Example use of posix_getpwuid()

```
<?php

$userinfo = posix_getpwuid(10000);

print_r($userinfo);
?>
```

The above example will output something similar to:

```
Array
(
    [name]    => tom
    [passwd]  => x
    [uid]     => 10000
    [gid]     => 42
    [gecos]   => "tom,,,"
    [dir]     => "/home/tom"
    [shell]   => "/bin/bash"
)
```

### See Also

- posix_getpwnam() - Return info about a user by username
- POSIX man page GETPWNAM(3)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getpwuid.php
