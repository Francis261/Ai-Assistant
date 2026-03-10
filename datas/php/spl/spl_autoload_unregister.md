# spl_autoload_unregister

Source: https://devdocs.io/php/function.spl-autoload-unregister

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

spl_autoload_unregister — Unregister given function as __autoload() implementation

### Description

```
spl_autoload_unregister(callable $callback): bool
```

Removes a function from the autoload queue. If the queue is activated and empty after removing the given function then it will be deactivated.

When this function results in the queue being deactivated, any __autoload function that previously existed will not be reactivated.

### Parameters

The autoload function being unregistered.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.spl-autoload-unregister.php
