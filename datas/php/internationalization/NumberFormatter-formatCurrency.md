# NumberFormatter::formatCurrency

Source: https://devdocs.io/php/numberformatter.formatcurrency

# numfmt_format_currency

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::formatCurrency -- numfmt_format_currency — Format a currency value

### Description

Object-oriented style

```
public NumberFormatter::formatCurrency(float $amount, string $currency): string|false
```

Procedural style

```
numfmt_format_currency(NumberFormatter $formatter, float $amount, string $currency): string|false
```

Format the currency value according to the formatter rules.

### Parameters

NumberFormatter object.

The numeric currency value.

The 3-letter ISO 4217 currency code indicating the currency to use.

### Return Values

String representing the formatted currency value, or false on failure.

### Examples

Example #1 numfmt_format_currency() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::CURRENCY );
echo numfmt_format_currency($fmt, 1234567.891234567890000, "EUR")."\n";
echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."\n";
$fmt = numfmt_create( 'ru_RU', NumberFormatter::CURRENCY );
echo numfmt_format_currency($fmt, 1234567.891234567890000, "EUR")."\n";
echo numfmt_format_currency($fmt, 1234567.891234567890000, "RUR")."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::CURRENCY );
echo $fmt->formatCurrency(1234567.891234567890000, "EUR")."\n";
echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."\n";
$fmt = new NumberFormatter( 'ru_RU', NumberFormatter::CURRENCY );
echo $fmt->formatCurrency(1234567.891234567890000, "EUR")."\n";
echo $fmt->formatCurrency(1234567.891234567890000, "RUR")."\n";
?>
```

The above example will output:

```
1.234.567,89 €
1.234.567,89 RUR
1 234 567,89€
1 234 567,89р.
```

### Notes

Note:

Formats achievable by this method of formatting cannot fully use the possibilities of underlying ICU library, such as to format currency with narrow currency symbol.

To fully utilize them use msgfmt_format_message().

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_format() - Format a number
- numfmt_parse_currency() - Parse a currency number
- msgfmt_format_message() - Quick format message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.formatcurrency.php
