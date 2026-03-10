# 301 Moved Permanently

Source: https://devdocs.io/http/status/301

# 301 Moved Permanently

The HyperText Transfer Protocol (HTTP) 301 Moved Permanently redirect status response code indicates that the requested resource has been definitively moved to the URL given by the Location headers. A browser redirects to the new URL and search engines update their links to the resource.

Note: Although the specification requires the method and the body to remain unchanged when the redirection is performed, not all user-agents meet this requirement. Use the 301 code only as a response for GET or HEAD methods and use the 308 Permanent Redirect for POST methods instead, as the method change is explicitly prohibited with this status.

## Status

```
301 Moved Permanently
```

## Example

### Client request

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### Server response

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## Specifications

## Browser compatibility

## See also

- 308 Permanent Redirect, the equivalent of this status code where the method used never changes.
- 302 Found, a temporary redirect

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301
