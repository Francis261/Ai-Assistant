# EvLoop::periodic

Source: https://devdocs.io/php/evloop.periodic

(PECL ev >= 0.2.0)

EvLoop::periodic — Creates EvPeriodic watcher object associated with the current event loop instance

### Description

```
final public EvLoop::periodic(
  float $offset ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvPeriodic
```

Creates EvPeriodic watcher object associated with the current event loop instance

### Parameters

All parameters have the same maening as for EvPeriodic::__construct()

### Return Values

Returns EvPeriodic object on success.

### See Also

- EvPeriodic::__construct() - Constructs EvPeriodic watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.periodic.php
