# Zookeeper::set

Source: https://devdocs.io/php/zookeeper.set

(PECL zookeeper >= 0.1.0)

Zookeeper::set — Sets the data associated with a node

### Description

```
public Zookeeper::set(
 string $path,
 string $value,
 int $version = -1,
 array &$stat = null
): bool
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

The data to be stored in the node.

The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.

If not NULL, will hold the value of stat for the path on return.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to save value to node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::set() example

Save value to node.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$path = '/path/to/node';
$value = 'nodevalue';
$r = $zookeeper->set($path, $value);
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
- Zookeeper::get() - Gets the data associated with a node synchronously
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.set.php
