# EvLoop::fork

Source: https://devdocs.io/php/evloop.fork

(PECL ev >= 0.2.0)

EvLoop::fork — Creates EvFork watcher object associated with the current event loop instance

### Description

```
final public EvLoop::fork( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvFork
```

Creates EvFork watcher object associated with the current event loop instance

### Parameters

All parameters have the same meaning as for EvFork::__construct()

### Return Values

Returns EvFork object on success.

### See Also

- EvFork::__construct() - Constructs the EvFork watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.fork.php
