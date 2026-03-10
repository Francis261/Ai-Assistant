# GearmanWorker::echo

Source: https://devdocs.io/php/gearmanworker.echo

(PECL gearman >= 0.6.0)

GearmanWorker::echo — Test job server response

### Description

```
public GearmanWorker::echo(string $workload): bool
```

Sends data to all job servers to see if they echo it back. This is a test function to see if job servers are responding properly.

### Parameters

Arbitrary serialized data

### Return Values

Standard Gearman return value.

### See Also

- GearmanClient::echo() - Send data to all job servers to see if they echo it back [deprecated]

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.echo.php
