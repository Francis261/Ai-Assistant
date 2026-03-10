# Yac::get

Source: https://devdocs.io/php/yac.get

(PECL yac >= 1.0.0)

Yac::get — Retrieve values from cache

### Description

```
public Yac::get(string|array $key, int &$cas = null): mixed
```

Retrieve values from cache

### Parameters

string keys, or array of multiple keys.

if not null, it will be set to the retrieved item's cas.

### Return Values

mixed on success, false on failure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yac.get.php
