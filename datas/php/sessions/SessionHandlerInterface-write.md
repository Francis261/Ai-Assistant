# SessionHandlerInterface::write

Source: https://devdocs.io/php/sessionhandlerinterface.write

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::write — Write session data

### Description

```
public SessionHandlerInterface::write(string $id, string $data): bool
```

Writes the session data to the session storage. Called by session_write_close(), when session_register_shutdown() fails, or during a normal shutdown. Note: SessionHandlerInterface::close() is called immediately after this function.

PHP will call this method when the session is ready to be saved and closed. It encodes the session data from the $_SESSION superglobal to a serialized string and passes this along with the session ID to this method for storage. The serialization method used is specified in the session.serialize_handler setting.

Note this method is normally called by PHP after the output buffers have been closed unless explicitly called by session_write_close()

### Parameters

The session id.

The encoded session data. This data is the result of the PHP internally encoding the $_SESSION superglobal to a serialized string and passing it as this parameter. Please note sessions use an alternative serialization method.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

### See Also

- The session.serialize_handler configuration directive.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.write.php
