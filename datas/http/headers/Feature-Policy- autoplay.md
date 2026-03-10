# Feature-Policy: autoplay

Source: https://devdocs.io/http/headers/feature-policy/autoplay

# Feature-Policy: autoplay

Experimental: This is an experimental technologyCheck the Browser compatibility table carefully before using this in production.

The HTTP Feature-Policy header autoplay directive controls whether the current document is allowed to autoplay media requested through the HTMLMediaElement interface. When this policy is enabled and there were no user gestures, the Promise returned by HTMLMediaElement.play() will reject with a DOMException. The autoplay attribute on <audio> and <video> elements will be ignored.

For more details on autoplay and autoplay blocking, see the article Autoplay guide for media and Web Audio APIs.

## Syntax

```
Feature-Policy: autoplay <allowlist>;
```

A list of origins for which the feature is allowed. See Feature-Policy.

## Default policy

The default value in Google Chrome is 'self'.

## Specifications

## Browser compatibility

## See also

- Feature-Policy header
- Feature Policy
- Using Feature Policy

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Feature-Policy/autoplay
