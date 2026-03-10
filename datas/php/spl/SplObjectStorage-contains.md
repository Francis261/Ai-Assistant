# SplObjectStorage::contains

Source: https://devdocs.io/php/splobjectstorage.contains

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::contains — Checks if the storage contains a specific object

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public SplObjectStorage::contains(object $object): bool
```

Checks if the storage contains the object provided.

### Parameters

The object to look for.

### Return Values

Returns true if the object is in the storage, false otherwise.

### Examples

Example #1 SplObjectStorage::contains() example

```
<?php
$o1 = new stdClass;
$o2 = new stdClass;

$s = new SplObjectStorage();

$s[$o1] = "hello";
var_dump($s->contains($o1));
var_dump($s->contains($o2));
?>
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

### See Also

- SplObjectStorage::offsetExists() - Checks whether an object exists in the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.contains.php
