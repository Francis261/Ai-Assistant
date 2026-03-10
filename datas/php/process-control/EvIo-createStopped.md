# EvIo::createStopped

Source: https://devdocs.io/php/evio.createstopped

(PECL ev >= 0.2.0)

EvIo::createStopped — Create stopped EvIo watcher object

### Description

```
final public static EvIo::createStopped(
  mixed $fd ,
  int $events ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvIo
```

The same as EvIo::__construct(), but doesn't start the watcher automatically.

### Parameters

The same as for EvIo::__construct()

The same as for EvIo::__construct()

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvIo object on success.

### See Also

- EvIo::__construct() - Constructs EvIo watcher object
- EvLoop::io() - Create EvIo watcher object associated with the current event loop instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evio.createstopped.php
