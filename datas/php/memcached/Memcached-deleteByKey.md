# Memcached::deleteByKey

Source: https://devdocs.io/php/memcached.deletebykey

(PECL memcached >= 0.1.0)

Memcached::deleteByKey — Delete an item from a specific server

### Description

```
public Memcached::deleteByKey(string $server_key, string $key, int $time = 0): bool
```

Memcached::deleteByKey() is functionally equivalent to Memcached::delete(), except that the free-form server_key can be used to map the key to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key to be deleted.

The amount of time the server will wait to delete the item.

Note: As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero time will cause the deletion to fail. Memcached::getResultCode() will return MEMCACHED_INVALID_ARGUMENTS.

### Return Values

Returns true on success or false on failure. The Memcached::getResultCode() will return Memcached::RES_NOTFOUND if the key does not exist.

### See Also

- Memcached::delete() - Delete an item
- Memcached::deleteMulti() - Delete multiple items
- Memcached::deleteMultiByKey() - Delete multiple items from a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.deletebykey.php
