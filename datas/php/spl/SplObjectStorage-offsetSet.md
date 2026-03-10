# SplObjectStorage::offsetSet

Source: https://devdocs.io/php/splobjectstorage.offsetset

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetSet — Associates data to an object in the storage

### Description

```
public SplObjectStorage::offsetSet(object $object, mixed $info = null): void
```

Associate data to an object in the storage.

Note:

SplObjectStorage::offsetSet() is an alias of SplObjectStorage::attach().

### Parameters

The object to associate data with.

The data to associate with the object.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::offsetSet() example

```
<?php
$s = new SplObjectStorage;

$o1 = new stdClass;

$s->offsetSet($o1, "hello"); // Similar to $s[$o1] = "hello";

var_dump($s[$o1]);
?>
```

The above example will output something similar to:

```
string(5) "hello"
```

### See Also

- SplObjectStorage::attach() - Adds an object in the storage
- SplObjectStorage::offsetGet() - Returns the data associated with an object
- SplObjectStorage::offsetExists() - Checks whether an object exists in the storage
- SplObjectStorage::offsetUnset() - Removes an object from the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.offsetset.php
