# posix_getsid

Source: https://devdocs.io/php/function.posix-getsid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_getsid — Get the current sid of the process

### Description

```
posix_getsid(int $process_id): int|false
```

Return the session id of the process process_id. The session id of a process is the process group id of the session leader.

### Parameters

The process identifier. If set to 0, the current process is assumed. If an invalid process_id is specified, then false is returned and an error is set which can be checked with posix_get_last_error().

### Return Values

Returns the identifier, as an int, or false on failure.

### Examples

Example #1 Example use of posix_getsid()

```
<?php
$pid = posix_getpid();
echo posix_getsid($pid); //8805
?>
```

### See Also

- posix_getpgid() - Get process group id for job control
- posix_setsid() - Make the current process a session leader
- POSIX man page GETSID(2)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-getsid.php
