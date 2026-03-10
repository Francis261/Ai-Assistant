# ReflectionClass::isIterable

Source: https://devdocs.io/php/reflectionclass.isiterable

(PHP 7 >= 7.2.0, PHP 8)

ReflectionClass::isIterable — Check whether this class is iterable

### Description

```
public ReflectionClass::isIterable(): bool
```

Check whether this class is iterable (i.e. can be used inside foreach).

### Parameters

This function has no parameters.

### Return Values

Returns true if the class is iterable or false otherwise.

### Examples

Example #1 Basic ReflectionClass::isIterable() Usage

```
<?php

class IteratorClass implements Iterator
{
    public function __construct() {}

    public function key(): mixed {}

    public function current(): mixed {}

    public function next(): void {}

    public function valid(): bool {}

    public function rewind(): void {}
}

class DerivedClass extends IteratorClass {}

class NonIterator {}

function dump_iterable($class)
{
    $reflection = new ReflectionClass($class);
    var_dump($reflection->isIterable());
}

$classes = ["ArrayObject", "IteratorClass", "DerivedClass", "NonIterator",];

foreach ($classes as $class) {
    echo "Is $class iterable? ";
    dump_iterable($class);
}
?>
```

The above example will output:

```
Is ArrayObject iterable? bool(true)
Is IteratorClass iterable? bool(true)
Is DerivedClass iterable? bool(true)
Is NonIterator iterable? bool(false)
```

### See Also

- ReflectionClass::__construct() - Constructs a ReflectionClass

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.isiterable.php
