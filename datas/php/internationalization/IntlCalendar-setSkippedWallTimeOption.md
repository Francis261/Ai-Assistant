# IntlCalendar::setSkippedWallTimeOption

Source: https://devdocs.io/php/intlcalendar.setskippedwalltimeoption

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setSkippedWallTimeOption — Set behavior for handling skipped wall times at positive timezone offset transitions

### Description

Object-oriented style

```
public IntlCalendar::setSkippedWallTimeOption(int $option): true
```

Procedural style

```
intlcal_set_skipped_wall_time_option(IntlCalendar $calendar, int $option): true
```

Sets the current strategy for dealing with wall times that are skipped whenever the clock is forwarded during dailight saving time start transitions. The default value is IntlCalendar::WALLTIME_LAST (take it as being the same instant as the one when the wall time is one hour more). Alternative values are IntlCalendar::WALLTIME_FIRST (same instant as the one with a wall time of one hour less) and IntlCalendar::WALLTIME_NEXT_VALID (same instant as when DST begins).

This affects only the instant represented by the calendar (as reported by IntlCalendar::getTime()), the field values will not be rewritten accordingly.

The calendar must be lenient for this option to have any effect, otherwise attempting to set a non-existing time will cause an error.

This function requires ICU 4.9 or later.

### Parameters

An IntlCalendar instance.

One of the constants IntlCalendar::WALLTIME_FIRST, IntlCalendar::WALLTIME_LAST or IntlCalendar::WALLTIME_NEXT_VALID.

### Return Values

Always returns true.

### Changelog

### Examples

See the example on IntlCalendar::getSkippedWallTimeOption().

### See Also

- intlCalendar::getSkippedWallTimeOption() - Get behavior for handling skipped wall time
- intlCalendar::setRepeatedWallTimeOption() - Set behavior for handling repeating wall times at negative timezone offset transitions
- intlCalendar::getRepeatedWallTimeOption() - Get behavior for handling repeating wall time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setskippedwalltimeoption.php
