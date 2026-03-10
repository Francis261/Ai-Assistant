# GearmanClient::runTasks

Source: https://devdocs.io/php/gearmanclient.runtasks

(PECL gearman >= 0.5.0)

GearmanClient::runTasks — Run a list of tasks in parallel

### Description

```
public GearmanClient::runTasks(): bool
```

For a set of tasks previously added with GearmanClient::addTask(), GearmanClient::addTaskHigh(), GearmanClient::addTaskLow(), GearmanClient::addTaskBackground(), GearmanClient::addTaskHighBackground(), or GearmanClient::addTaskLowBackground(), this call starts running the tasks in parallel.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanClient::addTask() - Add a task to be run in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.runtasks.php
