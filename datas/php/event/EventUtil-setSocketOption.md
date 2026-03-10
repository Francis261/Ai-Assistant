# EventUtil::setSocketOption

Source: https://devdocs.io/php/eventutil.setsocketoption

(PECL event >= 1.6.0)

EventUtil::setSocketOption — Sets socket options

### Description

```
public static EventUtil::setSocketOption(
  mixed $socket ,
  int $level ,
  int $optname ,
  mixed $optval 
): bool
```

Sets socket options.

### Parameters

Socket resource, stream, or numeric file descriptor associated with the socket.

One of EventUtil::SOL_* constants. Specifies the protocol level at which the option resides. For example, to retrieve options at the socket level, a level parameter of EventUtil::SOL_SOCKET would be used. Other levels, such as TCP, can be used by specifying the protocol number of that level. Protocol numbers can be found by using the getprotobyname() function. See EventUtil constants.

Option name(type). Has the same meaning as corresponding parameter of socket_get_option() function. See EventUtil constants.

Accepts the same values as optval parameter of the socket_get_option() function.

### Return Values

Returns true on success or false on failure.

### See Also

- socket_get_option() - Gets socket options for the socket
- socket_set_option() - Sets socket options for the socket

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventutil.setsocketoption.php
