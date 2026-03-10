# streamWrapper::stream_lock

Source: https://devdocs.io/php/streamwrapper.stream-lock

(PHP 5, PHP 7, PHP 8)

streamWrapper::stream_lock — Advisory file locking

### Description

```
public streamWrapper::stream_lock(int $operation): bool
```

This method is called in response to flock(), when file_put_contents() (when flags contains LOCK_EX), stream_set_blocking() and when closing the stream (LOCK_UN).

### Parameters

operation is one of the following:

- LOCK_SH to acquire a shared lock (reader).
- LOCK_EX to acquire an exclusive lock (writer).
- LOCK_UN to release a lock (shared or exclusive).
- LOCK_NB if you don't want flock() to block while locking. (not supported on Windows)

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits E_WARNING if call to this method fails (i.e. not implemented).

### See Also

- stream_set_blocking() - Set blocking/non-blocking mode on a stream
- flock() - Portable advisory file locking

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/streamwrapper.stream-lock.php
