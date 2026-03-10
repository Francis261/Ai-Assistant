# GearmanClient::addServers

Source: https://devdocs.io/php/gearmanclient.addservers

(PECL gearman >= 0.5.0)

GearmanClient::addServers — Add a list of job servers to the client

### Description

```
public GearmanClient::addServers(string $servers = null, bool $setupExceptionHandler = true): bool
```

Adds a list of job servers that can be used to run a task. No socket I/O happens here; the servers are simply added to the full list of servers.

### Parameters

A comma-separated list of servers, each server specified in the format 'host:port'.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Add two job servers

```
<?php

# Create our client object.
$gmclient= new GearmanClient();

# Add multiple job servers, the first on the default 4730 port
$gmclient->addServers("10.0.0.1,10.0.0.2:7003");

?>
```

### See Also

- GearmanClient::addServer() - Add a job server to the client

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/gearmanclient.addservers.php
