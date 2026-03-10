# eio_mkdir

Source: https://devdocs.io/php/function.eio-mkdir

(PECL eio >= 0.0.1dev)

eio_mkdir — Create directory

### Description

```
eio_mkdir(
 string $path,
 int $mode,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_mkdir() creates directory with specified access mode.

### Parameters

Path for the new directory.

Access mode, e.g. 0755

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

eio_mkdir() returns request resource on success, or false on failure.

### Examples

Example #1 eio_mkdir() example

```
<?php
$temp_dirname = "eio-temp-dir";

/* Is called when eio_mkdir() finishes */
function my_mkdir_callback($data, $result) {
 if ($result == 0 && is_dir($temp_dirname)
   && !is_readable($temp_dirname)
   && is_writable($temp_dirname)) {
  echo "eio_mkdir_ok";
 }

 // Remove directory
    if (file_exists($data))
        rmdir($temp_dirname);
}

// Create directory with access mode 0300
eio_mkdir($temp_dirname, 0300, EIO_PRI_DEFAULT, "my_mkdir_callback", $temp_dirname);
eio_event_loop();
?>
```

The above example will output something similar to:

```
eio_mkdir_ok
```

### See Also

- eio_rmdir() - Remove a directory

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-mkdir.php
