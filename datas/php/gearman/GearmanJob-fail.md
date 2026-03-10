# GearmanJob::fail

Source: https://devdocs.io/php/gearmanjob.fail

(PECL gearman <= 0.5.0)

GearmanJob::fail — Send fail status (deprecated)

### Description

```
public GearmanJob::fail(): bool
```

Sends failure status for this job, indicating that the job failed in a known way (as opposed to failing due to a thrown exception).

Note:

This method has been replaced by GearmanJob::sendFail() in the 0.6.0 release of the Gearman extension.

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
 https://www.php.net/manual/en/gearmanjob.fail.php
