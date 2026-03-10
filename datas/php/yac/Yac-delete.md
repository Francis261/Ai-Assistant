# Yac::delete

Source: https://devdocs.io/php/yac.delete

(PECL yac >= 1.0.0)

Yac::delete — Remove items from cache

### Description

```
public Yac::delete(string|array $keys, int $ttl = ?): bool
```

remove items from cache

### Parameters

string key, or array of multiple keys to be removed

if delay is set, delete will mark the items to be invalid in ttl second.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yac.delete.php
