# CSP: default-src

Source: https://devdocs.io/http/headers/content-security-policy/default-src

# CSP: default-src

The HTTP Content-Security-Policy (CSP) default-src directive serves as a fallback for the other CSP fetch directives. For each of the following directives that are absent, the user agent looks for the default-src directive and uses this value for it:

- child-src
- connect-src
- font-src
- frame-src
- img-src
- manifest-src
- media-src
- object-src
- prefetch-src
- script-src
- script-src-elem
- script-src-attr
- style-src
- style-src-elem
- style-src-attr
- worker-src

## Syntax

One or more sources can be allowed for the default-src policy:

```
Content-Security-Policy: default-src <source>;
Content-Security-Policy: default-src <source> <source>;
```

### Sources

<source> can be any one of the values listed in CSP Source Values.

Note that this same set of values can be used in all fetch directives (and a number of other directives).

## Examples

### No inheritance with default-src

If there are other directives specified, default-src does not influence them. The following header:

```
Content-Security-Policy: default-src 'self'; script-src https://example.com
```

is the same as:

```
Content-Security-Policy: connect-src 'self';
                         font-src 'self';
                         frame-src 'self';
                         img-src 'self';
                         manifest-src 'self';
                         media-src 'self';
                         object-src 'self';
                         script-src https://example.com;
                         style-src 'self';
                         worker-src 'self'
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- CSP directives (https://www.w3.org/TR/CSP/#csp-directives):
  - Fetch directive
  - Document directive
  - Navigation directive
  - Reporting directive
  - upgrade-insecure-requests
  - block-all-mixed-content
  - require-sri-for Experimental

- Fetch directive
- Document directive
- Navigation directive
- Reporting directive
- upgrade-insecure-requests
- block-all-mixed-content
- require-sri-for Experimental

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/default-src
