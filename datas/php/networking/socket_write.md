# socket_write

Source: https://devdocs.io/php/function.socket-write

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_write — Write to a socket

### Description

```
socket_write(Socket $socket, string $data, ?int $length = null): int|false
```

The function socket_write() writes to the socket from the given data.

### Parameters

The buffer to be written.

The optional parameter length can specify an alternate length of bytes written to the socket. If this length is greater than data's length, it is silently truncated to the length of data.

### Return Values

Returns the number of bytes successfully written to the socket or false on failure. The error code can be retrieved with socket_last_error(). This code may be passed to socket_strerror() to get a textual explanation of the error.

Note:

It is perfectly valid for socket_write() to return zero which means no bytes have been written. Be sure to use the === operator to check for false in case of an error.

### Changelog

### Notes

Note:

socket_write() does not necessarily write all bytes from data. It's valid that, depending on the network buffers etc., only a certain amount of data, even one byte, is written despite data being longer. A loop must be used to ensure that the rest of data is transmitted.

### See Also

- socket_accept() - Accepts a connection on a socket
- socket_bind() - Binds a name to a socket
- socket_connect() - Initiates a connection on a socket
- socket_listen() - Listens for a connection on a socket
- socket_read() - Reads a maximum of length bytes from a socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-write.php
