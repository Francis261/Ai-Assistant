# EvPeriodic::createStopped

Source: https://devdocs.io/php/evperiodic.createstopped

(PECL ev >= 0.2.0)

EvPeriodic::createStopped — Create a stopped EvPeriodic watcher

### Description

```
final public static EvPeriodic::createStopped(
  float $offset ,
  float $interval ,
  callable $reschedule_cb ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvPeriodic
```

Create EvPeriodic object. Unlike EvPeriodic::__construct() this method doesn't start the watcher automatically.

### Parameters

See Periodic watcher operation modes

See Periodic watcher operation modes

Reschedule callback. You can pass null. See Periodic watcher operation modes

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvPeriodic watcher object on success.

### See Also

- EvPeriodic::__construct() - Constructs EvPeriodic watcher object
- EvTimer::createStopped() - Creates EvTimer stopped watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evperiodic.createstopped.php
