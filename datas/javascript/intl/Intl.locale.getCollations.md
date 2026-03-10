# Intl.Locale.prototype.getCollations()

Source: https://devdocs.io/javascript/global_objects/intl/locale/getcollations

The getCollations() method of Intl.Locale instances returns a list of one or more collation types for this locale.

Note: In some versions of some browsers, this method was implemented as an accessor property called collations. However, because it returns a new array on each access, it is now implemented as a method to prevent the situation of locale.collations === locale.collations returning false. Check the browser compatibility table for details.

## Syntax

```
getCollations()
```

### Parameters

None.

### Return value

An array of strings representing all collation types commonly used for the Locale, sorted in alphabetical order, with the standard and search values always excluded. If the Locale already has a collation, then the returned array contains that single value.

For a list of supported collation types, see Intl.supportedValuesOf().

## Examples

### Obtaining supported collation types

If the Locale object doesn't have a collation already, getCollations() lists all commonly-used collation types for the given Locale. For examples of explicitly setting a collation, see collation examples.

```
const locale = new Intl.Locale("zh");
console.log(locale.getCollations()); // ["pinyin", "stroke", "zhuyin", "emoji", "eor"]
```

## Specifications

## Browser compatibility

## See also

- Intl.Locale
- Intl.Locale.prototype.collation

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getCollations
