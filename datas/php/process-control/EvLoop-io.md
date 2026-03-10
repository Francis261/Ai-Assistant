# EvLoop::io

Source: https://devdocs.io/php/evloop.io

(PECL ev >= 0.2.0)

EvLoop::io — Create EvIo watcher object associated with the current event loop instance

### Description

```
final public EvLoop::io(
  mixed $fd ,
  int $events ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvIo
```

Create EvIo watcher object associated with the current event loop instance.

### Parameters

All parameters have the same meaning as for EvIo::__construct()

### Return Values

Returns EvIo object on success.

### See Also

- EvIo::__construct() - Constructs EvIo watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.io.php
