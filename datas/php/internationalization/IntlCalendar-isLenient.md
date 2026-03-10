# IntlCalendar::isLenient

Source: https://devdocs.io/php/intlcalendar.islenient

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::isLenient — Whether date/time interpretation is in lenient mode

### Description

Object-oriented style

```
public IntlCalendar::isLenient(): bool
```

Procedural style

```
intlcal_is_lenient(IntlCalendar $calendar): bool
```

Returns whether the current date/time interpretations is lenient (the default). If that is case, some out of range values for fields will be accepted instead of raising an error.

### Parameters

An IntlCalendar instance.

### Return Values

A bool representing whether the calendar is set to lenient mode.

### Examples

Example #1 IntlCalendar::isLenient()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'pt_PT');
ini_set('intl.use_exceptions', '1');

$cal = new IntlGregorianCalendar(2013, 6 /* July */, 1);
var_dump(IntlDateFormatter::formatObject($cal), // 01/07/2013, 00:00:00
$cal->isLenient()); // true

$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);
var_dump(IntlDateFormatter::formatObject($cal)); // 02/08/2013, 00:00:00

$cal->setLenient(false);
var_dump($cal->isLenient()); // false
$cal->set(IntlCalendar::FIELD_DAY_OF_MONTH, 33);
var_dump(IntlDateFormatter::formatObject($cal)); // error
```

The above example will output:

```
string(20) "01/07/2013, 00:00:00"
bool(true)
string(20) "02/08/2013, 00:00:00"
bool(false)

Fatal error: Uncaught exception 'IntlException' with message 'datefmt_format_object: error obtaining instant from IntlCalendar' in /home/foobar/example.php:16
Stack trace:
#0 /home/foobar/example.php(16): IntlDateFormatter::formatObject(Object(IntlGregorianCalendar))
#1 {main}
  thrown in /home/foobar/example.php on line 16
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.islenient.php
