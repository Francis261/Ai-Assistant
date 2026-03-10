# Memcached::touch

Source: https://devdocs.io/php/memcached.touch

(PECL memcached >= 2.0.0)

Memcached::touch — Set a new expiration on an item

### Description

```
public Memcached::touch(string $key, int $expiration = 0): bool
```

Memcached::touch() sets a new expiration value on the given key.

### Parameters

The key under which to store the value.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### See Also

- Memcached::touchByKey() - Set a new expiration on an item on a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.touch.php
