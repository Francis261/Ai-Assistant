# Zookeeper::setWatcher

Source: https://devdocs.io/php/zookeeper.setwatcher

(PECL zookeeper >= 0.1.0)

Zookeeper::setWatcher — Set a watcher function

### Description

```
public Zookeeper::setWatcher(callable $watcher_cb): bool
```

### Parameters

A watch will be set at the server to notify the client if the node changes.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to set watcher.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::exists() - Checks the existence of a node in zookeeper synchronously
- Zookeeper::get() - Gets the data associated with a node synchronously
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.setwatcher.php
