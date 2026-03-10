# The IntlCalendar class

Source: https://devdocs.io/php/class.intlcalendar

## Introduction

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

## Class synopsis

```
public add(int $field, int $value): bool
```

```
public after(IntlCalendar $other): bool
```

```
public before(IntlCalendar $other): bool
```

```
public clear(?int $field = null): true
```

```
public static createInstance(IntlTimeZone|DateTimeZone|string|null $timezone = null, ?string $locale = null): ?IntlCalendar
```

```
public equals(IntlCalendar $other): bool
```

```
public fieldDifference(float $timestamp, int $field): int|false
```

```
public static fromDateTime(DateTime|string $datetime, ?string $locale = null): ?IntlCalendar
```

```
public get(int $field): int|false
```

```
public getActualMaximum(int $field): int|false
```

```
public getActualMinimum(int $field): int|false
```

```
public static getAvailableLocales(): array
```

```
public getDayOfWeekType(int $dayOfWeek): int|false
```

```
public getErrorCode(): int|false
```

```
public getErrorMessage(): string|false
```

```
public getFirstDayOfWeek(): int|false
```

```
public getGreatestMinimum(int $field): int|false
```

```
public static getKeywordValuesForLocale(string $keyword, string $locale, bool $onlyCommon): IntlIterator|false
```

```
public getLeastMaximum(int $field): int|false
```

```
public getLocale(int $type): string|false
```

```
public getMaximum(int $field): int|false
```

```
public getMinimalDaysInFirstWeek(): int|false
```

```
public getMinimum(int $field): int|false
```

```
public static getNow(): float
```

```
public getRepeatedWallTimeOption(): int
```

```
public getSkippedWallTimeOption(): int
```

```
public getTime(): float|false
```

```
public getTimeZone(): IntlTimeZone|false
```

```
public getType(): string
```

```
public getWeekendTransition(int $dayOfWeek): int|false
```

```
public inDaylightTime(): bool
```

```
public isEquivalentTo(IntlCalendar $other): bool
```

```
public isLenient(): bool
```

```
public isSet(int $field): bool
```

```
public isWeekend(?float $timestamp = null): bool
```

```
public roll(int $field, int|bool $value): bool
```

```
public set(int $field, int $value): true
```

```
public set(
 int $year,
 int $month,
 int $dayOfMonth = NULL,
 int $hour = NULL,
 int $minute = NULL,
 int $second = NULL
): true
```

```
public setDate(int $year, int $month, int $dayOfMonth): void
```

```
public setDateTime(
 int $year,
 int $month,
 int $dayOfMonth,
 int $hour,
 int $minute,
 ?int $second = null
): void
```

```
public setFirstDayOfWeek(int $dayOfWeek): true
```

```
public setLenient(bool $lenient): true
```

```
public setMinimalDaysInFirstWeek(int $days): true
```

```
public setRepeatedWallTimeOption(int $option): true
```

```
public setSkippedWallTimeOption(int $option): true
```

```
public setTime(float $timestamp): bool
```

```
public setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

```
public toDateTime(): DateTime|false
```

## Predefined Constants

Calendar field numerically representing an era, for instance 1 for AD and 0 for BC in the Gregorian/Julian calendars and 235 for the Heisei (平成) era in the Japanese calendar. Not all calendars have more than one era.

Calendar field for the year. This is not unique across eras. If the calendar type has more than one era, generally the minimum value for this field will be 1.

Calendar field for the month. The month sequence is zero-based, so January (here used to signify the first month of the calendar; this may be called another name, such as Muharram in the Islamic calendar) is represented by 0, February by 1, …, December by 11 and, for calendars that have it, the 13th or leap month by 12.

Calendar field for the number of the week of the year. This depends on which day of the week is deemed to start the week and the minimal number of days in a week.

Calendar field for the number of the week of the month. This depends on which day of the week is deemed to start the week and the minimal number of days in a week.

Calendar field for the day of the month. The same as IntlCalendar::FIELD_DAY_OF_MONTH, which has a clearer name.

Calendar field for the day of the year. For the Gregorian calendar, starts with 1 and ends with 365 or 366.

Calendar field for the day of the week. Its values start with 1 (Sunday, see IntlCalendar::DOW_SUNDAY and subsequent constants) and the last valid value is 7 (Saturday).

Given a day of the week (Sunday, Monday, …), this calendar field assigns an ordinal to such a day of the week in a specific month. Thus, if the value of this field is 1 and the value of the day of the week is 2 (Monday), then the set day of the month is the 1st Monday of the month; the maximum value is 5.

Additionally, the value 0 and negative values are also allowed. The value 0 encompasses the seven days that occur immediately before the first seven days of a month (which therefore have a ‘day of week in month’ with value 1). Negative values starts counting from the end of the month – -1 points to the last occurrence of a day of the week in a month, -2 to the second last, and so on.

Unlike IntlCalendar::FIELD_WEEK_OF_MONTH and IntlCalendar::FIELD_WEEK_OF_YEAR, this value does not depend on IntlCalendar::getFirstDayOfWeek() or on IntlCalendar::getMinimalDaysInFirstWeek(). The first Monday is the first Monday, even if it occurs in a week that belongs to the previous month.

Calendar field indicating whether a time is before noon (value 0, AM) or after (1). Midnight is AM, noon is PM.

Calendar field for the hour, without specifying whether itʼs in the morning or in the afternoon. Valid values are 0 to 11.

Calendar field for the full (24h) hour of the day. Valid values are 0 to 23.

Calendar field for the minutes component of the time.

Calendar field for the seconds component of the time.

Calendar field the milliseconds component of the time.

Calendar field indicating the raw offset of the timezone, in milliseconds. The raw offset is the timezone offset, excluding any offset due to daylight saving time.

Calendar field for the daylight saving time offset of the calendarʼs timezone, in milliseconds, if active for calendarʼs time.

Calendar field representing the year for week of year purposes.

Calendar field for the localized day of the week. This is a value between 1 and 7, 1 being used for the day of the week that matches the value returned by IntlCalendar::getFirstDayOfWeek().

Calendar field for a year number representation that is continuous across eras. For the Gregorian calendar, the value of this field matches that of IntlCalendar::FIELD_YEAR for AD years; a BC year y is represented by -y +
 1.

Calendar field for a modified Julian day number. It is different from a conventional Julian day number in that its transitions occur at local zone midnight rather than at noon UTC. It uniquely identifies a date.

Calendar field encompassing the information in IntlCalendar::FIELD_HOUR_OF_DAY, IntlCalendar::FIELD_MINUTE, IntlCalendar::FIELD_SECOND and IntlCalendar::FIELD_MILLISECOND. Range is from the 0 to 24 * 3600 * 1000 - 1. It is not the amount of milliseconds elapsed in the day since on DST transitions it will have discontinuities analog to those of the wall time.

Calendar field whose value is 1 for indicating a leap month and 0 otherwise.

The total number of fields.

Alias for IntlCalendar::FIELD_DATE.

Sunday.

Monday.

Tuesday.

Wednesday.

Thursday.

Friday.

Saturday.

Output of IntlCalendar::getDayOfWeekType() indicating a day of week is a weekday.

Output of IntlCalendar::getDayOfWeekType() indicating a day of week belongs to the weekend.

Output of IntlCalendar::getDayOfWeekType() indicating the weekend begins during the given day of week.

Output of IntlCalendar::getDayOfWeekType() indicating the weekend ends during the given day of week.

Output of IntlCalendar::getSkippedWallTimeOption() indicating that wall times in the skipped range should refer to the same instant as wall times with one hour less and of IntlCalendar::getRepeatedWallTimeOption() indicating the wall times in the repeated range should refer to the instant of the first occurrence of such wall time.

Output of IntlCalendar::getSkippedWallTimeOption() indicating that wall times in the skipped range should refer to the same instant as wall times with one hour after and of IntlCalendar::getRepeatedWallTimeOption() indicating the wall times in the repeated range should refer to the instant of the second occurrence of such wall time.

Output of IntlCalendar::getSkippedWallTimeOption() indicating that wall times in the skipped range should refer to the instant when the daylight saving time transition occurs (begins).

## Changelog

## Table of Contents

- IntlCalendar::add — Add a (signed) amount of time to a field
- IntlCalendar::after — Whether this objectʼs time is after that of the passed object
- IntlCalendar::before — Whether this objectʼs time is before that of the passed object
- IntlCalendar::clear — Clear a field or all fields
- IntlCalendar::__construct — Private constructor for disallowing instantiation
- IntlCalendar::createInstance — Create a new IntlCalendar
- IntlCalendar::equals — Compare time of two IntlCalendar objects for equality
- IntlCalendar::fieldDifference — Calculate difference between given time and this objectʼs time
- IntlCalendar::fromDateTime — Create an IntlCalendar from a DateTime object or string
- IntlCalendar::get — Get the value for a field
- IntlCalendar::getActualMaximum — The maximum value for a field, considering the objectʼs current time
- IntlCalendar::getActualMinimum — The minimum value for a field, considering the objectʼs current time
- IntlCalendar::getAvailableLocales — Get array of locales for which there is data
- IntlCalendar::getDayOfWeekType — Tell whether a day is a weekday, weekend or a day that has a transition between the two
- IntlCalendar::getErrorCode — Get last error code on the object
- IntlCalendar::getErrorMessage — Get last error message on the object
- IntlCalendar::getFirstDayOfWeek — Get the first day of the week for the calendarʼs locale
- IntlCalendar::getGreatestMinimum — Get the largest local minimum value for a field
- IntlCalendar::getKeywordValuesForLocale — Get set of locale keyword values
- IntlCalendar::getLeastMaximum — Get the smallest local maximum for a field
- IntlCalendar::getLocale — Get the locale associated with the object
- IntlCalendar::getMaximum — Get the global maximum value for a field
- IntlCalendar::getMinimalDaysInFirstWeek — Get minimal number of days the first week in a year or month can have
- IntlCalendar::getMinimum — Get the global minimum value for a field
- IntlCalendar::getNow — Get number representing the current time
- IntlCalendar::getRepeatedWallTimeOption — Get behavior for handling repeating wall time
- IntlCalendar::getSkippedWallTimeOption — Get behavior for handling skipped wall time
- IntlCalendar::getTime — Get time currently represented by the object
- IntlCalendar::getTimeZone — Get the objectʼs timezone
- IntlCalendar::getType — Get the calendar type
- IntlCalendar::getWeekendTransition — Get time of the day at which weekend begins or ends
- IntlCalendar::inDaylightTime — Whether the objectʼs time is in Daylight Savings Time
- IntlCalendar::isEquivalentTo — Whether another calendar is equal but for a different time
- IntlCalendar::isLenient — Whether date/time interpretation is in lenient mode
- IntlCalendar::isSet — Whether a field is set
- IntlCalendar::isWeekend — Whether a certain date/time is in the weekend
- IntlCalendar::roll — Add value to field without carrying into more significant fields
- IntlCalendar::set — Set a time field or several common fields at once
- IntlCalendar::setDate — Set a date fields
- IntlCalendar::setDateTime — Set a date and time fields
- IntlCalendar::setFirstDayOfWeek — Set the day on which the week is deemed to start
- IntlCalendar::setLenient — Set whether date/time interpretation is to be lenient
- IntlCalendar::setMinimalDaysInFirstWeek — Set minimal number of days the first week in a year or month can have
- IntlCalendar::setRepeatedWallTimeOption — Set behavior for handling repeating wall times at negative timezone offset transitions
- IntlCalendar::setSkippedWallTimeOption — Set behavior for handling skipped wall times at positive timezone offset transitions
- IntlCalendar::setTime — Set the calendar time in milliseconds since the epoch
- IntlCalendar::setTimeZone — Set the timezone used by this calendar
- IntlCalendar::toDateTime — Convert an IntlCalendar into a DateTime object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.intlcalendar.php
