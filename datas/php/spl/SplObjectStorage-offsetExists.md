# SplObjectStorage::offsetExists

Source: https://devdocs.io/php/splobjectstorage.offsetexists

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetExists — Checks whether an object exists in the storage

### Description

```
public SplObjectStorage::offsetExists(object $object): bool
```

Checks whether an object exists in the storage.

Note:

SplObjectStorage::offsetExists() is an alias of SplObjectStorage::contains().

### Parameters

The object to look for.

### Return Values

Returns true if the object exists in the storage, and false otherwise.

### Examples

Example #1 SplObjectStorage::offsetExists() example

```
<?php
$s = new SplObjectStorage;
$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1);

var_dump($s->offsetExists($o1)); // Similar to isset($s[$o1])
var_dump($s->offsetExists($o2)); // Similar to isset($s[$o2])
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

### See Also

- SplObjectStorage::offsetSet() - Associates data to an object in the storage
- SplObjectStorage::offsetGet() - Returns the data associated with an object
- SplObjectStorage::offsetUnset() - Removes an object from the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.offsetexists.php
