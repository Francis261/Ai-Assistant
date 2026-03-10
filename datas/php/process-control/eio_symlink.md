# eio_symlink

Source: https://devdocs.io/php/function.eio-symlink

(PECL eio >= 0.0.1dev)

eio_symlink — Create a symbolic link

### Description

```
eio_symlink(
 string $path,
 string $new_path,
 int $pri = EIO_PRI_DEFAULT,
 callable $callback = NULL,
 mixed $data = NULL
): resource
```

eio_symlink() creates a symbolic link new_path to path.

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

eio_symlink() returns request resource on success, or false on failure.

### Examples

Example #1 eio_symlink() example

```
<?php
$filename = dirname(__FILE__)."/symlink.dat";
touch($filename);
$link = dirname(__FILE__)."/symlink.link";

function my_symlink_cb($data, $result) {
    global $link, $filename;
    var_dump(file_exists($data) && is_link($data));

    if (!eio_readlink($data, EIO_PRI_DEFAULT, "my_readlink_cb", NULL)) {
        @unlink($link);
        @unlink($filename);
    }
}

function my_readlink_cb($data, $result) {
    global $filename, $link;
    var_dump($result);

    @unlink($link);
    @unlink($filename);
}

eio_symlink($filename, $link, EIO_PRI_DEFAULT, "my_symlink_cb", $link);
eio_event_loop();
?>
```

The above example will output something similar to:

```
bool(true)
string(16) "/tmp/symlink.dat"
```

### See Also

- eio_link() - Create a hardlink for file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-symlink.php
