# posix_setpgid

Source: https://devdocs.io/php/function.posix-setpgid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setpgid — Set process group id for job control

### Description

```
posix_setpgid(int $process_id, int $process_group_id): bool
```

Let the process process_id join the process group process_group_id.

### Parameters

The process id.

The process group id.

### Return Values

Returns true on success or false on failure.

### See Also

- See POSIX.1 and the setsid(2) manual page on the POSIX system for more information on process groups and job control.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-setpgid.php
