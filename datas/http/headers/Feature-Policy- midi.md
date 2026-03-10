# Feature-Policy: midi

Source: https://devdocs.io/http/headers/feature-policy/midi

# Feature-Policy: midi

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header midi directive controls whether the current document is allowed to use the Web MIDI API. When this policy is enabled, the Promise returned by Navigator.requestMIDIAccess() will reject with a DOMException.

## Syntax

```
Feature-Policy: midi <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The allow list is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/midi
