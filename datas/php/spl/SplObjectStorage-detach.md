# SplObjectStorage::detach

Source: https://devdocs.io/php/splobjectstorage.detach

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::detach — Removes an object from the storage

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public SplObjectStorage::detach(object $object): void
```

Removes the object from the storage.

### Parameters

The object to remove.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::detach() example

```
<?php
$o = new stdClass;
$s = new SplObjectStorage();
$s->attach($o);
var_dump(count($s));
$s->detach($o);
var_dump(count($s));
?>
```

The above example will output something similar to:

```
int(1)
int(0)
```

### See Also

- SplObjectStorage::attach() - Adds an object in the storage
- SplObjectStorage::removeAll() - Removes objects contained in another storage from the current storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.detach.php
