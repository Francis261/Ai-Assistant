# Zookeeper::exists

Source: https://devdocs.io/php/zookeeper.exists

(PECL zookeeper >= 0.1.0)

Zookeeper::exists — Checks the existence of a node in zookeeper synchronously

### Description

```
public Zookeeper::exists(string $path, callable $watcher_cb = null): array
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

if nonzero, a watch will be set at the server to notify the client if the node changes. The watch will be set even if the node does not

### Return Values

Returns the value of stat for the path if the given node exists, otherwise false.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to check the existence of a node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::exists() example

Check the existence of a node.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$path = '/path/to/node';
$r = $zookeeper->exists($path);
if ($r)
  echo 'EXISTS';
else
  echo 'N/A or ERR';
?>
```

The above example will output:

```
EXISTS
```

### See Also

- Zookeeper::get() - Gets the data associated with a node synchronously
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.exists.php
