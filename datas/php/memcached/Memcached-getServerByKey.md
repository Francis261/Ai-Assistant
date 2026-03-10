# Memcached::getServerByKey

Source: https://devdocs.io/php/memcached.getserverbykey

(PECL memcached >= 0.1.0)

Memcached::getServerByKey — Map a key to a server

### Description

```
public Memcached::getServerByKey(string $server_key): array|false
```

Memcached::getServerByKey() returns the server that would be selected by a particular server_key in all the Memcached::*ByKey() operations.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

### Return Values

Returns an array containing three keys of host, port, and weight on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::getServerByKey() example

```
<?php
$m = new Memcached();
$m->addServers(array(
    array('mem1.domain.com', 11211, 40),
    array('mem2.domain.com', 11211, 40),
    array('mem3.domain.com', 11211, 20),
));

$m->setOption(Memcached::OPT_LIBKETAMA_COMPATIBLE, true);

var_dump($m->getServerByKey('user'));
var_dump($m->getServerByKey('log'));
var_dump($m->getServerByKey('ip'));
?>
```

The above example will output something similar to:

```
array(3) {
  ["host"]=>
  string(15) "mem3.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(20)
}
array(3) {
  ["host"]=>
  string(15) "mem2.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(40)
}
array(3) {
  ["host"]=>
  string(15) "mem2.domain.com"
  ["port"]=>
  int(11211)
  ["weight"]=>
  int(40)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getserverbykey.php
