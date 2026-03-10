# session_cache_limiter

Source: https://devdocs.io/php/function.session-cache-limiter

(PHP 4 >= 4.0.3, PHP 5, PHP 7, PHP 8)

session_cache_limiter — Get and/or set the current cache limiter

### Description

```
session_cache_limiter(?string $value = null): string|false
```

session_cache_limiter() returns the name of the current cache limiter.

The cache limiter defines which cache control HTTP headers are sent to the client. These headers determine the rules by which the page content may be cached by the client and intermediate proxies. Setting the cache limiter to nocache disallows any client/proxy caching. A value of public permits caching by proxies and the client, whereas private disallows caching by proxies and permits the client to cache the contents.

In private mode, the Expire header sent to the client may cause confusion for some browsers, including Mozilla. You can avoid this problem by using private_no_expire mode. The Expire header is never sent to the client in this mode.

Setting the cache limiter to '' will turn off automatic sending of cache headers entirely.

The cache limiter is reset to the default value stored in session.cache_limiter at request startup time. Thus, you need to call session_cache_limiter() for every request (and before session_start() is called).

### Parameters

If value is specified and not null, the name of the current cache limiter is changed to the new value.

```
Expires: (sometime in the future, according session.cache_expire)
Cache-Control: public, max-age=(sometime in the future, according to session.cache_expire)
Last-Modified: (the timestamp of when the session was last saved)
```

```
Cache-Control: private, max-age=(session.cache_expire in the future)
Last-Modified: (the timestamp of when the session was last saved)
```

```
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: private, max-age=(session.cache_expire in the future)
Last-Modified: (the timestamp of when the session was last saved)
```

```
Expires: Thu, 19 Nov 1981 08:52:00 GMT
Cache-Control: no-store, no-cache, must-revalidate
Pragma: no-cache
```

### Return Values

Returns the name of the current cache limiter. On failure to change the value, false is returned.

### Changelog

### Examples

Example #1 session_cache_limiter() example

```
<?php

/* set the cache limiter to 'private' */

session_cache_limiter('private');
$cache_limiter = session_cache_limiter();

echo "The cache limiter is now set to $cache_limiter<br />";
?>
```

### See Also

- session.cache_limiter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.session-cache-limiter.php
