# Memcached::flush

Source: https://devdocs.io/php/memcached.flush

(PECL memcached >= 0.1.0)

Memcached::flush — Invalidate all items in the cache

### Description

```
public Memcached::flush(int $delay = 0): bool
```

Memcached::flush() invalidates all existing cache items immediately (by default) or after the delay specified. After invalidation none of the items will be returned in response to a retrieval command (unless it's stored again under the same key after Memcached::flush() has invalidated the items). The flush does not actually free all the memory taken up by the existing items; that will happen gradually as new items are stored.

### Parameters

Number of seconds to wait before invalidating the items.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::flush() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

/* flush all items in 10 seconds */
$m->flush(10);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.flush.php
