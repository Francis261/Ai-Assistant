# Feature-Policy: microphone

Source: https://devdocs.io/http/headers/feature-policy/microphone

# Feature-Policy: microphone

The HTTP Feature-Policy header microphone directive controls whether the current document is allowed to use audio input devices. When this policy is enabled, the Promise returned by MediaDevices.getUserMedia() will reject with a NotAllowedError.

## Syntax

```
Feature-Policy: microphone <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for microphone is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/microphone
