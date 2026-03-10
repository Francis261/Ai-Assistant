# GearmanWorker::register

Source: https://devdocs.io/php/gearmanworker.register

(PECL gearman >= 0.6.0)

GearmanWorker::register — Register a function with the job server

### Description

```
public GearmanWorker::register(string $function_name, int $timeout = 0): bool
```

Registers a function name with the job server with an optional timeout. The timeout specifies how many seconds the server will wait before marking a job as failed. If the timeout is set to zero, there is no timeout.

### Parameters

The name of a function to register with the job server

An interval of time in seconds

### Return Values

A standard Gearman return value.

### See Also

- GearmanWorker::unregister() - Unregister a function name with the job servers
- GearmanWorker::unregisterAll() - Unregister all function names with the job servers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.register.php
