# Memcached::getMulti

Source: https://devdocs.io/php/memcached.getmulti

(PECL memcached >= 0.1.0)

Memcached::getMulti — Retrieve multiple items

### Description

```
public Memcached::getMulti(array $keys, int $get_flags = 0): array|false
```

Memcached::getMulti() is similar to Memcached::get(), but instead of a single key item, it retrieves multiple items the keys of which are specified in the keys array.

Note:

Before v3.0 a second argument &cas_tokens was in use. It was filled with the CAS token values for the found items. The &cas_tokens parameter was removed in v3.0 of the extension. It was replaced with a new flag Memcached::GET_EXTENDED that needs is to be used as the value for get_flags.

The get_flags parameter can be used to specify additional options for Memcached::getMulti(). Memcached::GET_PRESERVE_ORDER ensures that the keys are returned in the same order as they were requested in. Memcached::GET_EXTENDED ensures that the CAS tokens will be fetched too.

### Parameters

Array of keys to retrieve.

The flags for the get operation.

### Return Values

Returns the array of found items or false on failure. Use Memcached::getResultCode() if necessary.

### Changelog

### Examples

Example #1 Memcached::getMulti() example for Memcached v3

```
<?php
// Valid for v3 of the extension

$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items);
$result = $m->getMulti(array('key1', 'key3', 'badkey'));
var_dump($result);
?>
```

The above example will output something similar to:

```
array(2) {
  ["key1"]=>
  string(6) "value1"
  ["key3"]=>
  string(6) "value3"
}
```

Example #2 Memcached::getMulti() example for Memcached v1 and v2

```
<?php
// Valid for v1 and v2 of the extension

$m = new Memcached();
$m->addServer('localhost', 11211);

$items = array(
    'key1' => 'value1',
    'key2' => 'value2',
    'key3' => 'value3'
);
$m->setMulti($items);
$result = $m->getMulti(array('key1', 'key3', 'badkey'), $cas);
var_dump($result, $cas);
?>
```

The above example will output something similar to:

```
array(2) {
  ["key1"]=>
  string(6) "value1"
  ["key3"]=>
  string(6) "value3"
}
array(2) {
  ["key1"]=>
  float(2360)
  ["key3"]=>
  float(2362)
}
```

Example #3 Memcached::GET_PRESERVE_ORDER example for Memcached v3

```
<?php
// Valid for v3 of the extension

$m = new Memcached();
$m->addServer('localhost', 11211);

$data = array(
    'foo' => 'foo-data',
    'bar' => 'bar-data',
    'baz' => 'baz-data',
    'lol' => 'lol-data',
    'kek' => 'kek-data',
);

$m->setMulti($data, 3600);

$keys = array_keys($data);
$keys[] = 'zoo';
$got = $m->getMulti($keys, Memcached::GET_PRESERVE_ORDER);

foreach ($got as $k => $v) {
    echo "$k $v\n";
}
?>
```

The above example will output something similar to:

```
foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo
```

Example #4 Memcached::GET_PRESERVE_ORDER example for Memcached v1 and v2

```
<?php
// Valid for v1 and v2 of the extension

$m = new Memcached();
$m->addServer('localhost', 11211);

$data = array(
    'foo' => 'foo-data',
    'bar' => 'bar-data',
    'baz' => 'baz-data',
    'lol' => 'lol-data',
    'kek' => 'kek-data',
);

$m->setMulti($data, 3600);

$null = null;
$keys = array_keys($data);
$keys[] = 'zoo';
$got = $m->getMulti($keys, $null, Memcached::GET_PRESERVE_ORDER);

foreach ($got as $k => $v) {
    echo "$k $v\n";
}
?>
```

The above example will output something similar to:

```
foo foo-data
bar bar-data
baz baz-data
lol lol-data
kek kek-data
zoo
```

### See Also

- Memcached::getMultiByKey() - Retrieve multiple items from a specific server
- Memcached::get() - Retrieve an item
- Memcached::getDelayed() - Request multiple items

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getmulti.php
