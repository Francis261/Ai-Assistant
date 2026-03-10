# IntlCalendar::getType

Source: https://devdocs.io/php/intlcalendar.gettype

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getType — Get the calendar type

### Description

Object-oriented style

```
public IntlCalendar::getType(): string
```

Procedural style

```
intlcal_get_type(IntlCalendar $calendar): string
```

A string describing the type of this calendar. This is one of the valid values for the calendar keyword value 'calendar'.

### Parameters

An IntlCalendar instance.

### Return Values

A string representing the calendar type, such as 'gregorian', 'islamic', etc.

### Examples

Example #1 IntlCalendar::getType()

```
<?php
ini_set('date.timezone', 'Europe/Lisbon');
ini_set('intl.default_locale', 'en_US');

$cal = IntlCalendar::createInstance(NULL, '@calendar=ethiopic-amete-alem');
var_dump($cal->getType());

$cal = new IntlGregorianCalendar();
var_dump($cal->getType());
```

The above example will output:

```
string(19) "ethiopic-amete-alem"
string(9) "gregorian"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.gettype.php
