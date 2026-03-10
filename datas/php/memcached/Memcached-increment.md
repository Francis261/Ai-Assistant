# Memcached::increment

Source: https://devdocs.io/php/memcached.increment

(PECL memcached >= 0.1.0)

Memcached::increment — Increment numeric item's value

### Description

```
public Memcached::increment(
 string $key,
 int $offset = 1,
 int $initial_value = 0,
 int $expiry = 0
): int|false
```

Memcached::increment() increments a numeric item's value by the specified offset. If the item's value is not numeric, an error will result. Memcached::increment() will set the item to the initial_value parameter if the key doesn't exist.

### Parameters

The key of the item to increment.

The amount by which to increment the item's value.

The value to set the item to if it doesn't currently exist.

The expiry time to set on the item.

### Return Values

Returns new item's value on success or false on failure.

### Examples

Example #1 Memcached::increment() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->set('counter', 0);
$m->increment('counter');
$n = $m->increment('counter', 10);
var_dump($n);

$m->set('counter', 'abc');
$n = $m->increment('counter');
// ^ will fail due to item value not being numeric
var_dump($n);
?>
```

The above example will output:

```
int(11)
bool(false)
```

### See Also

- Memcached::decrement() - Decrement numeric item's value
- Memcached::decrementByKey() - Decrement numeric item's value, stored on a specific server
- Memcached::incrementByKey() - Increment numeric item's value, stored on a specific server

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.increment.php
