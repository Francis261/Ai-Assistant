# NumberFormatter::parseCurrency

Source: https://devdocs.io/php/numberformatter.parsecurrency

# numfmt_parse_currency

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::parseCurrency -- numfmt_parse_currency — Parse a currency number

### Description

Object-oriented style

```
public NumberFormatter::parseCurrency(string $string, string &$currency, int &$offset = null): float|false
```

Procedural style

```
numfmt_parse_currency(
 NumberFormatter $formatter,
 string $string,
 string &$currency,
 int &$offset = null
): float|false
```

Parse a string into a float and a currency using the current formatter.

### Parameters

NumberFormatter object.

Parameter to receive the currency name (3-letter ISO 4217 currency code).

Offset in the string at which to begin parsing. On return, this value will hold the offset at which parsing ended.

### Return Values

The parsed numeric value or false on error.

### Examples

Example #1 numfmt_parse_currency() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::CURRENCY );
$num = "1.234.567,89\xc2\xa0$";
echo "We have ".numfmt_parse_currency($fmt, $num, $curr)." in $curr\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );
$num = "1.234.567,89\xc2\xa0$";
echo "We have ".$fmt->parseCurrency($num, $curr)." in $curr\n";
?>
```

The above example will output:

```
We have 1234567.89 in USD
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_parse() - Parse a number
- numfmt_format_currency() - Format a currency value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.parsecurrency.php
