# Yaf_Route_Map::__construct

Source: https://devdocs.io/php/yaf-route-map.construct

(Yaf >=1.0.0)

Yaf_Route_Map::__construct — The __construct purpose

### Description

### Parameters

Whether the result should considering as controller or action

### Return Values

### Examples

Example #1 Yaf_Route_Map example

```
<?php
   /**
    * Add a map route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Map());
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/product/foo/bar
 * route will result in following values:
 */
array(
  "controller" => "product_foo_bar",
)
```

Example #2 Yaf_Route_Map example

```
<?php
   /**
    * Add a map route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Map(true, "_"));
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/user/list/_/foo/22
 * route will result in following values:
 */
array(
    "action" => "user_list",
)

/**
 * and request parameters:
 */
array(
  "foo"   => 22,
)
```

Example #3 Yaf_Route_Map example

```
<?php
   /**
    * Add a map route to Yaf_Router route stack by calling addconfig
    */
    $config = array(
        "name" => array(
           "type"  => "map",         //Yaf_Route_Map route
           "controllerPrefer" => FALSE,
           "delimiter"        => "#!", 
           ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>
```

### See Also

- Yaf_Router::addRoute() - Add new Route into Router
- Yaf_Route_Static
- Yaf_Route_Supervar
- Yaf_Route_Simple
- Yaf_Route_Regex
- Yaf_Route_Rewrite

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-map.construct.php
