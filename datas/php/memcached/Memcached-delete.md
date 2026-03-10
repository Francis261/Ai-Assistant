# Memcached::delete

Source: https://devdocs.io/php/memcached.delete

(PECL memcached >= 0.1.0)

Memcached::delete — Delete an item

### Description

```
public Memcached::delete(string $key, int $time = 0): bool
```

Delete the key from the server.

### Parameters

The key to be deleted.

The amount of time the server will wait to delete the item.

Note: As of memcached 1.3.0 (released 2009) this feature is no longer supported. Passing a non-zero time will cause the deletion to fail. Memcached::getResultCode() will return MEMCACHED_INVALID_ARGUMENTS.

### Return Values

Returns true on success or false on failure. The Memcached::getResultCode() will return Memcached::RES_NOTFOUND if the key does not exist.

### Examples

Example #1 Memcached::delete() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->delete('key1');
?>
```

### See Also

- Memcached::deleteByKey() - Delete an item from a specific server
- Memcached::deleteMulti() - Delete multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.delete.php
