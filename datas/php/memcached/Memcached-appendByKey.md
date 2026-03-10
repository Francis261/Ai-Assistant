# Memcached::appendByKey

Source: https://devdocs.io/php/memcached.appendbykey

(PECL memcached >= 0.1.0)

Memcached::appendByKey — Append data to an existing item on a specific server

### Description

```
public Memcached::appendByKey(string $server_key, string $key, string $value): ?bool
```

Memcached::appendByKey() is functionally equivalent to Memcached::append(), except that the free-form server_key can be used to map the key to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key under which to store the value.

The string to append.

### Return Values

Returns true on success or false on failure. Returns null when compression is on.

### Errors/Exceptions

Returns null and raises an E_WARNING when compression is enabled.

### See Also

- Memcached::append() - Append data to an existing item
- Memcached::prepend() - Prepend data to an existing item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.appendbykey.php
