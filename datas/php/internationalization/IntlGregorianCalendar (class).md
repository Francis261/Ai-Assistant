# The IntlGregorianCalendar class

Source: https://devdocs.io/php/class.intlgregoriancalendar

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

## Class synopsis

```
public static createFromDate(int $year, int $month, int $dayOfMonth): static
```

```
public static createFromDateTime(
 int $year,
 int $month,
 int $dayOfMonth,
 int $hour,
 int $minute,
 ?int $second = null
): static
```

```
public getGregorianChange(): float
```

```
public isLeapYear(int $year): bool
```

```
public setGregorianChange(float $timestamp): bool
```

```
public IntlCalendar::add(int $field, int $value): bool
```

```
public IntlCalendar::after(IntlCalendar $other): bool
```

```
public IntlCalendar::before(IntlCalendar $other): bool
```

```
public IntlCalendar::clear(?int $field = null): true
```

```
public static IntlCalendar::createInstance(IntlTimeZone|DateTimeZone|string|null $timezone = null, ?string $locale = null): ?IntlCalendar
```

```
public IntlCalendar::equals(IntlCalendar $other): bool
```

```
public IntlCalendar::fieldDifference(float $timestamp, int $field): int|false
```

```
public static IntlCalendar::fromDateTime(DateTime|string $datetime, ?string $locale = null): ?IntlCalendar
```

```
public IntlCalendar::get(int $field): int|false
```

```
public IntlCalendar::getActualMaximum(int $field): int|false
```

```
public IntlCalendar::getActualMinimum(int $field): int|false
```

```
public static IntlCalendar::getAvailableLocales(): array
```

```
public IntlCalendar::getDayOfWeekType(int $dayOfWeek): int|false
```

```
public IntlCalendar::getErrorCode(): int|false
```

```
public IntlCalendar::getErrorMessage(): string|false
```

```
public IntlCalendar::getFirstDayOfWeek(): int|false
```

```
public IntlCalendar::getGreatestMinimum(int $field): int|false
```

```
public static IntlCalendar::getKeywordValuesForLocale(string $keyword, string $locale, bool $onlyCommon): IntlIterator|false
```

```
public IntlCalendar::getLeastMaximum(int $field): int|false
```

```
public IntlCalendar::getLocale(int $type): string|false
```

```
public IntlCalendar::getMaximum(int $field): int|false
```

```
public IntlCalendar::getMinimalDaysInFirstWeek(): int|false
```

```
public IntlCalendar::getMinimum(int $field): int|false
```

```
public static IntlCalendar::getNow(): float
```

```
public IntlCalendar::getRepeatedWallTimeOption(): int
```

```
public IntlCalendar::getSkippedWallTimeOption(): int
```

```
public IntlCalendar::getTime(): float|false
```

```
public IntlCalendar::getTimeZone(): IntlTimeZone|false
```

```
public IntlCalendar::getType(): string
```

```
public IntlCalendar::getWeekendTransition(int $dayOfWeek): int|false
```

```
public IntlCalendar::inDaylightTime(): bool
```

```
public IntlCalendar::isEquivalentTo(IntlCalendar $other): bool
```

```
public IntlCalendar::isLenient(): bool
```

```
public IntlCalendar::isSet(int $field): bool
```

```
public IntlCalendar::isWeekend(?float $timestamp = null): bool
```

```
public IntlCalendar::roll(int $field, int|bool $value): bool
```

```
public IntlCalendar::set(int $field, int $value): true
```

```
public IntlCalendar::set(
 int $year,
 int $month,
 int $dayOfMonth = NULL,
 int $hour = NULL,
 int $minute = NULL,
 int $second = NULL
): true
```

```
public IntlCalendar::setDate(int $year, int $month, int $dayOfMonth): void
```

```
public IntlCalendar::setDateTime(
 int $year,
 int $month,
 int $dayOfMonth,
 int $hour,
 int $minute,
 ?int $second = null
): void
```

```
public IntlCalendar::setFirstDayOfWeek(int $dayOfWeek): true
```

```
public IntlCalendar::setLenient(bool $lenient): true
```

```
public IntlCalendar::setMinimalDaysInFirstWeek(int $days): true
```

```
public IntlCalendar::setRepeatedWallTimeOption(int $option): true
```

```
public IntlCalendar::setSkippedWallTimeOption(int $option): true
```

```
public IntlCalendar::setTime(float $timestamp): bool
```

```
public IntlCalendar::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

```
public IntlCalendar::toDateTime(): DateTime|false
```

## Table of Contents

- IntlGregorianCalendar::__construct — Create the Gregorian Calendar class
- IntlGregorianCalendar::createFromDate — Create a new IntlGregorianCalendar instance from date
- IntlGregorianCalendar::createFromDateTime — Create a new IntlGregorianCalendar instance from date and time
- IntlGregorianCalendar::getGregorianChange — Get the Gregorian Calendar change date
- IntlGregorianCalendar::isLeapYear — Determine if the given year is a leap year
- IntlGregorianCalendar::setGregorianChange — Set the Gregorian Calendar the change date

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlgregoriancalendar.php
