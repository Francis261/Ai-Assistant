# EvStat::createStopped

Source: https://devdocs.io/php/evstat.createstopped

(PECL ev >= 0.2.0)

EvStat::createStopped — Create a stopped EvStat watcher object

### Description

```
final public static EvStat::createStopped(
  string $path ,
  float $interval ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): void
```

Creates EvStat watcher object, but doesn't start it automatically(unlike EvStat::__construct() ).

### Parameters

The path to wait for status changes on.

Hint on how quickly a change is expected to be detected and should normally be specified as 0.0 to let libev choose a suitable value.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns a stopped EvStat watcher object on success.

### See Also

- EvStat::__construct() - Constructs EvStat watcher object
- EvWatcher::start() - Starts the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evstat.createstopped.php
