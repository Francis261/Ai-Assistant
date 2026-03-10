# EvLoop::timer

Source: https://devdocs.io/php/evloop.timer

(PECL ev >= 0.2.0)

EvLoop::timer — Creates EvTimer watcher object associated with the current event loop instance

### Description

```
final public EvLoop::timer(
  float $after ,
  float $repeat ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvTimer
```

Creates EvTimer watcher object associated with the current event loop instance

### Parameters

All parameters have the same meaning as for EvTimer::__construct()

### Return Values

Returns EvTimer object on success

### See Also

- EvTimer::__construct() - Constructs an EvTimer watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.timer.php
