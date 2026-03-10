# IntlDateFormatter::getLocale

Source: https://devdocs.io/php/intldateformatter.getlocale

# datefmt_get_locale

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getLocale -- datefmt_get_locale — Get the locale used by formatter

### Description

Object-oriented style

```
public IntlDateFormatter::getLocale(int $type = ULOC_ACTUAL_LOCALE): string|false
```

Procedural style

```
datefmt_get_locale(IntlDateFormatter $formatter, int $type = ULOC_ACTUAL_LOCALE): string|false
```

Get locale used by the formatter.

### Parameters

The formatter resource

You can choose between valid and actual locale ( Locale::VALID_LOCALE, Locale::ACTUAL_LOCALE, respectively). The default is the actual locale.

### Return Values

The locale of this formatter, or false on failure.

### Examples

Example #1 datefmt_get_locale() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . datefmt_get_locale($fmt);
echo 'First Formatted output is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . datefmt_get_locale($fmt);
echo 'Second Formatted output is ' . datefmt_format($fmt, 0);

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
echo 'locale of the formatter is : ' . $fmt->getLocale();
echo 'First Formatted output is ' . $fmt->format(0);

$fmt = new IntlDateFormatter(
    'de-DE',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'locale of the formatter is : ' . $fmt->getLocale();
echo 'Second Formatted output is ' . $fmt->format(0);

?>
```

The above example will output:

```
locale of the formatter is : en
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
locale of the formatter is : de
Second Formatted output is Mittwoch, 31. Dezember 1969 16:00 Uhr GMT-08:00
```

### See Also

- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.getlocale.php
