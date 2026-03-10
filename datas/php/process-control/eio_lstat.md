# eio_lstat

Source: https://devdocs.io/php/function.eio-lstat

(PECL eio >= 0.0.1dev)

eio_lstat — Get file status

### Description

```
eio_lstat(
 string $path,
 int $pri,
 callable $callback,
 mixed $data = NULL
): resource
```

eio_lstat() returns file status information in result argument of callback

### Parameters

The file path

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

eio_lstat() returns request resource on success or false on error.

### Examples

Example #1 eio_lstat() example

```
<?php
$tmp_filename = dirname(__FILE__). "/eio-file.tmp";
touch($tmp_filename);

function my_res_cb($data, $result) {
    var_dump($data);
    var_dump($result);
}

function my_open_cb($data, $result) {
    eio_close($result);
    eio_event_loop();

    @unlink($data);
}

eio_lstat($tmp_filename, EIO_PRI_DEFAULT, "my_res_cb", "eio_lstat");
eio_open($tmp_filename, EIO_O_RDONLY, NULL,
 EIO_PRI_DEFAULT, "my_open_cb", $tmp_filename);
eio_event_loop();
?>
```

The above example will output something similar to:

```
string(9) "eio_lstat"
array(12) {
 ["st_dev"]=>
  int(2050)
  ["st_ino"]=>
  int(2099197)
  ["st_mode"]=>
  int(33188)
  ["st_nlink"]=>
  int(1)
  ["st_uid"]=>
  int(1000)
  ["st_gid"]=>
  int(100)
  ["st_rdev"]=>
  int(0)
  ["st_blksize"]=>
  int(4096)
  ["st_blocks"]=>
  int(0)
  ["st_atime"]=>
  int(1318235777)
  ["st_mtime"]=>
  int(1318235777)
  ["st_ctime"]=>
  int(1318235777)
}
```

### See Also

- eio_stat() - Get file status
- eio_fstat() - Get file status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-lstat.php
