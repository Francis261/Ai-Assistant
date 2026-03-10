# CSP: media-src

Source: https://devdocs.io/http/headers/content-security-policy/media-src

# CSP: media-src

The HTTP Content-Security-Policy (CSP) media-src directive specifies valid sources for loading media using the <audio> and <video> elements.

## Syntax

One or more sources can be allowed for the media-src policy:

```
Content-Security-Policy: media-src <source>;
Content-Security-Policy: media-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### Violation cases

Given this CSP header:

```
Content-Security-Policy: media-src https://example.com/
```

The following <audio>, <video> and <track> elements are blocked and won't load:

```
<audio src="https://not-example.com/audio"></audio>

<video src="https://not-example.com/video">
  <track kind="subtitles" src="https://not-example.com/subtitles" />
</video>
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <audio>, <video> and <track>

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src
