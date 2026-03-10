# SessionHandlerInterface::read

Source: https://devdocs.io/php/sessionhandlerinterface.read

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::read — Read session data

### Description

```
public SessionHandlerInterface::read(string $id): string|false
```

Reads the session data from the session storage, and returns the results. Called right after the session starts or when session_start() is called. Please note that before this method is called SessionHandlerInterface::open() is invoked.

This method is called by PHP itself when the session is started. This method should retrieve the session data from storage by the session ID provided. The string returned by this method must be in the same serialized format as when originally passed to the SessionHandlerInterface::write() If the record was not found, return false.

The data returned by this method will be decoded internally by PHP using the unserialization method specified in session.serialize_handler. The resulting data will be used to populate the $_SESSION superglobal.

Note that the serialization scheme is not the same as unserialize() and can be accessed by session_decode().

### Parameters

The session id.

### Return Values

Returns an encoded string of the read data. If nothing was read, it must return false. Note this value is returned internally to PHP for processing.

### See Also

- The session.serialize_handler configuration directive.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.read.php
