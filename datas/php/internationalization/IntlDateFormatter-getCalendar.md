# IntlDateFormatter::getCalendar

Source: https://devdocs.io/php/intldateformatter.getcalendar

# datefmt_get_calendar

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getCalendar -- datefmt_get_calendar — Get the calendar type used for the IntlDateFormatter

### Description

Object-oriented style

```
public IntlDateFormatter::getCalendar(): int|false
```

Procedural style

```
datefmt_get_calendar(IntlDateFormatter $formatter): int|false
```

### Parameters

The formatter resource

### Return Values

The calendar type being used by the formatter. Either IntlDateFormatter::TRADITIONAL or IntlDateFormatter::GREGORIAN. Returns false on failure.

### Examples

Example #1 datefmt_get_calendar() example

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

Example #3 Example of invalid locale handling

```
<?php
try {
    $fmt = new IntlDateFormatter(
        'invalid_locale',
        IntlDateFormatter::FULL,
        IntlDateFormatter::FULL,
        'dunno',
        IntlDateFormatter::GREGORIAN,
    );
    $cal = $fmt->getCalendar();
} catch (\Error $e) {
    // ...
}
?>
```

The above example will output:

```
calendar of the formatter is : 1
Now calendar of the formatter is : 0
```

### See Also

- datefmt_get_calendar_object() - Get copy of formatterʼs calendar object
- datefmt_set_calendar() - Sets the calendar type used by the formatter
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.getcalendar.php
