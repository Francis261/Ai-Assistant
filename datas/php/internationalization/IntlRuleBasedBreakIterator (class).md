# The IntlRuleBasedBreakIterator class

Source: https://devdocs.io/php/class.intlrulebasedbreakiterator

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

A subclass of IntlBreakIterator that encapsulates ICU break iterators whose behavior is specified using a set of rules. This is the most common kind of break iterators.

These rules are described in the » ICU Boundary Analysis User Guide.

## Class synopsis

```
public getBinaryRules(): string|false
```

```
public getRules(): string|false
```

```
public getRuleStatus(): int
```

```
public getRuleStatusVec(): array|false
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

- IntlRuleBasedBreakIterator::__construct — Create iterator from ruleset
- IntlRuleBasedBreakIterator::getBinaryRules — Get the binary form of compiled rules
- IntlRuleBasedBreakIterator::getRules — Get the rule set used to create this object
- IntlRuleBasedBreakIterator::getRuleStatus — Get the largest status value from the break rules that determined the current break position
- IntlRuleBasedBreakIterator::getRuleStatusVec — Get the status values from the break rules that determined the current break position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlrulebasedbreakiterator.php
