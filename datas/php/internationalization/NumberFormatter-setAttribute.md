# NumberFormatter::setAttribute

Source: https://devdocs.io/php/numberformatter.setattribute

# numfmt_set_attribute

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::setAttribute -- numfmt_set_attribute — Set an attribute

### Description

Object-oriented style

```
public NumberFormatter::setAttribute(int $attribute, int|float $value): bool
```

Procedural style

```
numfmt_set_attribute(NumberFormatter $formatter, int $attribute, int|float $value): bool
```

Set a numeric attribute associated with the formatter. An example of a numeric attribute is the number of integer digits the formatter will produce.

### Parameters

NumberFormatter object.

Attribute specifier - one of the numeric attribute constants.

The attribute value.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 numfmt_set_attribute() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Digits: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
numfmt_set_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS, 2);
echo "Digits: ".numfmt_get_attribute($fmt, NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo numfmt_format($fmt, 1234567.891234567890000)."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Digits: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
$fmt->setAttribute(NumberFormatter::MAX_FRACTION_DIGITS, 2);
echo "Digits: ".$fmt->getAttribute(NumberFormatter::MAX_FRACTION_DIGITS)."\n";
echo $fmt->format(1234567.891234567890000)."\n";
?>
```

The above example will output:

```
Digits: 3
1.234.567,891
Digits: 2
1.234.567,89
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_get_attribute() - Get an attribute
- numfmt_set_text_attribute() - Set a text attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.setattribute.php
