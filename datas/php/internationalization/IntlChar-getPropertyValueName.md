# IntlChar::getPropertyValueName

Source: https://devdocs.io/php/intlchar.getpropertyvaluename

(PHP 7, PHP 8)

IntlChar::getPropertyValueName — Get the Unicode name for a property value

### Description

```
public static IntlChar::getPropertyValueName(int $property, int $value, int $type = IntlChar::LONG_PROPERTY_NAME): string|false
```

Returns the Unicode name for a given property value, as given in the Unicode database file PropertyValueAliases.txt.

Note:

Some of the names in PropertyValueAliases.txt can only be retrieved using IntlChar::PROPERTY_GENERAL_CATEGORY_MASK, not IntlChar::PROPERTY_GENERAL_CATEGORY. These include:

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

If out of range, or this method doesn't work with the given value, false is returned.

Selector for a value for the given property. If out of range, false is returned.

In general, valid values range from 0 up to some maximum. There are a couple exceptions:

- IntlChar::PROPERTY_BLOCK values begin at the non-zero value IntlChar::BLOCK_CODE_BASIC_LATIN
- IntlChar::PROPERTY_CANONICAL_COMBINING_CLASS values are not contiguous and range from 0..240.

Selector for which name to get. If out of range, false is returned.

All values have a long name. Most have a short name, but some do not. Unicode allows for additional names; if present these will be returned by adding 1, 2, etc. to IntlChar::LONG_PROPERTY_NAME.

### Return Values

Returns the name, or false if either the property or the type is out of range. Returns null on failure.

If a given type returns false, then all larger values of type will return false, with one exception: if false is returned for IntlChar::SHORT_PROPERTY_NAME, then IntlChar::LONG_PROPERTY_NAME (and higher) may still return a non-false value.

### Examples

Example #1 Testing different properties

```
<?php
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::SHORT_PROPERTY_NAME));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::LONG_PROPERTY_NAME));
var_dump(IntlChar::getPropertyValueName(IntlChar::PROPERTY_BLOCK, IntlChar::BLOCK_CODE_GREEK, IntlChar::LONG_PROPERTY_NAME + 1));
?>
```

The above example will output:

```
string(16) "Greek_And_Coptic"
string(5) "Greek"
string(16) "Greek_And_Coptic"
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/intlchar.getpropertyvaluename.php
