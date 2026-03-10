# eio_fallocate

Source: https://devdocs.io/php/function.eio-fallocate

(PECL eio >= 0.0.1dev)

eio_fallocate — Allows the caller to directly manipulate the allocated disk space for a file

### Description

```
eio_fallocate(
 mixed $fd,
 int $mode,
 int $offset,
 int $length,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_fallocate() allows the caller to directly manipulate the allocated disk space for the file specified by fd file descriptor for the byte range starting at offset and continuing for length bytes.

Note: File should be opened for writing

EIO_O_CREAT should be logically OR'd with EIO_O_WRONLY, or EIO_O_RDWR

### Parameters

Stream, Socket resource, or numeric file descriptor, e.g. returned by eio_open().

Currently only one flag is supported for mode: EIO_FALLOC_FL_KEEP_SIZE (the same as POSIX constant FALLOC_FL_KEEP_SIZE).

Specifies start of the byte range.

Specifies length the byte range.

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

eio_fallocate() returns request resource on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-fallocate.php
