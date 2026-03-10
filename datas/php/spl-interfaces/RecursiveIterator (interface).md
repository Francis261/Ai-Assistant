# The RecursiveIterator interface

Source: https://devdocs.io/php/class.recursiveiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

Classes implementing RecursiveIterator can be used to iterate over iterators recursively.

## Interface synopsis

```
public getChildren(): ?RecursiveIterator
```

```
public hasChildren(): bool
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

- RecursiveIterator::getChildren — Returns an iterator for the current entry
- RecursiveIterator::hasChildren — Returns if an iterator can be created for the current entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursiveiterator.php
