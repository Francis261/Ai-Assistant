# Memcached::resetServerList

Source: https://devdocs.io/php/memcached.resetserverlist

(PECL memcached >= 2.0.0)

Memcached::resetServerList — Clears all servers from the server list

### Description

```
public Memcached::resetServerList(): bool
```

Memcached::resetserverlist() removes all memcache servers from the known server list, resetting it back to empty.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### See Also

- Memcached::addServer() - Add a server to the server pool
- Memcached::addServers() - Add multiple servers to the server pool

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.resetserverlist.php
