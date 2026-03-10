# Yaf_Route_Simple::__construct

Source: https://devdocs.io/php/yaf-route-simple.construct

(Yaf >=1.0.0)

Yaf_Route_Simple::__construct — Yaf_Route_Simple constructor

### Description

Yaf_Route_Simple will get route info from query string. and the parameters of this constructor will used as keys while searching for the route info in $_GET.

This function is currently not documented; only its argument list is available.

### Parameters

The key name of the module info.

the key name of the controller info.

the key name of the action info.

### Return Values

Always return true.

### Examples

Example #1 Yaf_Route_Simple::route()example

```
<?php
   $route = new Yaf_Route_Simple("m", "controller", "act");
   Yaf_Router::getInstance()->addRoute("simple", $route);
?>
```

Example #2 Yaf_Route_Simple::route()example

```
Request: http://yourdomain.com/path/?controller=a&act=b
=> module = default(index), controller = a, action = b

Request: http://yourdomain.com/path
=> module = default(index), controller = default(index), action = default(index)
```

### See Also

- Yaf_Route_Supervar::route() - The route purpose
- Yaf_Route_Static::route() - Route a request
- Yaf_Route_Regex::route() - The route purpose
- Yaf_Route_Rewrite::route() - The route purpose
- Yaf_Route_Map::route() - The route purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-simple.construct.php
