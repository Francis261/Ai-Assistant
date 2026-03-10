# ob_flush

Source: https://devdocs.io/php/function.ob-flush

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

ob_flush — Flush (send) the return value of the active output handler

### Description

```
ob_flush(): bool
```

This function calls the output handler (with the PHP_OUTPUT_HANDLER_FLUSH flag), flushes (sends) its return value and discards the contents of the active output buffer.

This function does not turn off the active output buffer like ob_end_flush() or ob_get_flush() does.

ob_flush() will fail without an active output buffer started with the PHP_OUTPUT_HANDLER_FLUSHABLE flag.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If the function fails it generates an E_NOTICE.

### See Also

- ob_start() - Turn on output buffering
- ob_get_contents() - Return the contents of the output buffer
- ob_end_flush() - Flush (send) the return value of the active output handler and turn the active output buffer off
- ob_get_flush() - Flush (send) the return value of the active output handler, return the contents of the active output buffer and turn it off
- ob_clean() - Clean (erase) the contents of the active output buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ob-flush.php
