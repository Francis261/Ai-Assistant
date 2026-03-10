# Memcached::decrement

Source: https://devdocs.io/php/memcached.decrement

(PECL memcached >= 0.1.0)

Memcached::decrement — Decrement numeric item's value

### Description

```
public Memcached::decrement(
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

Memcached::decrement() decrements a numeric item's value by the specified offset. If the item's value is not numeric, an error will result. If the operation would decrease the value below 0, the new value will be 0. Memcached::decrement() will set the item to the initial_value parameter if the key doesn't exist.

### Parameters

The key of the item to decrement.

The amount by which to decrement the item's value.

The value to set the item to if it doesn't currently exist.

The expiry time to set on the item.

### Return Values

Returns item's new value on success or false on failure.

### Examples

Example #1 Memcached::decrement() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('counter', 5);
$n = $m->decrement('counter');
var_dump($n);

$n = $m->decrement('counter', 10);
var_dump($n);

var_dump($m->get('counter'));

$m->set('counter', 'abc');
$n = $m->increment('counter');
// ^ will fail due to item value not being numeric
var_dump($n);
?>
```

The above example will output:

```
int(4)
int(0)
int(0)
bool(false)
```

### See Also

- Memcached::increment() - Increment numeric item's value
- Memcached::incrementByKey() - Increment numeric item's value, stored on a specific server
- Memcached::decrementByKey() - Decrement numeric item's value, stored on a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.decrement.php
