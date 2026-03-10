# Memcached::setMultiByKey

Source: https://devdocs.io/php/memcached.setmultibykey

(PECL memcached >= 0.1.0)

Memcached::setMultiByKey — Store multiple items on a specific server

### Description

```
public Memcached::setMultiByKey(string $server_key, array $items, int $expiration = 0): bool
```

Memcached::setMultiByKey() is functionally equivalent to Memcached::setMulti(), except that the free-form server_key can be used to map the keys from items to a specific server. This is useful if you need to keep a bunch of related keys on a certain server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

An array of key/value pairs to store on the server.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### See Also

- Memcached::setMulti() - Store multiple items
- Memcached::set() - Store an item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setmultibykey.php
