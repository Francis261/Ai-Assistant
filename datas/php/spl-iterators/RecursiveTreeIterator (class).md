# The RecursiveTreeIterator class

Source: https://devdocs.io/php/class.recursivetreeiterator

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

Allows iterating over a RecursiveIterator to generate an ASCII graphic tree.

## Class synopsis

```
public beginChildren(): void
```

```
public beginIteration(): RecursiveIterator
```

```
public callGetChildren(): RecursiveIterator
```

```
public callHasChildren(): bool
```

```
public current(): mixed
```

```
public endChildren(): void
```

```
public endIteration(): void
```

```
public getEntry(): string
```

```
public getPostfix(): string
```

```
public getPrefix(): string
```

```
public key(): mixed
```

```
public next(): void
```

```
public nextElement(): void
```

```
public rewind(): void
```

```
public setPostfix(string $postfix): void
```

```
public setPrefixPart(int $part, string $value): void
```

```
public valid(): bool
```

```
public RecursiveIteratorIterator::beginChildren(): void
```

```
public RecursiveIteratorIterator::beginIteration(): void
```

```
public RecursiveIteratorIterator::callGetChildren(): ?RecursiveIterator
```

```
public RecursiveIteratorIterator::callHasChildren(): bool
```

```
public RecursiveIteratorIterator::current(): mixed
```

```
public RecursiveIteratorIterator::endChildren(): void
```

```
public RecursiveIteratorIterator::endIteration(): void
```

```
public RecursiveIteratorIterator::getDepth(): int
```

```
public RecursiveIteratorIterator::getInnerIterator(): RecursiveIterator
```

```
public RecursiveIteratorIterator::getMaxDepth(): int|false
```

```
public RecursiveIteratorIterator::getSubIterator(?int $level = null): ?RecursiveIterator
```

```
public RecursiveIteratorIterator::key(): mixed
```

```
public RecursiveIteratorIterator::next(): void
```

```
public RecursiveIteratorIterator::nextElement(): void
```

```
public RecursiveIteratorIterator::rewind(): void
```

```
public RecursiveIteratorIterator::setMaxDepth(int $maxDepth = -1): void
```

```
public RecursiveIteratorIterator::valid(): bool
```

## Predefined Constants

## Table of Contents

- RecursiveTreeIterator::beginChildren — Begin children
- RecursiveTreeIterator::beginIteration — Begin iteration
- RecursiveTreeIterator::callGetChildren — Get children
- RecursiveTreeIterator::callHasChildren — Has children
- RecursiveTreeIterator::__construct — Construct a RecursiveTreeIterator
- RecursiveTreeIterator::current — Get current element
- RecursiveTreeIterator::endChildren — End children
- RecursiveTreeIterator::endIteration — End iteration
- RecursiveTreeIterator::getEntry — Get current entry
- RecursiveTreeIterator::getPostfix — Get the postfix
- RecursiveTreeIterator::getPrefix — Get the prefix
- RecursiveTreeIterator::key — Get the key of the current element
- RecursiveTreeIterator::next — Move to next element
- RecursiveTreeIterator::nextElement — Next element
- RecursiveTreeIterator::rewind — Rewind iterator
- RecursiveTreeIterator::setPostfix — Set postfix
- RecursiveTreeIterator::setPrefixPart — Set a part of the prefix
- RecursiveTreeIterator::valid — Check validity

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivetreeiterator.php
