# SplObjectStorage::next

Source: https://devdocs.io/php/splobjectstorage.next

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::next — Move to the next entry

### Description

```
public SplObjectStorage::next(): void
```

Moves the iterator to the next object in the storage.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::next() example

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

- SPLObjectStorage::rewind() - Rewind the iterator to the first storage element

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.next.php
