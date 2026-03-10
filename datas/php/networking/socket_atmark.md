# socket_atmark

Source: https://devdocs.io/php/function.socket-atmark

(PHP 8 >= 8.3.0, PHP 8)

socket_atmark — Determines whether socket is at out-of-band mark

### Description

```
socket_atmark(Socket $socket): bool
```

Determines whether socket is at out-of-band mark.

### Parameters

A Socket instance created with socket_create().

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Using socket_atmark() to set the source address

```
<?php
// Create a new socket
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);
var_dump(socket_atmark($sock));
// Close
socket_close($sock);
?>
```

### See Also

- socket_connect() - Initiates a connection on a socket
- socket_create() - Create a socket (endpoint for communication)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-atmark.php
