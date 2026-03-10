# The RegexIterator class

Source: https://devdocs.io/php/class.regexiterator

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

This iterator can be used to filter another iterator based on a regular expression.

## Class synopsis

```
public accept(): bool
```

```
public getFlags(): int
```

```
public getMode(): int
```

```
public getPregFlags(): int
```

```
public getRegex(): string
```

```
public setFlags(int $flags): void
```

```
public setMode(int $mode): void
```

```
public setPregFlags(int $pregFlags): void
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

## Predefined Constants

## RegexIterator operation modes

Return all matches for the current entry (see preg_match_all()).

Return the first match for the current entry (see preg_match()).

Only execute match (filter) for the current entry (see preg_match()).

Replace the current entry (see preg_replace(); Not fully implemented yet)

Returns the split values for the current entry (see preg_split()).

## RegexIterator Flags

Special flag: Match the entry key instead of the entry value.

Inverts the return value of RegexIterator::accept().

## Properties

## Table of Contents

- RegexIterator::accept — Get accept status
- RegexIterator::__construct — Create a new RegexIterator
- RegexIterator::getFlags — Get flags
- RegexIterator::getMode — Returns operation mode
- RegexIterator::getPregFlags — Returns the regular expression flags
- RegexIterator::getRegex — Returns current regular expression
- RegexIterator::setFlags — Sets the flags
- RegexIterator::setMode — Sets the operation mode
- RegexIterator::setPregFlags — Sets the regular expression flags

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.regexiterator.php
