# socket_bind

Source: https://devdocs.io/php/function.socket-bind

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_bind — Binds a name to a socket

### Description

```
socket_bind(Socket $socket, string $address, int $port = 0): bool
```

Binds the name given in address to the socket described by socket. This has to be done before a connection is established using socket_connect() or socket_listen().

### Parameters

A Socket instance created with socket_create().

If the socket is of the AF_INET family, the address is an IP in dotted-quad notation (e.g. 127.0.0.1).

If the socket is of the AF_UNIX family, the address is the path of a Unix-domain socket (e.g. /tmp/my.sock).

The port parameter is only used when binding an AF_INET socket, and designates the port on which to listen for connections.

### Return Values

Returns true on success or false on failure.

The error code can be retrieved with socket_last_error(). This code may be passed to socket_strerror() to get a textual explanation of the error.

### Changelog

### Examples

Example #1 Using socket_bind() to set the source address

```
<?php
// Create a new socket
$sock = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

// An example list of IP addresses owned by the computer
$sourceips['kevin']    = '127.0.0.1';
$sourceips['madcoder'] = '127.0.0.2';

// Bind the source address
socket_bind($sock, $sourceips['madcoder']);

// Connect to destination address
socket_connect($sock, '127.0.0.1', 80);

// Write
$request = 'GET / HTTP/1.1' . "\r\n" .
           'Host: example.com' . "\r\n\r\n";
socket_write($sock, $request);

// Close
socket_close($sock);

?>
```

### Notes

Note:

This function must be used on the socket before socket_connect().

### See Also

- socket_connect() - Initiates a connection on a socket
- socket_listen() - Listens for a connection on a socket
- socket_create() - Create a socket (endpoint for communication)
- socket_last_error() - Returns the last error on the socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-bind.php
