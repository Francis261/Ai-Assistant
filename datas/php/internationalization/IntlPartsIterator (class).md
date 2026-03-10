# The IntlPartsIterator class

Source: https://devdocs.io/php/class.intlpartsiterator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Objects of this class can be obtained from IntlBreakIterator objects. While the break iterators provide a sequence of boundary positions when iterated, IntlPartsIterator objects provide, as a convenience, the text fragments comprehended between two successive boundaries.

The keys may represent the offset of the left boundary, right boundary, or they may just the sequence of non-negative integers. See IntlBreakIterator::getPartsIterator().

## Class synopsis

```
public getBreakIterator(): IntlBreakIterator
```

```
public IntlIterator::current(): mixed
```

```
public IntlIterator::key(): mixed
```

```
public IntlIterator::next(): void
```

```
public IntlIterator::rewind(): void
```

```
public IntlIterator::valid(): bool
```

## Predefined Constants

## Changelog

## Table of Contents

- IntlPartsIterator::getBreakIterator — Get IntlBreakIterator backing this parts iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlpartsiterator.php
