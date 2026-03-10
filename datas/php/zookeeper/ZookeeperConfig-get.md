# ZookeeperConfig::get

Source: https://devdocs.io/php/zookeeperconfig.get

(PECL zookeeper >= 0.6.0, ZooKeeper >= 3.5.0)

ZookeeperConfig::get — Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously

### Description

```
public ZookeeperConfig::get(callable $watcher_cb = null, array &$stat = null): string
```

### Parameters

If nonzero, a watch will be set at the server to notify the client if the node changes.

If not NULL, will hold the value of stat for the path on return.

### Return Values

Returns the configuration string on success, and false on failure.

### Errors/Exceptions

This method emits ZookeeperException and it's derivatives when parameters count or types are wrong or fail to get configuration.

### Examples

Example #1 ZookeeperConfig::get() example

Get configuration.

```
<?php
$zk = new Zookeeper();
$zk->connect('localhost:2181');
$zk->addAuth('digest', 'timandes:timandes');
$zkConfig = $zk->getConfig();
$r = $zkConfig->get();
if ($r)
  echo $r;
else
  echo 'ERR';
?>
```

The above example will output:

```
server.1=localhost:2888:3888:participant;0.0.0.0:2181
version=0xca01e881a2
```

### See Also

- ZookeeperConfig::set() - Change ZK cluster ensemble membership and roles of ensemble peers
- ZookeeperConfig::add() - Add servers to the ensemble
- ZookeeperConfig::remove() - Remove servers from the ensemble
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeperconfig.get.php
