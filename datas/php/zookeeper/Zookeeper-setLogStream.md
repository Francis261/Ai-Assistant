# Zookeeper::setLogStream

Source: https://devdocs.io/php/zookeeper.setlogstream

(PECL zookeeper >= 0.1.0)

Zookeeper::setLogStream — Sets the stream to be used by the library for logging

### Description

```
public Zookeeper::setLogStream(resource $stream): bool
```

The zookeeper library uses stderr as its default log stream. Application must make sure the stream is writable. Passing in NULL resets the stream to its default value (stderr).

### Parameters

The stream to be used by the library for logging.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::setDebugLevel() - Sets the debugging level for the library
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.setlogstream.php
