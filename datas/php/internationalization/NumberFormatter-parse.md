# NumberFormatter::parse

Source: https://devdocs.io/php/numberformatter.parse

# numfmt_parse

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::parse -- numfmt_parse — Parse a number

### Description

Object-oriented style

```
public NumberFormatter::parse(string $string, int $type = NumberFormatter::TYPE_DOUBLE, int &$offset = null): int|float|false
```

Procedural style

```
numfmt_parse(
 NumberFormatter $formatter,
 string $string,
 int $type = NumberFormatter::TYPE_DOUBLE,
 int &$offset = null
): int|float|false
```

Parse a string into a number using the current formatter rules.

### Parameters

NumberFormatter object.

The string to parse for the number.

The formatting type to use. By default, NumberFormatter::TYPE_DOUBLE is used. Note that NumberFormatter::TYPE_CURRENCY is not supported; use NumberFormatter::parseCurrency() instead.

Offset in the string at which to begin parsing. On return, this value will hold the offset at which parsing ended.

### Return Values

The value of the parsed number or false on error.

### Examples

Example #1 numfmt_parse() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$num = "1.234.567,891";
echo numfmt_parse($fmt, $num)."\n";
echo numfmt_parse($fmt, $num, NumberFormatter::TYPE_INT32)."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$num = "1.234.567,891";
echo $fmt->parse($num)."\n";
echo $fmt->parse($num, NumberFormatter::TYPE_INT32)."\n";
?>
```

The above example will output:

```
1234567.891
1234567
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_format() - Format a number
- numfmt_parse_currency() - Parse a currency number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.parse.php
