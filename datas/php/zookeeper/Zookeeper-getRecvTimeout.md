# Zookeeper::getRecvTimeout

Source: https://devdocs.io/php/zookeeper.getrecvtimeout

(PECL zookeeper >= 0.1.0)

Zookeeper::getRecvTimeout — Return the timeout for this session, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE). This value may change after a server re-connect

### Description

```
public Zookeeper::getRecvTimeout(): int
```

### Parameters

This function has no parameters.

### Return Values

Returns the timeout for this session on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when operation fails.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::__construct() - Create a handle to used communicate with zookeeper
- Zookeeper::connect() - Create a handle to used communicate with zookeeper
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.getrecvtimeout.php
