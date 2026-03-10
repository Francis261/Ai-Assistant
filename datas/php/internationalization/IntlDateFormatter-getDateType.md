# IntlDateFormatter::getDateType

Source: https://devdocs.io/php/intldateformatter.getdatetype

# datefmt_get_datetype

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getDateType -- datefmt_get_datetype — Get the datetype used for the IntlDateFormatter

### Description

Object-oriented style

```
public IntlDateFormatter::getDateType(): int|false
```

Procedural style

```
datefmt_get_datetype(IntlDateFormatter $formatter): int|false
```

Returns date type used by the formatter.

### Parameters

The formatter resource.

### Return Values

The current date type value of the formatter, or false on failure.

### Examples

Example #1 datefmt_get_datetype() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'datetype of the formatter is : ' . datefmt_get_datetype($fmt);
echo 'First Formatted output with datetype is ' . datefmt_format($fmt, 0);

$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::SHORT,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now datetype of the formatter is : ' . datefmt_get_datetype($fmt);
echo 'Second Formatted output with datetype is ' . datefmt_format($fmt, 0);

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
echo 'datetype of the formatter is : ' . $fmt->getDateType();
echo 'First Formatted output is ' . $fmt->format(0);
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::SHORT,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN
);
echo 'Now datetype of the formatter is : ' . $fmt->getDateType();
echo 'Second Formatted output is ' . $fmt->format(0);

?>
```

The above example will output:

```
datetype of the formatter is : 0
First Formatted output is Wednesday, December 31, 1969 4:00:00 PM PT
Now datetype of the formatter is : 2
Second Formatted output is 12/31/69 4:00:00 PM PT
```

### See Also

- datefmt_get_timetype() - Get the timetype used for the IntlDateFormatter
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.getdatetype.php
