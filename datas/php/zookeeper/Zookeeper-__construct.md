# Zookeeper::__construct

Source: https://devdocs.io/php/zookeeper.construct

(PECL zookeeper >= 0.1.0)

Zookeeper::__construct — Create a handle to used communicate with zookeeper

### Description

This method creates a new handle and a zookeeper session that corresponds to that handle. Session establishment is asynchronous, meaning that the session should not be considered established until (and unless) an event of state ZOO_CONNECTED_STATE is received.

### Parameters

comma separated host:port pairs, each corresponding to a zk server. e.g. "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002"

the global watcher callback function. When notifications are triggered this function will be invoked.

the timeout for this session, only valid if the connections is currently connected (ie. last watcher state is ZOO_CONNECTED_STATE).

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or could not init instance.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::connect() - Create a handle to used communicate with zookeeper
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.construct.php
