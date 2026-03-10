# Memcached::setOption

Source: https://devdocs.io/php/memcached.setoption

(PECL memcached >= 0.1.0)

Memcached::setOption — Set a Memcached option

### Description

```
public Memcached::setOption(int $option, mixed $value): bool
```

This method sets the value of a Memcached option. Some options correspond to the ones defined by libmemcached, and some are specific to the extension.

### Parameters

One of the Memcached::OPT_* constant. See Memcached Constants for more information.

The value to be set.

Note:

The options listed below require values specified via constants.

- Memcached::OPT_HASH requires Memcached::HASH_* values.
- Memcached::OPT_DISTRIBUTION requires Memcached::DISTRIBUTION_* values.
- Memcached::OPT_SERIALIZER requires Memcached::SERIALIZER_* values.
- Memcached::OPT_COMPRESSION_TYPE requires Memcached::COMPRESSION_* values.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting a Memcached option

```
<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);
$m->setOption(Memcached::OPT_HASH, Memcached::HASH_MURMUR);
$m->setOption(Memcached::OPT_PREFIX_KEY, "widgets");
echo "Prefix key is now: ", $m->getOption(Memcached::OPT_PREFIX_KEY), "\n";
?>
```

The above example will output:

```
bool(true)
Prefix key is now: widgets
```

### See Also

- Memcached::getOption() - Retrieve a Memcached option value
- Memcached::setOptions() - Set Memcached options
- Memcached Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setoption.php
