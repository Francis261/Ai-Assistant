# ZookeeperConfig::add

Source: https://devdocs.io/php/zookeeperconfig.add

(PECL zookeeper >= 0.6.0, ZooKeeper >= 3.5.0)

ZookeeperConfig::add — Add servers to the ensemble

### Description

```
public ZookeeperConfig::add(string $members, int $version = -1, array &$stat = null): void
```

### Parameters

Comma separated list of servers to be added to the ensemble. Each has a configuration line for a server to be added (as would appear in a configuration file), only for maj. quorums.

The expected version of the node. The function will fail if the actual version of the node does not match the expected version. If -1 is used the version check will not take place.

If not NULL, will hold the value of stat for the path on return.

### Return Values

No value is returned.

### Errors/Exceptions

This method emits ZookeeperException and it's derivatives when parameters count or types are wrong or fail to save value to node.

### Examples

Example #1 ZookeeperConfig::add() example

Add members.

```
<?php
$client = new Zookeeper();
$client->connect('localhost:2181');
$client->addAuth('digest', 'timandes:timandes');
$zkConfig = $client->getConfig();
$zkConfig->set("server.1=localhost:2888:3888:participant;0.0.0.0:2181");
$zkConfig->add("server.2=localhost:2889:3889:participant;0.0.0.0:2182");
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
server.2=localhost:2889:3889:participant;0.0.0.0:2182
version=0xca01e881a2
```

### See Also

- ZookeeperConfig::get() - Gets the last committed configuration of the ZooKeeper cluster as it is known to the server to which the client is connected, synchronously
- ZookeeperConfig::set() - Change ZK cluster ensemble membership and roles of ensemble peers
- ZookeeperConfig::remove() - Remove servers from the ensemble
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeperconfig.add.php
