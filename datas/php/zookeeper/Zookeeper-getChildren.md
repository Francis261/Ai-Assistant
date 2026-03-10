# Zookeeper::getChildren

Source: https://devdocs.io/php/zookeeper.getchildren

(PECL zookeeper >= 0.1.0)

Zookeeper::getChildren — Lists the children of a node synchronously

### Description

```
public Zookeeper::getChildren(string $path, callable $watcher_cb = null): array
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

If nonzero, a watch will be set at the server to notify the client if the node changes.

### Return Values

Returns an array with children paths on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to list children of a node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::getChildren() example

Lists children of a node.

```
<?php

$zookeeper = new Zookeeper('locahost:2181');
$path = '/zookeeper';
$r = $zookeeper->getchildren($path);

if ($r) {
    var_dump($r);
} else {
    echo 'ERR';
}

?>
```

The above example will output:

```
array(1) {
  [0]=>
  string(6) "config"
}
```

### See Also

- Zookeeper::create() - Create a node synchronously
- Zookeeper::delete() - Delete a node in zookeeper synchronously
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.getchildren.php
