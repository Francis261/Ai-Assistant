# Memcached::deleteMultiByKey

Source: https://devdocs.io/php/memcached.deletemultibykey

(PECL memcached >= 2.0.0)

Memcached::deleteMultiByKey — Delete multiple items from a specific server

### Description

```
public Memcached::deleteMultiByKey(string $server_key, array $keys, int $time = 0): array
```

Memcached::deleteMultiByKey() is functionally equivalent to Memcached::deleteMulti(), except that the free-form server_key can be used to map the keys to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The keys to be deleted.

The amount of time the server will wait to delete the items.

Note: As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero time will cause the deletion to fail. Memcached::getResultCode() will return MEMCACHED_INVALID_ARGUMENTS.

### Return Values

Returns an array indexed by keys. Each element is true if the corresponding key was deleted, or one of the Memcached::RES_* constants if the corresponding deletion failed.

The Memcached::getResultCode() will return the result code for the last executed delete operation, that is, the delete operation for the last element of keys.

### See Also

- Memcached::delete() - Delete an item
- Memcached::deleteByKey() - Delete an item from a specific server
- Memcached::deleteMulti() - Delete multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.deletemultibykey.php
