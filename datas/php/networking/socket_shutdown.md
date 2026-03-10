# socket_shutdown

Source: https://devdocs.io/php/function.socket-shutdown

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_shutdown — Shuts down a socket for receiving, sending, or both

### Description

```
socket_shutdown(Socket $socket, int $mode = 2): bool
```

The socket_shutdown() function allows you to stop incoming, outgoing or all data (the default) from being sent through the socket

Note:

The associated buffer, or buffers, may or may not be emptied.

### Parameters

A Socket instance created with socket_create().

The value of mode can be one of the following:

### Return Values

Returns true on success or false on failure.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-shutdown.php
