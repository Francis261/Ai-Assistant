# Memcached::deleteMulti

Source: https://devdocs.io/php/memcached.deletemulti

(PECL memcached >= 2.0.0)

Memcached::deleteMulti — Delete multiple items

### Description

```
public Memcached::deleteMulti(array $keys, int $time = 0): array
```

Delete the array of keys from the server.

### Parameters

The keys to be deleted.

The amount of time the server will wait to delete the items.

Note: As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero time will cause the deletion to fail. Memcached::getResultCode() will return MEMCACHED_INVALID_ARGUMENTS.

### Return Values

Returns an array indexed by keys. Each element is true if the corresponding key was deleted, or one of the Memcached::RES_* constants if the corresponding deletion failed.

The Memcached::getResultCode() will return the result code for the last executed delete operation, that is, the delete operation for the last element of keys.

### See Also

- Memcached::delete() - Delete an item
- Memcached::deleteByKey() - Delete an item from a specific server
- Memcached::deleteMultiByKey() - Delete multiple items from a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.deletemulti.php
