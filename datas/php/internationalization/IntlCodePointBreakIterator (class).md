# The IntlCodePointBreakIterator class

Source: https://devdocs.io/php/class.intlcodepointbreakiterator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

This break iterator identifies the boundaries between UTF-8 code points.

## Class synopsis

```
public getLastCodePoint(): int
```

```
public static IntlBreakIterator::createCharacterInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static IntlBreakIterator::createCodePointInstance(): IntlCodePointBreakIterator
```

```
public static IntlBreakIterator::createLineInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static IntlBreakIterator::createSentenceInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static IntlBreakIterator::createTitleInstance(?string $locale = null): ?IntlBreakIterator
```

```
public static IntlBreakIterator::createWordInstance(?string $locale = null): ?IntlBreakIterator
```

```
public IntlBreakIterator::current(): int
```

```
public IntlBreakIterator::first(): int
```

```
public IntlBreakIterator::following(int $offset): int
```

```
public IntlBreakIterator::getErrorCode(): int
```

```
public IntlBreakIterator::getErrorMessage(): string
```

```
public IntlBreakIterator::getLocale(int $type): string|false
```

```
public IntlBreakIterator::getPartsIterator(string $type = IntlPartsIterator::KEY_SEQUENTIAL): IntlPartsIterator
```

```
public IntlBreakIterator::getText(): ?string
```

```
public IntlBreakIterator::isBoundary(int $offset): bool
```

```
public IntlBreakIterator::last(): int
```

```
public IntlBreakIterator::next(?int $offset = null): int
```

```
public IntlBreakIterator::preceding(int $offset): int
```

```
public IntlBreakIterator::previous(): int
```

```
public IntlBreakIterator::setText(string $text): bool
```

## Table of Contents

- IntlCodePointBreakIterator::getLastCodePoint — Get last code point passed over after advancing or receding the iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlcodepointbreakiterator.php
