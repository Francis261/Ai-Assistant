# NumberFormatter::getSymbol

Source: https://devdocs.io/php/numberformatter.getsymbol

# numfmt_get_symbol

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::getSymbol -- numfmt_get_symbol — Get a symbol value

### Description

Object-oriented style

```
public NumberFormatter::getSymbol(int $symbol): string|false
```

Procedural style

```
numfmt_get_symbol(NumberFormatter $formatter, int $symbol): string|false
```

Get a symbol associated with the formatter. The formatter uses symbols to represent the special locale-dependent characters in a number, for example the percent sign. This API is not supported for rule-based formatters.

### Parameters

NumberFormatter object.

Symbol specifier, one of the format symbol constants.

### Return Values

The symbol string or false on error.

### Examples

Example #1 numfmt_get_symbol() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");
echo "Sep: ".numfmt_get_symbol($fmt, NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Sep: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL, "*");
echo "Sep: ".$fmt->getSymbol(NumberFormatter::GROUPING_SEPARATOR_SYMBOL)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>
```

The above example will output:

```
Sep: .
1.234.567,891
Sep: *
1*234*567,891
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_set_symbol() - Set a symbol value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.getsymbol.php
