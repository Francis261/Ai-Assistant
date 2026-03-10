# The DateTimeImmutable class

Source: https://devdocs.io/php/class.datetimeimmutable

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Representation of date and time.

This class behaves the same as DateTime except new objects are returned when modification methods such as DateTime::modify() are called.

## Class synopsis

```
#[\NoDiscard]
 public add(DateInterval $interval): DateTimeImmutable
```

```
public static createFromFormat(string $format, string $datetime, ?DateTimeZone $timezone = null): DateTimeImmutable|false
```

```
public static createFromInterface(DateTimeInterface $object): DateTimeImmutable
```

```
public static createFromMutable(DateTime $object): static
```

```
public static getLastErrors(): array|false
```

```
#[\NoDiscard]
 public modify(string $modifier): DateTimeImmutable
```

```
public static __set_state(array $array): DateTimeImmutable
```

```
#[\NoDiscard]
 public setDate(int $year, int $month, int $day): DateTimeImmutable
```

```
#[\NoDiscard]
 public setISODate(int $year, int $week, int $dayOfWeek = 1): DateTimeImmutable
```

```
#[\NoDiscard]
 public setTime(
 int $hour,
 int $minute,
 int $second = 0,
 int $microsecond = 0
): DateTimeImmutable
```

```
#[\NoDiscard]
 public setTimestamp(int $timestamp): DateTimeImmutable
```

```
#[\NoDiscard]
 public setTimezone(DateTimeZone $timezone): DateTimeImmutable
```

```
#[\NoDiscard]
 public sub(DateInterval $interval): DateTimeImmutable
```

```
public diff(DateTimeInterface $targetObject, bool $absolute = false): DateInterval
```

```
public format(string $format): string
```

```
public getOffset(): int
```

```
public getTimestamp(): int
```

```
public getTimezone(): DateTimeZone|false
```

```
public __serialize(): array
```

```
public __unserialize(array $data): void
```

```
#[\Deprecated] 
 public __wakeup(): void
```

## Changelog

## Table of Contents

- DateTimeImmutable::add — Returns a new object, with added amount of days, months, years, hours, minutes and seconds
- DateTimeImmutable::__construct — Returns new DateTimeImmutable object
- DateTimeImmutable::createFromFormat — Parses a time string according to a specified format
- DateTimeImmutable::createFromInterface — Returns new DateTimeImmutable object encapsulating the given DateTimeInterface object
- DateTimeImmutable::createFromMutable — Returns new DateTimeImmutable instance encapsulating the given DateTime object
- DateTimeImmutable::getLastErrors — Returns the warnings and errors
- DateTimeImmutable::modify — Creates a new object with modified timestamp
- DateTimeImmutable::__set_state — The __set_state handler
- DateTimeImmutable::setDate — Sets the date
- DateTimeImmutable::setISODate — Sets the ISO date
- DateTimeImmutable::setTime — Sets the time
- DateTimeImmutable::setTimestamp — Sets the date and time based on a Unix timestamp
- DateTimeImmutable::setTimezone — Sets the time zone
- DateTimeImmutable::sub — Subtracts an amount of days, months, years, hours, minutes and seconds

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.datetimeimmutable.php
