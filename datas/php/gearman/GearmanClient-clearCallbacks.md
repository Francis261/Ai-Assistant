# GearmanClient::clearCallbacks

Source: https://devdocs.io/php/gearmanclient.clearcallbacks

(PECL gearman >= 0.5.0)

GearmanClient::clearCallbacks — Clear all task callback functions

### Description

```
public GearmanClient::clearCallbacks(): bool
```

Clears all the task callback functions that have previously been set.

### Parameters

This function has no parameters.

### Return Values

Always returns true.

### See Also

- GearmanClient::setDataCallback() - Callback function when there is a data packet for a task
- GearmanClient::setCompleteCallback() - Set a function to be called on task completion
- GearmanClient::setCreatedCallback() - Set a callback for when a task is queued
- GearmanClient::setExceptionCallback() - Set a callback for worker exceptions
- GearmanClient::setFailCallback() - Set callback for job failure
- GearmanClient::setStatusCallback() - Set a callback for collecting task status
- GearmanClient::setWarningCallback() - Set a callback for worker warnings
- GearmanClient::setWorkloadCallback() - Set a callback for accepting incremental data updates

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.clearcallbacks.php
