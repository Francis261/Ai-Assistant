# Memcached::getVersion

Source: https://devdocs.io/php/memcached.getversion

(PECL memcached >= 0.1.5)

Memcached::getVersion — Get server pool version info

### Description

```
public Memcached::getVersion(): array|false
```

Memcached::getVersion() returns an array containing the version info for all available memcache servers.

### Parameters

This function has no parameters.

### Return Values

Array of server versions, one entry per server.

### Examples

Example #1 Memcached::getVersion() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

print_r($m->getVersion());
?>
```

The above example will output something similar to:

```
Array
(
    [localhost:11211] => 1.2.6
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getversion.php
