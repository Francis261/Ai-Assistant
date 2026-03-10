# Feature-Policy: screen-wake-lock

Source: https://devdocs.io/http/headers/feature-policy/screen-wake-lock

# Feature-Policy: screen-wake-lock

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header screen-wake-lock directive controls whether the current document is allowed to use Screen Wake Lock API to indicate that device should not dim or turn off the screen.

Note: In earlier specification drafts this directive was called wake-lock.

## Syntax

```
Feature-Policy: screen-wake-lock <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for screen-wake-lock is 'self'.

## Specifications

## Browser compatibility

## See also

- Screen Wake Lock API
- Feature-Policy header
- Feature Policy
- Using Feature Policy
- Default value of the allow list

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/screen-wake-lock
