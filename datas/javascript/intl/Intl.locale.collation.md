# Intl.Locale.prototype.collation

Source: https://devdocs.io/javascript/global_objects/intl/locale/collation

The collation accessor property of Intl.Locale instances returns the collation type for this locale, which is used to order strings according to the locale's rules.

## Description

Collation is the process of ordering strings of characters. It is used whenever strings must be sorted and placed into a certain order, from search query results to ordering records in a database. While the idea of placing strings in order might seem trivial, the idea of order can vary from region to region and language to language. For a list of supported collation types, see Intl.supportedValuesOf().

The collation property's value is set at construction time, either through the co key of the locale identifier or through the collation option of the Intl.Locale() constructor. The latter takes priority if they are both present; and if neither is present, the property has value undefined.

The set accessor of collation is undefined. You cannot change this property directly.

## Examples

Like other locale subtags, the collation type can be added to the Intl.Locale object via the locale string, or a configuration object argument to the constructor.

### Adding a collation type via the locale string

In the Unicode locale string spec, collation is an "extension subtag". These subtags add additional data about the locale, and are added to locale identifiers using the -u extension key. To add the collation type to the initial locale identifier string passed into the Intl.Locale() constructor, first add the -u extension key if it doesn't exist. Next, add the -co extension to indicate that you are adding a collation type. Finally, add the collation type.

```
const locale = new Intl.Locale("zh-Hant-u-co-zhuyin");
console.log(locale.collation); // "zhuyin"
```

### Adding a collation type via the configuration object argument

The Intl.Locale() constructor has an optional configuration object argument, which can contain any of several extension types, including collation types. Set the collation property of the configuration object to your desired collation type, and then pass it into the constructor.

```
const locale = new Intl.Locale("zh-Hant", { collation: "zhuyin" });
console.log(locale.collation); // "zhuyin"
```

## Specifications

## Browser compatibility

## See also

- Intl.Locale
- Intl.Locale.prototype.getCollations()

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/collation
