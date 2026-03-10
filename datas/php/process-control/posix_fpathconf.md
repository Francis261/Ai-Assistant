# posix_fpathconf

Source: https://devdocs.io/php/function.posix-fpathconf

(PHP 8 >= 8.3.0)

posix_fpathconf — Returns the value of a configurable limit

### Description

```
posix_fpathconf(resource|int $file_descriptor, int $name): int|false
```

Returns the value of a configurable limit from name for file_descriptor.

### Parameters

The file descriptor, which is expected to be either a file resource or an int. An int will be assumed to be a file descriptor that can be passed directly to the underlying system call.

The name of the configurable limit, one of the following. POSIX_PC_LINK_MAX, POSIX_PC_MAX_CANON, POSIX_PC_MAX_INPUT, POSIX_PC_NAME_MAX, POSIX_PC_PATH_MAX, POSIX_PC_PIPE_BUF, POSIX_PC_CHOWN_RESTRICTED, POSIX_PC_NO_TRUNC, POSIX_PC_ALLOC_SIZE_MIN, POSIX_PC_SYMLINK_MAX.

### Return Values

Returns the configurable limit or false.

### Errors/Exceptions

Throws a ValueError when resource is invalid.

### Examples

Example #1 posix_fpathconf() example

This example will get the max path name's length in bytes for the current dir.

```
<?php
$fd = fopen(__DIR__, "r");
echo posix_fpathconf($fd, POSIX_PC_PATH_MAX);
?>
```

The above example will output:

```
4096
```

### See Also

- posix_pathconf() - Returns the value of a configurable limit

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-fpathconf.php
