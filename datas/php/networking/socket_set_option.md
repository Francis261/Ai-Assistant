# socket_set_option

Source: https://devdocs.io/php/function.socket-set-option

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

socket_set_option — Sets socket options for the socket

### Description

```
socket_set_option(
 Socket $socket,
 int $level,
 int $option,
 array|string|int $value
): bool
```

The socket_set_option() function sets the option specified by the option parameter, at the specified protocol level, to the value pointed to by the value parameter for the socket.

### Parameters

A Socket instance created with socket_create() or socket_accept().

The level parameter specifies the protocol level at which the option resides. For example, to set options at the socket level, a level parameter of SOL_SOCKET would be used. Other levels, such as TCP, can be used by specifying the protocol number of that level. Protocol numbers can be found by using the getprotobyname() function.

The available socket options are the same as those for the socket_get_option() function.

The option value.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 socket_set_option() example

```
<?php
$socket = socket_create(AF_INET, SOCK_STREAM, SOL_TCP);

if (!is_resource($socket)) {
    echo 'Unable to create socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

if (!socket_set_option($socket, SOL_SOCKET, SO_REUSEADDR, 1)) {
    echo 'Unable to set option on socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

if (!socket_bind($socket, '127.0.0.1', 1223)) {
    echo 'Unable to bind socket: '. socket_strerror(socket_last_error()) . PHP_EOL;
}

$rval = socket_get_option($socket, SOL_SOCKET, SO_REUSEADDR);

if ($rval === false) {
    echo 'Unable to get socket option: '. socket_strerror(socket_last_error()) . PHP_EOL;
} else if ($rval !== 0) {
    echo 'SO_REUSEADDR is set on socket !' . PHP_EOL;
}
?>
```

### See Also

- socket_create() - Create a socket (endpoint for communication)
- socket_bind() - Binds a name to a socket
- socket_strerror() - Return a string describing a socket error
- socket_last_error() - Returns the last error on the socket
- socket_get_option() - Gets socket options for the socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-set-option.php
