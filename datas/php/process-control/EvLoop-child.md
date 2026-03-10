# EvLoop::child

Source: https://devdocs.io/php/evloop.child

(PECL ev >= 0.2.0)

EvLoop::child — Creates EvChild object associated with the current event loop

### Description

```
final public EvLoop::child(
  string $pid ,
  string $trace ,
  string $callback ,
  string $data  = ?,
  string $priority  = ?
): EvChild
```

Creates EvChild object associated with the current event loop.

### Parameters

All parameters have the same meaning as for EvChild::__construct()

### Return Values

Returns EvChild object on success.

### See Also

- EvChild::__construct() - Constructs the EvChild watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.child.php
