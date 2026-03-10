# EvSignal::createStopped

Source: https://devdocs.io/php/evsignal.createstopped

(PECL ev >= 0.2.0)

EvSignal::createStopped — Create stopped EvSignal watcher object

### Description

```
final public static EvSignal::createStopped(
  int $signum ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvSignal
```

Create stopped EvSignal watcher object. Unlike EvSignal::__construct(), this method does't start the watcher automatically.

### Parameters

Signal number. See constants exported by pcntl extension. See also signal(7) man page.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvSignal object on success.

### See Also

- EvWatcher::start() - Starts the watcher
- EvSignal::__construct() - Constructs EvSignal watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evsignal.createstopped.php
