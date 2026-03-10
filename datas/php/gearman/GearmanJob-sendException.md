# GearmanJob::sendException

Source: https://devdocs.io/php/gearmanjob.sendexception

(PECL gearman >= 0.6.0)

GearmanJob::sendException — Send exception for running job (exception)

### Description

```
public GearmanJob::sendException(string $exception): bool
```

Sends the supplied exception when this job is running.

### Parameters

An exception description.

### Return Values

Returns true on success or false on failure.

### See Also

- GearmanJob::setReturn() - Set a return value
- GearmanJob::sendStatus() - Send status
- GearmanJob::sendWarning() - Send a warning

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanjob.sendexception.php
