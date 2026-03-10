# eio_event_loop

Source: https://devdocs.io/php/function.eio-event-loop

(PECL eio >= 0.0.1dev)

eio_event_loop — Polls libeio until all requests proceeded

### Description

```
eio_event_loop(): bool
```

eio_event_loop() polls libeio until all requests proceeded.

### Parameters

This function has no parameters.

### Return Values

eio_event_loop() returns true on success, or false on failure.

### Examples

Example #1 eio_event_loop() example

```
<?php
$temp_filename = "eio-temp-file.tmp";
touch($temp_filename);

/* Is called when eio_chmod() finished */
function my_chmod_callback($data, $result) {
    global $temp_filename;

    if ($result == 0 && !is_readable($temp_filename) && is_writable($temp_filename)) {
        echo "eio_chmod_ok";
    }

    @unlink($temp_filename);
}

eio_chmod($temp_filename, 0200, EIO_PRI_DEFAULT, "my_chmod_callback");
eio_event_loop();
?>
```

The above example will output something similar to:

```
eio_chmod_ok
```

### See Also

- eio_poll() - Can be to be called whenever there are pending requests that need finishing

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.eio-event-loop.php
