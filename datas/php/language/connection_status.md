# connection_status

Source: https://devdocs.io/php/function.connection-status

(PHP 4, PHP 5, PHP 7, PHP 8)

connection_status — Returns connection status bitfield

### Description

```
connection_status(): int
```

Gets the connection status bitfield.

### Parameters

This function has no parameters.

### Return Values

Returns the connection status bitfield, which can be used against the CONNECTION_* constants to determine the connection status.

### See Also

- connection_aborted() - Check whether client disconnected
- ignore_user_abort() - Set whether a client disconnect should abort script execution
- Connection Handling for a complete description of connection handling in PHP.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.connection-status.php
