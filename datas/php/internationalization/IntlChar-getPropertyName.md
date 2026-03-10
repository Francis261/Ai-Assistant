# IntlChar::getPropertyName

Source: https://devdocs.io/php/intlchar.getpropertyname

(PHP 7, PHP 8)

IntlChar::getPropertyName — Get the Unicode name for a property

### Description

```
public static IntlChar::getPropertyName(int $property, int $type = IntlChar::LONG_PROPERTY_NAME): string|false
```

Returns the Unicode name for a given property, as given in the Unicode database file PropertyAliases.txt.

In addition, this function maps the property IntlChar::PROPERTY_GENERAL_CATEGORY_MASK to the synthetic names "gcm" / "General_Category_Mask". These names are not in PropertyAliases.txt.

This function complements IntlChar::getPropertyEnum().

### Parameters

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

IntlChar::PROPERTY_INVALID_CODE should not be used. Also, if property is out of range, false is returned.

Selector for which name to get. If out of range, false is returned.

All properties have a long name. Most have a short name, but some do not. Unicode allows for additional names; if present these will be returned by adding 1, 2, etc. to IntlChar::LONG_PROPERTY_NAME.

### Return Values

Returns the name, or false if either the property or the type is out of range.

If a given type returns false, then all larger values of type will return false, with one exception: if false is returned for IntlChar::SHORT_PROPERTY_NAME, then IntlChar::LONG_PROPERTY_NAME (and higher) may still return a non-false value.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getPropertyName(IntlChar::PROPERTY_BIDI_CLASS));
var_dump(IntlChar::getPropertyName(IntlChar::PROPERTY_BIDI_CLASS, IntlChar::SHORT_PROPERTY_NAME));
var_dump(IntlChar::getPropertyName(IntlChar::PROPERTY_BIDI_CLASS, IntlChar::LONG_PROPERTY_NAME));
var_dump(IntlChar::getPropertyName(IntlChar::PROPERTY_BIDI_CLASS, IntlChar::LONG_PROPERTY_NAME + 1));
?>
```

The above example will output:

```
string(10) "Bidi_Class"
string(2) "bc"
string(10) "Bidi_Class"
bool(false)
```

### See Also

- IntlChar::getPropertyEnum() - Get the property constant value for a given property name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getpropertyname.php
