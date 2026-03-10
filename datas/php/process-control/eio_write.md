# eio_write

Source: https://devdocs.io/php/function.eio-write

(PECL eio >= 0.0.1dev)

eio_write — Write to file

### Description

```
eio_write(
 mixed $fd,
 string $str,
 int $length = 0,
 int $offset = 0,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_write() writes up to length bytes from str at offset offset from the beginning of the file.

### Parameters

Stream, Socket resource, or numeric file descriptor, e.g. returned by eio_open()

Source string

Maximum number of bytes to write.

Offset from the beginning of file.

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

eio_write() returns request resource on success, or false on failure.

### See Also

- eio_open() - Opens a file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-write.php
