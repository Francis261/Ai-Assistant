# EvChild::createStopped

Source: https://devdocs.io/php/evchild.createstopped

(PECL ev >= 0.2.0)

EvChild::createStopped — Create instance of a stopped EvCheck watcher

### Description

```
final public static EvChild::createStopped(
  int $pid ,
  bool $trace ,
  callable $callback ,
  mixed $data  = ?,
  int $priority  = ?
): object
```

The same as EvChild::__construct(), but doesn't start the watcher automatically.

### Parameters

The same as for EvChild::__construct()

The same as for EvChild::__construct()

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

### See Also

- EvChild::__construct() - Constructs the EvChild watcher object
- EvLoop::child() - Creates EvChild object associated with the current event loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evchild.createstopped.php
