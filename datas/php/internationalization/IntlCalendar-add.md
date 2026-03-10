# IntlCalendar::add

Source: https://devdocs.io/php/intlcalendar.add

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::add — Add a (signed) amount of time to a field

### Description

Object-oriented style

```
public IntlCalendar::add(int $field, int $value): bool
```

Procedural style

```
intlcal_add(IntlCalendar $calendar, int $field, int $value): bool
```

Add a signed amount to a field. Adding a positive amount allows advances in time, even if the numeric value of the field decreases (e.g. when working with years in BC dates).

Other fields may need to adjusted – for instance, adding a month to the 31st of January will result in the 28th (or 29th) of February. Contrary to IntlCalendar::roll(), when a value wraps around, more significant fields may change. For instance, adding a day to the 31st of January will result in the 1st of February, not the 1st of January.

### Parameters

An IntlCalendar instance.

One of the IntlCalendar date/time field constants. These are integer values between 0 and IntlCalendar::FIELD_COUNT.

The signed amount to add to the current field. If the amount is positive, the instant will be moved forward; if it is negative, the instant will be moved into the past. The unit is implicit to the field type. For instance, hours for IntlCalendar::FIELD_HOUR_OF_DAY.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 IntlCalendar::add()

```
<?php
ini_set('intl.default_locale', 'fr_FR');
ini_set('date.timezone', 'UTC');

$cal = new IntlGregorianCalendar(2012, 0 /* January */, 31);
echo IntlDateFormatter::formatObject($cal), "\n";

$cal->add(IntlCalendar::FIELD_MONTH, 1);
echo IntlDateFormatter::formatObject($cal), "\n";

$cal->add(IntlCalendar::FIELD_DAY_OF_MONTH, 1);
echo IntlDateFormatter::formatObject($cal), "\n";
```

The above example will output:

```
31 janv. 2012 00:00:00
29 févr. 2012 00:00:00
1 mars 2012 00:00:00
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.add.php
