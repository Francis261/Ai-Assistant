# stream_socket_accept

Source: https://devdocs.io/php/function.stream-socket-accept

(PHP 5, PHP 7, PHP 8)

stream_socket_accept — Accept a connection on a socket created by stream_socket_server()

### Description

```
stream_socket_accept(resource $socket, ?float $timeout = null, string &$peer_name = null): resource|false
```

Accept a connection on a socket previously created by stream_socket_server().

### Parameters

The server socket to accept a connection from.

Override the default socket accept timeout. Time should be given in seconds. By default, default_socket_timeout is used.

Will be set to the name (address) of the client which connected, if included and available from the selected transport.

Note:

Can also be determined later using stream_socket_get_name().

### Return Values

Returns a stream to the accepted socket connection or false on failure.

### Changelog

### Notes

This function should not be used with UDP server sockets. Instead, use stream_socket_recvfrom() and stream_socket_sendto().

### See Also

- stream_socket_server() - Create an Internet or Unix domain server socket
- stream_socket_get_name() - Retrieve the name of the local or remote sockets
- stream_set_blocking() - Set blocking/non-blocking mode on a stream
- stream_set_timeout() - Set timeout period on a stream
- fgets() - Gets line from file pointer
- fgetss() - Gets line from file pointer and strip HTML tags
- fwrite() - Binary-safe file write
- fclose() - Closes an open file pointer
- feof() - Tests for end-of-file on a file pointer
- cURL Functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-socket-accept.php
