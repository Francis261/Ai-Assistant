# SplObjectStorage::rewind

Source: https://devdocs.io/php/splobjectstorage.rewind

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::rewind — Rewind the iterator to the first storage element

### Description

```
public SplObjectStorage::rewind(): void
```

Rewind the iterator to the first storage element.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::rewind() example

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
int(1)
int(0)
```

### See Also

- SplObjectStorage::next() - Move to the next entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.rewind.php
