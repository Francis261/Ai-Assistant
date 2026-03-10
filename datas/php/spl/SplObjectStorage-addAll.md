# SplObjectStorage::addAll

Source: https://devdocs.io/php/splobjectstorage.addall

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::addAll — Adds all objects from another storage

### Description

```
public SplObjectStorage::addAll(SplObjectStorage $storage): int
```

Adds all objects-data pairs from a different storage in the current storage.

### Parameters

The storage you want to import.

### Return Values

The number of objects in the storage.

### Examples

Example #1 SplObjectStorage::addAll() example

```
<?php
$o = new stdClass;
$a = new SplObjectStorage();
$a[$o] = "hello";

$b = new SplObjectStorage();
$b->addAll($a);
echo $b[$o]."\n";
?>
```

The above example will output something similar to:

```
hello
```

### See Also

- SplObjectStorage::removeAll() - Removes objects contained in another storage from the current storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.addall.php
