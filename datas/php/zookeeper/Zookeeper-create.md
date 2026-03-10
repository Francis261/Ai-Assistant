# Zookeeper::create

Source: https://devdocs.io/php/zookeeper.create

(PECL zookeeper >= 0.1.0)

Zookeeper::create — Create a node synchronously

### Description

```
public Zookeeper::create(
 string $path,
 string $value,
 array $acls,
 int $flags = null
): string
```

This method will create a node in ZooKeeper. A node can only be created if it does not already exists. The Create Flags affect the creation of nodes. If ZOO_EPHEMERAL flag is set, the node will automatically get removed if the client session goes away. If the ZOO_SEQUENCE flag is set, a unique monotonically increasing sequence number is appended to the path name.

### Parameters

The name of the node. Expressed as a file name with slashes separating ancestors of the node.

The data to be stored in the node.

The initial ACL of the node. The ACL must not be null or empty.

this parameter can be set to 0 for normal create or an OR of the Create Flags

### Return Values

Returns the path of the new node (this might be different than the supplied path because of the ZOO_SEQUENCE flag) on success, and false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or fail to create node.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::create() example

Create a new node.

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
$realPath = $zookeeper->create($path, null, $aclArray);
if ($realPath)
  echo $realPath;
else
  echo 'ERR';
?>
```

The above example will output:

```
/path/to/newnode
```

### See Also

- Zookeeper::delete() - Delete a node in zookeeper synchronously
- Zookeeper::getChildren() - Lists the children of a node synchronously
- ZooKeeper Permissions
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.create.php
