# Memcached::setMulti

Source: https://devdocs.io/php/memcached.setmulti

(PECL memcached >= 0.1.0)

Memcached::setMulti — Store multiple items

### Description

```
public Memcached::setMulti(array $items, int $expiration = 0): bool
```

Memcached::setMulti() is similar to Memcached::set(), but instead of a single key/value item, it works on multiple items specified in items. The expiration time applies to all the items at once.

### Parameters

An array of key/value pairs to store on the server.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::setMulti() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items, time() + 300);
?>
```

### See Also

- Memcached::setMultiByKey() - Store multiple items on a specific server
- Memcached::set() - Store an item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setmulti.php
