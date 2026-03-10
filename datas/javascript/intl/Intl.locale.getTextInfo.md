# Intl.Locale.prototype.getTextInfo()

Source: https://devdocs.io/javascript/global_objects/intl/locale/gettextinfo

The getTextInfo() method of Intl.Locale instances returns the ordering of characters indicated by either ltr (left-to-right) or by rtl (right-to-left) for this locale.

Note: In some versions of some browsers, this method was implemented as an accessor property called textInfo. However, because it returns a new object on each access, it is now implemented as a method to prevent the situation of locale.textInfo === locale.textInfo returning false. Check the browser compatibility table for details.

## Syntax

```
getTextInfo()
```

### Parameters

None.

### Return value

An object representing text typesetting information associated with the Locale data specified in UTS 35's Layouts Elements. It has the following properties:

A string indicating the direction of text for the locale. Can be either "ltr" (left-to-right) or "rtl" (right-to-left).

## Examples

### Obtaining text info

Return the supported text directions for a given Locale.

```
const ar = new Intl.Locale("ar");
console.log(ar.getTextInfo()); // { direction: "rtl" }
console.log(ar.getTextInfo().direction); // "rtl"
```

```
const es = new Intl.Locale("es");
console.log(es.getTextInfo()); // { direction: "ltr" }
console.log(es.getTextInfo().direction); // "ltr"
```

## Specifications

## Browser compatibility

## See also

- Intl.Locale

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
