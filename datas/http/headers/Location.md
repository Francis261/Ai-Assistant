# Location

Source: https://devdocs.io/http/headers/location

# Location

The Location response header indicates the URL to redirect a page to. It only provides a meaning when served with a 3xx (redirection) or 201 (created) status response.

In cases of redirection, the HTTP method used to make the new request to fetch the page pointed to by Location depends on the original method and the kind of redirection:

- 303 (See Other) responses always lead to the use of a GET method.
- 307 (Temporary Redirect) and 308 (Permanent Redirect) don't change the method used in the original request.
- 301 (Moved Permanently) and 302 (Found) don't change the method most of the time, though older user-agents may (so you basically don't know).

All responses with one of these status codes send a Location header.

In cases of resource creation, it indicates the URL to the newly created resource.

Location and Content-Location are different. Location indicates the target of a redirection or the URL of a newly created resource. Content-Location indicates the direct URL to use to access the resource when content negotiation happened, without the need of further content negotiation. Location is a header associated with the response, while Content-Location is associated with the entity returned.

## Syntax

```
Location: <url>
```

## Directives

A relative (to the request URL) or absolute URL.

## Examples

```
Location: /index.html
```

## Specifications

## Browser compatibility

## See also

- Content-Location
- Status of responses including a Location header: 201, 301, 302, 303, 307, 308.

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Location
