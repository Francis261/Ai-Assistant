# session_cache_expire

Source: https://devdocs.io/php/function.session-cache-expire

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

session_cache_expire — Get and/or set current cache expire

### Description

```
session_cache_expire(?int $value = null): int|false
```

session_cache_expire() returns the current setting of session.cache_expire.

The cache expire is reset to the default value of 180 stored in session.cache_expire at request startup time. Thus, you need to call session_cache_expire() for every request (and before session_start() is called).

### Parameters

If value is given and not null, the current cache expire is replaced with value.

Note: Setting value is of value only, if session.cache_limiter is set to a value different from nocache.

### Return Values

Returns the current setting of session.cache_expire. The value returned should be read in minutes, defaults to 180. On failure to change the value, false is returned.

### Changelog

### Examples

Example #1 session_cache_expire() example

```
<?php

/* set the cache limiter to 'private' */

session_cache_limiter('private');
$cache_limiter = session_cache_limiter();

/* set the cache expire to 30 minutes */
session_cache_expire(30);
$cache_expire = session_cache_expire();

/* start the session */

session_start();

echo "The cache limiter is now set to $cache_limiter<br />";
echo "The cached session pages expire after $cache_expire minutes";
?>
```

### See Also

- session.cache_expire
- session.cache_limiter
- session_cache_limiter() - Get and/or set the current cache limiter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-cache-expire.php
