# eio_readahead

Source: https://devdocs.io/php/function.eio-readahead

(PECL eio >= 0.0.1dev)

eio_readahead — Perform file readahead into page cache

### Description

```
eio_readahead(
 mixed $fd,
 int $offset,
 int $length,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_readahead() populates the page cache with data from a file so that subsequent reads from that file will not block on disk I/O. See READAHEAD(2) man page for details.

### Parameters

Stream, Socket resource, or numeric file descriptor

Starting point from which data is to be read.

Number of bytes to be read.

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

eio_readahead() returns request resource on success, or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-readahead.php
