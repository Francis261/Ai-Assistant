# stream_socket_get_name

Source: https://devdocs.io/php/function.stream-socket-get-name

(PHP 5, PHP 7, PHP 8)

stream_socket_get_name — Retrieve the name of the local or remote sockets

### Description

```
stream_socket_get_name(resource $socket, bool $remote): string|false
```

Returns the local or remote name of a given socket connection.

### Parameters

The socket to get the name of.

If set to true the remote socket name will be returned, if set to false the local socket name will be returned.

### Return Values

The name of the socket, or false on failure.

### See Also

- stream_socket_accept() - Accept a connection on a socket created by stream_socket_server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-socket-get-name.php
