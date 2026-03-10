# SessionHandler::destroy

Source: https://devdocs.io/php/sessionhandler.destroy

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandler::destroy — Destroy a session

### Description

```
public SessionHandler::destroy(string $id): bool
```

Destroys a session. Called internally by PHP with session_regenerate_id() (assuming the $destroy is set to true, by session_destroy() or when session_decode() fails.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by session_set_save_handler().

If this class is extended by inheritance, calling the parent destroy method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered.

For more information on what this method is expected to do, please refer to the documentation at SessionHandlerInterface::destroy().

### Parameters

The session ID being destroyed.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandler.destroy.php
