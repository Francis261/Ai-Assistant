# eio_grp

Source: https://devdocs.io/php/function.eio-grp

(PECL eio >= 0.0.1dev)

eio_grp — Creates a request group

### Description

```
eio_grp(callable $callback, string $data = NULL): resource
```

eio_grp() creates a request group.

### Parameters

callback function is called when the request is done. It should match the following prototype:

```
void callback(mixed $data, int $result[, resource $req]);
```

is custom data passed to the request.

request-specific result value; basically, the value returned by corresponding system call.

is optional request resource which can be used with functions like eio_get_last_error().

Arbitrary variable passed to callback.

### Return Values

eio_grp() returns request group resource on success, or false on failure.

### Examples

Example #1 eio_grp() example

```
<?php
$temp_filename = dirname(__FILE__) ."/eio-file.tmp";
$fp = fopen($temp_filename, "w");
fwrite($fp, "some data");
fclose($fp);
$my_file_fd = NULL;

/* Is called when the group requests are done */
function my_grp_done($data, $result) {
 // Remove the file, if it still exists
 @unlink($data);
}

/* Is called when the temporary file is opened */
function my_grp_file_opened_callback($data, $result) {
 global $my_file_fd, $grp;

 $my_file_fd = $result;

 $req = eio_read($my_file_fd, 4, 0,
   EIO_PRI_DEFAULT, "my_grp_file_read_callback");
 eio_grp_add($grp, $req);
}

/* Is called when the file is read */
function my_grp_file_read_callback($data, $result) {
 global $my_file_fd, $grp;

 var_dump($result);

 // Create request to close the file
 $req = eio_close($my_file_fd);

 // Add request to the group
 eio_grp_add($grp, $req);
}

// Create request group
$grp = eio_grp("my_grp_done", $temp_filename);

// Create request
$req = eio_open($temp_filename, EIO_O_RDWR | EIO_O_APPEND , NULL,
  EIO_PRI_DEFAULT, "my_grp_file_opened_callback", NULL);

// Add request to the group
eio_grp_add($grp, $req);

// Process requests
eio_event_loop();
?>
```

The above example will output something similar to:

```
string(4) "some"
```

### See Also

- eio_grp_cancel() - Cancels a request group
- eio_grp_add() - Adds a request to the request group

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-grp.php
