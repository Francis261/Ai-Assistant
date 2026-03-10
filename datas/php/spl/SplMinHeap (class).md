# The SplMinHeap class

Source: https://devdocs.io/php/class.splminheap

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplMinHeap class provides the main functionalities of a heap, keeping the minimum on the top.

## Class synopsis

```
protected compare(mixed $value1, mixed $value2): int
```

```
protected SplHeap::compare(mixed $value1, mixed $value2): int
```

```
public SplHeap::count(): int
```

```
public SplHeap::current(): mixed
```

```
public SplHeap::extract(): mixed
```

```
public SplHeap::insert(mixed $value): true
```

```
public SplHeap::isCorrupted(): bool
```

```
public SplHeap::isEmpty(): bool
```

```
public SplHeap::key(): int
```

```
public SplHeap::next(): void
```

```
public SplHeap::recoverFromCorruption(): true
```

```
public SplHeap::rewind(): void
```

```
public SplHeap::top(): mixed
```

```
public SplHeap::valid(): bool
```

## Table of Contents

- SplMinHeap::compare — Compare elements in order to place them correctly in the heap while sifting up

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splminheap.php
