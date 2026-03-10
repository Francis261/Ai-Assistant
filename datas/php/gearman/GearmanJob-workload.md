# GearmanJob::workload

Source: https://devdocs.io/php/gearmanjob.workload

(PECL gearman >= 0.5.0)

GearmanJob::workload — Get workload

### Description

```
public GearmanJob::workload(): string
```

Returns the workload for the job. This is serialized data that is to be processed by the worker.

### Parameters

This function has no parameters.

### Return Values

Serialized data.

### See Also

- GearmanClient::do() - Run a single task and return a result [deprecated]
- GearmanJob::workloadSize() - Get size of work load

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.workload.php
