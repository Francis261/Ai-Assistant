# Memcached::touchByKey

Source: https://devdocs.io/php/memcached.touchbykey

(PECL memcached >= 2.0.0)

Memcached::touchByKey — Set a new expiration on an item on a specific server

### Description

```
public Memcached::touchByKey(string $server_key, string $key, int $expiration = 0): bool
```

Memcached::touchByKey() is functionally equivalent to Memcached::touch(), except that the free-form server_key can be used to map the key to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key under which to store the value.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### See Also

- Memcached::touch() - Set a new expiration on an item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.touchbykey.php
