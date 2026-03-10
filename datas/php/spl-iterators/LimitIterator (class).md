# The LimitIterator class

Source: https://devdocs.io/php/class.limititerator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The LimitIterator class allows iteration over a limited subset of items in an Iterator.

## Class synopsis

```
public current(): mixed
```

```
public getPosition(): int
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
public seek(int $offset): int
```

```
public valid(): bool
```

```
public IteratorIterator::current(): mixed
```

```
public IteratorIterator::getInnerIterator(): ?Iterator
```

```
public IteratorIterator::key(): mixed
```

```
public IteratorIterator::next(): void
```

```
public IteratorIterator::rewind(): void
```

```
public IteratorIterator::valid(): bool
```

## Examples

Example #1 LimitIterator usage example

```
<?php

// Create an iterator to be limited
$fruits = new ArrayIterator(array(
    'apple',
    'banana',
    'cherry',
    'damson',
    'elderberry'
));

// Loop over first three fruits only
foreach (new LimitIterator($fruits, 0, 3) as $fruit) {
    var_dump($fruit);
}

echo "\n";

// Loop from third fruit until the end
// Note: offset starts from zero for apple
foreach (new LimitIterator($fruits, 2) as $fruit) {
    var_dump($fruit);
}

?>
```

The above example will output:

```
string(5) "apple"
string(6) "banana"
string(6) "cherry"

string(6) "cherry"
string(6) "damson"
string(10) "elderberry"
```

## Table of Contents

- LimitIterator::__construct — Construct a LimitIterator
- LimitIterator::current — Get current element
- LimitIterator::getPosition — Return the current position
- LimitIterator::key — Get current key
- LimitIterator::next — Move the iterator forward
- LimitIterator::rewind — Rewind the iterator to the specified starting offset
- LimitIterator::seek — Seek to the given position
- LimitIterator::valid — Check whether the current element is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.limititerator.php
