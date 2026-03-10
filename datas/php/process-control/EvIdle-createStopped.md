# EvIdle::createStopped

Source: https://devdocs.io/php/evidle.createstopped

(PECL ev >= 0.2.0)

EvIdle::createStopped — Creates instance of a stopped EvIdle watcher object

### Description

```
final public static EvIdle::createStopped( string $callback ,  mixed $data  = ?,  int $priority  = ?): object
```

The same as EvIdle::__construct(), but doesn't start the watcher automatically.

### Parameters

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvIdle object on success.

### See Also

- EvIdle::__construct() - Constructs the EvIdle watcher object
- EvLoop::idle() - Creates EvIdle watcher object associated with the current event loop instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evidle.createstopped.php
