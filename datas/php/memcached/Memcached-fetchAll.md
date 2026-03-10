# Memcached::fetchAll

Source: https://devdocs.io/php/memcached.fetchall

(PECL memcached >= 0.1.0)

Memcached::fetchAll — Fetch all the remaining results

### Description

```
public Memcached::fetchAll(): array|false
```

Memcached::fetchAll() retrieves all the remaining results from the last request.

### Parameters

This function has no parameters.

### Return Values

Returns the results or false on failure. Use Memcached::getResultCode() if necessary.

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

- Memcached::fetch() - Fetch the next result
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.fetchall.php
