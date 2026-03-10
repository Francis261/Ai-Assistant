# GearmanJob::sendData

Source: https://devdocs.io/php/gearmanjob.senddata

(PECL gearman >= 0.6.0)

GearmanJob::sendData — Send data for a running job

### Description

```
public GearmanJob::sendData(string $data): bool
```

Sends data to the job server (and any listening clients) for this job.

### Parameters

Arbitrary serialized data.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::workload() - Get workload
- GearmanTask::data() - Get data returned for a task

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.senddata.php
