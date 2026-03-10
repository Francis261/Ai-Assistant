# Memcached::getServerList

Source: https://devdocs.io/php/memcached.getserverlist

(PECL memcached >= 0.1.0)

Memcached::getServerList — Get the list of the servers in the pool

### Description

```
public Memcached::getServerList(): array
```

Memcached::getServerList() returns the list of all servers that are in its server pool.

### Parameters

This function has no parameters.

### Return Values

The list of all servers in the server pool.

### Examples

Example #1 Memcached::getServerList() example

```
<?php
$m = new Memcached();
$m->addServers(array(
    array('mem1.domain.com', 11211, 20),
    array('mem2.domain.com', 11311, 80),
));
var_dump($m->getServerList());
?>
```

The above example will output:

```
array(2) {
  [0]=>
  array(3) {
    ["host"]=>
    string(15) "mem1.domain.com"
    ["port"]=>
    int(11211)
    ["weight"]=>
    int(20)
  }
  [1]=>
  array(3) {
    ["host"]=>
    string(15) "mem2.domain.com"
    ["port"]=>
    int(11311)
    ["weight"]=>
    int(80)
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getserverlist.php
