# Memcached::getAllKeys

Source: https://devdocs.io/php/memcached.getallkeys

(PECL memcached >= 2.0.0)

Memcached::getAllKeys — Gets the keys stored on all the servers

### Description

```
public Memcached::getAllKeys(): array|false
```

Memcached::getAllKeys() queries each memcache server and retrieves an array of all keys stored on them at that point in time. This is not an atomic operation, so it isn't a truly consistent snapshot of the keys at point in time. As memcache doesn't guarantee to return all keys you also cannot assume that all keys have been returned.

Note:

This method is intended for debugging purposes and should not be used at scale!

### Parameters

This function has no parameters.

### Return Values

Returns the keys stored on all the servers on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getallkeys.php
