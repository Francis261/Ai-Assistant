# The RecursiveRegexIterator class

Source: https://devdocs.io/php/class.recursiveregexiterator

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

This recursive iterator can filter another recursive iterator via a regular expression.

## Class synopsis

```
public getChildren(): RecursiveRegexIterator
```

```
public hasChildren(): bool
```

```
public RegexIterator::accept(): bool
```

```
public RegexIterator::getFlags(): int
```

```
public RegexIterator::getMode(): int
```

```
public RegexIterator::getPregFlags(): int
```

```
public RegexIterator::getRegex(): string
```

```
public RegexIterator::setFlags(int $flags): void
```

```
public RegexIterator::setMode(int $mode): void
```

```
public RegexIterator::setPregFlags(int $pregFlags): void
```

```
public FilterIterator::accept(): bool
```

```
public FilterIterator::current(): mixed
```

```
public FilterIterator::key(): mixed
```

```
public FilterIterator::next(): void
```

```
public FilterIterator::rewind(): void
```

```
public FilterIterator::valid(): bool
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

- RecursiveRegexIterator::__construct — Creates a new RecursiveRegexIterator
- RecursiveRegexIterator::getChildren — Returns an iterator for the current entry
- RecursiveRegexIterator::hasChildren — Returns whether an iterator can be obtained for the current entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursiveregexiterator.php
