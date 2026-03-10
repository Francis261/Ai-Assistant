# session_decode

Source: https://devdocs.io/php/function.session-decode

(PHP 4, PHP 5, PHP 7, PHP 8)

session_decode — Decodes session data from a session encoded string

### Description

```
session_decode(string $data): bool
```

session_decode() decodes the serialized session data provided in $data, and populates the $_SESSION superglobal with the result.

By default, the unserialization method used is internal to PHP, and is not the same as unserialize(). The serialization method can be set using session.serialize_handler.

### Parameters

The encoded data to be stored.

### Return Values

Returns true on success or false on failure.

### See Also

- session_encode() - Encodes the current session data as a session encoded string
- session.serialize_handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-decode.php
