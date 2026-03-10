# socket_import_stream

Source: https://devdocs.io/php/function.socket-import-stream

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

socket_import_stream — Import a stream

### Description

```
socket_import_stream(resource $stream): Socket|false
```

Imports a stream that encapsulates a socket into a socket extension resource.

### Parameters

The stream resource to import.

### Return Values

Returns false on failure.

### Changelog

### Examples

Example #1 socket_import_stream() example

```
<?php
$stream = stream_socket_server("udp://0.0.0.0:58380", $errno, $errstr, STREAM_SERVER_BIND); 
$sock   = socket_import_stream($stream);
?>
```

### See Also

- stream_socket_server() - Create an Internet or Unix domain server socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-import-stream.php
