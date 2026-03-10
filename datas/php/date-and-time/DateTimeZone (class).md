# The DateTimeZone class

Source: https://devdocs.io/php/class.datetimezone

## Introduction

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

Representation of time zone.

## Class synopsis

```
public getLocation(): array|false
```

```
public getName(): string
```

```
public getOffset(DateTimeInterface $datetime): int
```

```
public getTransitions(int $timestampBegin = PHP_INT_MIN, int $timestampEnd = PHP_INT_MAX): array|false
```

```
public static listAbbreviations(): array
```

```
public static listIdentifiers(int $timezoneGroup = DateTimeZone::ALL, ?string $countryCode = null): array
```

## Predefined Constants

Africa time zones.

America time zones.

Antarctica time zones.

Arctic time zones.

Asia time zones.

Atlantic time zones.

Australia time zones.

Europe time zones.

Indian time zones.

Pacific time zones.

UTC time zones.

All time zones.

All time zones including backwards compatible.

Time zones per country.

## Changelog

## Table of Contents

- DateTimeZone::__construct — Creates new DateTimeZone object
- DateTimeZone::getLocation — Returns location information for a timezone
- DateTimeZone::getName — Returns the name of the timezone
- DateTimeZone::getOffset — Returns the timezone offset from GMT
- DateTimeZone::getTransitions — Returns all transitions for the timezone
- DateTimeZone::listAbbreviations — Returns associative array containing dst, offset and the timezone name
- DateTimeZone::listIdentifiers — Returns a numerically indexed array containing all defined timezone identifiers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.datetimezone.php
