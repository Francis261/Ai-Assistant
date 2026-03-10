# session_register_shutdown

Source: https://devdocs.io/php/function.session-register-shutdown

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

session_register_shutdown — Session shutdown function

### Description

```
session_register_shutdown(): void
```

Registers session_write_close() as a shutdown function.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

Emits E_WARNING if registering the shutdown function fails.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-register-shutdown.php
