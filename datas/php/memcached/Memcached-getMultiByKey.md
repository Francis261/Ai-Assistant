# Memcached::getMultiByKey

Source: https://devdocs.io/php/memcached.getmultibykey

(PECL memcached >= 0.1.0)

Memcached::getMultiByKey — Retrieve multiple items from a specific server

### Description

```
public Memcached::getMultiByKey(string $server_key, array $keys, int $get_flags = 0): array|false
```

Memcached::getMultiByKey() is functionally equivalent to Memcached::getMulti(), except that the free-form server_key can be used to map the keys to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

Array of keys to retrieve.

The flags for the get operation.

### Return Values

Returns the array of found items or false on failure. Use Memcached::getResultCode() if necessary.

### Changelog

### See Also

- Memcached::getMulti() - Retrieve multiple items
- Memcached::get() - Retrieve an item
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getmultibykey.php
