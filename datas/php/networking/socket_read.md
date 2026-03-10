# socket_read

Source: https://devdocs.io/php/function.socket-read

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_read — Reads a maximum of length bytes from a socket

### Description

```
socket_read(Socket $socket, int $length, int $mode = PHP_BINARY_READ): string|false
```

The function socket_read() reads from the Socket instance socket created by the socket_create() or socket_accept() functions.

### Parameters

A Socket instance created with socket_create() or socket_accept().

The maximum number of bytes read is specified by the length parameter. Otherwise you can use \r, \n, or \0 to end reading (depending on the mode parameter, see below).

Optional mode parameter is a named constant:

- PHP_BINARY_READ (Default) - use the system recv() function. Safe for reading binary data.
- PHP_NORMAL_READ - reading stops at \n or \r.

### Return Values

socket_read() returns the data as a string on success, or false on error (including if the remote host has closed the connection). The error code can be retrieved with socket_last_error(). This code may be passed to socket_strerror() to get a textual representation of the error.

Note:

socket_read() returns a zero length string ("") when there is no more data to read.

### Changelog

### See Also

- socket_accept() - Accepts a connection on a socket
- socket_bind() - Binds a name to a socket
- socket_connect() - Initiates a connection on a socket
- socket_listen() - Listens for a connection on a socket
- socket_last_error() - Returns the last error on the socket
- socket_strerror() - Return a string describing a socket error
- socket_write() - Write to a socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-read.php
