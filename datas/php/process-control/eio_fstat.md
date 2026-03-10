# eio_fstat

Source: https://devdocs.io/php/function.eio-fstat

(PECL eio >= 0.0.1dev)

eio_fstat — Get file status

### Description

```
eio_fstat(
 mixed $fd,
 int $pri,
 callable $callback,
 mixed $data = ?
): resource
```

eio_fstat() returns file status information in result argument of callback

### Parameters

Stream, Socket resource, or numeric file descriptor.

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

eio_busy() returns request resource on success, or false on failure.

### Examples

Example #1 eio_lstat() example

```
<?php
// Create temporary file
$tmp_filename = dirname(__FILE__) ."/eio-file.tmp";
touch($tmp_filename);

/* Is called when eio_fstat() done */
function my_res_cb($data, $result) {
 // Should output array with stat info
 var_dump($result);

 if ($data['fd']) {
  // Close temporary file
  eio_close($data['fd']);
  eio_event_loop();
 }
 // Remove temporary file
 @unlink($data['file']);
}

/* Is called when eio_open() done */
function my_open_cb($data, $result) {
 // Prepare data for callback
 $d = array(
  'fd'  => $result,
  'file'=> $data
 );
 // Request stat info
 eio_fstat($result, EIO_PRI_DEFAULT, "my_res_cb", $d);
 // Process request(s)
 eio_event_loop();
}

// Open temporary file
eio_open($tmp_filename, EIO_O_RDONLY, NULL, EIO_PRI_DEFAULT,
  "my_open_cb", $tmp_filename);
eio_event_loop();
?>
```

The above example will output something similar to:

```
array(12) {
 ["st_dev"]=>
  int(2050)
  ["st_ino"]=>
  int(2489159)
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
  int(1318239506)
  ["st_mtime"]=>
  int(1318239506)
  ["st_ctime"]=>
  int(1318239506)
}
```

### See Also

- eio_lstat() - Get file status
- eio_stat() - Get file status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-fstat.php
