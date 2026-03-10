# Memcached::getByKey

Source: https://devdocs.io/php/memcached.getbykey

(PECL memcached >= 0.1.0)

Memcached::getByKey — Retrieve an item from a specific server

### Description

```
public Memcached::getByKey(
 string $server_key,
 string $key,
 ?callable $cache_cb = null,
 int $get_flags = 0
): mixed
```

Memcached::getByKey() is functionally equivalent to Memcached::get(), except that the free-form server_key can be used to map the key to a specific server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key of the item to fetch.

Read-through caching callback or null

Flags to control the returned result. When value of Memcached::GET_EXTENDED is given will return the CAS token.

### Return Values

Returns the value stored in the cache or false otherwise. The Memcached::getResultCode() will return Memcached::RES_NOTFOUND if the key does not exist.

### Changelog

### See Also

- Memcached::get() - Retrieve an item
- Memcached::getMulti() - Retrieve multiple items
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getbykey.php
