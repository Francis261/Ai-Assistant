# EvLoop::check

Source: https://devdocs.io/php/evloop.check

(PECL ev >= 0.2.0)

EvLoop::check — Creates EvCheck object associated with the current event loop instance

### Description

```
final public EvLoop::check( string $callback ,  string $data  = ?,  string $priority  = ?): EvCheck
```

Creates EvCheck object associated with the current event loop instance.

### Parameters

All parameters have the same meaning as for EvCheck::__construct()

### Return Values

Returns EvCheck object on success.

### See Also

- EvCheck::__construct() - Constructs the EvCheck watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.check.php
