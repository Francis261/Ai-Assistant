# Zookeeper::get

Source: https://devdocs.io/php/zookeeper.get

(PECL zookeeper >= 0.1.0)

Zookeeper::get — Gets the data associated with a node synchronously

### Description

```
public Zookeeper::get(
 string $path,
 callable $watcher_cb = null,
 array &$stat = null,
 int $max_size = 0
): string
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

If nonzero, a watch will be set at the server to notify the client if the node changes.

If not NULL, will hold the value of stat for the path on return.

Max size of the data. If 0 is used, this method will return the whole data.

### Return Values

Returns the data on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to get value from node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::get() example

Get value from node.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$path = '/path/to/node';
$value = 'nodevalue';
$zookeeper->set($path, $value);

$r = $zookeeper->get($path);
if ($r)
  echo $r;
else
  echo 'ERR';
?>
```

The above example will output:

```
nodevalue
```

Example #2 Zookeeper::get() stat example

Get node stat info.

```
<?php
$zookeeper = new Zookeeper('localhost:2181');
$path = '/path/to/node';
$stat = [];
$zookeeper->get($path, null, $stat);
var_dump($stat);
?>
```

The above example will output:

```
array(11) {
  ["czxid"]=>
  float(0)
  ["mzxid"]=>
  float(0)
  ["ctime"]=>
  float(0)
  ["mtime"]=>
  float(0)
  ["version"]=>
  int(0)
  ["cversion"]=>
  int(-2)
  ["aversion"]=>
  int(0)
  ["ephemeralOwner"]=>
  float(0)
  ["dataLength"]=>
  int(0)
  ["numChildren"]=>
  int(2)
  ["pzxid"]=>
  float(0)
}
```

### See Also

- Zookeeper::set() - Sets the data associated with a node
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.get.php
