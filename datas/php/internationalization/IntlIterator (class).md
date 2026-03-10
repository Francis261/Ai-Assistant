# The IntlIterator class

Source: https://devdocs.io/php/class.intliterator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

This class represents iterator objects throughout the intl extension whenever the iterator cannot be identified with any other object provided by the extension. The distinct iterator object used internally by the foreach construct can only be obtained (in the relevant part here) from objects, so objects of this class serve the purpose of providing the hook through which this internal object can be obtained. As a convenience, this class also implements the Iterator interface, allowing the collection of values to be navigated using the methods defined in that interface. Both these methods and the internal iterator objects provided to foreach are backed by the same state (e.g. the position of the iterator and its current value).

Subclasses may provide richer functionality.

## Class synopsis

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

## Table of Contents

- IntlIterator::current — Get the current element
- IntlIterator::key — Get the current key
- IntlIterator::next — Move forward to the next element
- IntlIterator::rewind — Rewind the iterator to the first element
- IntlIterator::valid — Check if current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intliterator.php
