# Memcached::set

Source: https://devdocs.io/php/memcached.set

(PECL memcached >= 0.1.0)

Memcached::set — Store an item

### Description

```
public Memcached::set(string $key, mixed $value, int $expiration = 0): bool
```

Memcached::set() stores the value on a memcache server under the specified key. The expiration parameter can be used to control when the value is considered expired.

The value can be any valid PHP type except for resources, because those cannot be represented in a serialized form. If the Memcached::OPT_COMPRESSION option is turned on, the serialized value will also be compressed before storage.

### Parameters

The key under which to store the value.

The value to store.

The expiration time, defaults to 0. See Expiration Times for more info.

### Return Values

Returns true on success or false on failure. Use Memcached::getResultCode() if necessary.

### Examples

Example #1 Memcached::set() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('int', 99);
$m->set('string', 'a simple string');
$m->set('array', array(11, 12));
/* expire 'object' key in 5 minutes */
$m->set('object', new stdClass, time() + 300);

var_dump($m->get('int'));
var_dump($m->get('string'));
var_dump($m->get('array'));
var_dump($m->get('object'));
?>
```

The above example will output something similar to:

```
int(99)
string(15) "a simple string"
array(2) {
  [0]=>
  int(11)
  [1]=>
  int(12)
}
object(stdClass)#1 (0) {
}
```

### See Also

- Memcached::setByKey() - Store an item on a specific server
- Memcached::add() - Add an item under a new key
- Memcached::replace() - Replace the item under an existing key

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.set.php
