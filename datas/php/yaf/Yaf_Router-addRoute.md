# Yaf_Router::addRoute

Source: https://devdocs.io/php/yaf-router.addroute

(Yaf >=1.0.0)

Yaf_Router::addRoute — Add new Route into Router

### Description

```
public Yaf_Router::addRoute(string $name, Yaf_Route_Abstract $route): bool
```

defaultly, Yaf_Router using a Yaf_Route_Static as its defualt route. you can add new routes into router's route stack by calling this method.

the newer route will be called before the older(route stack), and if the newer router return true, the router process will be end. otherwise, the older one will be called.

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Dispatcher::autoRender()example

```
<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
    public function _initConfig() {
        $config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set("config", $config);
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher) {
        $router = $dispatcher->getRouter();
        /**
         * we can add some pre-defined routes in application.ini
         */
        $router->addConfig(Yaf_Registry::get("config")->routes);
        /**
         * add a Rewrite route, then for a request uri: 
         * http://example.com/product/list/22/foo
         * will be matched by this route, and result:
         *
         *  [module] => 
         *  [controller] => product
         *  [action] => info
         *  [method] => GET
         *  [params:protected] => Array
         *      (
         *          [id] => 22
         *          [name] => foo
         *      )
         * 
         */
        $route  = new Yaf_Route_Rewrite(
            "/product/list/:id/:name",
            array(
                "controller" => "product",
                "action"     => "info",
            )
        ); 
        
        $router->addRoute('dummy', $route);
    }
}
?>
```

### See Also

- Yaf_Router::addConfig() - Add config-defined routes into Router
- Yaf_Route_Static
- Yaf_Route_Supervar
- Yaf_Route_Simple
- Yaf_Route_Regex
- Yaf_Route_Rewrite
- Yaf_Route_Map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-router.addroute.php
