# Yaf_Route_Regex::__construct

Source: https://devdocs.io/php/yaf-route-regex.construct

(Yaf >=1.0.0)

Yaf_Route_Regex::__construct — Yaf_Route_Regex constructor

### Description

### Parameters

A complete Regex pattern, will be used to match a request uri, if doesn't matched, Yaf_Route_Regex will return false.

When the match pattern matches the request uri, Yaf_Route_Regex will use this to decide which m/c/a to routed.

either of m/c/a in this array is optianl, if you don't assgian a specific value, it will be routed to default.

A array to assign name to the captrues in the match result.

a string, used to assemble url, see Yaf_Route_Regex::assemble().

Note:

this parameter is introduced in 2.3.0

### Return Values

### Examples

Example #1 Yaf_Route_Regex example

```
<?php
   /**
    * Add a regex route to Yaf_Router route stack
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/([^/]+)/([^/])+#", //match request uri leading "/product"
           array(
               'controller' => "product",  //route to product controller,
           ),
           array(
              1 => "name",   // now you can call $request->getParam("name")
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>
```

Example #2 Yaf_Route_Regex (as of 2.3.0) example

```
<?php
   /**
    * Use match result as MVC name
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/([^/]+)/([^/])+#i", //match request uri leading "/product"
           array(
              'controller' => ":name", // route to :name, which is $1 in the match result as controller name
           ),
           array(
              1 => "name",   // now you can call $request->getParam("name")
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>
```

Example #3 Yaf_Route_Regex and named capture group (as of 2.3.0) example

```
<?php
   /**
    * Use match result as MVC name
    */
    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",
        new Yaf_Route_Regex(
           "#^/product/(?<name>[^/]+)/([^/])+#i", //match request uri leading "/product"
           array(
           'controller' => ":name", // route to :name,
                                    // which is named capture group 'name' in the match result as controller name
           ),
           array(
              2 => "id",     // to get the first captrue in the match pattern.
           )
        )
    );
?>
```

Example #4 Yaf_Route_Regex example

```
<?php
   /**
    * Add a regex route to Yaf_Router route stack by calling addconfig
    */
    $config = array(
        "name" => array(
           "type"  => "regex",          //Yaf_Route_Regex route
           "match" => "#(.*)#",         //match arbitrary request uri
           "route" => array(
               'controller' => "product",  //route to product controller,
               'action'     => "dummy",    //route to dummy action
           ),
           "map" => array(
              1 => "uri",   // now you can call $request->getParam("uri")
           ),
        ),
    );
    Yaf_Dispatcher::getInstance()->getRouter()->addConfig(
        new Yaf_Config_Simple($config));
?>
```

### See Also

- Yaf_Router::addRoute() - Add new Route into Router
- Yaf_Router::addConfig() - Add config-defined routes into Router
- Yaf_Route_Static
- Yaf_Route_Supervar
- Yaf_Route_Simple
- Yaf_Route_Rewrite
- Yaf_Route_Map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-regex.construct.php
