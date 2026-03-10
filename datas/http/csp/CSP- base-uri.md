# CSP: base-uri

Source: https://devdocs.io/http/headers/content-security-policy/base-uri

# CSP: base-uri

The HTTP Content-Security-Policy base-uri directive restricts the URLs which can be used in a document's <base> element. If this value is absent, then any URI is allowed. If this directive is absent, the user agent will use the value in the <base> element.

## Syntax

One or more sources can be allowed for the base-uri policy:

```
Content-Security-Policy: base-uri <source>;
Content-Security-Policy: base-uri <source> <source>;
```

### Sources

This directive uses most of the same source values for arguments as other CSP directives: CSP Source Values.

Note however that some of the values don't make sense for base-uri, such as the keywords 'unsafe-inline' and 'strict-dynamic'.

## Examples

### Meta tag configuration

```
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
```

### Apache configuration

```
<IfModule mod_headers.c>
Header set Content-Security-Policy "base-uri 'self'";
</IfModule>
```

### Nginx configuration

```
add_header Content-Security-Policy "base-uri 'self';"
```

### Violation case

Since your domain isn't example.com, a <base> element with its href set to https://example.com will result in a CSP violation.

```
<meta http-equiv="Content-Security-Policy" content="base-uri 'self'" />
<base href="https://example.com/" />

<!--
// Error: Refused to set the document's base URI to 'https://example.com/'
// because it violates the following Content Security Policy
// directive: "base-uri 'self'"
-->
```

## Specifications

## Browser compatibility

## See also

- Content-Security-Policy
- <base>
- Node.baseURI

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/base-uri
