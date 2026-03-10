# eio_close

Source: https://devdocs.io/php/function.eio-close

(PECL eio >= 0.0.1dev)

eio_close — Close file

### Description

```
eio_close(
 mixed $fd,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_close() closes file specified by fd.

### Parameters

Stream, Socket resource, or numeric file descriptor

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

eio_close() returns request resource on success, or false on failure.

### See Also

- eio_open() - Opens a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-close.php
