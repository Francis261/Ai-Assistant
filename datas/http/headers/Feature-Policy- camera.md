# Feature-Policy: camera

Source: https://devdocs.io/http/headers/feature-policy/camera

# Feature-Policy: camera

The HTTP Feature-Policy header camera directive controls whether the current document is allowed to use video input devices. When this policy is enabled, the Promise returned by MediaDevices.getUserMedia() will reject with a NotAllowedError DOMException.

## Syntax

```
Feature-Policy: camera <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for camera is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/camera
