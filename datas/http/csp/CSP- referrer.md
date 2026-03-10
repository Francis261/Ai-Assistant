# CSP: referrer

Source: https://devdocs.io/http/headers/content-security-policy/referrer

# CSP: referrer

Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.

Non-standard: This feature is non-standard and is not on a standards track. Do not use it on production sites facing the Web: it will not work for every user. There may also be large incompatibilities between implementations and the behavior may change in the future.

The HTTP Content-Security-Policy (CSP) referrer directive used to specify information in the Referer header (with a single r as this was a typo in the original spec) for links away from a page. This API is deprecated and removed from browsers.

Note: Use the Referrer-Policy header instead.

## Syntax

```
Content-Security-Policy: referrer <referrer-policy>;
```

where <referrer-policy> can be one of the following values:

The Referer header will be omitted entirely. No referrer information is sent along with requests.

This is the user agent's default behavior if no policy is specified. The origin is sent as referrer to a-priori as-much-secure destination (HTTPS->HTTPS), but isn't sent to a less secure destination (HTTPS->HTTP).

Only send the origin of the document as the referrer in all cases. The document https://example.com/page.html will send the referrer https://example.com/.

Send a full URL when performing a same-origin request, but only send the origin of the document for other cases.

Send a full URL (stripped from parameters) when performing a same-origin or cross-origin request. This policy will leak origins and paths from TLS-protected resources to insecure origins. Carefully consider the impact of this setting.

## Examples

```
Content-Security-Policy: referrer "none";
```

## Specifications

Not part of any specification.

## Browser compatibility

## See also

- Content-Security-Policy
- Referrer-Policy header
- Referer header

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/referrer
