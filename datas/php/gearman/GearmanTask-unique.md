# GearmanTask::unique

Source: https://devdocs.io/php/gearmantask.unique

(PECL gearman >= 0.6.0)

GearmanTask::unique — Get the unique identifier for a task

### Description

```
public GearmanTask::unique(): false|string
```

Returns the unique identifier for this task. This is assigned by the GearmanClient, as opposed to the job handle which is set by the Gearman job server.

### Parameters

This function has no parameters.

### Return Values

The unique identifier, or false if no identifier is assigned.

### See Also

- GearmanClient::do() - Run a single task and return a result [deprecated]
- GearmanClient::addTask() - Add a task to be run in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmantask.unique.php
