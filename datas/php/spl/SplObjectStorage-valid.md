# SplObjectStorage::valid

Source: https://devdocs.io/php/splobjectstorage.valid

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::valid — Returns if the current iterator entry is valid

### Description

```
public SplObjectStorage::valid(): bool
```

Returns if the current iterator entry is valid.

### Parameters

This function has no parameters.

### Return Values

Returns true if the iterator entry is valid, false otherwise.

### Examples

Example #1 SplObjectStorage::valid() example

```
<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    echo $s->key()."\n";
    $s->next();
}
?>
```

The above example will output something similar to:

```
0
1
```

### See Also

- SplObjectStorage::current() - Returns the current storage entry
- SplObjectStorage::getInfo() - Returns the data associated with the current iterator entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.valid.php
