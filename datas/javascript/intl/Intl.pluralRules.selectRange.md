# Intl.PluralRules.prototype.selectRange()

Source: https://devdocs.io/javascript/global_objects/intl/pluralrules/selectrange

The selectRange() method of Intl.PluralRules instances receives two values and returns a string indicating which plural rule to use for locale-aware formatting of the indicated range.

## Syntax

```
selectRange(startRange, endRange)
```

### Parameters

A number representing the start of the range.

A number representing the end of the range.

### Return value

A string representing the pluralization category of the specified range. This can be one of zero, one, two, few, many or other, that are relevant for the locale whose localization is specified in LDML Language Plural Rules.

## Description

This function selects a pluralization category according to the locale and formatting options of an Intl.PluralRules object.

Conceptually the behavior is the same as getting plural rules for a single cardinal or ordinal number. Languages have one or more forms for describing ranges, and this method returns the appropriate form given the supplied locale and formatting options. In English there is only one plural form, such as "1–10 apples", and the method will return other. Other languages can have many forms.

## Examples

### Using selectRange()

```
new Intl.PluralRules("sl").selectRange(102, 201); // 'few'

new Intl.PluralRules("pt").selectRange(102, 102); // 'other'
```

## Specifications

## Browser compatibility

## See also

- Intl.PluralRules

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/PluralRules/selectRange
