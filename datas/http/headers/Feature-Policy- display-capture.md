# Feature-Policy: display-capture

Source: https://devdocs.io/http/headers/feature-policy/display-capture

# Feature-Policy: display-capture

The HTTP Feature-Policy header display-capture directive controls whether or not the document is permitted to use Screen Capture API, that is, getDisplayMedia() to capture the screen's contents.

If display-capture is disabled in a document, the document will not be able to initiate screen capture via getDisplayMedia().

## Syntax

```
Feature-Policy: display-capture <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for display-capture is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy
- Screen Capture API
- Using the Screen Capture API

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/display-capture
