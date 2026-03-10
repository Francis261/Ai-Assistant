# CSP: frame-ancestors

Source: https://devdocs.io/http/headers/content-security-policy/frame-ancestors

# CSP: frame-ancestors

The HTTP Content-Security-Policy (CSP) frame-ancestors directive specifies valid parents that may embed a page using <frame>, <iframe>, <object>, <embed>, or <applet>.

Setting this directive to 'none' is similar to X-Frame-Options: deny (which is also supported in older browsers).

Note: frame-ancestors allows you to specify what parent source may embed a page. This differs from frame-src, which allows you to specify where iframes in a page may be loaded from.

## Syntax

One or more sources can be set for the frame-ancestors policy:

```
Content-Security-Policy: frame-ancestors <source>;
Content-Security-Policy: frame-ancestors <space separated list of sources>;
```

### Sources

<source> can be one of the following:

Note: The frame-ancestors directive's syntax is similar to a source list of other directives (e.g. default-src), but doesn't allow 'unsafe-eval' or 'unsafe-inline' for example. It will also not fall back to a default-src setting. Only the sources listed below are allowed:

Internet hosts by name or IP address, as well as an optional URL scheme and/or port number, separated by spaces. The site's address may include an optional leading wildcard (the asterisk character, '*'), and you may use a wildcard (again, '*') as the port number, indicating that all legal ports are valid for the source. Single quotes surrounding the host are not allowed. Examples:

- http://*.example.com: Matches all attempts to load from any subdomain of example.com using the http: URL scheme.
- mail.example.com:443: Matches all attempts to access port 443 on mail.example.com.
- https://store.example.com: Matches all attempts to access store.example.com using https:.

Warning: If no URL scheme is specified for a host-source and the iframe is loaded from an https URL, the URL for the page loading the iframe must also be https, per the Does URL match expression in origin with redirect count? section of the CSP spec.

A scheme such as http: or https:. The colon is required and scheme should not be quoted. You can also specify data schemes (not recommended).

- data: Allows data: URLs to be used as a content source. This is insecure; an attacker can also inject arbitrary data: URLs. Use this sparingly and definitely not for scripts.
- mediastream: Allows mediastream: URIs to be used as a content source.
- blob: Allows blob: URIs to be used as a content source.
- filesystem: Allows filesystem: URIs to be used as a content source.

Refers to the origin from which the protected document is being served, including the same URL scheme and port number. You must include the single quotes. Some browsers specifically exclude blob and filesystem from source directives. Sites needing to allow these content types can specify them using the Data attribute.

Refers to the empty set; that is, no URLs match. The single quotes are required.

## Examples

```
Content-Security-Policy: frame-ancestors 'none';

Content-Security-Policy: frame-ancestors 'self' https://www.example.org;

Content-Security-Policy: frame-ancestors 'self' https://example.org https://example.com https://store.example.com;
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- X-Frame-Options
- frame-src CSP

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors
