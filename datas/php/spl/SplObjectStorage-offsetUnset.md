# SplObjectStorage::offsetUnset

Source: https://devdocs.io/php/splobjectstorage.offsetunset

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetUnset — Removes an object from the storage

### Description

```
public SplObjectStorage::offsetUnset(object $object): void
```

Removes an object from the storage.

Note:

SplObjectStorage::offsetUnset() is an alias of SplObjectStorage::detach().

### Parameters

The object to remove.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::offsetUnset() example

```
<?php
$o = new stdClass;
$s = new SplObjectStorage();
$s->attach($o);
var_dump(count($s));
$s->offsetUnset($o); // Similar to unset($s[$o])
var_dump(count($s));
?>
```

The above example will output something similar to:

```
int(1)
int(0)
```

### See Also

- SplObjectStorage::offsetGet() - Returns the data associated with an object
- SplObjectStorage::offsetSet() - Associates data to an object in the storage
- SplObjectStorage::offsetExists() - Checks whether an object exists in the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.offsetunset.php
