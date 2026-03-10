# Zookeeper::getAcl

Source: https://devdocs.io/php/zookeeper.getacl

(PECL zookeeper >= 0.1.0)

Zookeeper::getAcl — Gets the acl associated with a node synchronously

### Description

```
public Zookeeper::getAcl(string $path): array
```

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

### Return Values

Return acl array on success and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to get ACL of a node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::getAcl() example

Get ACL of a node.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$aclArray = array(
  array(
    'perms'  => Zookeeper::PERM_ALL,
    'scheme' => 'world',
    'id'     => 'anyone',
  )
);
$path = '/path/to/newnode';
$zookeeper->setAcl($path, $aclArray);

$r = $zookeeper->getAcl($path);
if ($r)
  var_dump($r);
else
  echo 'ERR';
?>
```

The above example will output:

```
array(1) {
  [0]=>
  array(3) {
    ["perms"]=>
    int(31)
    ["scheme"]=>
    string(5) "world"
    ["id"]=>
    string(6) "anyone"
  }
}
```

### See Also

- Zookeeper::create() - Create a node synchronously
- Zookeeper::setAcl() - Sets the acl associated with a node synchronously
- ZooKeeper Permissions
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.getacl.php
