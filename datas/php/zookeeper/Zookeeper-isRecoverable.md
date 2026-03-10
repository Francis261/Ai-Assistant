# Zookeeper::isRecoverable

Source: https://devdocs.io/php/zookeeper.isrecoverable

(PECL zookeeper >= 0.1.0)

Zookeeper::isRecoverable — Checks if the current zookeeper connection state can be recovered

### Description

```
public Zookeeper::isRecoverable(): bool
```

The application must close the handle and try to reconnect.

### Parameters

This function has no parameters.

### Return Values

Returns true/false on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when operation fails.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::__construct() - Create a handle to used communicate with zookeeper
- Zookeeper::connect() - Create a handle to used communicate with zookeeper
- Zookeeper::getClientId() - Return the client session id, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE)
- ZooKeeper States
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.isrecoverable.php
