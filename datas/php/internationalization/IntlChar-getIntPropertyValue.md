# IntlChar::getIntPropertyValue

Source: https://devdocs.io/php/intlchar.getintpropertyvalue

(PHP 7, PHP 8)

IntlChar::getIntPropertyValue — Get the value for a Unicode property for a code point

### Description

```
public static IntlChar::getIntPropertyValue(int|string $codepoint, int $property): ?int
```

Gets the property value for an enumerated or integer Unicode property for a code point. Also returns binary and mask property values.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

### Return Values

Returns the numeric value that is directly the property value or, for enumerated properties, corresponds to the numeric value of the enumerated constant of the respective property value enumeration type. Returns null on failure.

Returns 0 or 1 (for false/true) for binary Unicode properties.

Returns a bit-mask for mask properties.

Returns 0 if property is out of bounds or if the Unicode version does not have data for the property at all, or not for this code point.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getIntPropertyValue("A", IntlChar::PROPERTY_ALPHABETIC) === 1);
var_dump(IntlChar::getIntPropertyValue("[", IntlChar::PROPERTY_BIDI_MIRRORED) === 1);
var_dump(IntlChar::getIntPropertyValue("Φ", IntlChar::PROPERTY_BLOCK) === IntlChar::BLOCK_CODE_GREEK);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
```

### See Also

- IntlChar::hasBinaryProperty() - Check a binary Unicode property for a code point
- IntlChar::getIntPropertyMinValue() - Get the min value for a Unicode property
- IntlChar::getIntPropertyMaxValue() - Get the max value for a Unicode property
- IntlChar::getUnicodeVersion() - Get the Unicode version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getintpropertyvalue.php
