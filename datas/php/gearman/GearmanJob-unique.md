# GearmanJob::unique

Source: https://devdocs.io/php/gearmanjob.unique

(PECL gearman >= 0.5.0)

GearmanJob::unique — Get the unique identifier

### Description

```
public GearmanJob::unique(): false|string
```

Returns the unique identifier for this job. The identifier is assigned by the client.

### Parameters

This function has no parameters.

### Return Values

An opaque unique identifier, or false if the job has not yet been initialized.

### See Also

- GearmanClient::do() - Run a single task and return a result [deprecated]
- GearmanTask::uuid() - Get the unique identifier for a task (deprecated)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.unique.php
