# CachingIterator::getCache

Source: https://devdocs.io/php/cachingiterator.getcache

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

CachingIterator::getCache — Retrieve the contents of the cache

### Description

```
public CachingIterator::getCache(): array
```

Retrieve the contents of the cache.

Note:

The CachingIterator::FULL_CACHE flag must be being used.

### Parameters

This function has no parameters.

### Return Values

An array containing the cache items.

### Errors/Exceptions

Throws a BadMethodCallException when the CachingIterator::FULL_CACHE flag is not being used.

### Examples

Example #1 CachingIterator::getCache() example

```
<?php
$iterator = new ArrayIterator(array(1, 2, 3));
$cache    = new CachingIterator($iterator, CachingIterator::FULL_CACHE);

$cache->next();
$cache->next();
var_dump($cache->getCache());

$cache->next();
var_dump($cache->getCache());
?>
```

The above example will output:

```
array(2) {
  [0]=>
  int(1)
  [1]=>
  int(2)
}
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/cachingiterator.getcache.php
