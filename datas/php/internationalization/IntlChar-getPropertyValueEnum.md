# IntlChar::getPropertyValueEnum

Source: https://devdocs.io/php/intlchar.getpropertyvalueenum

(PHP 7, PHP 8)

IntlChar::getPropertyValueEnum — Get the property value for a given value name

### Description

```
public static IntlChar::getPropertyValueEnum(int $property, string $name): int
```

Returns the property value integer for a given value name, as specified in the Unicode database file PropertyValueAliases.txt. Short, long, and any other variants are recognized.

Note:

Some of the names in PropertyValueAliases.txt will only be recognized with IntlChar::PROPERTY_GENERAL_CATEGORY_MASK, not IntlChar::PROPERTY_GENERAL_CATEGORY. These include:

- "C" / "Other"
- "L" / "Letter"
- "LC" / "Cased_Letter"
- "M" / "Mark"
- "N" / "Number"
- "P" / "Punctuation"
- "S" / "Symbol"
- "Z" / "Separator"

### Parameters

The Unicode property to lookup (see the IntlChar::PROPERTY_* constants).

If out of range, or this method doesn't work with the given value, IntlChar::PROPERTY_INVALID_CODE is returned.

The value name to be matched. The name is compared using "loose matching" as described in PropertyValueAliases.txt.

### Return Values

Returns the corresponding value integer, or IntlChar::PROPERTY_INVALID_CODE if the given name does not match any value of the given property, or if the property is invalid.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BLOCK, 'greek') === IntlChar::BLOCK_CODE_GREEK);
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BIDI_CLASS, 'RIGHT_TO_LEFT') === IntlChar::CHAR_DIRECTION_RIGHT_TO_LEFT);
var_dump(IntlChar::getPropertyValueEnum(IntlChar::PROPERTY_BIDI_CLASS, 'some made-up string') === IntlChar::PROPERTY_INVALID_CODE);
var_dump(IntlChar::getPropertyValueEnum(123456789, 'RIGHT_TO_LEFT') === IntlChar::PROPERTY_INVALID_CODE);
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(true)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getpropertyvalueenum.php
