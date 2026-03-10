# Memcached::getDelayedByKey

Source: https://devdocs.io/php/memcached.getdelayedbykey

(PECL memcached >= 0.1.0)

Memcached::getDelayedByKey — Request multiple items from a specific server

### Description

```
public Memcached::getDelayedByKey(
 string $server_key,
 array $keys,
 bool $with_cas = false,
 ?callable $value_cb = null
): bool
```

Memcached::getDelayedByKey() is functionally equivalent to Memcached::getDelayed(), except that the free-form server_key can be used to map the keys to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

Array of keys to request.

Whether to request CAS token values also.

The result callback or null.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### See Also

- Memcached::getDelayed() - Request multiple items
- Memcached::fetch() - Fetch the next result
- Memcached::fetchAll() - Fetch all the remaining results

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getdelayedbykey.php
