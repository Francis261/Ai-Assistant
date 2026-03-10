# GearmanClient::addTaskHighBackground

Source: https://devdocs.io/php/gearmanclient.addtaskhighbackground

(PECL gearman >= 0.5.0)

GearmanClient::addTaskHighBackground — Add a high priority background task to be run in parallel

### Description

```
public GearmanClient::addTaskHighBackground(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

Adds a high priority background task to be run in parallel with other tasks. Call this method for all the tasks to be run in parallel, then call GearmanClient::runTasks() to perform the work. Tasks with a high priority will be selected from the queue before those of normal or low priority.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

Application context to associate with a task

A unique ID used to identify a particular task

### Return Values

A GearmanTask object or false if the task could not be added.

### See Also

- GearmanClient::addTask() - Add a task to be run in parallel
- GearmanClient::addTaskHigh() - Add a high priority task to run in parallel
- GearmanClient::addTaskLow() - Add a low priority task to run in parallel
- GearmanClient::addTaskBackground() - Add a background task to be run in parallel
- GearmanClient::addTaskLowBackground() - Add a low priority background task to be run in parallel
- GearmanClient::runTasks() - Run a list of tasks in parallel

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addtaskhighbackground.php
