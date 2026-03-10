# EvLoop::idle

Source: https://devdocs.io/php/evloop.idle

(PECL ev >= 0.2.0)

EvLoop::idle — Creates EvIdle watcher object associated with the current event loop instance

### Description

```
final public EvLoop::idle( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvIdle
```

Creates EvIdle watcher object associated with the current event loop instance

### Parameters

All the parameters have the same meaning as for EvIdle::__construct()

### Return Values

Returns EvIdle object on success.

### See Also

- EvIdle::__construct() - Constructs the EvIdle watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.idle.php
