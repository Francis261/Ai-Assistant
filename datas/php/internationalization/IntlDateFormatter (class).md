# The IntlDateFormatter class

Source: https://devdocs.io/php/class.intldateformatter

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Date Formatter is a concrete class that enables locale-dependent formatting/parsing of dates using pattern strings and/or canned patterns.

This class represents the ICU date formatting functionality. It allows users to display dates in a localized format or to parse strings into PHP date values using pattern strings and/or canned patterns.

## Class synopsis

```
public static create(
 ?string $locale,
 int $dateType = IntlDateFormatter::FULL,
 int $timeType = IntlDateFormatter::FULL,
 IntlTimeZone|DateTimeZone|string|null $timezone = null,
 IntlCalendar|int|null $calendar = null,
 ?string $pattern = null
): ?IntlDateFormatter
```

```
public format(IntlCalendar|DateTimeInterface|array|string|int|float $datetime): string|false
```

```
public static formatObject(IntlCalendar|DateTimeInterface $datetime, array|int|string|null $format = null, ?string $locale = null): string|false
```

```
public getCalendar(): int|false
```

```
public getDateType(): int|false
```

```
public getErrorCode(): int
```

```
public getErrorMessage(): string
```

```
public getLocale(int $type = ULOC_ACTUAL_LOCALE): string|false
```

```
public getPattern(): string|false
```

```
public getTimeType(): int|false
```

```
public getTimeZoneId(): string|false
```

```
public getCalendarObject(): IntlCalendar|false|null
```

```
public getTimeZone(): IntlTimeZone|false
```

```
public isLenient(): bool
```

```
public localtime(string $string, int &$offset = null): array|false
```

```
public parse(string $string, int &$offset = null): int|float|false
```

```
public setCalendar(IntlCalendar|int|null $calendar): bool
```

```
public setLenient(bool $lenient): void
```

```
public setPattern(string $pattern): bool
```

```
public setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

## See Also

- » ICU Date formatter

- » ICU Date formats

## Predefined Constants

These constants are used to specify different formats in the constructor for DateType and TimeType.

The following int constants are used to specify the calendar. These calendars are all based directly on the Gregorian calendar. Non-Gregorian calendars need to be specified in locale. Examples might include locale="hi@calendar=BUDDHIST".

## Changelog

## Table of Contents

- IntlDateFormatter::create — Create a date formatter
- IntlDateFormatter::format — Format the date/time value as a string
- IntlDateFormatter::formatObject — Formats an object
- IntlDateFormatter::getCalendar — Get the calendar type used for the IntlDateFormatter
- IntlDateFormatter::getDateType — Get the datetype used for the IntlDateFormatter
- IntlDateFormatter::getErrorCode — Get the error code from last operation
- IntlDateFormatter::getErrorMessage — Get the error text from the last operation
- IntlDateFormatter::getLocale — Get the locale used by formatter
- IntlDateFormatter::getPattern — Get the pattern used for the IntlDateFormatter
- IntlDateFormatter::getTimeType — Get the timetype used for the IntlDateFormatter
- IntlDateFormatter::getTimeZoneId — Get the timezone-id used for the IntlDateFormatter
- IntlDateFormatter::getCalendarObject — Get copy of formatterʼs calendar object
- IntlDateFormatter::getTimeZone — Get formatterʼs timezone
- IntlDateFormatter::isLenient — Get the lenient used for the IntlDateFormatter
- IntlDateFormatter::localtime — Parse string to a field-based time value
- IntlDateFormatter::parse — Parse string to a timestamp value
- IntlDateFormatter::setCalendar — Sets the calendar type used by the formatter
- IntlDateFormatter::setLenient — Set the leniency of the parser
- IntlDateFormatter::setPattern — Set the pattern used for the IntlDateFormatter
- IntlDateFormatter::setTimeZone — Sets formatterʼs timezone

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intldateformatter.php
