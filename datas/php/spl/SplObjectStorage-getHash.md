# SplObjectStorage::getHash

Source: https://devdocs.io/php/splobjectstorage.gethash

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

SplObjectStorage::getHash — Calculate a unique identifier for the contained objects

### Description

```
public SplObjectStorage::getHash(object $object): string
```

This method calculates an identifier for the objects added to an SplObjectStorage object.

The implementation in SplObjectStorage returns the same value as spl_object_hash().

The storage object will never contain more than one object with the same identifier. As such, it can be used to implement a set (a collection of unique values) where the quality of an object being unique is determined by the value returned by this function being unique.

### Parameters

The object whose identifier is to be calculated.

### Return Values

A string with the calculated identifier.

### Errors/Exceptions

A RuntimeException is thrown when the returned value is not a string.

### Examples

Example #1 SplObjectStorage::getHash() example

```
<?php
class OneSpecimenPerClassStorage extends SplObjectStorage {
    public function getHash($o) {
        return get_class($o);
    }
}
class A {}

$s = new OneSpecimenPerClassStorage;
$o1 = new stdClass;
$o2 = new stdClass;
$o3 = new A;

$s[$o1] = 1;
//$o2 is considered equal to $o1 so the value is replaced
$s[$o2] = 2;
$s[$o3] = 3;

//these are considered equal to the objects before
//so they can be used to access the values stored under them
$p1 = new stdClass;
$p2 = new A;
echo $s[$p1], "\n";
echo $s[$p2], "\n";
?>
```

The above example will output something similar to:

```
2
3
```

### See Also

- spl_object_hash() - Return hash id for given object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.gethash.php
