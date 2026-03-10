# socket_clear_error

Source: https://devdocs.io/php/function.socket-clear-error

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

socket_clear_error — Clears the error on the socket or the last error code

### Description

```
socket_clear_error(?Socket $socket = null): void
```

This function clears the error code on the given socket or the global last socket error if no socket is specified.

This function allows explicitly resetting the error code value either of a socket or of the extension global last error code. This may be useful to detect within a part of the application if an error occurred or not.

### Parameters

A Socket instance created with socket_create().

### Return Values

No value is returned.

### Changelog

### See Also

- socket_last_error() - Returns the last error on the socket
- socket_strerror() - Return a string describing a socket error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.socket-clear-error.php
