# Memcached::fetch

Source: https://devdocs.io/php/memcached.fetch

(PECL memcached >= 0.1.0)

Memcached::fetch — Fetch the next result

### Description

```
public Memcached::fetch(): array|false
```

Memcached::fetch() retrieves the next result from the last request.

### Parameters

This function has no parameters.

### Return Values

Returns the next result or false otherwise. The Memcached::getResultCode() will return Memcached::RES_END if result set is exhausted.

### Examples

Example #1 Memcached::fetch() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));

$m->getDelayed(array('int', 'array'), true);
while ($result = $m->fetch()) {
    var_dump($result);
}
?>
```

The above example will output something similar to:

```
array(3) {
  ["key"]=>
  string(3) "int"
  "value"]=>
  int(99)
  ["cas"]=>
  float(2363)
}
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
```

### See Also

- Memcached::fetchAll() - Fetch all the remaining results
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.fetch.php
