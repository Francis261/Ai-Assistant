# EvLoop::prepare

Source: https://devdocs.io/php/evloop.prepare

(PECL ev >= 0.2.0)

EvLoop::prepare — Creates EvPrepare watcher object associated with the current event loop instance

### Description

```
final public EvLoop::prepare( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvPrepare
```

Creates EvPrepare watcher object associated with the current event loop instance

### Parameters

All parameters have the same maening as for EvPrepare()

### Return Values

Returns EvPrepare object on success

### See Also

- EvPrepare::__construct() - Constructs EvPrepare watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.prepare.php
