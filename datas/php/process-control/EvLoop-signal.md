# EvLoop::signal

Source: https://devdocs.io/php/evloop.signal

(PECL ev >= 0.2.0)

EvLoop::signal — Creates EvSignal watcher object associated with the current event loop instance

### Description

```
final public EvLoop::signal(
  int $signum ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvSignal
```

Creates EvSignal watcher object associated with the current event loop instance

### Parameters

All parameters have the same meaning as for EvSignal::__construct()

### Return Values

Returns EvSignal object on success

### See Also

- EvSignal::__construct() - Constructs EvSignal watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.signal.php
