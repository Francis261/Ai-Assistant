# IntlCalendar::createInstance

Source: https://devdocs.io/php/intlcalendar.createinstance

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL >= 3.0.0a1)

IntlCalendar::createInstance — Create a new IntlCalendar

### Description

Object-oriented style

```
public static IntlCalendar::createInstance(IntlTimeZone|DateTimeZone|string|null $timezone = null, ?string $locale = null): ?IntlCalendar
```

Procedural style

```
intlcal_create_instance(IntlTimeZone|DateTimeZone|string|null $timezone = null, ?string $locale = null): ?IntlCalendar
```

Given a timezone and locale, this method creates an IntlCalendar object. This factory method may return a subclass of IntlCalendar.

The calendar created will represent the time instance at which it was created, based on the system time. The fields can all be cleared by calling IntCalendar::clear() with no arguments. See also IntlGregorianCalendar::__construct().

### Parameters

The timezone to use.

- null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().
- An IntlTimeZone, which will be used directly.
- A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.
- A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().

An IntlTimeZone, which will be used directly.

A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.

A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

A locale to use or null to use the default locale.

### Return Values

The created IntlCalendar instance or null on failure.

### Examples

Example #1 IntlCalendar::createInstance()

```
<?php
ini_set('intl.default_locale', 'es_ES');
ini_set('date.timezone', 'Europe/Madrid');

$cal = IntlCalendar::createInstance();
echo "No arguments\n";
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
echo "\n";

echo "Explicit timezone\n";
$cal = IntlCalendar::createInstance(IntlTimeZone::getGMT());
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
echo "\n";

echo "Explicit locale (with calendar)\n";
$cal = IntlCalendar::createInstance(NULL, 'es_ES@calendar=persian');
var_dump(get_class($cal),
        IntlDateFormatter::formatObject($cal, IntlDateFormatter::FULL));
```

The above example will output:

```
No arguments
string(21) "IntlGregorianCalendar"
string(68) "martes 18 de junio de 2013 14:11:02 Hora de verano de Europa Central"

Explicit timezone
string(21) "IntlGregorianCalendar"
string(45) "martes 18 de junio de 2013 12:11:02 GMT+00:00"

Explicit locale (with calendar)
string(12) "IntlCalendar"
string(70) "martes 28 de Khordad de 1392 14:11:02 Hora de verano de Europa Central"
```

### See Also

- IntlGregorianCalendar::__construct() - Create the Gregorian Calendar class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlcalendar.createinstance.php
