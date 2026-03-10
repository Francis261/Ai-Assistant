# eio_chmod

Source: https://devdocs.io/php/function.eio-chmod

(PECL eio >= 0.0.1dev)

eio_chmod — Change file/directory permissions

### Description

```
eio_chmod(
 string $path,
 int $mode,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_chmod() changes file, or directory permissions. The new permissions are specified by mode.

### Parameters

Path to the target file or directory

Avoid relative paths

The new permissions. E.g. 0644.

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

eio_chmod() returns request resource on success, or false on failure.

### See Also

- eio_chown() - Change file/directory permissions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-chmod.php
