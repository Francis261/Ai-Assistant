# readline_callback_handler_remove

Source: https://devdocs.io/php/function.readline-callback-handler-remove

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

readline_callback_handler_remove — Removes a previously installed callback handler and restores terminal settings

### Description

```
readline_callback_handler_remove(): bool
```

Removes a previously installed callback handler and restores terminal settings.

### Parameters

This function has no parameters.

### Return Values

Returns true if a previously installed callback handler was removed, or false if one could not be found.

### Examples

See readline_callback_handler_install() for an example of how to use the readline callback interface.

### See Also

- readline_callback_handler_install() - Initializes the readline callback interface and terminal, prints the prompt and returns immediately
- readline_callback_read_char() - Reads a character and informs the readline callback interface when a line is received

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.readline-callback-handler-remove.php
