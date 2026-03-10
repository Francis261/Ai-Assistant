# Referrer-Policy

Source: https://devdocs.io/http/headers/referrer-policy

# Referrer-Policy

The Referrer-Policy HTTP header controls how much referrer information (sent with the Referer header) should be included with requests. Aside from the HTTP header, you can set this policy in HTML.

## Syntax

```
Referrer-Policy: no-referrer
Referrer-Policy: no-referrer-when-downgrade
Referrer-Policy: origin
Referrer-Policy: origin-when-cross-origin
Referrer-Policy: same-origin
Referrer-Policy: strict-origin
Referrer-Policy: strict-origin-when-cross-origin
Referrer-Policy: unsafe-url
```

Note: The original header name Referer is a misspelling of the word "referrer". The Referrer-Policy header does not share this misspelling.

## Directives

The Referer header will be omitted: sent requests do not include any referrer information.

Send the origin, path, and querystring in Referer when the protocol security level stays the same or improves (HTTP→HTTP, HTTP→HTTPS, HTTPS→HTTPS). Don't send the Referer header for requests to less secure destinations (HTTPS→HTTP, HTTPS→file).

Send only the origin in the Referer header. For example, a document at https://example.com/page.html will send the referrer https://example.com/.

When performing a same-origin request to the same protocol level (HTTP→HTTP, HTTPS→HTTPS), send the origin, path, and query string. Send only the origin for cross origin requests and requests to less secure destinations (HTTPS→HTTP).

Send the origin, path, and query string for same-origin requests. Don't send the Referer header for cross-origin requests.

Send only the origin when the protocol security level stays the same (HTTPS→HTTPS). Don't send the Referer header to less secure destinations (HTTPS→HTTP).

Send the origin, path, and querystring when performing a same-origin request. For cross-origin requests send the origin (only) when the protocol security level stays same (HTTPS→HTTPS). Don't send the Referer header to less secure destinations (HTTPS→HTTP).

Note: This is the default policy if no policy is specified, or if the provided value is invalid (see spec revision November 2020). Previously the default was no-referrer-when-downgrade.

Send the origin, path, and query string when performing any request, regardless of security.

Warning: This policy will leak potentially-private information from HTTPS resource URLs to insecure origins. Carefully consider the impact of this setting.

## Integration with HTML

You can also set referrer policies inside HTML. For example, you can set the referrer policy for the entire document with a <meta> element with a name of referrer:

```
<meta name="referrer" content="origin" />
```

You can specify the referrerpolicy attribute on <a>, <area>, <img>, <iframe>, <script>, or <link> elements to set referrer policies for individual requests:

```
<a href="http://example.com" referrerpolicy="origin">…</a>
```

Alternatively, you can set a noreferrer link relation on an a, area, or link elements:

```
<a href="http://example.com" rel="noreferrer">…</a>
```

Warning: As seen above, the noreferrer link relation is written without a dash. When you specify the referrer policy for the entire document with a <meta> element, it should be written with a dash: <meta name="referrer" content="no-referrer">.

## Integration with CSS

CSS can fetch resources referenced from stylesheets. These resources follow a referrer policy as well:

- External CSS stylesheets use the default policy (strict-origin-when-cross-origin), unless it's overwritten by a Referrer-Policy HTTP header on the CSS stylesheet's response.
- For <style> elements or style attributes, the owner document's referrer policy is used.

## Examples

### no-referrer

### no-referrer-when-downgrade

### origin

### origin-when-cross-origin

### same-origin

### strict-origin

### strict-origin-when-cross-origin

### unsafe-url

### Specify a fallback policy

If you want to specify a fallback policy in case the desired policy hasn't got wide enough browser support, use a comma-separated list with the desired policy specified last:

```
Referrer-Policy: no-referrer, strict-origin-when-cross-origin
```

In the above scenario, no-referrer is used only if the browser does not support the strict-origin-when-cross-origin policy.

Note: Specifying multiple values is only supported in the Referrer-Policy HTTP header, and not in the referrerpolicy attribute.

## Browser-specific preferences/settings

### Firefox preferences

You can configure the default referrer policy in Firefox preferences. The preference names are version specific:

- Firefox version 59 and later: network.http.referer.defaultPolicy (and network.http.referer.defaultPolicy.pbmode for private networks)
- Firefox versions 53 to 58: network.http.referer.userControlPolicy

All of these settings take the same set of values: 0 = no-referrer, 1 = same-origin, 2 = strict-origin-when-cross-origin, 3 = no-referrer-when-downgrade.

## Specifications

## Browser compatibility

## See also

- Web security > Referer header: privacy and security concerns
- HTTP referer on Wikipedia
- When using Fetch: Request.referrerPolicy
- The obsolete Content-Security-Policy's referrer Deprecated directive.
- Same-origin policy
- Tighter Control Over Your Referrers – Mozilla Security Blog

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy
