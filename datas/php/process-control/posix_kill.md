# posix_kill

Source: https://devdocs.io/php/function.posix-kill

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_kill — Send a signal to a process

### Description

```
posix_kill(int $process_id, int $signal): bool
```

Send the signal signal to the process with the process identifier process_id.

### Parameters

The process identifier.

One of the PCNTL signals constants.

### Return Values

Returns true on success or false on failure.

### See Also

- The kill(2) manual page of the POSIX system, which contains additional information about negative process identifiers, the special pid 0, the special pid -1, and the signal number 0.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-kill.php
