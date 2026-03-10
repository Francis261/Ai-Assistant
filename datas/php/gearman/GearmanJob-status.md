# GearmanJob::status

Source: https://devdocs.io/php/gearmanjob.status

(PECL gearman <= 0.5.0)

GearmanJob::status — Send status (deprecated)

### Description

```
public GearmanJob::status(int $numerator, int $denominator): bool
```

Sends status information to the job server and any listening clients. Use this to specify what percentage of the job has been completed.

Note:

This method has been replaced by GearmanJob::sendStatus() in the 0.6.0 release of the Gearman extenstion.

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
 https://www.php.net/manual/en/gearmanjob.status.php
