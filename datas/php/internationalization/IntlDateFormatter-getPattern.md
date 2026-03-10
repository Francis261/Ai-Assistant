# IntlDateFormatter::getPattern

Source: https://devdocs.io/php/intldateformatter.getpattern

# datefmt_get_pattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::getPattern -- datefmt_get_pattern — Get the pattern used for the IntlDateFormatter

### Description

Object-oriented style

```
public IntlDateFormatter::getPattern(): string|false
```

Procedural style

```
datefmt_get_pattern(IntlDateFormatter $formatter): string|false
```

Get pattern used by the formatter.

### Parameters

The formatter resource.

### Return Values

The pattern string being used to format/parse, or false on failure.

### Examples

Example #1 datefmt_get_pattern() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,
    IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'pattern of the formatter is : ' . datefmt_get_pattern($fmt);
echo 'First Formatted output with pattern is ' . datefmt_format($fmt, 0);
datefmt_set_pattern($fmt,'yyyymmdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ' . datefmt_get_pattern($fmt);
echo 'Second Formatted output with pattern is ' . datefmt_format($fmt, 0);

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
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'pattern of the formatter is : ' . $fmt->getPattern();
echo 'First Formatted output is ' . $fmt->format(0);
$fmt->setPattern('yyyymmdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ' . $fmt->getPattern();
echo 'Second Formatted output is ' . $fmt->format(0);
?>
```

The above example will output:

```
pattern of the formatter is : MM/dd/yyyy
First Formatted output is 12/31/1969
Now pattern of the formatter is : yyyymmdd hh:mm:ss z
Second Formatted output is 19690031 04:00:00 PST
```

### See Also

- datefmt_set_pattern() - Set the pattern used for the IntlDateFormatter
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.getpattern.php
