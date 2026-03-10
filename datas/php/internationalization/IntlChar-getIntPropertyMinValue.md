# IntlChar::getIntPropertyMinValue

Source: https://devdocs.io/php/intlchar.getintpropertyminvalue

(PHP 7, PHP 8)

IntlChar::getIntPropertyMinValue — Get the min value for a Unicode property

### Description

```
public static IntlChar::getIntPropertyMinValue(int $property): int
```

Gets the minimum value for an enumerated/integer/binary Unicode property.

### Parameters

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

### Return Values

The minimum value returned by IntlChar::getIntPropertyValue() for a Unicode property. 0 if the property selector is out of range.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_BIDI_CLASS));
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_SCRIPT));
var_dump(IntlChar::getIntPropertyMinValue(IntlChar::PROPERTY_IDEOGRAPHIC));
var_dump(IntlChar::getIntPropertyMinValue(999999999)); // Some made-up value
?>
```

The above example will output:

```
int(0)
int(0)
int(0)
int(0)
```

### See Also

- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::getIntPropertyMaxValue() - Get the max value for a Unicode property
- IntlChar::getIntPropertyValue() - Get the value for a Unicode property for a code point
- IntlChar::getUnicodeVersion() - Get the Unicode version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getintpropertyminvalue.php
