# Memcached::__construct

Source: https://devdocs.io/php/memcached.construct

(PECL memcached >= 0.1.0)

Memcached::__construct — Create a Memcached instance

### Description

Creates a Memcached instance representing the connection to the memcache servers.

This function is currently not documented; only its argument list is available.

### Parameters

By default the Memcached instances are destroyed at the end of the request. To create an instance that persists between requests, use persistent_id to specify a unique ID for the instance. All instances created with the same persistent_id will share the same connection.

### Examples

Example #1 Creating a Memcached object

```
<?php
/* Create a regular instance */
$m = new Memcached();
echo get_class($m);

/* Create a persistent instance */
$m2 = new Memcached('story_pool');
$m3 = new Memcached('story_pool');

/* now $m2 and $m3 share the same connection */
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.construct.php
