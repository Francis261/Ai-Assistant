# The Iterator interface

Source: https://devdocs.io/php/class.iterator

## Introduction

(PHP 5, PHP 7, PHP 8)

Interface for external iterators or objects that can be iterated themselves internally.

## Interface synopsis

```
public current(): mixed
```

```
public key(): mixed
```

```
public next(): void
```

```
public rewind(): void
```

```
public valid(): bool
```

## Predefined iterators

PHP already provides a number of iterators for many day to day tasks. See SPL iterators for a list.

## Examples

Example #1 Basic usage

This example demonstrates in which order methods are called when using foreach with an iterator.

```
<?php
class myIterator implements Iterator {
    private $position = 0;
    private $array = array(
        "firstelement",
        "secondelement",
        "lastelement",
    );  

    public function __construct() {
        $this->position = 0;
    }

    public function rewind(): void {
        var_dump(__METHOD__);
        $this->position = 0;
    }

    #[\ReturnTypeWillChange]
    public function current() {
        var_dump(__METHOD__);
        return $this->array[$this->position];
    }

    #[\ReturnTypeWillChange]
    public function key() {
        var_dump(__METHOD__);
        return $this->position;
    }

    public function next(): void {
        var_dump(__METHOD__);
        ++$this->position;
    }

    public function valid(): bool {
        var_dump(__METHOD__);
        return isset($this->array[$this->position]);
    }
}

$it = new myIterator;

foreach($it as $key => $value) {
    var_dump($key, $value);
    echo "\n";
}
?>
```

The above example will output something similar to:

```
string(18) "myIterator::rewind"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(0)
string(12) "firstelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(1)
string(13) "secondelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
string(19) "myIterator::current"
string(15) "myIterator::key"
int(2)
string(11) "lastelement"

string(16) "myIterator::next"
string(17) "myIterator::valid"
```

## See Also

See also object iteration.

## Table of Contents

- Iterator::current — Return the current element
- Iterator::key — Return the key of the current element
- Iterator::next — Move forward to next element
- Iterator::rewind — Rewind the Iterator to the first element
- Iterator::valid — Checks if current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.iterator.php
