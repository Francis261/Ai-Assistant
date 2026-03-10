# socket_create

Source: https://devdocs.io/php/function.socket-create

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_create — Create a socket (endpoint for communication)

### Description

```
socket_create(int $domain, int $type, int $protocol): Socket|false
```

Creates and returns a Socket instance, also referred to as an endpoint of communication. A typical network connection is made up of 2 sockets, one performing the role of the client, and another performing the role of the server.

### Parameters

The domain parameter specifies the protocol family to be used by the socket.

The type parameter selects the type of communication to be used by the socket.

The protocol parameter sets the specific protocol within the specified domain to be used when communicating on the returned socket. The proper value can be retrieved by name by using getprotobyname(). If the desired protocol is TCP, or UDP the corresponding constants SOL_TCP, and SOL_UDP can also be used.

### Return Values

socket_create() returns a Socket instance on success, or false on error. The actual error code can be retrieved by calling socket_last_error(). This error code may be passed to socket_strerror() to get a textual explanation of the error.

### Errors/Exceptions

If an invalid domain or type is given, socket_create() defaults to AF_INET and SOCK_STREAM respectively and additionally emits an E_WARNING message.

### Changelog

### See Also

- socket_accept() - Accepts a connection on a socket
- socket_bind() - Binds a name to a socket
- socket_connect() - Initiates a connection on a socket
- socket_listen() - Listens for a connection on a socket
- socket_last_error() - Returns the last error on the socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-create.php
