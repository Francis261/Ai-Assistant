# Memcached::get

Source: https://devdocs.io/php/memcached.get

(PECL memcached >= 0.1.0)

Memcached::get — Retrieve an item

### Description

```
public Memcached::get(string $key, ?callable $cache_cb = null, int $get_flags = 0): mixed
```

Memcached::get() returns the item that was previously stored under the key. If the item is found and the get_flags is given Memcached::GET_EXTENDED, it will also return the CAS token value for the item. See Memcached::cas() for how to use CAS tokens. Read-through caching callback may be specified via cache_cb parameter.

### Parameters

The key of the item to retrieve.

Read-through caching callback or null.

Flags to control the returned result. When Memcached::GET_EXTENDED is given, the function will also return the CAS token.

### Return Values

Returns the value stored in the cache or false otherwise. If the get_flags is set to Memcached::GET_EXTENDED, an array containing the value and the CAS token is returned instead of only the value. The Memcached::getResultCode() will return Memcached::RES_NOTFOUND if the key does not exist.

### Changelog

### Examples

Example #1 Memcached::get() example #1

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('foo', 100);
var_dump($m->get('foo'));
?>
```

The above example will output:

```
int(100)
```

Example #2 Memcached::get() example #2

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

if (!($ip = $m->get('ip_block'))) {
    if ($m->getResultCode() == Memcached::RES_NOTFOUND) {
        $ip = array();
        $m->set('ip_block', $ip);
    } else {
        /* log error */
        /* ...       */
    }
}
?>
```

### See Also

- Memcached::getByKey() - Retrieve an item from a specific server
- Memcached::getMulti() - Retrieve multiple items
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.get.php
