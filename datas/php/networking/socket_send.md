# socket_send

Source: https://devdocs.io/php/function.socket-send

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_send — Sends data to a connected socket

### Description

```
socket_send(
 Socket $socket,
 string $data,
 int $length,
 int $flags
): int|false
```

The function socket_send() sends length bytes to the socket socket from data.

### Parameters

A Socket instance created with socket_create() or socket_accept().

A buffer containing the data that will be sent to the remote host.

The number of bytes that will be sent to the remote host from data.

The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.

### Return Values

socket_send() returns the number of bytes sent, or false on error.

### Changelog

### See Also

- socket_sendto() - Sends a message to a socket, whether it is connected or not

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-send.php
