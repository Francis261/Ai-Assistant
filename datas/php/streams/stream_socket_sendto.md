# stream_socket_sendto

Source: https://devdocs.io/php/function.stream-socket-sendto

(PHP 5, PHP 7, PHP 8)

stream_socket_sendto — Sends a message to a socket, whether it is connected or not

### Description

```
stream_socket_sendto(
 resource $socket,
 string $data,
 int $flags = 0,
 string $address = ""
): int|false
```

Sends the specified data through the socket.

### Parameters

The socket to send data to.

The data to be sent.

The value of flags can be any combination of the following:

The address specified when the socket stream was created will be used unless an alternate address is specified in address.

If specified, it must be in dotted quad (or [ipv6]) format.

### Return Values

Returns a result code, as an integer, or false on failure.

### Examples

Example #1 stream_socket_sendto() Example

```
<?php
/* Open a socket to port 1234 on localhost */
$socket = stream_socket_client('tcp://127.0.0.1:1234');

/* Send ordinary data via ordinary channels. */
fwrite($socket, "Normal data transmit.");

/* Send more data out of band. */
stream_socket_sendto($socket, "Out of Band data.", STREAM_OOB);

/* Close it up */
fclose($socket);
?>
```

### See Also

- stream_socket_recvfrom() - Receives data from a socket, connected or not
- stream_socket_client() - Open Internet or Unix domain socket connection
- stream_socket_server() - Create an Internet or Unix domain server socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.stream-socket-sendto.php
