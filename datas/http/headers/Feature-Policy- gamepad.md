# Feature-Policy: gamepad

Source: https://devdocs.io/http/headers/feature-policy/gamepad

# Feature-Policy: gamepad

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header gamepad directive controls whether the current document is allowed to use the Gamepad API. When this policy is disabled, calls to Navigator.getGamepads() will throw a SecurityError DOMException. In addition, the gamepadconnected and gamepaddisconnected events will not fire.

## Syntax

```
Feature-Policy: gamepad <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

Default allow list for gamepad is 'self'.

## Examples

### General example

SecureCorp Inc. wants to disable the Gamepad API within all browsing contexts except for its own origin and those whose origin is https://example.com. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: gamepad 'self' https://example.com
```

### With an <iframe> element

FastCorp Inc. wants to disable gamepad for all cross-origin child frames, except for a specific <iframe>. It can do so by delivering the following HTTP response header to define a feature policy:

```
Feature-Policy: gamepad 'self'
```

Then include an allow attribute on the <iframe> element:

```
<iframe src="https://other.com/game" allow="gamepad"></iframe>
```

iframe attributes can selectively enable features in certain frames, and not in others, even if those frames contain documents from the same origin.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/gamepad
