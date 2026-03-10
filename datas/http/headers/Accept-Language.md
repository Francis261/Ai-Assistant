# Accept-Language

Source: https://devdocs.io/http/headers/accept-language

# Accept-Language

The Accept-Language request HTTP header indicates the natural language and locale that the client prefers. The server uses content negotiation to select one of the proposals and informs the client of the choice with the Content-Language response header. Browsers set required values for this header according to their active user interface language. Users rarely change it, and such changes are not recommended because they may lead to fingerprinting.

This header serves as a hint when the server cannot determine the target content language otherwise (for example, use a specific URL that depends on an explicit user decision). The server should never override an explicit user language choice. The content of Accept-Language is often out of a user's control (when traveling, for instance). A user may also want to visit a page in a language different from the user interface language.

The server possibly can send back a 406 (Not Acceptable) error code when unable to serve content in a matching language. However, such a behavior is rarely implemented for a better user experience, and servers often ignore the Accept-Language header in such cases.

## Syntax

```
Accept-Language: <language>
Accept-Language: *

// Multiple types, weighted with the quality value syntax:
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Directives

A language tag (which is sometimes referred to as a "locale identifier"). This consists of a 2-3 letter base language tag that indicates a language, optionally followed by additional subtags separated by '-'. The most common extra information is the country or region variant (like 'en-US' or 'fr-CA') or the type of alphabet to use (like 'sr-Latn'). Other variants, like the type of orthography ('de-DE-1996'), are usually not used in the context of this header.

Any language; '*' is used as a wildcard.

Any value placed in an order of preference expressed using a relative quality value called weight.

## Examples

```
Accept-Language: de
```

```
Accept-Language: de-CH
```

```
Accept-Language: en-US,en;q=0.5
```

## Specifications

## Browser compatibility

## See also

- HTTP content negotiation
- A header with the result of the content negotiation: Content-Language
- Other similar headers: TE, Accept-Encoding, Accept

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
