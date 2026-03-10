# EventUtil::getSocketFd

Source: https://devdocs.io/php/eventutil.getsocketfd

(PECL event >= 1.7.0)

EventUtil::getSocketFd — Returns numeric file descriptor of a socket, or stream

### Description

```
public static EventUtil::getSocketFd( mixed $socket ): int
```

Returns numeric file descriptor of a socket or stream specified by socket argument just like the Event extension does it internally for all methods accepting socket resource or stream.

### Parameters

Socket resource or stream.

### Return Values

Returns numeric file descriptor of a socket, or stream. EventUtil::getSocketFd() returns false in case if it is whether failed to recognize the type of the underlying file, or detected that the file descriptor associated with socket is not valid.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventutil.getsocketfd.php
