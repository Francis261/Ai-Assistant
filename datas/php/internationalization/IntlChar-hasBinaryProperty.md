# IntlChar::hasBinaryProperty

Source: https://devdocs.io/php/intlchar.hasbinaryproperty

(PHP 7, PHP 8)

IntlChar::hasBinaryProperty — Check a binary Unicode property for a code point

### Description

```
public static IntlChar::hasBinaryProperty(int|string $codepoint, int $property): ?bool
```

Checks a binary Unicode property for a code point.

Unicode, especially in version 3.2, defines many more properties than the original set in UnicodeData.txt.

The properties APIs are intended to reflect Unicode properties as defined in the Unicode Character Database (UCD) and Unicode Technical Reports (UTR). For details about the properties see » http://www.unicode.org/ucd/. For names of Unicode properties see the UCD file PropertyAliases.txt.

### Parameters

The int codepoint value (e.g. 0x2603 for U+2603 SNOWMAN), or the character encoded as a UTF-8 string (e.g. "\u{2603}")

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

### Return Values

Returns true or false according to the binary Unicode property value for codepoint. Also false if property is out of bounds or if the Unicode version does not have data for the property at all, or not for this code point. Returns null on failure.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_ALPHABETIC));
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_CASE_SENSITIVE));
var_dump(IntlChar::hasBinaryProperty("A", IntlChar::PROPERTY_BIDI_MIRRORED));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_ALPHABETIC));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_CASE_SENSITIVE));
var_dump(IntlChar::hasBinaryProperty("[", IntlChar::PROPERTY_BIDI_MIRRORED));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
bool(false)
bool(false)
bool(true)
```

### See Also

- IntlChar::getIntPropertyValue() - Get the value for a Unicode property for a code point
- IntlChar::getUnicodeVersion() - Get the Unicode version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.hasbinaryproperty.php
