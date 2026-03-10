# GearmanClient::doHigh

Source: https://devdocs.io/php/gearmanclient.dohigh

(PECL gearman >= 0.5.0)

GearmanClient::doHigh — Run a single high priority task

### Description

```
public GearmanClient::doHigh(string $function, string $workload, ?string $unique = null): string
```

Runs a single high priority task and returns a string representation of the result. It is up to the GearmanClient and GearmanWorker to agree on the format of the result. High priority tasks will get precedence over normal and low priority tasks in the job queue.

### Parameters

A registered function the worker is to execute

Serialized data to be processed

A unique ID used to identify a particular task

### Return Values

A string representing the results of running a task.

### See Also

- GearmanClient::doNormal() - Run a single task and return a result
- GearmanClient::doLow() - Run a single low priority task
- GearmanClient::doBackground() - Run a task in the background
- GearmanClient::doHighBackground() - Run a high priority task in the background
- GearmanClient::doLowBackground() - Run a low priority task in the background

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.dohigh.php
