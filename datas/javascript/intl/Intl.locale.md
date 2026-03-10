# Intl.Locale

Source: https://devdocs.io/javascript/global_objects/intl/locale

The Intl.Locale object is a standard built-in property of the Intl object that represents a Unicode locale identifier.

## Try it

```
const korean = new Intl.Locale("ko", {
  script: "Kore",
  region: "KR",
  hourCycle: "h23",
  calendar: "gregory",
});

const japanese = new Intl.Locale("ja-Jpan-JP-u-ca-japanese-hc-h12");

console.log(korean.baseName, japanese.baseName);
// Expected output: "ko-Kore-KR" "ja-Jpan-JP"

console.log(korean.hourCycle, japanese.hourCycle);
// Expected output: "h23" "h12"
```

## Description

The Intl.Locale object was created to allow for easier manipulation of Unicode locales. Unicode represents locales with a string, called a locale identifier. The locale identifier consists of a language identifier and extension tags. Language identifiers are the core of the locale, consisting of language, script, region, and variants subtags. Additional information about the locale is stored in the optional extension tags. Extension tags hold information about locale aspects such as calendar type, clock type, and numbering system type.

Traditionally, the Intl API used strings to represent locales, just as Unicode does. This is a simple and lightweight solution that works well. Adding a Locale class, however, adds ease of parsing and manipulating the language, script, and region, as well as extension tags. The following properties of Intl.Locale correspond to Unicode locale identifier subtags:

The information above is exactly provided as-is when the Locale object is constructed, without consulting any external database. The Intl.Locale object additionally provides some methods that return information about the locale's real-world information, such as available calendars, collations, and numbering systems.

## Constructor

Creates a new Locale object.

## Instance properties

These properties are defined on Intl.Locale.prototype and shared by all Intl.Locale instances.

Returns basic, core information about the Locale in the form of a substring of the complete data string.

Returns the part of the Locale that indicates the Locale's calendar era.

Returns whether case is taken into account for the locale's collation rules.

Returns the collation type for the Locale, which is used to order strings according to the locale's rules.

The constructor function that created the instance object. For Intl.Locale instances, the initial value is the Intl.Locale constructor.

Returns the time keeping format convention used by the locale.

Returns the language associated with the locale.

Returns the numeral system used by the locale.

Returns whether the locale has special collation handling for numeric characters.

Returns the region of the world (usually a country) associated with the locale.

Returns the script used for writing the particular language used in the locale.

Returns the variants subtags (such as different orthographies) associated with the locale.

The initial value of the [Symbol.toStringTag] property is the string "Intl.Locale". This property is used in Object.prototype.toString().

## Instance methods

Returns an Array of available calendar identifiers, according to the locale's rules.

Returns an Array of the collation types for the Locale.

Returns an Array of hour cycle identifiers, indicating either the 12-hour clock ("h12"), the Japanese 12-hour clock ("h11"), the 24-hour clock ("h23"), or the unused format "h24".

Returns an Array of numbering system identifiers available according to the locale's rules.

Returns the part indicating the ordering of characters ltr (left-to-right) or rtl (right-to-left).

Returns an Array of time zone identifiers, associated with the Locale.

Returns UTS 35's Week Elements according to the locale rules.

Gets the most likely values for the language, script, and region of the locale based on existing values.

Attempts to remove information about the locale that would be added by calling maximize().

Returns the Locale's full locale identifier string.

## Examples

### Basic usage

At its very simplest, the Intl.Locale() constructor takes a locale identifier string as its argument:

```
const us = new Intl.Locale("en-US");
```

### Using the Locale constructor with an options object

The constructor also takes an optional configuration object argument, which can contain any of several extension types. For example, set the hourCycle property of the configuration object to your desired hour cycle type, and then pass it into the constructor:

```
const us12hour = new Intl.Locale("en-US", { hourCycle: "h12" });
console.log(us12hour.hourCycle); // Prints "h12"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of Intl.Locale in FormatJS
- Intl
- Canonical Unicode Locale Identifiers in the Unicode locale data markup language spec

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale
