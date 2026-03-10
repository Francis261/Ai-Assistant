# GearmanJob::exception

Source: https://devdocs.io/php/gearmanjob.exception

(PECL gearman <= 0.5.0)

GearmanJob::exception — Send exception for running job (deprecated)

### Description

```
public GearmanJob::exception(string $exception): bool
```

Sends the supplied exception when this job is running.

Note:

This method has been replaced by GearmanJob::sendException() in the 0.6.0 release of the Gearman extension.

### Parameters

An exception description.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::setReturn() - Set a return value
- GearmanJob::sendStatus() - Send status
- GearmanJob::sendWarning() - Send a warning

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.exception.php
