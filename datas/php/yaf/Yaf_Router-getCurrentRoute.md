# Yaf_Router::getCurrentRoute

Source: https://devdocs.io/php/yaf-router.getcurrentroute

(Yaf >=1.0.0)

Yaf_Router::getCurrentRoute — Get the effective route name

### Description

```
public Yaf_Router::getCurrentRoute(): string
```

Get the name of the route which is effective in the route process.

Note:

You should call this method after the route process finished, since before that, this method will always return null.

### Parameters

This function has no parameters.

### Return Values

String, the name of the effective route.

### Examples

Example #1 Register some routes in Bootstrap

```
<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
    public function _initConfig() {
        $config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set("config", $config);
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher) {
        $router = $dispatcher->getRouter();
        $rewrite_route  = new Yaf_Route_Rewrite(
            "/product/list/:page",
            array(
                "controller" => "product",
                "action"     => "list",
            )
        ); 

        $regex_route  = new Yaf_Route_Rewrite(
            "#^/product/info/(\d+)",
            array(
                "controller" => "product",
                "action"     => "info",
            )
        ); 
        
        $router->addRoute('rewrite', $rewrite_route)->addRoute('regex', $regex_route);
    } 

    /**
     * register plugin 
     */
    public function __initPlugins(Yaf_Dispatcher $dispatcher) {
        $dispatcher->registerPlugin(new DummyPlugin());
    }
}
?>
```

Example #2 plugin Dummy.php (under application.directory/plugins)

```
<?php
class DummyPlugin extends Yaf_Plugin_Abstract {
    public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
         var_dump(Yaf_Dispatcher::getInstance()->getRouter()->getCurrentRoute());
    }
}
?>
```

The above example will output something similar to:

```
/* for http://yourdomain.com/product/list/1
 * DummyPlugin will output:
 */
string(7) "rewrite"

/* for http://yourdomain.com/product/info/34
 * DummyPlugin will output:
 */
string(5) "regex"

/* for other request URI
 * DummyPlugin will output:
 */
string(8) "_default"
```

### See Also

- Yaf_Bootstrap_Abstract
- Yaf_Plugin_Abstract
- Yaf_Router::addRoute() - Add new Route into Router

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-router.getcurrentroute.php
