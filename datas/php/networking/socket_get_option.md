# socket_get_option

Source: https://devdocs.io/php/function.socket-get-option

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

socket_get_option — Gets socket options for the socket

### Description

```
socket_get_option(Socket $socket, int $level, int $option): array|int|false
```

The socket_get_option() function retrieves the value for the option specified by the option parameter for the specified socket.

### Parameters

A Socket instance created with socket_create() or socket_accept().

The level parameter specifies the protocol level at which the option resides. For example, to retrieve options at the socket level, a level parameter of SOL_SOCKET would be used. Other levels, such as TCP, can be used by specifying the protocol number of that level. Protocol numbers can be found by using the getprotobyname() function.

Reports whether the socket lingers on socket_close() if data is present. By default, when the socket is closed, it attempts to send all unsent data. In the case of a connection-oriented socket, socket_close() will wait for its peer to acknowledge the data.

If l_onoff is non-zero and l_linger is zero, all the unsent data will be discarded and RST (reset) is sent to the peer in the case of a connection-oriented socket.

On the other hand, if l_onoff is non-zero and l_linger is non-zero, socket_close() will block until all the data is sent or the time specified in l_linger elapses. If the socket is non-blocking, socket_close() will fail and return an error.

### Return Values

Returns the value of the given option, or false on failure.

### Changelog

### Examples

Example #1 socket_get_option() example

```
<?php
$socket = socket_create_listen(1223);

$linger = array('l_linger' => 1, 'l_onoff' => 1);
socket_set_option($socket, SOL_SOCKET, SO_LINGER, $linger);

var_dump(socket_get_option($socket, SOL_SOCKET, SO_REUSEADDR));
?>
```

### See Also

- socket_create_listen() - Opens a socket on port to accept connections
- socket_set_option() - Sets socket options for the socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-get-option.php
