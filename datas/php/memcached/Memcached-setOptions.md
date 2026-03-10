# Memcached::setOptions

Source: https://devdocs.io/php/memcached.setoptions

(PECL memcached >= 2.0.0)

Memcached::setOptions — Set Memcached options

### Description

```
public Memcached::setOptions(array $options): bool
```

Memcached::setOptions() is a variation of the Memcached::setOption() that takes an array of options to be set.

### Parameters

An associative array of options where the key is the option to set and the value is the new value for the option.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting Memcached options

```
<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);

$m->setOptions(array(Memcached::OPT_HASH => Memcached::HASH_MURMUR, Memcached::OPT_PREFIX_KEY => "widgets"));

var_dump($m->getOption(Memcached::OPT_HASH) == Memcached::HASH_DEFAULT);
echo "Prefix key is now: ", $m->getOption(Memcached::OPT_PREFIX_KEY), "\n";
?>
```

The above example will output:

```
bool(true)
bool(false)
Prefix key is now: widgets
```

### See Also

- Memcached::getOption() - Retrieve a Memcached option value
- Memcached::setOption() - Set a Memcached option
- Memcached Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.setoptions.php
