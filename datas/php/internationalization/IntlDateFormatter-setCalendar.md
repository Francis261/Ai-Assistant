# IntlDateFormatter::setCalendar

Source: https://devdocs.io/php/intldateformatter.setcalendar

# datefmt_set_calendar

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::setCalendar -- datefmt_set_calendar — Sets the calendar type used by the formatter

### Description

Object-oriented style

```
public IntlDateFormatter::setCalendar(IntlCalendar|int|null $calendar): bool
```

Procedural style

```
datefmt_set_calendar(IntlDateFormatter $formatter, IntlCalendar|int|null $calendar): bool
```

Sets the calendar or calendar type used by the formatter.

### Parameters

The formatter resource.

This can either be: the calendar type to use (default is IntlDateFormatter::GREGORIAN, which is also used if null is specified) or an IntlCalendar object.

Any IntlCalendar object passed in will be cloned; no modifications will be made to the argument object.

The timezone of the formatter will only be kept if an IntlCalendar object is not passed, otherwise the new timezone will be that of the passed object.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 datefmt_set_calendar() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'calendar of the formatter is : ' . datefmt_get_calendar($fmt);
datefmt_set_calendar($fmt, IntlDateFormatter::TRADITIONAL);
echo 'Now calendar of the formatter is : ' . datefmt_get_calendar($fmt);
?>
```

Example #2 OO example

```
<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN  
);
echo 'calendar of the formatter is : ' . $fmt->getCalendar();
$fmt->setCalendar(IntlDateFormatter::TRADITIONAL);
echo 'Now calendar of the formatter is : ' . $fmt->getCalendar();
?>
```

The above example will output:

```
calendar of the formatter is : 1
Now calendar of the formatter is : 0
```

Example #3 Example with IntlCalendar argument

```
<?php
$time = strtotime("2013-03-03 00:00:00 UTC");
$formatter = IntlDateFormatter::create("en_US", NULL, NULL, "Europe/Amsterdam");

echo "before: ", $formatter->format($time), "\n";

/* note that the calendar's locale is not used! */
$formatter->setCalendar(IntlCalendar::createInstance(
               "America/New_York", "pt_PT@calendar=islamic"));

echo "after:  ", $formatter->format($time), "\n";
```

The above example will output:

```
before: Sunday, March 3, 2013 at 1:00:00 AM Central European Standard Time
after:  Saturday, Rabiʻ II 20, 1434 at 7:00:00 PM Eastern Standard Time
```

### See Also

- datefmt_get_calendar() - Get the calendar type used for the IntlDateFormatter
- datefmt_get_calendar_object() - Get copy of formatterʼs calendar object
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.setcalendar.php
