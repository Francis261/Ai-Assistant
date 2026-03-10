# 404 Not Found

Source: https://devdocs.io/http/status/404

# 404 Not Found

The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.

A 404 status code only indicates that the resource is missing: not whether the absence is temporary or permanent. If a resource is permanently removed, use the 410 (Gone) status instead.

## Status

```
404 Not Found
```

## Custom error pages

You can display a custom 404 page to be more helpful to a user and provide guidance on what to do next. For example, for the Apache server, you can specify a path to a custom 404 page in an .htaccess file:

```
ErrorDocument 404 /notfound.html
```

For an example of a custom 404 page, see this 404 page.

Note: Custom design is a good thing, in moderation. Feel free to make your 404 page humorous and human, but don't confuse your users.

## Specifications

## Browser compatibility

## See also

- 410
- Wikipedia: HTTP 404

© 2005–2022 MDN contributors.Licensed under the Creative Commons Attribution-ShareAlike License v2.5 or later.
 https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
