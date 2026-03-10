# The IteratorIterator class

Source: https://devdocs.io/php/class.iteratoriterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

This iterator wrapper allows the conversion of anything that is Traversable into an Iterator. It is important to understand that most classes that do not implement Iterators have reasons as most likely they do not allow the full Iterator feature set. If so, techniques should be provided to prevent misuse, otherwise expect exceptions or fatal errors.

## Class synopsis

```
public current(): mixed
```

```
public getInnerIterator(): ?Iterator
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

## Notes

Note:

This class permits access to methods of the inner iterator via the __call magic method.

## Table of Contents

- IteratorIterator::__construct — Create an iterator from anything that is traversable
- IteratorIterator::current — Get the current value
- IteratorIterator::getInnerIterator — Get the inner iterator
- IteratorIterator::key — Get the key of the current element
- IteratorIterator::next — Forward to the next element
- IteratorIterator::rewind — Rewind to the first element
- IteratorIterator::valid — Checks if the current element is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.iteratoriterator.php
