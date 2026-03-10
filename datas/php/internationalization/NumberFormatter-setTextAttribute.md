# NumberFormatter::setTextAttribute

Source: https://devdocs.io/php/numberformatter.settextattribute

# numfmt_set_text_attribute

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

NumberFormatter::setTextAttribute -- numfmt_set_text_attribute — Set a text attribute

### Description

Object-oriented style

```
public NumberFormatter::setTextAttribute(int $attribute, string $value): bool
```

Procedural style

```
numfmt_set_text_attribute(NumberFormatter $formatter, int $attribute, string $value): bool
```

Set a text attribute associated with the formatter. An example of a text attribute is the suffix for positive numbers. If the formatter does not understand the attribute, U_UNSUPPORTED_ERROR error is produced. Rule-based formatters only understand NumberFormatter::DEFAULT_RULESET and NumberFormatter::PUBLIC_RULESETS.

### Parameters

NumberFormatter object.

Attribute specifier - one of the text attribute constants.

Text for the attribute value.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 numfmt_set_text_attribute() example

```
<?php
$fmt = numfmt_create( 'de_DE', NumberFormatter::DECIMAL );
echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX)."\n";
echo numfmt_format($fmt, -1234567.891234567890000)."\n";
numfmt_set_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX, "MINUS");
echo "Prefix: ".numfmt_get_text_attribute($fmt, NumberFormatter::NEGATIVE_PREFIX)."\n";
echo numfmt_format($fmt, -1234567.891234567890000)."\n";
?>
```

Example #2 OO example

```
<?php
$fmt = new NumberFormatter( 'de_DE', NumberFormatter::DECIMAL );
echo "Prefix: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."\n";
echo $fmt->format(-1234567.891234567890000)."\n";
$fmt->setTextAttribute(NumberFormatter::NEGATIVE_PREFIX, "MINUS");
echo "Prefix: ".$fmt->getTextAttribute(NumberFormatter::NEGATIVE_PREFIX)."\n";
echo $fmt->format(-1234567.891234567890000)."\n";
?>
```

The above example will output:

```
Prefix: -
-1.234.567,891
Prefix: MINUS
MINUS1.234.567,891
```

### See Also

- numfmt_get_error_code() - Get formatter's last error code
- numfmt_get_text_attribute() - Get a text attribute
- numfmt_set_attribute() - Set an attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/numberformatter.settextattribute.php
