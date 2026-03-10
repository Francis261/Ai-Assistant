# Feature-Policy: battery

Source: https://devdocs.io/http/headers/feature-policy/battery

# Feature-Policy: battery

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header battery directive controls whether the current document is allowed to gather information about the battery of the device through the BatteryManager interface obtained via Navigator.getBattery().

## Syntax

```
Feature-Policy: battery <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for battery is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy
- Battery Status API
- Navigator.getBattery()
- BatteryManager

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/battery
