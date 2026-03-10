# EventUtil::getSocketName

Source: https://devdocs.io/php/eventutil.getsocketname

(PECL event >= 1.5.0)

EventUtil::getSocketName — Retreives the current address to which the socket is bound

### Description

```
public static EventUtil::getSocketName( mixed $socket ,  string &$address ,  mixed &$port  = ?): bool
```

Retreives the current address to which the socket is bound.

### Parameters

Socket resource, stream or a file descriptor of a socket.

Output parameter. IP-address, or the UNIX domain socket path depending on the socket address family.

Output parameter. The port the socket is bound to. Has no meaning for UNIX domain sockets.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventutil.getsocketname.php
