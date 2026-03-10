# SplObjectStorage::seek

Source: https://devdocs.io/php/splobjectstorage.seek

(PHP 8 >= 8.4.0)

SplObjectStorage::seek — Seeks iterator to a position

### Description

```
public SplObjectStorage::seek(int $offset): void
```

Seeks to a given position in the iterator.

### Parameters

### Return Values

No value is returned.

### Errors/Exceptions

Throws an OutOfBoundsException if the offset is not seekable.

### Examples

Example #1 SplObjectStorage::seek() example

Seeks to item position 2 in the iterator.

```
<?php
class Test {
    public function __construct(public string $marker) {}
}

$a = new Test("a");
$b = new Test("b");
$c = new Test("c");

$storage = new SplObjectStorage();
$storage[$a] = "first";
$storage[$b] = "second";
$storage[$c] = "third";

$storage->seek(2);
var_dump($storage->key());
var_dump($storage->current());
?>
```

The above example will output:

```
int(2)
object(Test)#3 (1) {
  ["marker"]=>
  string(1) "c"
}
```

### See Also

- SeekableIterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/splobjectstorage.seek.php
