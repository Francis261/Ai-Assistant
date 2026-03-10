# eio_rename

Source: https://devdocs.io/php/function.eio-rename

(PECL eio >= 0.0.1dev)

eio_rename — Change the name or location of a file

### Description

```
eio_rename(
 string $path,
 string $new_path,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_rename() renames or moves a file to new location.

### Parameters

Source path

Target path

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

eio_rename() returns request resource on success, or false on failure.

### Examples

Example #1 eio_rename() example

```
<?php
$filename = dirname(__FILE__)."/eio-temp-file.dat";
touch($filename);
$new_filename = dirname(__FILE__)."/eio-temp-file-new.dat";

function my_rename_cb($data, $result) {
    global $filename, $new_filename;

    if ($result == 0 && !file_exists($filename) && file_exists($new_filename)) {
        @unlink($new_filename);
        echo "eio_rename_ok";
    } else {
        @unlink($filename);
    }
}

eio_rename($filename, $new_filename, EIO_PRI_DEFAULT, "my_rename_cb", $filename);
eio_event_loop();
?>
```

The above example will output something similar to:

```
eio_rename_ok
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-rename.php
