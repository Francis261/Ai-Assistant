# eio_statvfs

Source: https://devdocs.io/php/function.eio-statvfs

(PECL eio >= 0.0.1dev)

eio_statvfs — Get file system statistics

### Description

```
eio_statvfs(
 string $path,
 int $pri,
 callable $callback,
 mixed $data = ?
): resource
```

eio_statvfs() returns file system statistics information in result argument of callback

### Parameters

Pathname of any file within the mounted file system

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

eio_statvfs() returns request resource on success, or false on failure. On success assigns result argument of callback to an array.

### Examples

Example #1 eio_statvfs() example

```
<?php
$tmp_filename = '/tmp/eio-file.tmp';
touch($tmp_filename);

function my_statvfs_callback($data, $result) {
    var_dump($data);
    var_dump($result);

 @unlink($data);
}

eio_statvfs($tmp_filename, EIO_PRI_DEFAULT, "my_statvfs_callback", $tmp_filename);
eio_event_loop();
?>
```

The above example will output something similar to:

```
string(17) "/tmp/eio-file.tmp"
array(11) {
  ["f_bsize"]=>
  int(4096)
  ["f_frsize"]=>
  int(4096)
  ["f_blocks"]=>
  int(262144)
  ["f_bfree"]=>
  int(262111)
  ["f_bavail"]=>
  int(262111)
  ["f_files"]=>
  int(1540815)
  ["f_ffree"]=>
  int(1540743)
  ["f_favail"]=>
  int(1540743)
  ["f_fsid"]=>
  int(0)
  ["f_flag"]=>
  int(4102)
  ["f_namemax"]=>
  int(255)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-statvfs.php
