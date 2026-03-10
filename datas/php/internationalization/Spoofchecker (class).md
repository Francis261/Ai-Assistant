# The Spoofchecker class

Source: https://devdocs.io/php/class.spoofchecker

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8, PECL intl >= 2.0.0)

This class is provided because Unicode contains large number of characters and incorporates the varied writing systems of the world and their incorrect usage can expose programs or systems to possible security attacks using characters similarity.

Provided methods allow to check whether an individual string is likely an attempt at confusing the reader (spoof detection), such as "pаypаl" spelled with Cyrillic 'а' characters.

## Class synopsis

```
public areConfusable(string $string1, string $string2, int &$errorCode = null): bool
```

```
public isSuspicious(string $string, int &$errorCode = null): bool
```

```
public setAllowedLocales(string $locales): void
```

```
public setChecks(int $checks): void
```

```
public setRestrictionLevel(int $level): void
```

## Predefined Constants

## Changelog

## Table of Contents

- Spoofchecker::areConfusable — Checks if given strings can be confused
- Spoofchecker::__construct — Constructor
- Spoofchecker::isSuspicious — Checks if a given text contains any suspicious characters
- Spoofchecker::setAllowedLocales — Locales to use when running checks
- Spoofchecker::setChecks — Set the checks to run
- Spoofchecker::setRestrictionLevel — Set the restriction level

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.spoofchecker.php
