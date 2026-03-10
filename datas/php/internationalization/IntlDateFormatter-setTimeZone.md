# IntlDateFormatter::setTimeZone

Source: https://devdocs.io/php/intldateformatter.settimezone

# datefmt_set_timezone

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL intl >= 3.0.0)

IntlDateFormatter::setTimeZone -- datefmt_set_timezone — Sets formatterʼs timezone

### Description

Object-oriented style

```
public IntlDateFormatter::setTimeZone(IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

Procedural style

```
datefmt_set_timezone(IntlDateFormatter $formatter, IntlTimeZone|DateTimeZone|string|null $timezone): bool
```

Sets the timezone used for the IntlDateFormatter. object.

### Parameters

The formatter resource.

The timezone to use for this formatter. This can be specified in the following forms:

- null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().
- An IntlTimeZone, which will be used directly.
- A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.
- A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

null, in which case the default timezone will be used, as specified in the ini setting date.timezone or through the function date_default_timezone_set() and as returned by date_default_timezone_get().

An IntlTimeZone, which will be used directly.

A DateTimeZone. Its identifier will be extracted and an ICU timezone object will be created; the timezone will be backed by ICUʼs database, not PHPʼs.

A string, which should be a valid ICU timezone identifier. See IntlTimeZone::createTimeZoneIDEnumeration(). Raw offsets such as "GMT+08:30" are also accepted.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 IntlDateFormatter::setTimeZone() examples

```
<?php
ini_set('date.timezone', 'Europe/Amsterdam');

$formatter = IntlDateFormatter::create(NULL, NULL, NULL, "UTC");

$formatter->setTimeZone(NULL);
echo "NULL\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone(IntlTimeZone::createTimeZone('Europe/Lisbon'));
echo "IntlTimeZone\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone(new DateTimeZone('Europe/Paris'));
echo "DateTimeZone\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone('Europe/Rome');
echo "String\n    ", $formatter->getTimeZone()->getId(), "\n";

$formatter->setTimeZone('GMT+00:30');
print_r($formatter->getTimeZone());
```

The above example will output:

```
NULL
    Europe/Amsterdam
IntlTimeZone
    Europe/Lisbon
DateTimeZone
    Europe/Paris
String
    Europe/Rome
IntlTimeZone Object
(
    [valid] => 1
    [id] => GMT+00:30
    [rawOffset] => 1800000
    [currentOffset] => 1800000
)
```

### See Also

- IntlDateFormatter::getTimeZone() - Get formatterʼs timezone

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.settimezone.php
