# socket_accept

Source: https://devdocs.io/php/function.socket-accept

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_accept — Accepts a connection on a socket

### Description

```
socket_accept(Socket $socket): Socket|false
```

After the socket socket has been created using socket_create(), bound to a name with socket_bind(), and told to listen for connections with socket_listen(), this function will accept incoming connections on that socket. Once a successful connection is made, a new Socket instance is returned, which may be used for communication. If there are multiple connections queued on the socket, the first will be used. If there are no pending connections, socket_accept() will block until a connection becomes present. If socket has been made non-blocking using socket_set_blocking() or socket_set_nonblock(), false will be returned.

The Socket instance returned by socket_accept() may not be used to accept new connections. The original listening socket socket, however, remains open and may be reused.

### Parameters

A Socket instance created with socket_create().

### Return Values

Returns a new Socket instance on success, or false on error. The actual error code can be retrieved by calling socket_last_error(). This error code may be passed to socket_strerror() to get a textual explanation of the error.

### Changelog

### See Also

- socket_connect() - Initiates a connection on a socket
- socket_listen() - Listens for a connection on a socket
- socket_create() - Create a socket (endpoint for communication)
- socket_bind() - Binds a name to a socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-accept.php
