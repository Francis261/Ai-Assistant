# eio_nop

Source: https://devdocs.io/php/function.eio-nop

(PECL eio >= 0.0.1dev)

eio_nop — Does nothing, except go through the whole request cycle

### Description

```
eio_nop(int $pri = EIO_PRI_DEFAULT, callable $callback = NULL, mixed $data = NULL): resource
```

eio_nop() does nothing, except go through the whole request cycle. Could be useful in debugging.

### Parameters

The request priority: EIO_PRI_DEFAULT, EIO_PRI_MIN, EIO_PRI_MAX, or null. If null passed, pri internally is set to EIO_PRI_DEFAULT.

callback function is called when the request is done. It should match the following prototype:

```
void callback(mixed $data, int $result[, resource $req]);
```

is custom data passed to the request.

request-specific result value; basically, the value returned by corresponding system call.

is optional request resource which can be used with functions like eio_get_last_error().

Arbitrary variable passed to callback.

### Return Values

eio_nop() returns request resource on success, or false on failure.

### See Also

- eio_busy() - Artificially increase load. Could be useful in tests, benchmarking

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-nop.php
