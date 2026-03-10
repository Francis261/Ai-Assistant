# SplObjectStorage::unserialize

Source: https://devdocs.io/php/splobjectstorage.unserialize

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

SplObjectStorage::unserialize — Unserializes a storage from its string representation

### Description

```
public SplObjectStorage::unserialize(string $data): void
```

Unserializes storage entries and attach them to the current storage.

### Parameters

The serialized representation of a storage.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::unserialize() example

```
<?php
$s1 = new SplObjectStorage;
$s2 = new SplObjectStorage;
$o = new stdClass;
$s1[$o] = "data";

$s2->unserialize($s1->serialize());

var_dump(count($s2));
?>
```

The above example will output something similar to:

```
int(1)
```

### See Also

- SplObjectStorage::serialize() - Serializes the storage

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.unserialize.php
