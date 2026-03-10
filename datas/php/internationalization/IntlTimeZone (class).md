# The IntlTimeZone class

Source: https://devdocs.io/php/class.intltimezone

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

## Class synopsis

```
public static countEquivalentIDs(string $timezoneId): int|false
```

```
public static createDefault(): IntlTimeZone
```

```
public static createEnumeration(IntlTimeZone|string|int|float|null $countryOrRawOffset = null): IntlIterator|false
```

```
public static createTimeZone(string $timezoneId): ?IntlTimeZone
```

```
public static createTimeZoneIDEnumeration(int $type, ?string $region = null, ?int $rawOffset = null): IntlIterator|false
```

```
public static fromDateTimeZone(DateTimeZone $timezone): ?IntlTimeZone
```

```
public static getCanonicalID(string $timezoneId, bool &$isSystemId = null): string|false
```

```
public getDisplayName(bool $dst = false, int $style = IntlTimeZone::DISPLAY_LONG, ?string $locale = null): string|false
```

```
public getDSTSavings(): int
```

```
public static getEquivalentID(string $timezoneId, int $offset): string|false
```

```
public getErrorCode(): int|false
```

```
public getErrorMessage(): string|false
```

```
public static getGMT(): IntlTimeZone
```

```
public getID(): string|false
```

```
public static getIDForWindowsID(string $timezoneId, ?string $region = null): string|false
```

```
public getOffset(
 float $timestamp,
 bool $local,
 int &$rawOffset,
 int &$dstOffset
): bool
```

```
public getRawOffset(): int
```

```
public static getRegion(string $timezoneId): string|false
```

```
public static getTZDataVersion(): string|false
```

```
public static getUnknown(): IntlTimeZone
```

```
public static getWindowsID(string $timezoneId): string|false
```

```
public hasSameRules(IntlTimeZone $other): bool
```

```
public toDateTimeZone(): DateTimeZone|false
```

```
public useDaylightTime(): bool
```

## Predefined Constants

## Changelog

## Table of Contents

- IntlTimeZone::__construct — Private constructor to disallow direct instantiation
- IntlTimeZone::countEquivalentIDs — Get the number of IDs in the equivalency group that includes the given ID
- IntlTimeZone::createDefault — Create a new copy of the default timezone for this host
- IntlTimeZone::createEnumeration — Get an enumeration over time zone IDs associated with the given country or offset
- IntlTimeZone::createTimeZone — Create a timezone object for the given ID
- IntlTimeZone::createTimeZoneIDEnumeration — Get an enumeration over system time zone IDs with the given filter conditions
- IntlTimeZone::fromDateTimeZone — Create a timezone object from DateTimeZone
- IntlTimeZone::getCanonicalID — Get the canonical system timezone ID or the normalized custom time zone ID for the given time zone ID
- IntlTimeZone::getDisplayName — Get a name of this time zone suitable for presentation to the user
- IntlTimeZone::getDSTSavings — Get the amount of time to be added to local standard time to get local wall clock time
- IntlTimeZone::getEquivalentID — Get an ID in the equivalency group that includes the given ID
- IntlTimeZone::getErrorCode — Get last error code on the object
- IntlTimeZone::getErrorMessage — Get last error message on the object
- IntlTimeZone::getGMT — Create GMT (UTC) timezone
- IntlTimeZone::getID — Get timezone ID
- IntlTimeZone::getIDForWindowsID — Translate a Windows timezone into a system timezone
- IntlTimeZone::getOffset — Get the time zone raw and GMT offset for the given moment in time
- IntlTimeZone::getRawOffset — Get the raw GMT offset (before taking daylight savings time into account
- IntlTimeZone::getRegion — Get the region code associated with the given system time zone ID
- IntlTimeZone::getTZDataVersion — Get the timezone data version currently used by ICU
- IntlTimeZone::getUnknown — Get the "unknown" time zone
- IntlTimeZone::getWindowsID — Translate a system timezone into a Windows timezone
- IntlTimeZone::hasSameRules — Check if this zone has the same rules and offset as another zone
- IntlTimeZone::toDateTimeZone — Convert to DateTimeZone object
- IntlTimeZone::useDaylightTime — Check if this time zone uses daylight savings time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intltimezone.php
