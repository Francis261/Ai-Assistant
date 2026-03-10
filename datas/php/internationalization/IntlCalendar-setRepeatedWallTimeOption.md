# IntlCalendar::setRepeatedWallTimeOption

Source: https://devdocs.io/php/intlcalendar.setrepeatedwalltimeoption

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::setRepeatedWallTimeOption — Set behavior for handling repeating wall times at negative timezone offset transitions

### Description

Object-oriented style

```
public IntlCalendar::setRepeatedWallTimeOption(int $option): true
```

Procedural style

```
intlcal_set_repeated_wall_time_option(IntlCalendar $calendar, int $option): true
```

Sets the current strategy for dealing with wall times that are repeated whenever the clock is set back during dailight saving time end transitions. The default value is IntlCalendar::WALLTIME_LAST (take the post-DST instant). The other possible value is IntlCalendar::WALLTIME_FIRST (take the instant that occurs during DST).

This function requires ICU 4.9 or later.

### Parameters

An IntlCalendar instance.

One of the constants IntlCalendar::WALLTIME_FIRST or IntlCalendar::WALLTIME_LAST.

### Return Values

Always returns true.

### Changelog

### Examples

See the example on IntlCalendar::getRepeatedWallTimeOption().

### See Also

- intlCalendar::getRepeatedWallTimeOption() - Get behavior for handling repeating wall time
- intlCalendar::setSkippedWallTimeOption() - Set behavior for handling skipped wall times at positive timezone offset transitions
- intlCalendar::getSkippedWallTimeOption() - Get behavior for handling skipped wall time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.setrepeatedwalltimeoption.php
