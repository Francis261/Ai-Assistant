# GearmanJob::sendWarning

Source: https://devdocs.io/php/gearmanjob.sendwarning

(PECL gearman >= 0.6.0)

GearmanJob::sendWarning — Send a warning

### Description

```
public GearmanJob::sendWarning(string $warning): bool
```

Sends a warning for this job while it is running.

### Parameters

A warning message.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::sendComplete() - Send the result and complete status
- GearmanJob::sendException() - Send exception for running job (exception)
- GearmanJob::sendFail() - Send fail status

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.sendwarning.php
