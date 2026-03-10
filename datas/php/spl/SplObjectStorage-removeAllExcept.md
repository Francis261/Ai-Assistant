# SplObjectStorage::removeAllExcept

Source: https://devdocs.io/php/splobjectstorage.removeallexcept

(PHP 5 >= 5.3.6, PHP 7, PHP 8)

SplObjectStorage::removeAllExcept — Removes all objects except for those contained in another storage from the current storage

### Description

```
public SplObjectStorage::removeAllExcept(SplObjectStorage $storage): int
```

Removes all objects except for those contained in another storage from the current storage.

### Parameters

The storage containing the elements to retain in the current storage.

### Return Values

Returns the number of remaining objects.

### Examples

Example #1 SplObjectStorage::removeAllExcept() example

```
<?php
$a = (object) 'a'; 
$b = (object) 'b'; 
$c = (object) 'c'; 

$foo = new SplObjectStorage;
$foo->attach($a);
$foo->attach($b);

$bar = new SplObjectStorage;
$bar->attach($b);
$bar->attach($c);

$foo->removeAllExcept($bar);
var_dump($foo->contains($a));
var_dump($foo->contains($b));
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.removeallexcept.php
