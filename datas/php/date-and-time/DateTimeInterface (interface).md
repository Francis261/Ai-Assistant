# The DateTimeInterface interface

Source: https://devdocs.io/php/class.datetimeinterface

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

DateTimeInterface was created so that parameter, return, or property type declarations may accept either DateTimeImmutable or DateTime as a value. It is not possible to implement this interface with userland classes.

Common constants that allow for formatting DateTimeImmutable or DateTime objects through DateTimeImmutable::format() and DateTime::format() are also defined on this interface.

## Interface synopsis

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

## Predefined Constants

Note: This format is not compatible with ISO-8601, but is left this way for backward compatibility reasons. Use DateTimeInterface::ISO8601_EXPANDED, DateTimeInterface::ATOM for compatibility with ISO-8601 instead. (ref ISO8601:2004 section 4.3.3 clause d)

Note: This format allows for year ranges outside of ISO-8601's normal range of 0000-9999 by always including a sign character. It also ensures that the timezone part (+01:00) is compatible with ISO-8601.

## Changelog

## Table of Contents

- DateTimeInterface::diff — Returns the difference between two DateTime objects
- DateTimeInterface::format — Returns date formatted according to given format
- DateTimeInterface::getOffset — Returns the timezone offset
- DateTimeInterface::getTimestamp — Gets the Unix timestamp
- DateTimeInterface::getTimezone — Return time zone relative to given DateTime
- DateTime::__serialize — Serialize a DateTime
- DateTime::__unserialize — Unserialize an Datetime
- DateTime::__wakeup — The __wakeup handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.datetimeinterface.php
