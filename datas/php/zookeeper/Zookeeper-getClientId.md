# Zookeeper::getClientId

Source: https://devdocs.io/php/zookeeper.getclientid

(PECL zookeeper >= 0.1.0)

Zookeeper::getClientId — Return the client session id, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE)

### Description

```
public Zookeeper::getClientId(): int
```

### Parameters

This function has no parameters.

### Return Values

Returns the client session id on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when it could not get client session id.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::__construct() - Create a handle to used communicate with zookeeper
- Zookeeper::connect() - Create a handle to used communicate with zookeeper
- Zookeeper::getState() - Get the state of the zookeeper connection
- ZooKeeper States
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.getclientid.php
