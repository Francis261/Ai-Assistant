# iterator_count

Source: https://devdocs.io/php/function.iterator-count

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

iterator_count — Count the elements in an iterator

### Description

```
iterator_count(Traversable|array $iterator): int
```

Count the elements in an iterator. iterator_count() is not guaranteed to retain the current position of the iterator.

### Parameters

The iterator being counted.

### Return Values

The number of elements in iterator.

### Changelog

### Examples

Example #1 iterator_count() example

```
<?php
$iterator = new ArrayIterator(array('recipe'=>'pancakes', 'egg', 'milk', 'flour'));
var_dump(iterator_count($iterator));
?>
```

The above example will output:

```
int(4)
```

Example #2 iterator_count() modifies position

```
<?php
$iterator = new ArrayIterator(['one', 'two', 'three']);
var_dump($iterator->current());
var_dump(iterator_count($iterator));
var_dump($iterator->current());
?>
```

The above example will output:

```
string(3) "one"
int(3)
NULL
```

Example #3 iterator_count() in foreach loops

```
<?php
$iterator = new ArrayIterator(['one', 'two', 'three']);
foreach ($iterator as $key => $value) {
    echo "$key: $value (", iterator_count($iterator), ")\n";
}?>
```

The above example will output:

```
0: one (3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iterator-count.php
