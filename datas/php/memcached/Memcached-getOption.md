# Memcached::getOption

Source: https://devdocs.io/php/memcached.getoption

(PECL memcached >= 0.1.0)

Memcached::getOption — Retrieve a Memcached option value

### Description

```
public Memcached::getOption(int $option): mixed
```

This method returns the value of a Memcached option. Some options correspond to the ones defined by libmemcached, and some are specific to the extension. See Memcached Constants for more information.

### Parameters

One of the Memcached::OPT_* constants.

### Return Values

Returns the value of the requested option, or false on error.

### Examples

Example #1 Retrieving Memcached options

```
<?php
$m = new Memcached();
var_dump($m->getOption(Memcached::OPT_COMPRESSION));
var_dump($m->getOption(Memcached::OPT_POLL_TIMEOUT));
?>
```

The above example will output something similar to:

```
bool(true)
int(1000)
```

### See Also

- Memcached::getOption()
- Memcached::setOption() - Set a Memcached option
- Memcached Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getoption.php
