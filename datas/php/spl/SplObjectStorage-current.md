# SplObjectStorage::current

Source: https://devdocs.io/php/splobjectstorage.current

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::current — Returns the current storage entry

### Description

```
public SplObjectStorage::current(): object
```

Returns the current storage entry.

### Parameters

This function has no parameters.

### Return Values

The object at the current iterator position.

### Changelog

### Examples

Example #1 SplObjectStorage::current() example

```
<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    $index  = $s->key();
    $object = $s->current(); // similar to current($s)
    $data   = $s->getInfo();

    var_dump($object);
    var_dump($data);
    $s->next();
}
?>
```

The above example will output something similar to:

```
object(stdClass)#2 (0) {
}
string(2) "d1"
object(stdClass)#3 (0) {
}
string(2) "d2"
```

### See Also

- SplObjectStorage::rewind() - Rewind the iterator to the first storage element
- SplObjectStorage::key() - Returns the index at which the iterator currently is
- SplObjectStorage::next() - Move to the next entry
- SplObjectStorage::valid() - Returns if the current iterator entry is valid
- SplObjectStorage::getInfo() - Returns the data associated with the current iterator entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.current.php
