# SplObjectStorage::key

Source: https://devdocs.io/php/splobjectstorage.key

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::key — Returns the index at which the iterator currently is

### Description

```
public SplObjectStorage::key(): int
```

Returns the index at which the iterator currently is.

### Parameters

This function has no parameters.

### Return Values

The index corresponding to the position of the iterator.

### Examples

Example #1 SplObjectStorage::key() example

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

    var_dump($index);
    var_dump($object);
    $s->next();
}
?>
```

The above example will output something similar to:

```
int(0)
object(stdClass)#2 (0) {
}
int(1)
object(stdClass)#3 (0) {
}
```

### See Also

- SplObjectStorage::rewind() - Rewind the iterator to the first storage element
- SplObjectStorage::current() - Returns the current storage entry
- SplObjectStorage::next() - Move to the next entry
- SplObjectStorage::valid() - Returns if the current iterator entry is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.key.php
