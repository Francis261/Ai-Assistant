# eio_chown

Source: https://devdocs.io/php/function.eio-chown

(PECL eio >= 0.0.1dev)

eio_chown — Change file/directory permissions

### Description

```
eio_chown(
 string $path,
 int $uid,
 int $gid = -1,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

Changes file, or directory permissions.

### Parameters

Path to file or directory.

Avoid relative paths

User ID. Is ignored when equal to -1.

Group ID. Is ignored when equal to -1.

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

eio_chown() returns request resource on success, or false on failure.

### See Also

- eio_chmod() - Change file/directory permissions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-chown.php
