# IntlDateFormatter::getTimeZone

Source: https://devdocs.io/php/intldateformatter.gettimezone

# datefmt_get_timezone

(PHP 5 >= 5.5.0, PHP 7, PHP 8, PECL intl >= 3.0.0)

IntlDateFormatter::getTimeZone -- datefmt_get_timezone — Get formatterʼs timezone

### Description

Object-oriented style

```
public IntlDateFormatter::getTimeZone(): IntlTimeZone|false
```

Procedural style

```
datefmt_get_timezone(IntlDateFormatter $formatter): IntlTimeZone|false
```

Returns an IntlTimeZone object representing the timezone that will be used by this object to format dates and times. When formatting IntlCalendar and DateTime objects with this IntlDateFormatter, the timezone used will be the one returned by this method, not the one associated with the objects being formatted.

### Parameters

This function has no parameters.

### Return Values

The associated IntlTimeZone object or false on failure.

### Examples

Example #1 IntlDateFormatter::getTimeZone() examples

```
<?php

$madrid = IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Madrid');
$lisbon = IntlDateFormatter::create(NULL, NULL, NULL, 'Europe/Lisbon');

var_dump($madrid->getTimezone());
echo $madrid->getTimezone()->getDisplayName(
        false, IntlTimeZone::DISPLAY_GENERIC_LOCATION, "en_US"), "\n";
echo $lisbon->getTimeZone()->getId(), "\n";
//The id can also be retrieved with ->getTimezoneId()
echo $lisbon->getTimeZoneId(), "\n";
```

The above example will output:

```
object(IntlTimeZone)#4 (4) {
  ["valid"]=>
  bool(true)
  ["id"]=>
  string(13) "Europe/Madrid"
  ["rawOffset"]=>
  int(3600000)
  ["currentOffset"]=>
  int(7200000)
}
Spain Time
Europe/Lisbon
Europe/Lisbon
```

### See Also

- IntlDateFormatter::getTimeZoneId() - Get the timezone-id used for the IntlDateFormatter
- IntlDateFormatter::setTimeZone() - Sets formatterʼs timezone
- IntlTimeZone

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.gettimezone.php
