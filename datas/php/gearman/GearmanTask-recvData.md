# GearmanTask::recvData

Source: https://devdocs.io/php/gearmantask.recvdata

(PECL gearman >= 0.5.0)

GearmanTask::recvData — Read work or result data into a buffer for a task

### Description

```
public GearmanTask::recvData(int $data_len): false|array
```

This function is EXPERIMENTAL. The behaviour of this function, its name, and surrounding documentation may change without notice in a future release of PHP. This function should be used at your own risk.

### Parameters

Length of data to be read.

### Return Values

An array whose first element is the length of data read and the second is the data buffer. Returns false if the read failed.

### See Also

- GearmanTask::sendData() - Send data for a task (deprecated)

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmantask.recvdata.php
