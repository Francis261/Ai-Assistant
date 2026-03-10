# EvFork::createStopped

Source: https://devdocs.io/php/evfork.createstopped

(PECL ev >= 0.2.0)

EvFork::createStopped — Creates a stopped instance of EvFork watcher class

### Description

```
final public static EvFork::createStopped( string $callback ,  string $data  = ?,  string $priority  = ?): object
```

The same as EvFork::__construct(), but doesn't start the watcher automatically.

### Parameters

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvFork(stopped) object on success.

### See Also

- EvFork::__construct() - Constructs the EvFork watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evfork.createstopped.php
