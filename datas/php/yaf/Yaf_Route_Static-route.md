# Yaf_Route_Static::route

Source: https://devdocs.io/php/yaf-route-static.route

(Yaf >=1.0.0)

Yaf_Route_Static::route — Route a request

### Description

```
public Yaf_Route_Static::route(Yaf_Request_Abstract $request): bool
```

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

always be true

### Examples

Example #1 Yaf_Route_Static::route()example

```
// assuming there is only one module defined:Index
Request: http://yourdomain.com/a/b
=> module = index, controller=a, action=b

//assuming ap.action_prefer = On
Request: http://yourdomain.com/b
=> module = default(index), controller = default(index), action = b

//assuming ap.action_prefer = Off
Request: http://yourdomain.com/b
=> module = default(index), controller = b, action = default(index)

Request: http://yourdomain.com/a/b/foo/bar/test/a/id/4
=> module = default(index), controller = a, action = b, request parameters: foo = bar, test = a, id = 4
```

### See Also

- Yaf_Route_Supervar::route() - The route purpose
- Yaf_Route_Simple::route() - Route a request
- Yaf_Route_Regex::route() - The route purpose
- Yaf_Route_Rewrite::route() - The route purpose
- Yaf_Route_Map::route() - The route purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-static.route.php
