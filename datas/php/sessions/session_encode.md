# session_encode

Source: https://devdocs.io/php/function.session-encode

(PHP 4, PHP 5, PHP 7, PHP 8)

session_encode — Encodes the current session data as a session encoded string

### Description

```
session_encode(): string|false
```

session_encode() returns a serialized string of the contents of the current session data stored in the $_SESSION superglobal.

By default, the serialization method used is internal to PHP, and is not the same as serialize(). The serialization method can be set using session.serialize_handler.

### Parameters

This function has no parameters.

### Return Values

Returns the contents of the current session encoded, or false on failure.

### Notes

Must call session_start() before using session_encode().

### See Also

- session_decode() - Decodes session data from a session encoded string
- session.serialize_handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-encode.php
