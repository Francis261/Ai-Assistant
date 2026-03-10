# Memcached::prependByKey

Source: https://devdocs.io/php/memcached.prependbykey

(PECL memcached >= 0.1.0)

Memcached::prependByKey — Prepend data to an existing item on a specific server

### Description

```
public Memcached::prependByKey(string $server_key, string $key, string $value): ?bool
```

Memcached::prependByKey() is functionally equivalent to Memcached::prepend(), except that the free-form server_key can be used to map the key to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key of the item to prepend the data to.

The string to prepend.

### Return Values

Returns true on success or false on failure. Returns null when compression is on.

### Errors/Exceptions

Returns null and raises an E_WARNING when compression is enabled.

### See Also

- Memcached::prepend() - Prepend data to an existing item
- Memcached::append() - Append data to an existing item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.prependbykey.php
