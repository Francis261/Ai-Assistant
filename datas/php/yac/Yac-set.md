# Yac::set

Source: https://devdocs.io/php/yac.set

(PECL yac >= 1.0.0)

Yac::set — Store into cache

### Description

```
public Yac::set(string $keys, mixed $value, int $ttl = 0): bool
```

```
public Yac::add(array $key_vals): bool
```

Add a item into cache, it the key is already exists, override it.

### Parameters

string key

mixed value, All php value type could be stored except resource

expire time

### Return Values

the value self

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yac.set.php
