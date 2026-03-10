# NumberFormatter::getPattern

Source: https://devdocs.io/php/numberformatter.getpattern

# numfmt_get_pattern

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::getPattern -- numfmt_get_pattern — Get formatter pattern

### Description

Object-oriented style

```
public NumberFormatter::getPattern(): string|false
```

Procedural style

```
numfmt_get_pattern(NumberFormatter $formatter): string|false
```

Extract pattern used by the formatter.

### Parameters

NumberFormatter object.

### Return Values

Pattern string that is used by the formatter, or false if an error happens.

### Examples

Example #1 numfmt_get_pattern() example

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
- numfmt_set_pattern() - Set formatter pattern
- numfmt_create() - Create a number formatter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.getpattern.php
