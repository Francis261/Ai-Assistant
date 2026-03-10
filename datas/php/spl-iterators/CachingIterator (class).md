# The CachingIterator class

Source: https://devdocs.io/php/class.cachingiterator

## Introduction

(PHP 5, PHP 7, PHP 8)

This object supports cached iteration over another iterator.

## Class synopsis

```
public count(): int
```

```
public current(): mixed
```

```
public getCache(): array
```

```
public getFlags(): int
```

```
public hasNext(): bool
```

```
public key(): scalar
```

```
public next(): void
```

```
public offsetExists(string $key): bool
```

```
public offsetGet(string $key): mixed
```

```
public offsetSet(string $key, mixed $value): void
```

```
public offsetUnset(string $key): void
```

```
public rewind(): void
```

```
public setFlags(int $flags): void
```

```
public __toString(): string
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

## Predefined Constants

Convert every element to string.

Don't throw exception in accessing children.

Use key for conversion to string.

Use current for conversion to string.

Use inner for conversion to string.

Cache all read data.

## Changelog

## Table of Contents

- CachingIterator::__construct — Construct a new CachingIterator object for the iterator
- CachingIterator::count — The number of elements in the iterator
- CachingIterator::current — Return the current element
- CachingIterator::getCache — Retrieve the contents of the cache
- CachingIterator::getFlags — Get flags used
- CachingIterator::hasNext — Check whether the inner iterator has a valid next element
- CachingIterator::key — Return the key for the current element
- CachingIterator::next — Move the iterator forward
- CachingIterator::offsetExists — The offsetExists purpose
- CachingIterator::offsetGet — The offsetGet purpose
- CachingIterator::offsetSet — The offsetSet purpose
- CachingIterator::offsetUnset — The offsetUnset purpose
- CachingIterator::rewind — Rewind the iterator
- CachingIterator::setFlags — The setFlags purpose
- CachingIterator::__toString — Return the string representation of the current element
- CachingIterator::valid — Check whether the current element is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.cachingiterator.php
