# Zookeeper::addAuth

Source: https://devdocs.io/php/zookeeper.addauth

(PECL zookeeper >= 0.1.0)

Zookeeper::addAuth — Specify application credentials

### Description

```
public Zookeeper::addAuth(string $scheme, string $cert, callable $completion_cb = null): bool
```

The application calls this function to specify its credentials for purposes of authentication. The server will use the security provider specified by the scheme parameter to authenticate the client connection. If the authentication request has failed: - the server connection is dropped. - the watcher is called with the ZOO_AUTH_FAILED_STATE value as the state parameter.

### Parameters

The id of authentication scheme. Natively supported: "digest" password-based authentication

Application credentials. The actual value depends on the scheme.

The routine to invoke when the request completes. One of the following result codes may be passed into the completion callback: - ZOK operation completed successfully - ZAUTHFAILED authentication failed

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method emits PHP error/warning when parameters count or types are wrong or operation fails.

Since version 0.3.0, this method emits ZookeeperException and it's derivatives.

### Examples

Example #1 Zookeeper::addAuth() example

Add auth before requesting node value.

```
<?php
$zookeeper = new Zookeeper('locahost:2181');
$path = '/path/to/node';
$value = 'nodevalue';
$zookeeper->set($path, $value);

$zookeeper->addAuth('digest', 'user0:passwd0');
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

### See Also

- Zookeeper::create() - Create a node synchronously
- Zookeeper::setAcl() - Sets the acl associated with a node synchronously
- Zookeeper::getAcl() - Gets the acl associated with a node synchronously
- ZooKeeper States
- ZookeeperException

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/zookeeper.addauth.php
