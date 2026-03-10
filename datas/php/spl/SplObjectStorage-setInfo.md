# SplObjectStorage::setInfo

Source: https://devdocs.io/php/splobjectstorage.setinfo

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SplObjectStorage::setInfo — Sets the data associated with the current iterator entry

### Description

```
public SplObjectStorage::setInfo(mixed $info): void
```

Associates data, or info, with the object currently pointed to by the iterator.

### Parameters

The data to associate with the current iterator entry.

### Return Values

No value is returned.

### Examples

Example #1 SplObjectStorage::setInfo() example

```
<?php
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;

$s->attach($o1, "d1");
$s->attach($o2, "d2");

$s->rewind();
while($s->valid()) {
    $s->setInfo("new");
    $s->next();
}
var_dump($s[$o1]);
var_dump($s[$o2]);
?>
```

The above example will output something similar to:

```
string(3) "new"
string(3) "new"
```

### See Also

- SplObjectStorage::current() - Returns the current storage entry
- SplObjectStorage::rewind() - Rewind the iterator to the first storage element
- SplObjectStorage::key() - Returns the index at which the iterator currently is
- SplObjectStorage::next() - Move to the next entry
- SplObjectStorage::valid() - Returns if the current iterator entry is valid
- SplObjectStorage::getInfo() - Returns the data associated with the current iterator entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.setinfo.php
