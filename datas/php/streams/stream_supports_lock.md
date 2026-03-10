# stream_supports_lock

Source: https://devdocs.io/php/function.stream-supports-lock

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

stream_supports_lock — Tells whether the stream supports locking

### Description

```
stream_supports_lock(resource $stream): bool
```

Tells whether the stream supports locking through flock().

### Parameters

The stream to check.

### Return Values

Returns true on success or false on failure.

### See Also

- flock() - Portable advisory file locking

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-supports-lock.php
