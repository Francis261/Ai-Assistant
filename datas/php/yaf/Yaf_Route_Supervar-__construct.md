# Yaf_Route_Supervar::__construct

Source: https://devdocs.io/php/yaf-route-supervar.construct

(Yaf >=1.0.0)

Yaf_Route_Supervar::__construct — The __construct purpose

### Description

Yaf_Route_Supervar is similar with Yaf_Route_Static, the difference is Yaf_Route_Supervar will look for path info in query string, and the parameter supervar_name is the key.

### Parameters

The name of key.

### Return Values

### Examples

Example #1 Yaf_Route_Supervar example

```
<?php
   /**
    * Add a supervar route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute(
        "name",
        new Yaf_Route_Supervar("r")
    );
?>
```

The above example will output something similar to:

```
/** for request: http://yourdomain.com/xx/oo/?r=/ctr/act/var/value
  * will result in following:
  */
  array (
    "module"   => index(default),
    "controller" => ctr,
    "action"     => act,
    "params"     => array(
          "var" => value,
     )
  )
```

### See Also

- Yaf_Router::addRoute() - Add new Route into Router
- Yaf_Router::addConfig() - Add config-defined routes into Router
- Yaf_Route_Static
- Yaf_Route_Regex
- Yaf_Route_Simple
- Yaf_Route_Rewrite
- Yaf_Route_Map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-supervar.construct.php
