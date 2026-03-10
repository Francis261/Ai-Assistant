# Memcached::getDelayed

Source: https://devdocs.io/php/memcached.getdelayed

(PECL memcached >= 0.1.0)

Memcached::getDelayed — Request multiple items

### Description

```
public Memcached::getDelayed(array $keys, bool $with_cas = false, ?callable $value_cb = null): bool
```

Memcached::getDelayed() issues a request to memcache for multiple items the keys of which are specified in the keys array. The method does not wait for response and returns right away. When you are ready to collect the items, call either Memcached::fetch() or Memcached::fetchAll(). If with_cas is true, the CAS token values will also be requested.

Instead of fetching the results explicitly, you can specify a result callback via value_cb parameter.

### Parameters

Array of keys to request.

Whether to request CAS token values also.

The result callback or null.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::getDelayed() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));

$m->getDelayed(array('int', 'array'), true);
var_dump($m->fetchAll());
?>
```

The above example will output:

```
array(2) {
  [0]=>
  array(3) {
    ["key"]=>
    string(3) "int"
    ["value"]=>
    int(99)
    ["cas"]=>
    float(2363)
  }
  [1]=>
  array(3) {
    ["key"]=>
    string(5) "array"
    ["value"]=>
    array(2) {
      [0]=>
      int(11)
      [1]=>
      int(12)
    }
    ["cas"]=>
    float(2365)
  }
}
```

### See Also

- Memcached::getDelayedByKey() - Request multiple items from a specific server
- Memcached::fetch() - Fetch the next result
- Memcached::fetchAll() - Fetch all the remaining results

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getdelayed.php
