# GearmanJob::warning

Source: https://devdocs.io/php/gearmanjob.warning

(PECL gearman <= 0.5.0)

GearmanJob::warning — Send a warning (deprecated)

### Description

```
public GearmanJob::warning(string $warning): bool
```

Sends a warning for this job while it is running.

Note:

This method has been replaced by GearmanJob::sendWarning() in the 0.6.0 release of the Gearman extension.

### Parameters

A warning messages.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::sendComplete() - Send the result and complete status
- GearmanJob::sendException() - Send exception for running job (exception)
- GearmanJob::sendFail() - Send fail status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.warning.php
