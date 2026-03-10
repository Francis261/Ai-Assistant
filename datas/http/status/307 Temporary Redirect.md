# 307 Temporary Redirect

Source: https://devdocs.io/http/status/307

# 307 Temporary Redirect

HTTP 307 Temporary Redirect redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location headers.

The method and the body of the original request are reused to perform the redirected request. In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give an answer to a PUT method that is not the uploaded resources, but a confirmation message (like "You successfully uploaded XYZ").

The only difference between 307 and 302 is that 307 guarantees that the method and the body will not be changed when the redirected request is made. With 302, some old clients were incorrectly changing the method to GET: the behavior with non-GET methods and 302 is then unpredictable on the Web, whereas the behavior with 307 is predictable. For GET requests, their behavior is identical.

## Status

```
307 Temporary Redirect
```

## Specifications

## Browser compatibility

## See also

- 302 Found, the equivalent of this status code, but that may change the method used when it is not a GET.
- 303 See Other, a temporary redirect that changes the method used to GET.
- 301 Moved Permanently, a permanent redirect

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
