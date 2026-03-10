# IntlDateFormatter::getTimeZoneId

Source: https://devdocs.io/php/intldateformatter.gettimezoneid

# datefmt_get_timezone_id

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getTimeZoneId -- datefmt_get_timezone_id — Get the timezone-id used for the IntlDateFormatter

### Description

Object-oriented style

```
public IntlDateFormatter::getTimeZoneId(): string|false
```

Procedural style

```
datefmt_get_timezone_id(IntlDateFormatter $formatter): string|false
```

Get the timezone-id used for the IntlDateFormatter.

### Parameters

The formatter resource.

### Return Values

ID string for the time zone used by this formatter, or false on failure.

### Examples

Example #1 datefmt_get_timezone_id() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'timezone_id of the formatter is: ' . datefmt_get_timezone_id($fmt) . "\n";
datefmt_set_timezone($fmt, 'Europe/Madrid');
echo 'Now timezone_id of the formatter is: ' . datefmt_get_timezone_id($fmt);

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
echo 'timezone_id of the formatter is: ' . $fmt->getTimezoneId() . "\n";
$fmt->setTimezone('Europe/Madrid');
echo 'Now timezone_id of the formatter is: ' . $fmt->getTimezoneId();

?>
```

The above example will output:

```
timezone_id of the formatter is: America/Los_Angeles
Now timezone_id of the formatter is: Europe/Madrid
```

### See Also

- datefmt_set_timezone() - Sets formatterʼs timezone
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.gettimezoneid.php
