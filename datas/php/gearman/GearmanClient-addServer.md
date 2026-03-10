# GearmanClient::addServer

Source: https://devdocs.io/php/gearmanclient.addserver

(PECL gearman >= 0.5.0)

GearmanClient::addServer — Add a job server to the client

### Description

```
public GearmanClient::addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true): bool
```

Adds a job server to a list of servers that can be used to run a task. No socket I/O happens here; the server is simply added to the list.

### Parameters

The job server host name.

The job server port.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Adding two job servers

```
<?php

# Create our client object.
$gmclient= new GearmanClient();

# Add two job servers, the first on the default 4730 port
$gmclient->addServer("10.0.0.1"); 
$gmclient->addServer("10.0.0.2", 7003);

?>
```

### See Also

- GearmanClient::addServers() - Add a list of job servers to the client

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addserver.php
