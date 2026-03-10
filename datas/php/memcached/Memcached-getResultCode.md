# Memcached::getResultCode

Source: https://devdocs.io/php/memcached.getresultcode

(PECL memcached >= 0.1.0)

Memcached::getResultCode — Return the result code of the last operation

### Description

```
public Memcached::getResultCode(): int
```

Memcached::getResultCode() returns one of the Memcached::RES_* constants that is the result of the last executed Memcached method.

### Parameters

This function has no parameters.

### Return Values

Result code of the last Memcached operation.

### Examples

Example #1 Memcached::getResultCode() example

```
<?php
$m = new Memcached();
$m->addServer('localhost', 11211);

$m->add('foo', 'bar');
if ($m->getResultCode() == Memcached::RES_NOTSTORED) {
    /* ... */
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/memcached.getresultcode.php
