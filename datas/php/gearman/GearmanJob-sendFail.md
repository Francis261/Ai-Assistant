# GearmanJob::sendFail

Source: https://devdocs.io/php/gearmanjob.sendfail

(PECL gearman >= 0.6.0)

GearmanJob::sendFail — Send fail status

### Description

```
public GearmanJob::sendFail(): bool
```

Sends failure status for this job, indicating that the job failed in a known way (as opposed to failing due to a thrown exception).

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::sendException() - Send exception for running job (exception)
- GearmanJob::setReturn() - Set a return value
- GearmanJob::sendStatus() - Send status
- GearmanJob::sendWarning() - Send a warning

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.sendfail.php
