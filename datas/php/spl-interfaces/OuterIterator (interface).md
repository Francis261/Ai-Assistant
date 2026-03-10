# The OuterIterator interface

Source: https://devdocs.io/php/class.outeriterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Classes implementing OuterIterator can be used to iterate over iterators.

## Interface synopsis

```
public getInnerIterator(): ?Iterator
```

```
public Iterator::current(): mixed
```

```
public Iterator::key(): mixed
```

```
public Iterator::next(): void
```

```
public Iterator::rewind(): void
```

```
public Iterator::valid(): bool
```

## Table of Contents

- OuterIterator::getInnerIterator — Returns the inner iterator for the current entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.outeriterator.php
