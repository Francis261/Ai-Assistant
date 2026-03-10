# SessionHandler::gc

Source: https://devdocs.io/php/sessionhandler.gc

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandler::gc — Cleanup old sessions

### Description

```
public SessionHandler::gc(int $max_lifetime): int|false
```

Cleans up expired sessions. Called randomly by PHP internally when a session starts or when session_start() is invoked. The frequency this is called is based on the session.gc_divisor and session.gc_probability configuration directives.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by session_set_save_handler().

If this class is extended by inheritance, calling the parent gc method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered.

For more information on what this method is expected to do, please refer to the documentation at SessionHandlerInterface::gc().

### Parameters

Sessions that have not updated for the last max_lifetime seconds will be removed.

### Return Values

Returns the number of deleted sessions on success, or false on failure. Note this value is returned internally to PHP for processing.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandler.gc.php
