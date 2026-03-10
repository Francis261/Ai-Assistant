# Memcached::replaceByKey

Source: https://devdocs.io/php/memcached.replacebykey

(PECL memcached >= 0.1.0)

Memcached::replaceByKey — Replace the item under an existing key on a specific server

### Description

```
public Memcached::replaceByKey(
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

Memcached::replaceByKey() is functionally equivalent to Memcached::replace(), except that the free-form server_key can be used to map the key to a specific server. This is useful if you need to keep a bunch of related keys on a certain server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key under which to store the value.

The value to store.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. The Memcached::getResultCode() will return Memcached::RES_NOTSTORED if the key does not exist.

### See Also

- Memcached::replace() - Replace the item under an existing key
- Memcached::set() - Store an item
- Memcached::add() - Add an item under a new key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.replacebykey.php
