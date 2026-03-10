# Zookeeper::delete

Source: https://devdocs.io/php/zookeeper.delete

(PECL zookeeper >= 0.2.0)

Zookeeper::delete — Delete a node in zookeeper synchronously

### Description

```
public Zookeeper::delete(string $path, int $version = -1): bool
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to delete node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::delete() example

Delete a existing node.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$path = '/path/to/node';
$r = $zookeeper->delete($path);
if ($r)
  echo 'SUCCESS';
else
  echo 'ERR';
?>
```

The above example will output:

```
SUCCESS
```

### See Also

- Zookeeper::create() - Create a node synchronously
- Zookeeper::getChildren() - Lists the children of a node synchronously
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.delete.php
