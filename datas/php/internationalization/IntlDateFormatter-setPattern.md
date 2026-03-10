# IntlDateFormatter::setPattern

Source: https://devdocs.io/php/intldateformatter.setpattern

# datefmt_set_pattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

IntlDateFormatter::setPattern -- datefmt_set_pattern — Set the pattern used for the IntlDateFormatter

### Description

Object-oriented style

```
public IntlDateFormatter::setPattern(string $pattern): bool
```

Procedural style

```
datefmt_set_pattern(IntlDateFormatter $formatter, string $pattern): bool
```

Set the pattern used for the IntlDateFormatter.

### Parameters

The formatter resource.

New pattern string to use. Possible patterns are documented at » https://unicode-org.github.io/icu/userguide/format_parse/datetime/.

### Return Values

Returns true on success or false on failure. Bad formatstrings are usually the cause of the failure.

### Examples

Example #1 datefmt_set_pattern() example

```
<?php
$fmt = datefmt_create(
    'en_US',
    IntlDateFormatter::FULL,IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'Pattern of the formatter is : ', datefmt_get_pattern($fmt), PHP_EOL;
echo 'First Formatted output with pattern is ', datefmt_format($fmt, 0), PHP_EOL;
datefmt_set_pattern($fmt, 'yyyyMMdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ', datefmt_get_pattern($fmt), PHP_EOL;
echo 'Second Formatted output with pattern is ', datefmt_format($fmt, 0), PHP_EOL;
?>
```

Example #2 OO example

```
<?php
$fmt = new IntlDateFormatter(
    'en_US',
    IntlDateFormatter::FULL,IntlDateFormatter::FULL,
    'America/Los_Angeles',
    IntlDateFormatter::GREGORIAN,
    'MM/dd/yyyy'
);
echo 'Pattern of the formatter is : ', $fmt->getPattern(), PHP_EOL;
echo 'First Formatted output is ', $fmt->format(0), PHP_EOL;
$fmt->setPattern('yyyyMMdd hh:mm:ss z');
echo 'Now pattern of the formatter is : ', $fmt->getPattern(), PHP_EOL;
echo 'Second Formatted output is ', $fmt->format(0), PHP_EOL;
?>
```

The above example will output:

```
Pattern of the formatter is : MM/dd/yyyy
First Formatted output is 12/31/1969
Now pattern of the formatter is : yyyyMMdd hh:mm:ss z
Second Formatted output is 19691231 04:00:00 PST
```

### See Also

- datefmt_get_pattern() - Get the pattern used for the IntlDateFormatter
- datefmt_create() - Create a date formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intldateformatter.setpattern.php
