# Memcached::prepend

Source: https://devdocs.io/php/memcached.prepend

(PECL memcached >= 0.1.0)

Memcached::prepend — Prepend data to an existing item

### Description

```
public Memcached::prepend(string $key, string $value): ?bool
```

Memcached::prepend() prepends the given value string to the value of an existing item. The reason that value is forced to be a string is that prepending mixed types is not well-defined.

Note:

If the Memcached::OPT_COMPRESSION is enabled, the operation will fail and a warning will be issued, because prepending compressed data to a value that is potentially already compressed is not possible.

### Parameters

The key of the item to prepend the data to.

The string to prepend.

### Return Values

Returns true on success or false on failure. Returns null when compression is on.

### Errors/Exceptions

Returns null and raises an E_WARNING when compression is enabled.

### Examples

Example #1 Memcached::prepend() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);
$m->setOption(Memcached::OPT_COMPRESSION, false);

$m->set('foo', 'abc');
$m->prepend('foo', 'def');
var_dump($m->get('foo'));
?>
```

The above example will output:

```
string(6) "defabc"
```

### See Also

- Memcached::prependByKey() - Prepend data to an existing item on a specific server
- Memcached::append() - Append data to an existing item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.prepend.php
