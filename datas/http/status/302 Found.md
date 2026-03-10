# 302 Found

Source: https://devdocs.io/http/status/302

# 302 Found

The HyperText Transfer Protocol (HTTP) 302 Found redirect status response code indicates that the resource requested has been temporarily moved to the URL given by the Location header. A browser redirects to this page but search engines don't update their links to the resource (in 'SEO-speak', it is said that the 'link-juice' is not sent to the new URL).

Even if the specification requires the method (and the body) not to be altered when the redirection is performed, not all user-agents conform here - you can still find this type of bugged software out there. It is therefore recommended to set the 302 code only as a response for GET or HEAD methods and to use 307 Temporary
 Redirect instead, as the method change is explicitly prohibited in that case.

In the cases where you want the method used to be changed to GET, use 303 See Other instead. This is useful when you want to give a response to a PUT method that is not the uploaded resource but a confirmation message such as: 'you successfully uploaded XYZ'.

## Status

```
302 Found
```

## Specifications

## Browser compatibility

## See also

- 307 Temporary Redirect, the equivalent of this status code where the method used never changes.
- 303 See Other, a temporary redirect that changes the method used to GET.
- 301 Moved Permanently, a permanent redirect.

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
