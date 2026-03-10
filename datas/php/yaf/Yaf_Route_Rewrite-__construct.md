# Yaf_Route_Rewrite::__construct

Source: https://devdocs.io/php/yaf-route-rewrite.construct

(Yaf >=1.0.0)

Yaf_Route_Rewrite::__construct — Yaf_Route_Rewrite constructor

### Description

### Parameters

A pattern, will be used to match a request uri, if it doesn't match, Yaf_Route_Rewrite will return false.

You can use :name style to name segments matched, and use * to match the rest of the URL segments.

When the match pattern matches the request uri, Yaf_Route_Rewrite will use this to decide which module/controller/action is the destination.

Either of module/controller/action in this array is optional, if you don't assign a specific value, it will be routed to default.

### Return Values

### Examples

Example #1 Yaf_Route_Rewrite example

```
<?php
   /**
    * Add a rewrite route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_rewrite(
           "/product/:name/:id/*", //match request uri leading "/product"
           array(
               'controller' => "product",  //route to product controller,
           ),
        )
    );
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/product/foo/22/foo/bar
 * route will result in following values:
 */
array(
  "controller" => "product",
  "module"     => "index", //(default)
  "action"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "name" => "foo",
  "id"   => 22,
  "foo"  => bar
)
```

Example #2 Yaf_Route_Rewrite example

```
<?php
   /**
    * Add a rewrite route to Yaf_Router route stack by calling addconfig
    */
    $config = array(
        "name" => array(
           "type"  => "rewrite",        //Yaf_Route_Rewrite route
           "match" => "/user-list/:id", //match only /user/list/?/
           "route" => array(
               'controller' => "user",  //route to user controller,
               'action'     => "list",  //route to list action
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/user-list/22
 * route will result in following values:
 */
array(
  "controller" => "user",
  "action"     => "list",
  "module"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "id"   => 22,
)
```

Example #3 Yaf_Route_Rewrite (as of 2.3.0) example

```
<?php
   /**
    * Add a rewrite route use match result as m/c/a name
    */
    $config = array(
        "name" => array(
           "type"  => "rewrite",        
           "match" => "/user-list/:a/:id", //match only /user-list/*
           "route" => array(
               'controller' => "user",   //route to user controller,
               'action'     => ":a",     //route to :a action
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/user-list/list/22
 * route will result in following values:
 */
array(
  "controller" => "user",
  "action"     => "list",
  "module"     => "index", //(default)
)

/**
 * and request parameters:
 */
array(
  "id"   => 22,
)
```

### See Also

- Yaf_Router::addRoute() - Add new Route into Router
- Yaf_Router::addConfig() - Add config-defined routes into Router
- Yaf_Route_Static
- Yaf_Route_Supervar
- Yaf_Route_Simple
- Yaf_Route_Regex
- Yaf_Route_Map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-rewrite.construct.php
