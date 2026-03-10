# eio_rmdir

Source: https://devdocs.io/php/function.eio-rmdir

(PECL eio >= 0.0.1dev)

eio_rmdir — Remove a directory

### Description

```
eio_rmdir(
 string $path,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_rmdir() removes a directory.

### Parameters

Directory path

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

eio_rmdir() returns request resource on success, or false on failure.

### Examples

Example #1 eio_rmdir() example

```
<?php
$temp_dirname = "eio-temp-dir";
mkdir($temp_dirname);

function my_rmdir_callback($data, $result) {
    if ($result == 0 && !file_exists($data)) {
        echo "eio_rmdir_ok";
    } else if (file_exists($data)) {
        rmdir($data);
    }
}

eio_rmdir($temp_dirname, EIO_PRI_DEFAULT, "my_rmdir_callback", $temp_dirname);
eio_event_loop();
?>
```

The above example will output something similar to:

```
eio_rmdir_ok
```

### See Also

- eio_mkdir() - Create directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-rmdir.php
