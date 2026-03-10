# session_reset

Source: https://devdocs.io/php/function.session-reset

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

session_reset — Re-initialize session array with original values

### Description

```
session_reset(): bool
```

session_reset() reinitializes a session with original values stored in session storage. This function requires an active session and discards changes in $_SESSION.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- $_SESSION
- The session.auto_start configuration directive
- session_start() - Start new or resume existing session
- session_abort() - Discard session array changes and finish session
- session_commit() - Alias of session_write_close

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-reset.php
