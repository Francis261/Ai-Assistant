# Memcached::addServer

Source: https://devdocs.io/php/memcached.addserver

(PECL memcached >= 0.1.0)

Memcached::addServer — Add a server to the server pool

### Description

```
public Memcached::addServer(string $host, int $port, int $weight = 0): bool
```

Memcached::addServer() adds the specified server to the server pool. No connection is established to the server at this time, but if you are using consistent key distribution option (via Memcached::DISTRIBUTION_CONSISTENT or Memcached::OPT_LIBKETAMA_COMPATIBLE), some of the internal data structures will have to be updated. Thus, if you need to add multiple servers, it is better to use Memcached::addServers() as the update then happens only once.

The same server may appear multiple times in the server pool, because no duplication checks are made. This is not advisable; instead, use the weight option to increase the selection weighting of this server.

### Parameters

The hostname of the memcache server. If the hostname is invalid, data-related operations will set Memcached::RES_HOST_LOOKUP_FAILURE result code. As of version 2.0.0b1, this parameter may also specify the path of a unix socket filepath ex. /path/to/memcached.sock to use UNIX domain sockets, in this case port must also be set to 0.

The port on which memcache is running. Usually, this is 11211. As of version 2.0.0b1, set this parameter to 0 when using UNIX domain sockets.

The weight of the server relative to the total weight of all the servers in the pool. This controls the probability of the server being selected for operations. This is used only with consistent distribution option and usually corresponds to the amount of memory available to memcache on that server.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Memcached::addServer() example

```
<?php
$m = new Memcached();

/* Add 2 servers, so that the second one
   is twice as likely to be selected. */
$m->addServer('mem1.domain.com', 11211, 33);
$m->addServer('mem2.domain.com', 11211, 67);
?>
```

### See Also

- Memcached::addServers() - Add multiple servers to the server pool
- Memcached::resetServerList() - Clears all servers from the server list

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.addserver.php
