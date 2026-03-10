# escape()

Source: https://devdocs.io/javascript/global_objects/escape

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Note: escape() is a non-standard function implemented by browsers and was only standardized for cross-engine compatibility. It is not required to be implemented by all JavaScript engines and may not work everywhere. Use encodeURIComponent() or encodeURI() if possible.

The escape() function computes a new string in which certain characters have been replaced by hexadecimal escape sequences.

## Syntax

```
escape(str)
```

### Parameters

A string to be encoded.

### Return value

A new string in which certain characters have been escaped.

## Description

escape() is a function property of the global object.

The escape() function replaces all characters with escape sequences, with the exception of ASCII word characters (A–Z, a–z, 0–9, _) and @\*_+-./. Characters are escaped by UTF-16 code units. If the code unit's value is less than 256, it is represented by a two-digit hexadecimal number in the format %XX, left-padded with 0 if necessary. Otherwise, it is represented by a four-digit hexadecimal number in the format %uXXXX, left-padded with 0 if necessary.

Note: This function was used mostly for percent-encoding and is partly based on the escape format in RFC 1738. The escape format is not an escape sequence in string literals. You can replace %XX with \xXX and %uXXXX with \uXXXX to get a string containing actual string-literal escape sequences.

## Examples

### Using escape()

```
escape("abc123"); // "abc123"
escape("äöü"); // "%E4%F6%FC"
escape("ć"); // "%u0107"

// special characters
escape("@*_+-./"); // "@*_+-./"
```

## Specifications

## Browser compatibility

## See also

- Polyfill of escape in core-js
- encodeURI
- encodeURIComponent
- unescape

© 2005–2025 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/escape
