# SplObjectStorage::removeAll

Source: https://devdocs.io/php/splobjectstorage.removeall

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::removeAll — Removes objects contained in another storage from the current storage

### Description

```
public SplObjectStorage::removeAll(SplObjectStorage $storage): int
```

Removes objects contained in another storage from the current storage.

### Parameters

The storage containing the elements to remove.

### Return Values

Returns the number of remaining objects.

### Examples

Example #1 SplObjectStorage::removeAll() example

```
<?php
$o1 = new stdClass;
$o2 = new stdClass;
$a = new SplObjectStorage();
$a[$o1] = "foo";

$b = new SplObjectStorage();
$b[$o1] = "bar";
$b[$o2] = "gee";

var_dump(count($b));
$b->removeAll($a);
var_dump(count($b));
?>
```

The above example will output something similar to:

```
int(2)
int(1)
```

### See Also

- SplObjectStorage::addAll() - Adds all objects from another storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.removeall.php
