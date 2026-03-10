# SplObjectStorage::serialize

Source: https://devdocs.io/php/splobjectstorage.serialize

(PHP 5 >= 5.2.2, PHP 7, PHP 8)

SplObjectStorage::serialize — Serializes the storage

### Description

```
public SplObjectStorage::serialize(): string
```

Returns a string representation of the storage.

### Parameters

This function has no parameters.

### Return Values

A string representing the storage.

### Examples

Example #1 SplObjectStorage::serialize() example

```
<?php
$s = new SplObjectStorage;
$o = new stdClass;
$s[$o] = "data";

echo $s->serialize()."\n";
?>
```

The above example will output something similar to:

```
x:i:1;O:8:"stdClass":0:{},s:4:"data";;m:a:0:{}
```

### See Also

- SplObjectStorage::unserialize() - Unserializes a storage from its string representation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.serialize.php
