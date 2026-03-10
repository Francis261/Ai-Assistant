# GearmanClient::doJobHandle

Source: https://devdocs.io/php/gearmanclient.dojobhandle

(PECL gearman >= 0.5.0)

GearmanClient::doJobHandle — Get the job handle for the running task

### Description

```
public GearmanClient::doJobHandle(): string
```

Gets that job handle for a running task. This should be used between repeated GearmanClient::doNormal() calls. The job handle can then be used to get information on the task.

### Parameters

This function has no parameters.

### Return Values

The job handle for the running task.

### See Also

- GearmanClient::jobStatus() - Get the status of a background job

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.dojobhandle.php
