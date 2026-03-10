# Feature-Policy: speaker-selection

Source: https://devdocs.io/http/headers/feature-policy/speaker-selection

# Feature-Policy: speaker-selection

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header speaker-selection directive controls whether the current document is allowed to enumerate and select audio output devices (speakers, headphones, etc.).

When this policy is enabled and the permission is denied:

- MediaDevices.enumerateDevices() won't return devices of type audio output.
- MediaDevices.selectAudioOutput() won't display the popup for selecting an audio output, and will reject the promise with a NotAllowedError.
- HTMLMediaElement.setSinkId() will throw a NotAllowedError if called for an audio output.

## Syntax

```
Feature-Policy: speaker-selection <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The default allowlist for speaker-selection is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/speaker-selection
