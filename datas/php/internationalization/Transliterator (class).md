# The Transliterator class

Source: https://devdocs.io/php/class.transliterator

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

Transliterator provides transliteration of strings.

## Class synopsis

```
public static create(string $id, int $direction = Transliterator::FORWARD): ?Transliterator
```

```
public static createFromRules(string $rules, int $direction = Transliterator::FORWARD): ?Transliterator
```

```
public createInverse(): ?Transliterator
```

```
public getErrorCode(): int|false
```

```
public getErrorMessage(): string|false
```

```
public static listIDs(): array|false
```

```
public transliterate(string $string, int $start = 0, int $end = -1): string|false
```

## Properties

## Predefined Constants

## Changelog

## Table of Contents

- Transliterator::__construct — Private constructor to deny instantiation
- Transliterator::create — Create a transliterator
- Transliterator::createFromRules — Create transliterator from rules
- Transliterator::createInverse — Create an inverse transliterator
- Transliterator::getErrorCode — Get last error code
- Transliterator::getErrorMessage — Get last error message
- Transliterator::listIDs — Get transliterator IDs
- Transliterator::transliterate — Transliterate a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.transliterator.php
