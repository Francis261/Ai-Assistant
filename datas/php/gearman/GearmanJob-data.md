# GearmanJob::data

Source: https://devdocs.io/php/gearmanjob.data

(PECL gearman <= 0.5.0)

GearmanJob::data — Send data for a running job (deprecated)

### Description

```
public GearmanJob::data(string $data): bool
```

Sends data to the job server (and any listening clients) for this job.

Note:

This method has been replaced by GearmanJob::sendData() in the 0.6.0 release of the Gearman extension.

### Parameters

Arbitrary serialized data.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::workload() - Get workload
- GearmanTask::data() - Get data returned for a task

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.data.php
