# SplObjectStorage::count

Source: https://devdocs.io/php/splobjectstorage.count

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::count — Returns the number of objects in the storage

### Description

```
public SplObjectStorage::count(int $mode = COUNT_NORMAL): int
```

Counts the number of objects in the storage.

### Parameters

If the optional mode parameter is set to COUNT_RECURSIVE (or 1), SplObjectStorage::count() will recursively count the storage.

### Return Values

The number of objects in the storage.

### Examples

Example #1 SplObjectStorage::count() example

```
<?php
$s = new SplObjectStorage();
$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1);
$s->attach($o2);
$s->attach($o1);
var_dump($s->count());
var_dump(count($s));
?>
```

The above example will output something similar to:

```
int(2)
int(2)
```

### See Also

- SplObjectStorage::attach() - Adds an object in the storage
- SplObjectStorage::detach() - Removes an object from the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.count.php
