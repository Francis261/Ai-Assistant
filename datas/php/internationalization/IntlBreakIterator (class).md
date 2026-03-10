# The IntlBreakIterator class

Source: https://devdocs.io/php/class.intlbreakiterator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

A “break iterator” is an ICU object that exposes methods for locating boundaries in text (e.g. word or sentence boundaries). The PHP IntlBreakIterator serves as the base class for all types of ICU break iterators. Where extra functionality is available, the intl extension may expose the ICU break iterator with suitable subclasses, such as IntlRuleBasedBreakIterator or IntlCodePointBreakIterator.

This class implements IteratorAggregate. Traversing an IntlBreakIterator yields non-negative integer values representing the successive locations of the text boundaries, expressed as UTF-8 code units (byte) counts, taken from the beginning of the text (which has the location 0). The keys yielded by the iterator simply form the sequence of natural numbers {0, 1, 2, …}.

## Class synopsis

```
public static createCharacterInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static createCodePointInstance(): IntlCodePointBreakIterator
```

```
public static createLineInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static createSentenceInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static createTitleInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static createWordInstance(?string $locale = null): ?IntlBreakIterator
```

```
public current(): int
```

```
public first(): int
```

```
public following(int $offset): int
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): string
```

```
public getLocale(int $type): string|false
```

```
public getPartsIterator(string $type = IntlPartsIterator::KEY_SEQUENTIAL): IntlPartsIterator
```

```
public getText(): ?string
```

```
public isBoundary(int $offset): bool
```

```
public last(): int
```

```
public next(?int $offset = null): int
```

```
public preceding(int $offset): int
```

```
public previous(): int
```

```
public setText(string $text): bool
```

## Predefined Constants

## Changelog

## Table of Contents

- IntlBreakIterator::__construct — Private constructor for disallowing instantiation
- IntlBreakIterator::createCharacterInstance — Create break iterator for boundaries of combining character sequences
- IntlBreakIterator::createCodePointInstance — Create break iterator for boundaries of code points
- IntlBreakIterator::createLineInstance — Create break iterator for logically possible line breaks
- IntlBreakIterator::createSentenceInstance — Create break iterator for sentence breaks
- IntlBreakIterator::createTitleInstance — Create break iterator for title-casing breaks
- IntlBreakIterator::createWordInstance — Create break iterator for word breaks
- IntlBreakIterator::current — Get index of current position
- IntlBreakIterator::first — Set position to the first character in the text
- IntlBreakIterator::following — Advance the iterator to the first boundary following specified offset
- IntlBreakIterator::getErrorCode — Get last error code on the object
- IntlBreakIterator::getErrorMessage — Get last error message on the object
- IntlBreakIterator::getLocale — Get the locale associated with the object
- IntlBreakIterator::getPartsIterator — Create iterator for navigating fragments between boundaries
- IntlBreakIterator::getText — Get the text being scanned
- IntlBreakIterator::isBoundary — Tell whether an offset is a boundaryʼs offset
- IntlBreakIterator::last — Set the iterator position to index beyond the last character
- IntlBreakIterator::next — Advance the iterator the next boundary
- IntlBreakIterator::preceding — Set the iterator position to the first boundary before an offset
- IntlBreakIterator::previous — Set the iterator position to the boundary immediately before the current
- IntlBreakIterator::setText — Set the text being scanned

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlbreakiterator.php
