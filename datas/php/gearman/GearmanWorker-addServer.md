# GearmanWorker::addServer

Source: https://devdocs.io/php/gearmanworker.addserver

(PECL gearman >= 0.5.0)

GearmanWorker::addServer — Add a job server

### Description

```
public GearmanWorker::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true): bool
```

Adds a job server to this worker. This goes into a list of servers than can be used to run jobs. No socket I/O happens here.

### Parameters

The job server host name.

The job server port.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Add alternate Gearman servers

```
<?php
$worker= new GearmanWorker(); 
$worker->addServer("10.0.0.1"); 
$worker->addServer("10.0.0.2", 7003);
?>
```

### See Also

- GearmanWorker::addServers() - Add job servers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.addserver.php
