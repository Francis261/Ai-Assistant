# EvLoop::stat

Source: https://devdocs.io/php/evloop.stat

(PECL ev >= 0.2.0)

EvLoop::stat — Creates EvStat watcher object associated with the current event loop instance

### Description

```
final public EvLoop::stat(
  string $path ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvStat
```

Creates EvStat watcher object associated with the current event loop instance

### Parameters

All parameters have the same meaning as for EvSignal::__construct()

### Return Values

Returns EvStat object on success

### See Also

- EvSignal::__construct() - Constructs EvSignal watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.stat.php
