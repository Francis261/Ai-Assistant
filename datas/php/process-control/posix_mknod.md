# posix_mknod

Source: https://devdocs.io/php/function.posix-mknod

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

posix_mknod — Create a special or ordinary file (POSIX.1)

### Description

```
posix_mknod(
 string $filename,
 int $flags,
 int $major = 0,
 int $minor = 0
): bool
```

Creates a special or ordinary file.

### Parameters

The file to create

This parameter is constructed by a bitwise OR between file type (one of the following constants: POSIX_S_IFREG, POSIX_S_IFCHR, POSIX_S_IFBLK, POSIX_S_IFIFO or POSIX_S_IFSOCK) and permissions.

The major device kernel identifier (required to pass when using S_IFCHR or S_IFBLK).

The minor device kernel identifier.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A posix_mknod() example

```
<?php

$file = '/tmp/tmpfile';  // file name
$type = POSIX_S_IFBLK;   // file type
$permissions = 0777;     // octal
$major = 1;
$minor = 8;              // /dev/random

if (!posix_mknod($file, $type | $permissions, $major, $minor)) {
    die('Error ' . posix_get_last_error() . ': ' . posix_strerror(posix_get_last_error()));
}

?>
```

### See Also

- posix_mkfifo() - Create a fifo special file (a named pipe)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-mknod.php
