# GearmanJob::sendStatus

Source: https://devdocs.io/php/gearmanjob.sendstatus

(PECL gearman >= 0.6.0)

GearmanJob::sendStatus — Send status

### Description

```
public GearmanJob::sendStatus(int $numerator, int $denominator): bool
```

Sends status information to the job server and any listening clients. Use this to specify what percentage of the job has been completed.

### Parameters

The numerator of the precentage completed expressed as a fraction.

The denominator of the precentage completed expressed as a fraction.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanClient::jobStatus() - Get the status of a background job
- GearmanTask::taskDenominator() - Get completion percentage denominator
- GearmanTask::taskNumerator() - Get completion percentage numerator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.sendstatus.php
