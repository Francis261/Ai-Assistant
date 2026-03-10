# posix_setsid

Source: https://devdocs.io/php/function.posix-setsid

(PHP 4, PHP 5, PHP 7, PHP 8)

posix_setsid — Make the current process a session leader

### Description

```
posix_setsid(): int
```

Make the current process a session leader.

### Parameters

This function has no parameters.

### Return Values

Returns the session id, or -1 on errors.

### See Also

- The POSIX.1 and the setsid(2) manual page on the POSIX system for more information on process groups and job control.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.posix-setsid.php
