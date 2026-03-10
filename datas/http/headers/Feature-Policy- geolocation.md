# Feature-Policy: geolocation

Source: https://devdocs.io/http/headers/feature-policy/geolocation

# Feature-Policy: geolocation

The HTTP Feature-Policy header geolocation directive controls whether the current document is allowed to use the Geolocation Interface. When this policy is enabled, calls to getCurrentPosition() and watchPosition() will cause those functions' callbacks to be invoked with a GeolocationPositionError code of PERMISSION_DENIED.

By default, the Geolocation API can be used within top-level documents and their same-origin child frames. This directive allows or prevents cross-origin frames from accessing geolocation. This includes same-origin frames.

## Syntax

```
Feature-Policy: geolocation <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for geolocation is 'self'.

## Examples

### General example

SecureCorp Inc. wants to disable the Geolocation API within all browsing contexts except for its own origin and those whose origin is https://example.com. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: geolocation 'self' https://example.com
```

### With an <iframe> element

FastCorp Inc. wants to disable geolocation for all cross-origin child frames, except for a specific <iframe>. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: geolocation 'self'
```

Then include an allow attribute on the <iframe> element:

```
<iframe src="https://other.com/map" allow="geolocation"></iframe>
```

Interestingly, allow attributes can selectively enable features in certain frames, and not in others, even if those frames contain documents from the same origin.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/geolocation
