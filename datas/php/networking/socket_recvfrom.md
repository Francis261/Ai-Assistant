# socket_recvfrom

Source: https://devdocs.io/php/function.socket-recvfrom

(PHP 4 >= 4.1.0, PHP 5, PHP 7, PHP 8)

socket_recvfrom — Receives data from a socket whether or not it is connection-oriented

### Description

```
socket_recvfrom(
 Socket $socket,
 string &$data,
 int $length,
 int $flags,
 string &$address,
 int &$port = null
): int|false
```

The socket_recvfrom() function receives length bytes of data in data from address on port port (if the socket is not of type AF_UNIX) using socket. socket_recvfrom() can be used to gather data from both connected and unconnected sockets. Additionally, one or more flags can be specified to modify the behaviour of the function.

The address and port must be passed by reference. If the socket is not connection-oriented, address will be set to the internet protocol address of the remote host or the path to the UNIX socket. If the socket is connection-oriented, address is null. Additionally, the port will contain the port of the remote host in the case of an unconnected AF_INET or AF_INET6 socket.

Note: This function is binary-safe.

### Parameters

The socket must be a Socket instance previously created by socket_create().

The data received will be fetched to the variable specified with data.

Up to length bytes will be fetched from remote host.

The value of flags can be any combination of the following flags, joined with the binary OR (|) operator.

If the socket is of the type AF_UNIX type, address is the path to the file. Else, for unconnected sockets, address is the IP address of, the remote host, or null if the socket is connection-oriented.

This argument only applies to AF_INET and AF_INET6 sockets, and specifies the remote port from which the data is received. If the socket is connection-oriented, port will be null.

### Return Values

socket_recvfrom() returns the number of bytes received, or false if there was an error. The actual error code can be retrieved by calling socket_last_error(). This error code may be passed to socket_strerror() to get a textual explanation of the error.

### Changelog

### Examples

Example #1 socket_recvfrom() example

```
<?php

$socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
socket_bind($socket, '127.0.0.1', 1223);

$from = '';
$port = 0;
socket_recvfrom($socket, $buf, 12, 0, $from, $port);

echo "Received $buf from remote address $from and remote port $port" . PHP_EOL;
?>
```

This example will initiate a UDP socket on port 1223 of 127.0.0.1 and print at most 12 characters received from a remote host.

### See Also

- socket_recv() - Receives data from a connected socket
- socket_send() - Sends data to a connected socket
- socket_sendto() - Sends a message to a socket, whether it is connected or not
- socket_create() - Create a socket (endpoint for communication)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-recvfrom.php
