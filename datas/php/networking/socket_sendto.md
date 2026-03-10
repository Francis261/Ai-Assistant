# socket_sendto

Source: https://devdocs.io/php/function.socket-sendto

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_sendto — Sends a message to a socket, whether it is connected or not

### Description

```
socket_sendto(
 Socket $socket,
 string $data,
 int $length,
 int $flags,
 string $address,
 ?int $port = null
): int|false
```

The function socket_sendto() sends length bytes from data through the socket socket to the port at the address address.

### Parameters

A Socket instance created using socket_create().

The sent data will be taken from buffer data.

length bytes from data will be sent.

The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.

IP address of the remote host.

port is the remote port number at which the data will be sent.

### Return Values

socket_sendto() returns the number of bytes sent to the remote host, or false if an error occurred.

### Changelog

### Examples

Example #1 socket_sendto() Example

```
<?php
    $sock = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);

    $msg = "Ping !";
    $len = strlen($msg);

    socket_sendto($sock, $msg, $len, 0, '127.0.0.1', 1223);
    socket_close($sock);
?>
```

### See Also

- socket_send() - Sends data to a connected socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-sendto.php
