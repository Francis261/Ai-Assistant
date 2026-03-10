# IntlChar::getIntPropertyMaxValue

Source: https://devdocs.io/php/intlchar.getintpropertymaxvalue

(PHP 7, PHP 8)

IntlChar::getIntPropertyMaxValue — Get the max value for a Unicode property

### Description

```
public static IntlChar::getIntPropertyMaxValue(int $property): int
```

Gets the maximum value for an enumerated/integer/binary Unicode property.

### Parameters

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

### Return Values

The maximum value returned by IntlChar::getIntPropertyValue() for a Unicode property. <=0 if the property selector is out of range.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_BIDI_CLASS));
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_SCRIPT));
var_dump(IntlChar::getIntPropertyMaxValue(IntlChar::PROPERTY_IDEOGRAPHIC));
var_dump(IntlChar::getIntPropertyMaxValue(999999999)); // Some made-up value
?>
```

The above example will output:

```
int(22)
int(166)
int(1)
int(-1)
```

### See Also

- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::getIntPropertyMinValue() - Get the min value for a Unicode property
- IntlChar::getIntPropertyValue() - Get the value for a Unicode property for a code point
- IntlChar::getUnicodeVersion() - Get the Unicode version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getintpropertymaxvalue.php
