# Feature-Policy: web-share

Source: https://devdocs.io/http/headers/feature-policy/web-share

# Feature-Policy: web-share

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header web-share directive controls whether the current document is allowed to use the Navigator.share() method of the Web Share API to share text, links, images, and other content to arbitrary destinations of the user's choice.

## Syntax

```
Feature-Policy: web-share <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The default value is 'self'.

## Specifications

## Browser compatibility

Browser implementation is being discussed in https://github.com/w3c/web-share/issues/169.

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/web-share
