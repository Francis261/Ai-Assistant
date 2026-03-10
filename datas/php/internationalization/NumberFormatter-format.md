# NumberFormatter::format

Source: https://devdocs.io/php/numberformatter.format

# numfmt_format

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::format -- numfmt_format — Format a number

### Description

Object-oriented style

```
public NumberFormatter::format(int|float $num, int $type = NumberFormatter::TYPE_DEFAULT): string|false
```

Procedural style

```
numfmt_format(NumberFormatter $formatter, int|float $num, int $type = NumberFormatter::TYPE_DEFAULT): string|false
```

Format a numeric value according to the formatter rules.

### Parameters

NumberFormatter object.

The value to format. Can be int or float, other values will be converted to a numeric value.

The formatting type to use. Note that NumberFormatter::TYPE_CURRENCY is not supported; use NumberFormatter::formatCurrency() instead.

### Return Values

Returns the string containing formatted value, or false on error.

### Examples

Example #1 numfmt_format() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
$data = numfmt_format($fmt, 1234567.891234567890000);
var_dump($data);
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
$data = $fmt->format(1234567.891234567890000);
var_dump($data);
?>
```

The above example will output:

```
string(13) "1.234.567,891"
```

### Notes

Note:

Formats achievable by this method of formatting cannot fully use the possibilities of underlying ICU library, such as to format currency with narrow currency symbol.

To fully utilize them use msgfmt_format_message().

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_format_currency() - Format a currency value
- numfmt_parse() - Parse a number
- msgfmt_format_message() - Quick format message

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.format.php
