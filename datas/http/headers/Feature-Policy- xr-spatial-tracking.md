# Feature-Policy: xr-spatial-tracking

Source: https://devdocs.io/http/headers/feature-policy/xr-spatial-tracking

# Feature-Policy: xr-spatial-tracking

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header xr-spatial-tracking directive controls whether the current document is allowed to use the WebXR Device API. This policy controls whether navigator.xr.requestSession() can return XRSession that requires spatial tracking and whether user agent can indicate support for sessions supporting spatial tracking via navigator.xr.isSessionSupported() and devicechange event on navigator.xr object.

## Syntax

```
Feature-Policy: xr-spatial-tracking <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The default allowlist is 'self'.

## Specifications

## Browser compatibility

## See also

- WebXR Device API
- navigator.xr.requestSession(), and navigator.xr.isSessionSupported() and devicechange event on navigator.xr
- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/xr-spatial-tracking
