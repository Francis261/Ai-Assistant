# stream_socket_shutdown

Source: https://devdocs.io/php/function.stream-socket-shutdown

(PHP 5 >= 5.2.1, PHP 7, PHP 8)

stream_socket_shutdown — Shutdown a full-duplex connection

### Description

```
stream_socket_shutdown(resource $stream, int $mode): bool
```

Shutdowns (partially or not) a full-duplex connection.

Note:

The associated buffer, or buffers, may or may not be emptied.

### Parameters

An open stream (opened with stream_socket_client(), for example)

One of the following constants: STREAM_SHUT_RD (disable further receptions), STREAM_SHUT_WR (disable further transmissions) or STREAM_SHUT_RDWR (disable further receptions and transmissions).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 A stream_socket_shutdown() example

```
<?php

$server = stream_socket_server('tcp://127.0.0.1:1337');
$client = stream_socket_client('tcp://127.0.0.1:1337');

var_dump(fputs($client, "hello"));

stream_socket_shutdown($client, STREAM_SHUT_WR);
var_dump(fputs($client, "hello")); // doesn't work now

?>
```

The above example will output something similar to:

```
int(5)

Notice: fputs(): send of 5 bytes failed with errno=32 Broken pipe in test.php on line 9
int(0)
```

### See Also

- fclose() - Closes an open file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-socket-shutdown.php
