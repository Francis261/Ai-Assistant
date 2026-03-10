# GearmanWorker::unregister

Source: https://devdocs.io/php/gearmanworker.unregister

(PECL gearman >= 0.6.0)

GearmanWorker::unregister — Unregister a function name with the job servers

### Description

```
public GearmanWorker::unregister(string $function_name): bool
```

Unregisters a function name with the job servers ensuring that no more jobs (for that function) are sent to this worker.

### Parameters

The name of a function to register with the job server

### Return Values

A standard Gearman return value.

### See Also

- GearmanWorker::register() - Register a function with the job server
- GearmanWorker::unregisterAll() - Unregister all function names with the job servers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.unregister.php
