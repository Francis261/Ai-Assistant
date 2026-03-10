# SplObjectStorage::offsetGet

Source: https://devdocs.io/php/splobjectstorage.offsetget

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::offsetGet — Returns the data associated with an object

### Description

```
public SplObjectStorage::offsetGet(object $object): mixed
```

Returns the data associated with an object in the storage.

### Parameters

The object to look for.

### Return Values

The data previously associated with the object in the storage.

### Errors/Exceptions

Throws UnexpectedValueException when object could not be found.

### Examples

Example #1 SplObjectStorage::offsetGet() example

```
<?php
$s = new SplObjectStorage;

$o1 = new stdClass;
$o2 = new stdClass;

$s[$o1] = "hello";
$s->attach($o2);

var_dump($s->offsetGet($o1)); // Similar to $s[$o1]
var_dump($s->offsetGet($o2)); // Similar to $s[$o2]
?>
```

The above example will output something similar to:

```
string(5) "hello"
NULL
```

### See Also

- SplObjectStorage::offsetSet() - Associates data to an object in the storage
- SplObjectStorage::offsetExists() - Checks whether an object exists in the storage
- SplObjectStorage::offsetUnset() - Removes an object from the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.offsetget.php
