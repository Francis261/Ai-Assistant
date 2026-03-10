# Memcached::add

Source: https://devdocs.io/php/memcached.add

(PECL memcached >= 0.1.0)

Memcached::add — Add an item under a new key

### Description

```
public Memcached::add(string $key, mixed $value, int $expiration = 0): bool
```

Memcached::add() is similar to Memcached::set(), but the operation fails if the key already exists on the server.

### Parameters

The key under which to store the value.

The value to store.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. The Memcached::getResultCode() will return Memcached::RES_NOTSTORED if the key already exists.

### See Also

- Memcached::addByKey() - Add an item under a new key on a specific server
- Memcached::set() - Store an item
- Memcached::replace() - Replace the item under an existing key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.add.php
