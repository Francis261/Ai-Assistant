# session_write_close

Source: https://devdocs.io/php/function.session-write-close

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

session_write_close — Write session data and end session

### Description

```
session_write_close(): bool
```

End the current session and store session data.

Session data is usually stored after your script terminated without the need to call session_write_close(), but as session data is locked to prevent concurrent writes only one script may operate on a session at any time. When using framesets together with sessions you will experience the frames loading one by one due to this locking. You can reduce the time needed to load all the frames by ending the session as soon as all changes to session variables are done.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- The session_register_shutdown() - Session shutdown function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-write-close.php
