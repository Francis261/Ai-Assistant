# posix_getpgid

Source: https://devdocs.io/php/function.posix-getpgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getpgid — Get process group id for job control

### Description

```
posix_getpgid(int $process_id): int|false
```

Returns the process group identifier of the process process_id or false on failure.

### Parameters

The process id.

### Return Values

Returns the identifier, as an int.

### Examples

Example #1 Example use of posix_getpgid()

```
<?php
$pid = posix_getppid();
echo posix_getpgid($pid); //35
?>
```

### Notes

Note:

This is a not POSIX function, but is common on BSD and System V systems. If the system does not support this function, then it will not be included at compile time. This may be checked with function_exists().

### See Also

- posix_getppid() - Return the parent process identifier
- man page SETPGID(2)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getpgid.php
