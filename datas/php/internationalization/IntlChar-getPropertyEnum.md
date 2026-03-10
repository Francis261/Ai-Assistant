# IntlChar::getPropertyEnum

Source: https://devdocs.io/php/intlchar.getpropertyenum

(PHP 7, PHP 8)

IntlChar::getPropertyEnum — Get the property constant value for a given property name

### Description

```
public static IntlChar::getPropertyEnum(string $alias): int
```

Returns the property constant value for a given property name, as specified in the Unicode database file PropertyAliases.txt. Short, long, and any other variants are recognized.

In addition, this function maps the synthetic names "gcm" / "General_Category_Mask" to the property IntlChar::PROPERTY_GENERAL_CATEGORY_MASK. These names are not in PropertyAliases.txt.

This function complements IntlChar::getPropertyName().

### Parameters

The property name to be matched. The name is compared using "loose matching" as described in PropertyAliases.txt.

### Return Values

Returns an IntlChar::PROPERTY_ constant value, or IntlChar::PROPERTY_INVALID_CODE if the given name does not match any property.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getPropertyEnum('Bidi_Class') === IntlChar::PROPERTY_BIDI_CLASS);
var_dump(IntlChar::getPropertyEnum('script') === IntlChar::PROPERTY_SCRIPT);
var_dump(IntlChar::getPropertyEnum('IDEOGRAPHIC') === IntlChar::PROPERTY_IDEOGRAPHIC);
var_dump(IntlChar::getPropertyEnum('Some made-up string') === IntlChar::PROPERTY_INVALID_CODE);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(true)
```

### See Also

- IntlChar::getPropertyName() - Get the Unicode name for a property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getpropertyenum.php
