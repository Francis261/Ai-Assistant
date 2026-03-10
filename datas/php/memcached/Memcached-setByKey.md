# Memcached::setByKey

Source: https://devdocs.io/php/memcached.setbykey

(PECL memcached >= 0.1.0)

Memcached::setByKey — Store an item on a specific server

### Description

```
public Memcached::setByKey(
 string $server_key,
 string $key,
 mixed $value,
 int $expiration = 0
): bool
```

Memcached::setByKey() is functionally equivalent to Memcached::set(), except that the free-form server_key can be used to map the key to a specific server. This is useful if you need to keep a bunch of related keys on a certain server.

### Parameters

The key identifying the server to store the value on or retrieve it from. Instead of hashing on the actual key for the item, we hash on the server key when deciding which memcached server to talk to. This allows related items to be grouped together on a single server for efficiency with multi operations.

The key under which to store the value.

The value to store.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::setByKey() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

/* keep IP blocks on a certain server */
$m->setByKey('api-cache', 'block-ip:169.254.253.252', 1);
$m->setByKey('api-cache', 'block-ip:169.127.127.202', 1);
?>
```

### See Also

- Memcached::set() - Store an item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setbykey.php
