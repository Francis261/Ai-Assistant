# session_status

Source: https://devdocs.io/php/function.session-status

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

session_status — Returns the current session status

### Description

```
session_status(): int
```

session_status() is used to return the current session status.

### Parameters

This function has no parameters.

### Return Values

- PHP_SESSION_DISABLED if sessions are disabled.
- PHP_SESSION_NONE if sessions are enabled, but none exists.
- PHP_SESSION_ACTIVE if sessions are enabled, and one exists.

### See Also

- session_start() - Start new or resume existing session

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-status.php
