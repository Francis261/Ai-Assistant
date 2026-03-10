# IntlCalendar::getLocale

Source: https://devdocs.io/php/intlcalendar.getlocale

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::getLocale — Get the locale associated with the object

### Description

Object-oriented style

```
public IntlCalendar::getLocale(int $type): string|false
```

Procedural style

```
intlcal_get_locale(IntlCalendar $calendar, int $type): string|false
```

Returns the locale used by this calendar object.

### Parameters

An IntlCalendar instance.

Whether to fetch the actual locale (the locale from which the calendar data originates, with Locale::ACTUAL_LOCALE) or the valid locale, i.e., the most specific locale supported by ICU relatively to the requested locale – see Locale::VALID_LOCALE. From the most general to the most specific, the locales are ordered in this fashion – actual locale, valid locale, requested locale.

### Return Values

A locale string or false on failure.

### Examples

Example #1 IntlCalendar::getLocale()

```
<?php
$cal = IntlCalendar::createInstance(IntlTimeZone::getGMT(), 'en_US_CALIFORNIA');
var_dump(
    $cal->getLocale(Locale::ACTUAL_LOCALE),
    $cal->getLocale(Locale::VALID_LOCALE)
);
```

The above example will output:

```
string(2) "en"
string(5) "en_US"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.getlocale.php
