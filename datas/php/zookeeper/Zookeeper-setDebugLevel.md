# Zookeeper::setDebugLevel

Source: https://devdocs.io/php/zookeeper.setdebuglevel

(PECL zookeeper >= 0.1.0)

Zookeeper::setDebugLevel — Sets the debugging level for the library

### Description

```
public static Zookeeper::setDebugLevel(int $logLevel): bool
```

### Parameters

ZooKeeper log level constants.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to set debug level.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::setDebugLevel() example

Set debugl level.

```
<?php
$r = Zookeeper::setDebugLevel(Zookeeper::LOG_LEVEL_WARN);
if ($r)
  echo 'SUCCESS';
else
  echo 'ERR';
?>
?>
```

The above example will output:

```
SUCCESS
```

### See Also

- ZooKeeper Log Levels
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.setdebuglevel.php
