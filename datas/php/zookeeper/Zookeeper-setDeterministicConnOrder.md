# Zookeeper::setDeterministicConnOrder

Source: https://devdocs.io/php/zookeeper.setdeterministicconnorder

(PECL zookeeper >= 0.1.0)

Zookeeper::setDeterministicConnOrder — Enable/disable quorum endpoint order randomization

### Description

```
public static Zookeeper::setDeterministicConnOrder(bool $yesOrNo): bool
```

If passed a true value, will make the client connect to quorum peers in the order as specified in the zookeeper_init() call. A false value causes zookeeper_init() to permute the peer endpoints which is good for more even client connection distribution among the quorum peers. ZooKeeper C Client uses false by default.

### Parameters

Disable/enable quorum endpoint order randomization.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### See Also

- Zookeeper::__construct() - Create a handle to used communicate with zookeeper
- Zookeeper::connect() - Create a handle to used communicate with zookeeper
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.setdeterministicconnorder.php
