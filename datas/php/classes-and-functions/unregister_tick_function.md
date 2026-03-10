# unregister_tick_function

Source: https://devdocs.io/php/function.unregister-tick-function

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

unregister_tick_function — De-register a function for execution on each tick

### Description

```
unregister_tick_function(callable $callback): void
```

De-registers the function callback so it is no longer executed when a tick is called.

### Parameters

The function to de-register.

### Return Values

No value is returned.

### See Also

- register_tick_function() - Register a function for execution on each tick

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.unregister-tick-function.php
