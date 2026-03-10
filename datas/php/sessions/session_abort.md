# session_abort

Source: https://devdocs.io/php/function.session-abort

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

session_abort — Discard session array changes and finish session

### Description

```
session_abort(): bool
```

session_abort() finishes session without saving data. Thus the original values in session data are kept.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- $_SESSION
- The session.auto_start configuration directive
- session_start() - Start new or resume existing session
- session_reset() - Re-initialize session array with original values
- session_commit() - Alias of session_write_close

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-abort.php
