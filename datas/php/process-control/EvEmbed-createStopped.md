# EvEmbed::createStopped

Source: https://devdocs.io/php/evembed.createstopped

(PECL ev >= 0.2.0)

EvEmbed::createStopped — Create stopped EvEmbed watcher object

### Description

```
final public static EvEmbed::createStopped(
  object $other ,
  callable $callback  = ?,
  mixed $data  = ?,
  int $priority  = ?
): void
```

The same as EvEmbed::__construct(), but doesn't start the watcher automatically.

### Parameters

The same as for EvEmbed::__construct()

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns stopped EvEmbed object on success.

### See Also

- EvEmbed::__construct() - Constructs the EvEmbed object
- Ev::embeddableBackends() - Returns the set of backends that are embeddable in other event loops

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evembed.createstopped.php
