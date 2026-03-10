# The RecursiveCachingIterator class

Source: https://devdocs.io/php/class.recursivecachingiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

...

## Class synopsis

```
public getChildren(): ?RecursiveCachingIterator
```

```
public hasChildren(): bool
```

```
public CachingIterator::count(): int
```

```
public CachingIterator::current(): mixed
```

```
public CachingIterator::getCache(): array
```

```
public CachingIterator::getFlags(): int
```

```
public CachingIterator::hasNext(): bool
```

```
public CachingIterator::key(): scalar
```

```
public CachingIterator::next(): void
```

```
public CachingIterator::offsetExists(string $key): bool
```

```
public CachingIterator::offsetGet(string $key): mixed
```

```
public CachingIterator::offsetSet(string $key, mixed $value): void
```

```
public CachingIterator::offsetUnset(string $key): void
```

```
public CachingIterator::rewind(): void
```

```
public CachingIterator::setFlags(int $flags): void
```

```
public CachingIterator::__toString(): string
```

```
public CachingIterator::valid(): bool
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

## Table of Contents

- RecursiveCachingIterator::__construct — Construct
- RecursiveCachingIterator::getChildren — Return the inner iterator's children as a RecursiveCachingIterator
- RecursiveCachingIterator::hasChildren — Check whether the current element of the inner iterator has children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivecachingiterator.php
