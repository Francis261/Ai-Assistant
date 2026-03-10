# IntlCalendar::getSkippedWallTimeOption

Source: https://devdocs.io/php/intlcalendar.getskippedwalltimeoption

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getSkippedWallTimeOption — Get behavior for handling skipped wall time

### Description

Object-oriented style

```
public IntlCalendar::getSkippedWallTimeOption(): int
```

Procedural style

```
intlcal_get_skipped_wall_time_option(IntlCalendar $calendar): int
```

Gets the current strategy for dealing with wall times that are skipped whenever the clock is forwarded during dailight saving time start transitions. The default value is IntlCalendar::WALLTIME_LAST.

The calendar must be lenient for this option to have any effect, otherwise attempting to set a non-existing time will cause an error.

This function requires ICU 4.9 or later.

### Parameters

An IntlCalendar instance.

### Return Values

One of the constants IntlCalendar::WALLTIME_FIRST, IntlCalendar::WALLTIME_LAST or IntlCalendar::WALLTIME_NEXT_VALID.

### Examples

Example #1 IntlCalendar::getSkippedWallTimeOption()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');
ini_set('intl.error_level', E_WARNING);

//On March 31st at 0100, the clock goes forward 1 hour and from GMT+00 to GMT+01
$cal = new IntlGregorianCalendar(2013, 2 /* March */, 31, 1, 30);

var_dump(
    $cal->isLenient(),               // true
    $cal->getSkippedWalltimeOption() // 0 WALLTIME_LAST
);

$formatter = IntlDateFormatter::create(
    NULL,
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'UTC'
);
var_dump($formatter->format($cal->getTime() / 1000));

$cal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_FIRST);
var_dump($cal->getSkippedWalltimeOption()); // 1 WALLTIME_FIRST
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);

var_dump($formatter->format($cal->getTime() / 1000));

$cal->setSkippedWallTimeOption(IntlCalendar::WALLTIME_NEXT_VALID);
var_dump($cal->getSkippedWalltimeOption()); // 2 WALLTIME_NEXT_VALID
$cal->set(IntlCalendar::FIELD_HOUR_OF_DAY, 1);

var_dump($formatter->format($cal->getTime() / 1000));
```

The above example will output:

```
bool(true)
int(0)
string(40) "Sunday, March 31, 2013 at 1:30:00 AM GMT"
int(1)
string(41) "Sunday, March 31, 2013 at 12:30:00 AM GMT"
int(2)
string(40) "Sunday, March 31, 2013 at 1:00:00 AM GMT"
```

### See Also

- IntlCalendar::getRepeatedWallTimeOption() - Get behavior for handling repeating wall time
- IntlCalendar::setSkippedWallTimeOption() - Set behavior for handling skipped wall times at positive timezone offset transitions
- IntlCalendar::setRepeatedWallTimeOption() - Set behavior for handling repeating wall times at negative timezone offset transitions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getskippedwalltimeoption.php
