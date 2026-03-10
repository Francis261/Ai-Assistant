# SplObjectStorage::attach

Source: https://devdocs.io/php/splobjectstorage.attach

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

SplObjectStorage::attach — Adds an object in the storage

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public SplObjectStorage::attach(object $object, mixed $info = null): void
```

Adds an object inside the storage, and optionally associate it to some data.

### Parameters

The object to add.

The data to associate with the object.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::attach() example

```
<?php
$o1 = new stdClass;
$o2 = new stdClass;
$s = new SplObjectStorage();
$s->attach($o1); // similar to $s[$o1] = NULL;
$s->attach($o2, "hello"); // similar to $s[$o2] = "hello";

var_dump($s[$o1]);
var_dump($s[$o2]);

?>
```

The above example will output something similar to:

```
NULL
string(5) "hello"
```

### See Also

- SplObjectStorage::detach() - Removes an object from the storage
- SplObjectStorage::offsetSet() - Associates data to an object in the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.attach.php
