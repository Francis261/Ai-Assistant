# Memcached::replace

Source: https://devdocs.io/php/memcached.replace

(PECL memcached >= 0.1.0)

Memcached::replace — Replace the item under an existing key

### Description

```
public Memcached::replace(string $key, mixed $value, int $expiration = 0): bool
```

Memcached::replace() is similar to Memcached::set(), but the operation fails if the key does not exist on the server.

### Parameters

The key under which to store the value.

The value to store.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. The Memcached::getResultCode() will return Memcached::RES_NOTSTORED if the key does not exist.

### See Also

- Memcached::replaceByKey() - Replace the item under an existing key on a specific server
- Memcached::set() - Store an item
- Memcached::add() - Add an item under a new key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.replace.php
