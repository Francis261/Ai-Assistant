# Referer

Source: https://devdocs.io/http/headers/referer

# Referer

The Referer HTTP request header contains the absolute or partial address from which a resource has been requested. The Referer header allows a server to identify referring pages that people are visiting from or where requested resources are being used. This data can be used for analytics, logging, optimized caching, and more.

When you click a link, the Referer contains the address of the page that includes the link. When you make resource requests to another domain, the Referer contains the address of the page that uses the requested resource.

The Referer header can contain an origin, path, and querystring, and may not contain URL fragments (i.e. #section) or username:password information. The request's referrer policy defines the data that can be included. See Referrer-Policy for more information and examples.

Note: The header name "referer" is actually a misspelling of the word "referrer". See HTTP referer on Wikipedia for more details.

Warning: This header may have undesirable consequences for user security and privacy. See Referer header: privacy and security concerns for more information and mitigation hints.

## Syntax

```
Referer: <url>
```

## Directives

An absolute or partial address of the web page that makes the request. URL fragments (i.e. #section) and userinfo (i.e. username:password in https\://username:password\@example.com/foo/bar/) are not included. Origin, path, and querystring may be included, depending on the referrer policy.

## Examples

```
Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript
Referer: https://example.com/page?q=123
Referer: https://example.com/
```

## Specifications

## Browser compatibility

## See also

- HTTP referer on Wikipedia
- Fetch: Request.referrerPolicy
- The obsolete Content-Security-Policy referrer Deprecated directive.
- Same-origin policy
- Tighter Control Over Your Referrers – Mozilla Security Blog

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer
