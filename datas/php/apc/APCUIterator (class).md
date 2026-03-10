# The APCUIterator class

Source: https://devdocs.io/php/class.apcuiterator

## Introduction

(PECL apcu >= 5.0.0)

The APCUIterator class makes it easier to iterate over large APCu caches. This is helpful as it allows iterating over large caches in steps, while grabbing a defined number of entries per lock instance, so it frees the cache locks for other activities rather than hold up the entire cache to grab 100 (the default) entries. Also, using regular expression matching is more efficient as it's been moved to the C level.

## Class synopsis

```
public current(): mixed
```

```
public getTotalCount(): int
```

```
public getTotalHits(): int
```

```
public getTotalSize(): int
```

```
public key(): string
```

```
public next(): bool
```

```
public rewind(): void
```

```
public valid(): bool
```

## Table of Contents

- APCUIterator::__construct — Constructs an APCUIterator iterator object
- APCUIterator::current — Get current item
- APCUIterator::getTotalCount — Get total count
- APCUIterator::getTotalHits — Get total cache hits
- APCUIterator::getTotalSize — Get total cache size
- APCUIterator::key — Get iterator key
- APCUIterator::next — Move pointer to next item
- APCUIterator::rewind — Rewinds iterator
- APCUIterator::valid — Checks if current position is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.apcuiterator.php
