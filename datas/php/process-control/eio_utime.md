# eio_utime

Source: https://devdocs.io/php/function.eio-utime

(PECL eio >= 0.0.1dev)

eio_utime — Change file last access and modification times

### Description

```
eio_utime(
 string $path,
 float $atime,
 float $mtime,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

### Parameters

Path to the file.

Access time

Modification time

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

eio_utime() returns request resource on success, or false on failure.

### See Also

- eio_futime() - Change file last access and modification times

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-utime.php
