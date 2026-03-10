# eio_read

Source: https://devdocs.io/php/function.eio-read

(PECL eio >= 0.0.1dev)

eio_read — Read from a file descriptor at given offset

### Description

```
eio_read(
 mixed $fd,
 int $length,
 int $offset,
 int $pri,
 callable $callback,
 mixed $data = NULL
): resource
```

eio_read() reads up to length bytes from fd file descriptor at offset. The read bytes are stored in result argument of callback.

### Parameters

Stream, Socket resource, or numeric file descriptor

Maximum number of bytes to read.

Offset within the file.

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

eio_read() stores read bytes in result argument of callback function.

### Examples

Example #1 eio_read() example

```
<?php
// Open a temporary file and write some bytes there
$temp_filename = "eio-temp-file.tmp";
$fp = fopen($temp_filename, "w");
fwrite($fp, "1234567890");
fclose($fp);

/* Is called when eio_read() is done */
function my_read_cb($data, $result) {
    global $temp_filename;

 // Output read bytes
    var_dump($result);

 // Close file
    eio_close($data);
    eio_event_loop();

 // Remove temporary file
    @unlink($temp_filename);
}

/* Is called when eio_open() is done */
function my_file_opened_callback($data, $result) {
 // $result should contain the file descriptor
    if ($result > 0) {
  // Read 5 bytes starting from third
        eio_read($result, 5, 2, EIO_PRI_DEFAULT, "my_read_cb", $result);
        eio_event_loop();
    } else {
  // eio_open() failed
        unlink($data);
    }
}

// Open the file for reading and writing
eio_open($temp_filename, EIO_O_RDWR, NULL,
    EIO_PRI_DEFAULT, "my_file_opened_callback", $temp_filename);
eio_event_loop();
?>
```

The above example will output something similar to:

```
string(5) "34567"
```

### See Also

- eio_open() - Opens a file
- eio_write() - Write to file
- eio_close() - Close file
- eio_event_loop() - Polls libeio until all requests proceeded

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-read.php
