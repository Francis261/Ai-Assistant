# eio_busy

Source: https://devdocs.io/php/function.eio-busy

(PECL eio >= 0.0.1dev)

eio_busy — Artificially increase load. Could be useful in tests, benchmarking

### Description

```
eio_busy(
 int $delay,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_busy() artificially increases load taking delay seconds to execute. May be used for debugging, or benchmarking.

### Parameters

Delay in seconds

The request priority: EIO_PRI_DEFAULT, EIO_PRI_MIN, EIO_PRI_MAX, or null. If null passed, pri internally is set to EIO_PRI_DEFAULT.

This callback is called when all the group requests are done.

Arbitrary variable passed to callback.

### Return Values

eio_busy() returns request resource on success, or false on failure.

### See Also

- eio_nop() - Does nothing, except go through the whole request cycle

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-busy.php
