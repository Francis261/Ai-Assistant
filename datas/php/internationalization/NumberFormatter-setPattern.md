# NumberFormatter::setPattern

Source: https://devdocs.io/php/numberformatter.setpattern

# numfmt_set_pattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::setPattern -- numfmt_set_pattern — Set formatter pattern

### Description

Object-oriented style

```
public NumberFormatter::setPattern(string $pattern): bool
```

Procedural style

```
numfmt_set_pattern(NumberFormatter $formatter, string $pattern): bool
```

Set the pattern used by the formatter. Can not be used on a rule-based formatter.

### Parameters

NumberFormatter object.

Pattern in syntax described in » ICU DecimalFormat documentation.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 numfmt_set_pattern() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Pattern: ".numfmt_get_pattern($fmt)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_pattern($fmt, "#0.# kg");
echo "Pattern: ".numfmt_get_pattern($fmt)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Pattern: ".$fmt->getPattern()."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setPattern("#0.# kg");
echo "Pattern: ".$fmt->getPattern()."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>
```

The above example will output:

```
Pattern: #,##0.###
1.234.567,891
Pattern: #0.# kg
1234567,9 kg
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_create() - Create a number formatter
- numfmt_get_pattern() - Get formatter pattern

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.setpattern.php
