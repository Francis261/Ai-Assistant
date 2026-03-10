# GearmanWorker::unregisterAll

Source: https://devdocs.io/php/gearmanworker.unregisterall

(PECL gearman >= 0.6.0)

GearmanWorker::unregisterAll — Unregister all function names with the job servers

### Description

```
public GearmanWorker::unregisterAll(): bool
```

Unregisters all previously registered functions, ensuring that no more jobs are sent to this worker.

### Parameters

This function has no parameters.

### Return Values

A standard Gearman return value.

### See Also

- GearmanWorker::register() - Register a function with the job server
- GearmanWorker::unregister() - Unregister a function name with the job servers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.unregisterall.php
