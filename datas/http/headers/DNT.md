# DNT

Source: https://devdocs.io/http/headers/dnt

# DNT

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

The DNT (Do Not Track) request header indicates the user's tracking preference. It lets users indicate whether they would prefer privacy rather than personalized content.

## Syntax

```
DNT: 0
DNT: 1
DNT: null
```

## Directives

The user prefers to allow tracking on the target site.

The user prefers not to be tracked on the target site.

The user has not specified a preference about tracking.

## Examples

### Reading Do Not Track status from JavaScript

The user's DNT preference can also be read from JavaScript using the Navigator.doNotTrack property:

```
navigator.doNotTrack; // "0" or "1"
```

## Specifications

## Browser compatibility

## See also

- Navigator.doNotTrack
- Tk header
- Do Not Track on Wikipedia
- What Does the "Track" in "Do Not Track" Mean? – EFF
- DNT on Electronic Frontier Foundation
- DNT browser settings help:
  - Firefox
  - Chrome

- Firefox
- Chrome

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT
