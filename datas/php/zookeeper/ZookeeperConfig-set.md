# ZookeeperConfig::set

Source: https://devdocs.io/php/zookeeperconfig.set

(PECL zookeeper >= 0.6.0, ZooKeeper >= 3.5.0)

ZookeeperConfig::set — Change ZK cluster ensemble membership and roles of ensemble peers

### Description

```
public ZookeeperConfig::set(string $members, int $version = -1, array &$stat = null): void
```

### Parameters

Comma separated list of new membership (e.g., contents of a membership configuration file) - for use only with a non-incremental reconfiguration.

The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.

If not NULL, will hold the value of stat for the path on return.

### Return Values

No value is returned.

### Errors/Exceptions

This method emits ZookeeperException and it's derivatives when parameters count or types are wrong or fail to save value to node.

### Examples

Example #1 ZookeeperConfig::set() example

Reconfig.

```
<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->addAuth('digest', 'timandes:timandes');
$zkConfig = $client->getConfig();
$zkConfig->set("server.1=localhost:2888:3888:participant;0.0.0.0:2181");
?>
```

### See Also

- ZookeeperConfig::get() - Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously
- ZookeeperConfig::add() - Add servers to the ensemble
- ZookeeperConfig::remove() - Remove servers from the ensemble
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeperconfig.set.php
