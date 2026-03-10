# IntlDateFormatter::getCalendarObject

Source: https://devdocs.io/php/intldateformatter.getcalendarobject

# datefmt_get_calendar_object

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL intl >= 3.0.0)

IntlDateFormatter::getCalendarObject -- datefmt_get_calendar_object — Get copy of formatterʼs calendar object

### Description

Object-oriented style

```
public IntlDateFormatter::getCalendarObject(): IntlCalendar|false|null
```

Procedural style

```
datefmt_get_calendar_object(IntlDateFormatter $formatter): IntlCalendar|false|null
```

Obtain a copy of the calendar object used internally by this formatter. This calendar will have a type (as in gregorian, japanese, buddhist, roc, persian, islamic, etc.) and a timezone that match the type and timezone used by the formatter. The date/time of the object is unspecified.

### Parameters

This function has no parameters.

### Return Values

A copy of the internal calendar object used by this formatter, or null if none has been set, or false on failure.

### Examples

Example #1 IntlDateFormatter::getCalendarObject() example

```
<?php
$formatter = IntlDateFormatter::create(
    "fr_FR@calendar=islamic", 
    NULL,
    NULL,
    "GMT-01:00",
    IntlDateFormatter::TRADITIONAL
);

$cal = $formatter->getCalendarObject();

var_dump(
    $cal->getType(),
    $cal->getTimeZone(),
    $cal->getLocale(Locale::VALID_LOCALE)
);
```

The above example will output:

```
string(7) "islamic"
object(IntlTimeZone)#3 (4) {
  ["valid"]=>
  bool(true)
  ["id"]=>
  string(9) "GMT-01:00"
  ["rawOffset"]=>
  int(-3600000)
  ["currentOffset"]=>
  int(-3600000)
}
string(5) "fr_FR"
```

### See Also

- IntlDateFormatter::getCalendar() - Get the calendar type used for the IntlDateFormatter
- IntlDateFormatter::setCalendar() - Sets the calendar type used by the formatter
- IntlCalendar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.getcalendarobject.php
