# GearmanJob::sendComplete

Source: https://devdocs.io/php/gearmanjob.sendcomplete

(PECL gearman >= 0.6.0)

GearmanJob::sendComplete — Send the result and complete status

### Description

```
public GearmanJob::sendComplete(string $result): bool
```

Sends result data and the complete status update for this job.

### Parameters

Serialized result data.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::sendFail() - Send fail status
- GearmanJob::setReturn() - Set a return value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.sendcomplete.php
