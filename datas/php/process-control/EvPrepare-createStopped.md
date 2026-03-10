# EvPrepare::createStopped

Source: https://devdocs.io/php/evprepare.createstopped

(PECL ev >= 0.2.0)

EvPrepare::createStopped — Creates a stopped instance of EvPrepare watcher

### Description

```
final public static EvPrepare::createStopped( callable $callback ,  mixed $data  = null ,  int $priority  = 0 ): EvPrepare
```

Creates a stopped instance of EvPrepare watcher. Unlike EvPrepare::__construct(), this method doesn' start the watcher automatically.

### Parameters

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Return EvPrepare object on success.

### See Also

- EvPrepare::__construct() - Constructs EvPrepare watcher object
- EvWatcher::start() - Starts the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evprepare.createstopped.php
