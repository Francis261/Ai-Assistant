# GearmanClient::setWorkloadCallback

Source: https://devdocs.io/php/gearmanclient.setworkloadcallback

(PECL gearman >= 0.5.0)

GearmanClient::setWorkloadCallback — Set a callback for accepting incremental data updates

### Description

```
public GearmanClient::setWorkloadCallback(callable $callback): bool
```

Sets a callback function to be called when a worker needs to send back data prior to job completion. A worker can do this when it needs to send updates, send partial results, or flush data during long running jobs.

Note:

The callback will only be triggered for tasks that are added (e.g. by calling GearmanClient::addTask()) after calling this method.

### Parameters

A function or method to call. It should return a valid Gearman return value.

If no return statement is present, it defaults to GEARMAN_SUCCESS.

```
callback(GearmanTask $task, mixed $context): int
```

The task this callback is called for.

Whatever has been passed to GearmanClient::addTask() (or equivalent method) as context.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanClient::setDataCallback() - Callback function when there is a data packet for a task
- GearmanClient::setCompleteCallback() - Set a function to be called on task completion
- GearmanClient::setCreatedCallback() - Set a callback for when a task is queued
- GearmanClient::setExceptionCallback() - Set a callback for worker exceptions
- GearmanClient::setFailCallback() - Set callback for job failure
- GearmanClient::setStatusCallback() - Set a callback for collecting task status
- GearmanClient::setWarningCallback() - Set a callback for worker warnings

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.setworkloadcallback.php
