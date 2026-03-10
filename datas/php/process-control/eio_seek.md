# eio_seek

Source: https://devdocs.io/php/function.eio-seek

(PECL eio >= 0.5.0b)

eio_seek — Seek to a position

### Description

```
eio_seek(
 mixed $fd,
 int $offset,
 int $whence,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_seek() repositions the offset of the open file associated with stream, Socket instance, or file descriptor specified by fd to the argument offset according to the directive whence.

### Parameters

Stream, Socket instance, or numeric file descriptor.

Starting point from which data is to be read.

whence values are:

- EIO_SEEK_SET - Set position equal to offset bytes.
- EIO_SEEK_CUR - Set position to current location plus offset.
- EIO_SEEK_END - Set position to end-of-file plus offset.

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

eio_seek() returns request resource on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-seek.php
