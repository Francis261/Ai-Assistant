# GearmanWorker::addServers

Source: https://devdocs.io/php/gearmanworker.addservers

(PECL gearman >= 0.5.0)

GearmanWorker::addServers — Add job servers

### Description

```
public GearmanWorker::addServers(string $servers = null, bool $setupExceptionHandler = true): bool
```

Adds one or more job servers to this worker. These go into a list of servers that can be used to run jobs. No socket I/O happens here.

### Parameters

A comma separated list of job servers in the format host:port. If no port is specified, it defaults to 4730.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Add two job servers

```
<?php

$worker= new GearmanWorker(); 
$worker->addServers("10.0.0.1,10.0.0.2:7003");

?>
```

### See Also

- GearmanWorker::addServer() - Add a job server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanworker.addservers.php
