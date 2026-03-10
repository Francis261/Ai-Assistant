# Yac::add

Source: https://devdocs.io/php/yac.add

(PECL yac >= 1.0.0)

Yac::add — Store into cache

### Description

```
public Yac::add(string $keys, mixed $value, int $ttl = 0): bool
```

```
public Yac::add(array $key_vals): bool
```

Added a item into cache.

### Parameters

string key

mixed value, All php value type could be stored except resource

expire time

### Return Values

bool, true on success, false on failure

Note:

Yac::add() may fail if cas lock could not obtain, so, if you need the value to be stored properly, you may write codes like:

Example #1 Make sure the item is stored

```
while(!$yac->set("key", "vale));
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yac.add.php
