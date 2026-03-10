# GearmanTask::sendData

Source: https://devdocs.io/php/gearmantask.senddata

(PECL gearman <= 0.5.0)

GearmanTask::sendData — Send data for a task (deprecated)

### Description

```
public GearmanTask::sendData(string $data): int
```

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### Parameters

Data to send to the worker.

### Return Values

The length of data sent, or false if the send failed.

### See Also

- GearmanTask::recvData() - Read work or result data into a buffer for a task

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmantask.senddata.php
