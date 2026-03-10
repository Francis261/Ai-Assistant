# posix_getpwnam

Source: https://devdocs.io/php/function.posix-getpwnam

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpwnam — Return info about a user by username

### Description

```
posix_getpwnam(string $username): array|false
```

Returns an array of information about the given user.

### Parameters

An alphanumeric username.

### Return Values

On success an array with the following elements is returned, else false is returned:

### Examples

Example #1 Example use of posix_getpwnam()

```
<?php

$userinfo = posix_getpwnam("tom");

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

- posix_getpwuid() - Return info about a user by user id
- POSIX man page GETPWNAM(3)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getpwnam.php
