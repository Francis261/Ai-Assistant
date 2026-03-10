# SessionHandler::write

Source: https://devdocs.io/php/sessionhandler.write

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandler::write — Write session data

### Description

```
public SessionHandler::write(string $id, string $data): bool
```

Writes the session data to the session storage. Called by normal PHP shutdown, by session_write_close(), or when session_register_shutdown() fails. PHP will call SessionHandler::close() immediately after this method returns.

This method wraps the internal PHP save handler defined in the session.save_handler ini setting that was set before this handler was set by session_set_save_handler().

If this class is extended by inheritance, calling the parent write method will invoke the wrapper for this method and therefore invoke the associated internal callback. This allows this method to be overridden and or intercepted and filtered (for example, encrypting the $data value before sending it to the parent write method).

For more information on what this method is expected to do, please refer to the documentation at SessionHandlerInterface::write().

### Parameters

The session id.

The encoded session data. This data is the result of the PHP internally encoding the $_SESSION superglobal to a serialized string and passing it as this parameter. Please note sessions use an alternative serialization method.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

### See Also

- The session.serialize_handler configuration directive.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandler.write.php
