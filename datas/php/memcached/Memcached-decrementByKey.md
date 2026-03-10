# Memcached::decrementByKey

Source: https://devdocs.io/php/memcached.decrementbykey

(PECL memcached >= 2.0.0)

Memcached::decrementByKey — Decrement numeric item's value, stored on a specific server

### Description

```
public Memcached::decrementByKey(
 string $server_key,
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

Memcached::decrementByKey() decrements a numeric item's value by the specified offset. If the item's value is not numeric, an error will result. If the operation would decrease the value below 0, the new value will be 0. Memcached::decrementByKey() will set the item to the initial_value parameter if the key doesn't exist.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key of the item to decrement.

The amount by which to decrement the item's value.

The value to set the item to if it doesn't currently exist.

The expiry time to set on the item.

### Return Values

Returns item's new value on success or false on failure.

### See Also

- Memcached::decrement() - Decrement numeric item's value
- Memcached::increment() - Increment numeric item's value
- Memcached::incrementByKey() - Increment numeric item's value, stored on a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.decrementbykey.php
