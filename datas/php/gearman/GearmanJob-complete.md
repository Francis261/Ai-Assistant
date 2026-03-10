# GearmanJob::complete

Source: https://devdocs.io/php/gearmanjob.complete

(PECL gearman <= 0.5.0)

GearmanJob::complete — Send the result and complete status (deprecated)

### Description

```
public GearmanJob::complete(string $result): bool
```

Sends result data and the complete status update for this job.

Note:

This method has been replaced by GearmanJob::sendComplete() in the 0.6.0 release of the Gearman extension.

### Parameters

Serialized result data.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::sendFail() - Send fail status
- GearmanJob::setReturn() - Set a return value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.complete.php
