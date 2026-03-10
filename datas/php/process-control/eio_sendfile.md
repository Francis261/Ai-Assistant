# eio_sendfile

Source: https://devdocs.io/php/function.eio-sendfile

(PECL eio >= 0.0.1dev)

eio_sendfile — Transfer data between file descriptors

### Description

```
eio_sendfile(
 mixed $out_fd,
 mixed $in_fd,
 int $offset,
 int $length,
 int $pri = ?,
 callable $callback = ?,
 string $data = ?
): resource
```

eio_sendfile() copies data between one file descriptor and another. See SENDFILE(2) man page for details.

### Parameters

Output stream, Socket resource, or file descriptor. Should be opened for writing.

Input stream, Socket resource, or file descriptor. Should be opened for reading.

Offset within the source file.

Number of bytes to copy.

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

eio_sendfile() returns request resource on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-sendfile.php
