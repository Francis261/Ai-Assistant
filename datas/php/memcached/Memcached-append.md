# Memcached::append

Source: https://devdocs.io/php/memcached.append

(PECL memcached >= 0.1.0)

Memcached::append — Append data to an existing item

### Description

```
public Memcached::append(string $key, string $value): ?bool
```

Memcached::append() appends the given value string to the value of an existing item. The reason that value is forced to be a string is that appending mixed types is not well-defined.

Note:

If the Memcached::OPT_COMPRESSION is enabled, the operation will fail and a warning will be issued, because appending compressed data to a value that is potentially already compressed is not possible.

### Parameters

The key under which to store the value.

The string to append.

### Return Values

Returns true on success or false on failure. Returns null when compression is on.

### Errors/Exceptions

Returns null and raises an E_WARNING when compression is enabled.

### Examples

Example #1 Memcached::append() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);
$m->setOption(Memcached::OPT_COMPRESSION, false);

$m->set('foo', 'abc');
$m->append('foo', 'def');
var_dump($m->get('foo'));
?>
```

The above example will output:

```
string(6) "abcdef"
```

### See Also

- Memcached::appendByKey() - Append data to an existing item on a specific server
- Memcached::prepend() - Prepend data to an existing item

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.append.php
