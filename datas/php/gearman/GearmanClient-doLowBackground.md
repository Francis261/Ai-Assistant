# GearmanClient::doLowBackground

Source: https://devdocs.io/php/gearmanclient.dolowbackground

(PECL gearman >= 0.5.0)

GearmanClient::doLowBackground — Run a low priority task in the background

### Description

```
public GearmanClient::doLowBackground(string $function, string $workload, ?string $unique = null): string
```

Runs a low priority task in the background, returning a job handle which can be used to get the status of the running task. Normal and high priority tasks take precedence over low priority tasks in the job queue.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

A unique ID used to identify a particular task

### Return Values

The job handle for the submitted task.

### See Also

- GearmanClient::doNormal() - Run a single task and return a result
- GearmanClient::doHigh() - Run a single high priority task
- GearmanClient::doLow() - Run a single low priority task
- GearmanClient::doBackground() - Run a task in the background
- GearmanClient::doHighBackground() - Run a high priority task in the background

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.dolowbackground.php
