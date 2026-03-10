# SessionHandlerInterface::close

Source: https://devdocs.io/php/sessionhandlerinterface.close

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SessionHandlerInterface::close — Close the session

### Description

```
public SessionHandlerInterface::close(): bool
```

Closes the current session. This function is automatically executed when closing the session, or explicitly via session_write_close().

### Parameters

This function has no parameters.

### Return Values

The return value (usually true on success, false on failure). Note this value is returned internally to PHP for processing.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sessionhandlerinterface.close.php
