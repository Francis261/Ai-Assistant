# The DateTime class

Source: https://devdocs.io/php/class.datetime

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

Representation of date and time.

This class behaves the same as DateTimeImmutable, except objects are modified itself when modification methods such as DateTime::modify() are called.

Calling methods on objects of the class DateTime will change the information encapsulated in these objects, if you want to prevent that you will have to use clone operator to create a new object. Use DateTimeImmutable instead of DateTime to obtain this recommended behaviour by default.

## Class synopsis

```
public add(DateInterval $interval): DateTime
```

```
public static createFromFormat(string $format, string $datetime, ?DateTimeZone $timezone = null): DateTime|false
```

```
public static createFromImmutable(DateTimeImmutable $object): static
```

```
public static createFromInterface(DateTimeInterface $object): DateTime
```

```
public modify(string $modifier): DateTime
```

```
public static __set_state(array $array): DateTime
```

```
public setDate(int $year, int $month, int $day): DateTime
```

```
public setISODate(int $year, int $week, int $dayOfWeek = 1): DateTime
```

```
public setTime(
 int $hour,
 int $minute,
 int $second = 0,
 int $microsecond = 0
): DateTime
```

```
public setTimestamp(int $timestamp): DateTime
```

```
public setTimezone(DateTimeZone $timezone): DateTime
```

```
public sub(DateInterval $interval): DateTime
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

- DateTime::add — Modifies a DateTime object, with added amount of days, months, years, hours, minutes and seconds
- DateTime::__construct — Returns new DateTime object
- DateTime::createFromFormat — Parses a time string according to a specified format
- DateTime::createFromImmutable — Returns new DateTime instance encapsulating the given DateTimeImmutable object
- DateTime::createFromInterface — Returns new DateTime object encapsulating the given DateTimeInterface object
- DateTime::getLastErrors — Alias of DateTimeImmutable::getLastErrors
- DateTime::modify — Alters the timestamp
- DateTime::__set_state — The __set_state handler
- DateTime::setDate — Sets the date
- DateTime::setISODate — Sets the ISO date
- DateTime::setTime — Sets the time
- DateTime::setTimestamp — Sets the date and time based on an Unix timestamp
- DateTime::setTimezone — Sets the time zone for the DateTime object
- DateTime::sub — Subtracts an amount of days, months, years, hours, minutes and seconds from a DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.datetime.php
