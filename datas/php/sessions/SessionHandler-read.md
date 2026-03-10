# SessionHandler::read

Source: https://devdocs.io/php/sessionhandler.read

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandler::read — Read session data

### Description

```
public SessionHandler::read(string $id): string|false
```

Reads the session data from the session storage, and returns the result back to PHP for internal processing. This method is called automatically by PHP when a session is started (either automatically or explicitly with session_start() and is preceded by an internal call to the SessionHandler::open().

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by session_set_save_handler().

If this class is extended by inheritance, calling the parent read method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows the method to be overridden and or intercepted and filtered (for example, decrypting the $data value returned by the parent read method).

For more information on what this method is expected to do, please refer to the documentation at SessionHandlerInterface::read().

### Parameters

The session id to read data for.

### Return Values

Returns an encoded string of the read data. If nothing was read, it must return false. Note this value is returned internally to PHP for processing.

### See Also

- The session.serialize_handler configuration directive.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandler.read.php
