# socket_connect

Source: https://devdocs.io/php/function.socket-connect

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_connect — Initiates a connection on a socket

### Description

```
socket_connect(Socket $socket, string $address, ?int $port = null): bool
```

Initiate a connection to address using the Socket instance socket, which must be Socket instance created with socket_create().

### Parameters

A Socket instance created with socket_create().

The address parameter is either an IPv4 address in dotted-quad notation (e.g. 127.0.0.1) if socket is AF_INET, a valid IPv6 address (e.g. ::1) if IPv6 support is enabled and socket is AF_INET6 or the pathname of a Unix domain socket, if the socket family is AF_UNIX.

The port parameter is only used and is mandatory when connecting to an AF_INET or an AF_INET6 socket, and designates the port on the remote host to which a connection should be made.

### Return Values

Returns true on success or false on failure. The error code can be retrieved with socket_last_error(). This code may be passed to socket_strerror() to get a textual explanation of the error.

Note:

If the socket is non-blocking then this function returns false with an error Operation now in progress.

### Changelog

### See Also

- socket_bind() - Binds a name to a socket
- socket_listen() - Listens for a connection on a socket
- socket_create() - Create a socket (endpoint for communication)
- socket_last_error() - Returns the last error on the socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-connect.php
