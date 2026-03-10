# Memcached::addServers

Source: https://devdocs.io/php/memcached.addservers

(PECL memcached >= 0.1.1)

Memcached::addServers — Add multiple servers to the server pool

### Description

```
public Memcached::addServers(array $servers): bool
```

Memcached::addServers() adds servers to the server pool. Each entry in servers is supposed to be an array containing hostname, port, and, optionally, weight of the server. No connection is established to the servers at this time.

The same server may appear multiple times in the server pool, because no duplication checks are made. This is not advisable; instead, use the weight option to increase the selection weighting of this server.

### Parameters

Array of the servers to add to the pool.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Memcached::addServers() example

```
<?php
$m = new Memcached();

$servers = array(
    array('mem1.domain.com', 11211, 33),
    array('mem2.domain.com', 11211, 67)
);
$m->addServers($servers);
?>
```

### See Also

- Memcached::addServer() - Add a server to the server pool
- Memcached::resetServerList() - Clears all servers from the server list

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.addservers.php
